package com.spring.project.jsonb.controller;


import com.spring.project.jsonb.config.WebSecurityConfig;
import com.spring.project.jsonb.service.UserService;
import com.spring.project.jsonb.model.User;
import lombok.RequiredArgsConstructor;
import com.spring.project.jsonb.handler.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    public record AuthResponse(Long id, String name, String role) {
    }

    private record LoginRequest(String username, String password) {
    }

    private record SignUpRequest(String username, String password, String name, String email) {
    }

    private final UserService userService;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = Optional.ofNullable(userService.validUsernameAndPassword(loginRequest.username, loginRequest.password).orElseThrow(() -> new UserNotFoundException("username or password")));
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return ResponseEntity.ok(new AuthResponse(user.getId(), user.getName(), user.getRole()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/signup")
    public AuthResponse signUp(@RequestBody SignUpRequest signUpRequest) {
        if (userService.hasUserWithUsername(signUpRequest.username)) {
            throw new RuntimeException(String.format("Username %s is already been used", signUpRequest.username));
        }
        if (userService.hasUserWithEmail(signUpRequest.email)) {
            throw new RuntimeException(String.format("Email %s is already been used", signUpRequest.email));
        }

        User user = userService.saveUser(createUser(signUpRequest));
        return new AuthResponse(user.getId(), user.getName(), user.getRole());
    }

    private User createUser(SignUpRequest signUpRequest) {
        User user = new User();
        user.setUsername(signUpRequest.username);
        user.setPassword(signUpRequest.password);
        user.setName(signUpRequest.name);
        user.setEmail(signUpRequest.email);
        user.setRole(WebSecurityConfig.USER);
        return user;
    }
}