// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import OrderForm from "./OrderForm";
import { useHistory } from "react-router";


// CreateOrder Component
const CreateOrder = () => {
const [formValues, setFormValues] =
	useState({ orderId:'',carType:'',carName:'',carModel:'',location:'',phoneNo:'' })

    let history=useHistory()

	
// onSubmit handler
const onSubmit = orderObject => {
	axios.post(
'http://localhost:8081/order/addorder',
	orderObject)
	.then(res => {
		if (res.status === 200)
		{
        history.push("/order-list")
		
		}
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return order form
return(
	<OrderForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Book Wash
	</OrderForm>
)
}

// Export CreateStudent Component
export default CreateOrder
