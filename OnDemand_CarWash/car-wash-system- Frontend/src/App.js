import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateOrder from "./components/createorder-component";
import EditOrder from "./components/edit-order-component";
import OrderList from "./components/order-list-component";
import Payment from "./components/Payment";
import WashPack from "./components/WashPack";
import App1 from "./components/App1";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";

import Register from "./components/Register";
import login1 from "./components/login1";
import RequestList from "./components/washRequest";

function App() {
  return (
    <Router>
     
<Switch>
 
     <Route exact path="/" component={WhyUs} />
        <Route exact path="/whyus" component={WhyUs} />
      
        <Route exact path="/contact" component={Contact} />
    
      <Route path="/hello" component={App1}/>
      <Route exact path="/create"  component={CreateOrder} />
				<Route path="/create-order" component={CreateOrder} />
					
				<Route path="/edit-order/:id" 	component={EditOrder} />
				
				<Route path="/order-list" 	component={OrderList} />
				
       <Route path="/payment" 	component={Payment} />
       <Route path="/pack" component={WashPack}/>
       <Route path="/register" component={Register}/>
       <Route path="/login" component={login1}/>
     
       <Route path="/wash-requests" 	component={RequestList} />
     
       </Switch>
    </Router>
   
   
  );
}

export default App;
