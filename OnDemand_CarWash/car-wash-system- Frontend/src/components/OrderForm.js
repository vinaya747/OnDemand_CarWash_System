import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import './OrderForm.css'
import { Paper } from "@material-ui/core";

const OrderForm = (props) => {
	const btnstyle={margin:'8px 20px',marginLeft:'150px',borderRadius:"10px"}
	const paperStyle={padding :20,height:'90vh',width:600, margin:"20px auto", backgroundColor:'transparent'}

console.log(props);
return (
	<Paper elevation={10} style={paperStyle}>
	<div className="form-wrapper" >
			
		<div className="wrap">
	<Formik {...props} >
	<div className="box-border1">
		<Form>
		
			<div className="r">
		<FormGroup>
           
			<Field name="orderId" type="number"
				className="form-control" placeholder="Order Id" required/>
			<ErrorMessage
			name="orderId"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        </div>
		<div className="r">
		<FormGroup>
            
			<Field name="carType" type=""
				className="form-control" placeholder="Car Type" required/>
			<ErrorMessage
			name="carType"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		</div>
		<div className="r">
		<FormGroup>
   
			<Field name="carName" type="text"
				className="form-control" placeholder="Car Name" required/>
			<ErrorMessage
			name="carName"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		</div>
		<div className="r">
        <FormGroup>
         
			<Field name="carModel" type="text"
				className="form-control" placeholder="Car Model" required/>
			<ErrorMessage
			name="carModel"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<div className="r">
		</div>
        <FormGroup>
        
			<Field name="location" type="text"
				className="form-control" placeholder="Location"required/>
			<ErrorMessage
			name="location"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		</div>
	
		<div className="r">
        <FormGroup>
           
			<Field name="phoneNo" type="number"
				className="form-control" placeholder="Phone Number" required/>
			<ErrorMessage
			name="phoneNo"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		</div>
		<Button variant="danger" 
			block="block" type="submit" style={btnstyle} fullWidth>
			{props.children}
		</Button>
		
		</Form></div>
	</Formik>
	

    </div></div>
	</Paper>
);
};

export default OrderForm;
