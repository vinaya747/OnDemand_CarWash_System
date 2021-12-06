package io.carwashsystem.paymentservice;



import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import io.carwashsystem.paymentservice.model.PaymentDetails;
import io.carwashsystem.paymentservice.repo.PaymentRepository;
import io.carwashsystem.paymentservice.service.PaymentService;

@RunWith(SpringRunner.class)
@SpringBootTest
class PaymentserviceApplicationTests {

	@Autowired
	private PaymentService service;
	@MockBean
	private PaymentRepository repository;
	
	@Test
	public void getPaymentTest()
	{
		PaymentDetails payment=new PaymentDetails(1,123,"success","abc");
		when(repository.save(payment)).thenReturn(payment);
		assertEquals(payment,service.doPay(payment));
	}
	
	
}
