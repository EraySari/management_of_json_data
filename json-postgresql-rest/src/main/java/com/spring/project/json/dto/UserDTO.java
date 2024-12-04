package com.spring.project.json.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Long id;

    @NotBlank(message = "Name is mandatory")
    @Size(min = 3, max = 20, message = "Name must be between 3 and 20 characters")
    private String name;

    @NotBlank(message = "Username is mandatory")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
    private String username;

    @NotBlank(message = "Password is mandatory")
    @Size(min = 3, max = 20, message = "Password must be between 3 and 20 characters")
    private String password;

    @NotBlank(message = "Email is mandatory")
    @Size(min = 10, max = 25, message = "Email must be between 10 and 25 characters")
    @Email
    private String email;

    @NotBlank(message = "Role is mandatory")
    private String role;
}
