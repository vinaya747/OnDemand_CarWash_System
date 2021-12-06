 package io.carwashsystem.userprofileservice;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import io.carwashsystem.userprofileservice.service.UserServiceImpl;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableEurekaClient
public class ProfilemanagementserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProfilemanagementserviceApplication.class, args);
	}
	
	@Bean
	public RestTemplate getRestTemplate()
	{
		return new RestTemplate();
	}
	
	@Bean
	public UserServiceImpl getService(){
		return new UserServiceImpl();
	}
	
}


