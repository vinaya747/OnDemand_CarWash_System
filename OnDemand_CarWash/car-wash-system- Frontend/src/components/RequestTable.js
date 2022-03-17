import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const RequestTable = (props) => {
const { orderId,carType,carName,carModel,location,phoneNo} = props.obj;

const deleteStudent = () => {
	axios
	.delete(
"http://localhost:8081/order/delete/" + orderId)
	.then((res) => {
		if (res.status === 200) {
		alert("You rejected wash request");
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
		<Button onClick={deleteStudent}
		size="sm" variant="danger">
		Delete
		</Button>
		
        
	</td>
	</tr>
);
};

export default RequestTable;