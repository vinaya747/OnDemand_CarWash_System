// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App1.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateOrder from
	"./createorder-component";
import EditOrder from
	"./edit-order-component";
import OrderList from
	"./order-list-component";
import Payment from "./Payment";
// App Component
const App1 = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
			
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-student"}
				className="nav-link">
				React MERN Stack App
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-student"}
					className="nav-link">
					Create Student
				</Link>
				</Nav>

				<Nav>
				<Link to={"/student-list"}
					className="nav-link">
					Student List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
	
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Switch>
				<Route exact path="/create"
					component={CreateOrder} />
				<Route path="/create-student"
					component={CreateOrder} />
				<Route path="/edit-student/:id"
					component={EditOrder} />
				<Route path="/student-list"
					component={OrderList} />
                    <Route path="/payment"
					component={Payment} />
				</Switch>
				
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App1;
