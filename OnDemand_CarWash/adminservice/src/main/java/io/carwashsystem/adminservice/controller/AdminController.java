package io.carwashsystem.adminservice.controller;


import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import io.carwashsystem.adminservice.model.AdminDetails;
import io.carwashsystem.adminservice.model.Ratings;
import io.carwashsystem.adminservice.model.WashPacks;
import io.carwashsystem.adminservice.service.AdminService;
import io.carwashsystem.adminservice.service.RatingService;
import io.carwashsystem.adminservice.service.WashPackService;




@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminservice;
	@Autowired
	private WashPackService packservice;
	@Autowired
	private RatingService ratingservice;
	
	
	
	@PostMapping("/addadmin")
	public String saveadmin(@RequestBody AdminDetails admin)
	{
		return adminservice.saveadmin(admin);
		
	}
	
	@GetMapping("/alladmins")
	public List<AdminDetails> getadmin()
	{
		return adminservice.getadmin();          
				
	}
	
	@GetMapping("/alladmins/{id}")
	public Optional<AdminDetails> getadmin(@PathVariable int id)
	{
		return adminservice.getadmin(id);
				
	}
	
	
	@PostMapping("/addpack")
	public String savepack(@RequestBody WashPacks pack)
	{
		 return packservice.savepack(pack);
		
	}
	
	@GetMapping("/allpacks")
	public List<WashPacks> getpack()
	{
		return packservice.getpack();
	
	}
	
	@DeleteMapping("/delete/{id}")
	public String deletepack(@PathVariable int id)
	{
		return packservice.deletepack(id);
		
	}
	
	//customer can add rating from profilemanagement and admin can view
	@PostMapping("/addrating")
	public String saverating(@RequestBody Ratings rating)
	{
		 ratingservice.saverating(rating);
		 return "thank you for the feedback";
		
	}
	

	@GetMapping("/allratings")
	public List<Ratings> getuser()
	{
		return ratingservice.getuser();
		
	}
	
	
		

	
	
			
}
