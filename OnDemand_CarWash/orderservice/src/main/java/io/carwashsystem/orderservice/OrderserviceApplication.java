package io.carwashsystem.orderservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import io.carwashsystem.orderservice.service.OrderServiceImpl;

@SpringBootApplication
public class OrderserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderserviceApplication.class, args);
	}
	@Bean
	public OrderServiceImpl getcustomerService(){
		return new OrderServiceImpl();
	}
	
}
