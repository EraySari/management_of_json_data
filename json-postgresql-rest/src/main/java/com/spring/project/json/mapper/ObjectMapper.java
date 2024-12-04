package com.spring.project.json.mapper;

public interface ObjectMapper <T,R>{

    R map(T t);

    T mapDto(R r);
}
