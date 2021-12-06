package io.carwashsystem.adminservice.service;



import java.util.List;

import io.carwashsystem.adminservice.model.Ratings;

public interface RatingService {
	
	public Ratings saverating(Ratings rating);
	
	public List<Ratings> getuser();
	


}
