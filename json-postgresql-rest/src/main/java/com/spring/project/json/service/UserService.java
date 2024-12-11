package com.spring.project.json.service;

import com.spring.project.json.dto.UserDTO;
import com.spring.project.json.model.User;
import jakarta.validation.Valid;
import org.springframework.validation.annotation.Validated;

import java.util.List;
import java.util.Optional;

@Validated
public interface UserService {

     List<UserDTO> getUsers();

     Optional<UserDTO> getUserByUsername(String username);

     Optional<User> getUserByUsernamee(String username);

     boolean hasUserWithUsername(String username);

     boolean hasUserWithEmail(String email);

     UserDTO validateAndGetUserByUsername(String username);

     User validateAndGetUserByUsernamee(String username);

     UserDTO saveUser(@Valid UserDTO userDTO);

     User saveUserr( User user);

     void deleteUser(User user);

     Optional<UserDTO> validUsernameAndPassword(String username, String password);


}
