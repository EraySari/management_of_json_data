package com.spring.project.json.mapper;

import com.spring.project.json.dto.UserDTO;
import com.spring.project.json.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper implements ObjectMapper<User, UserDTO> {
    @Override
    public UserDTO map(User user) {
        if (user == null) {
            return null;
        }

        return new UserDTO(
                user.getId(),
                user.getName(),
                user.getUsername(),
                user.getPassword(),
                user.getEmail(),
                user.getRole()
        );
    }

    @Override
    public User mapDto(UserDTO userDTO) {

        if (userDTO == null) {
            return null;
        }

        return new User(
                userDTO.getUsername(),
                userDTO.getPassword(),
                userDTO.getName(),
                userDTO.getEmail(),
                userDTO.getRole()
        );
    }
}
