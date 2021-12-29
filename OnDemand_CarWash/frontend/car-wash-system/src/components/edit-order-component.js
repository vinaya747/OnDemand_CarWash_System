

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderForm from "./OrderForm";

// EditOrder Component
const EditOrder = (props) => {
const [formValues, setFormValues] = useState({
    orderId:'',
    carType:'',
    carName:'',
    carModel:'',
    location:'',
   
    phoneNo:''
});
	
//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:8081/order/updateorder" +
		props.match.params.id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Order successfully updated");
		props.history.push("/order-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize order form
useEffect(() => {
	axios
	.get(
		"http://localhost:8081/order/addorder"
		+ props.match.params.id
	)
	.then((res) => {
		const { orderId,carType,carName,carModel,location,phoneNo} = res.data;
		setFormValues({  orderId,carType,carName,carModel,location,phoneNo});
	})
	.catch((err) => console.log(err));
}, []);

// Return Order form
return (
    <OrderForm
    initialValues={formValues}
    onSubmit={onSubmit}
    enableReinitialize
  >
    Update Order
  </OrderForm>

);
};

// Export EditOrder Component
export default EditOrder;
