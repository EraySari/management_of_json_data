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


import java.util.Arrays;
import java.util.List;

@Component
@Profile("mongo")
@RequiredArgsConstructor
@Slf4j
public class Bootstrap implements CommandLineRunner {


    private final UserService userService;
    private final UserRepository userRepository;
    private final CabinRepository cabinRepository;

    @Override
    public void run(String... args) throws Exception {

        if(userRepository.count() < 1){

            USERS.forEach(userService::saveUser);
//            cabinRepository.saveAll(CABINS);


        }

    }

    private static final List<User> USERS = Arrays.asList(
            new User("admin", "admin", "Admin", "admin@mycompany.com", WebSecurityConfig.ADMIN),
            new User("user", "user", "User", "user@mycompany.com", WebSecurityConfig.USER),
            new User("user2", "user2", "User2", "user2@mycompany.com", WebSecurityConfig.USER)

    );

   /* private static final List<Cabin> CABINS = Arrays.asList(
            new Cabin("cabin1",20,"c1",15,30),
            new Cabin("cabin2",40,"c2",30,60)
    );*/

}
