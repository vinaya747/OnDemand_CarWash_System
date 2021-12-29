import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const OrderTableRow = (props) => {
const { orderId,carType,carName,carModel,location,phoneNo} = props.obj;

const deleteOrder = () => {
	axios
	.delete(
"http://localhost:8081/order/delete/" + orderId)
	.then((res) => {
		if (res.status === 200) {
		alert("Order successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{orderId}</td>
	<td>{carType}</td>
	<td>{carName}</td>
    <td>{carModel}</td>
    <td>{location}</td>
    
    <td>{phoneNo}</td>

	<td>
		<Link className="edit-link" size="sm"
		to={"/edit-order/" + orderId}>
		Edit
		</Link><Button onClick={deleteOrder}
		size="sm" variant="danger">
		Cancel Order
		</Button>
		
        
	</td>
	</tr>
);
};

export default OrderTableRow;


