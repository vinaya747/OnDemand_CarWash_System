package io.carwashsystem.orderservice;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import io.carwashsystem.orderservice.repo.OrderRepository;
import io.carwashsystem.orderservice.service.OrderService1;

@RunWith(SpringRunner.class)
@SpringBootTest
class OrderserviceApplicationTests {

	@Autowired
	OrderService1 service;
	@MockBean
	OrderRepository repository;
	@Test
	public void addorder() {
	}

}
