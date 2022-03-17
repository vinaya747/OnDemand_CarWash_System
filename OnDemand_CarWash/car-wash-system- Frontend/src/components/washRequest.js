import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import RequestTable from "./RequestTable";
import Navbar2 from "./NavBar2";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'


const RequestList = () => {
	const paperStyle={padding :20,height:'70vh',width:900, margin:"5px auto",borderRadius:'20px'}
const [students, setStudents] = useState([]);

useEffect(() => {
    
	axios
	.get("http://localhost:8081/order/allorders")
	.then(({ data }) => {
		setStudents(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return students.map((res, i) => {
	return <RequestTable obj={res} key={i} />;
	});
};

return (
	
	<>


	<div className="table-wrapper">
	<Grid>
	<Paper elevation={10} style={paperStyle}>
<h3><b><u>WASH REQUESTS</u></b></h3>
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Order Id</th>
			<th>Car Type</th>
			<th>Car Name</th>
			<th>Car Model</th>
            <th>Location</th>
        
            <th>Phone No</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</Paper>
	</Grid>
	</div>
	
	</>
);
};

export default RequestList;