package com.spring.project.json.bootstrap;

import com.spring.project.json.config.WebSecurityConfig;
import com.spring.project.json.model.Cabin;
import com.spring.project.json.model.User;
import com.spring.project.json.repository.CabinRepository;
import com.spring.project.json.repository.UserRepository;
import com.spring.project.json.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
@Profile("bootstrap")
@RequiredArgsConstructor
@Transactional
@Slf4j
public class Bootstrap implements CommandLineRunner {


    private final UserService userService;
    private final UserRepository userRepository;
    private final CabinRepository cabinRepository;

    @Override
    public void run(String... args) throws Exception {

        if(userRepository.count() < 1){

            List<User> users = new ArrayList<>();
            for (int i = 1; i <= 1000; i++) {
                String username = "user" + i;
                String email = "user" + i + "@mycompany.com";
                users.add(new User(username, "password", "User " + i, email, WebSecurityConfig.USER));
            }
            users.add(new User("admin", "password", "Admin", "admin@admin", WebSecurityConfig.ADMIN));

            users.forEach(userService::saveUser);

            List<Cabin> cabins = new ArrayList<>();
            for (int i = 1; i <= 1000; i++) {
                String cabinName = "cabin" + i;
                int capacity = (i % 10) + 1; // Example capacity logic
                String locationCode = "c" + i;
                int pricePerNight = (i * 10); // Example price logic
                cabins.add(new Cabin(cabinName, capacity, locationCode, pricePerNight, pricePerNight * 2));
            }
            cabinRepository.saveAll(cabins);


        }

    }




}
