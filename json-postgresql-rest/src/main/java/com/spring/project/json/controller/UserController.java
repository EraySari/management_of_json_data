package com.spring.project.json.controller;

import com.spring.project.json.config.CustomUserDetails;
import com.spring.project.json.dto.UserDTO;
import com.spring.project.json.mapper.UserMapper;
import com.spring.project.json.service.UserService;
import com.spring.project.json.model.User;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/me")
    public UserDTO getCurrentUser(@AuthenticationPrincipal CustomUserDetails currentUser) {
        return userService.validateAndGetUserByUsername(currentUser.getUsername());
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/updateMe")
    public UserDTO updateMe(@AuthenticationPrincipal CustomUserDetails currentUser,
                            @Valid @RequestBody UserDTO updatedUserDTO) {
        // Retrieve the current user entity
        User existingUser = userService.validateAndGetUserByUsernamee(currentUser.getUsername());

        // Update fields from the DTO
        existingUser.setName(updatedUserDTO.getName());
        existingUser.setUsername(updatedUserDTO.getUsername());
        existingUser.setEmail(updatedUserDTO.getEmail());

        // Update the password if provided
        if (updatedUserDTO.getPassword() != null && !updatedUserDTO.getPassword().isEmpty()) {
            existingUser.setPassword(updatedUserDTO.getPassword());
        }

        // Save the updated user entity
        User savedUser = userService.saveUserr(existingUser);

        // Convert the updated entity back to a DTO
        return userMapper.map(savedUser);
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
