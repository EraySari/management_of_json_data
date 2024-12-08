package com.spring.project.json.controller;

import com.spring.project.json.config.CustomUserDetails;
import com.spring.project.json.dto.UserDTO;
import com.spring.project.json.mapper.UserMapper;
import com.spring.project.json.service.UserService;
import com.spring.project.json.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/me")
    public UserDTO getCurrentUser(@AuthenticationPrincipal CustomUserDetails currentUser) {
        return userService.validateAndGetUserByUsername(currentUser.getUsername());
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    public List<UserDTO> getUsers() {
        return userService.getUsers();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{username}")
    public UserDTO getUser(@PathVariable String username) {
        return userService.validateAndGetUserByUsername(username);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{username}")
    public User deleteUser(@PathVariable String username) {
        User user = userService.validateAndGetUserByUsernamee(username);
        userService.deleteUser(user);
        return user;
    }
}
