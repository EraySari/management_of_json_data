package com.spring.project.json.service;

import com.spring.project.json.dto.UserDTO;
import com.spring.project.json.handler.UserNotFoundException;
import com.spring.project.json.mapper.UserMapper;
import com.spring.project.json.model.User;
import com.spring.project.json.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    @Override
    public List<UserDTO> getUsers() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::map)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<UserDTO> getUserByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UserNotFoundException(username));
        return Optional.ofNullable(userMapper.map(user));
    }

    @Override
    public Optional<User> getUserByUsernamee(String username) {
        return Optional.ofNullable(userRepository.findByUsername(username).orElseThrow(() -> new UserNotFoundException(username))
        );
    }

    @Override
    public boolean hasUserWithUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public boolean hasUserWithEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public UserDTO validateAndGetUserByUsername(String username) {
        return getUserByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(username));
    }

    @Override
    public User validateAndGetUserByUsernamee(String username) {
        return getUserByUsernamee(username)
                .orElseThrow(() -> new UserNotFoundException(username));
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        User user = userMapper.mapDto(userDTO);
        return userMapper.map(userRepository.save(user));
    }

    @Override
    public void deleteUser(User user) {
        if (!hasUserWithUsername(user.getUsername())) {
            throw new UserNotFoundException(user.getUsername());
        }
        userRepository.delete(user);
    }

    @Override
    public Optional<UserDTO> validUsernameAndPassword(String username, String password) {

        return getUserByUsername(username)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()));

    }
}
