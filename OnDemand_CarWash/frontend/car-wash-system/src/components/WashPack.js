import React from 'react';
import './WasPack.css'
import { useHistory } from "react-router";
import { Paper } from "@material-ui/core";

import Navbar2 from "./NavBar2";

function WashPack() {
    const paperStyle={padding :20,height:'110vh',width:1100, margin:"20px auto", backgroundColor:'transparent'}
    let history = useHistory()
    function order(value){
                if(value===1){
                    history.push("./create-order")
                }else{
                    history.push("./create-order")
                }}
    return (
     
        <Paper elevation={10} style={paperStyle}>
            <Navbar2></Navbar2>
        <div>
             <div className="orderParent" id="paisa">
            <div className="container-fluid">
                <div className="row">
              <div className="col-lg-4 orderRow">
                        <div>
                            <div>
                                <p className="o1">Rs. 1999</p>
                                <p className="o2">BASIC WASH</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Exterior Hand Wash</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Wheel Shine</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Tire Dressing</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Windows in and out</p>
                                <p><i className="fas fa-times" style={{color:"red"  , marginRight:"15px"}}></i>Interior Vaccum</p>
                                <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Dashboard Clean</p>
                                <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Febreze Odor Eliminator</p>
                                <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{order(1)}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 orderRow2">
                        <div>
                            <div>
                                <p className="o1">Rs. 2999</p>
                                <p className="o2">DELUXE WASH</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Exterior Hand Wash</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Wheel Shine</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Tire Dressing</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Windows in and out</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Interior Vaccum</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Dashboard Clean</p>
                                <p><i className="fas fa-times" style={{color:"red" ,marginRight:"15px"}}></i>Febreze Odor Eliminator</p>
                                <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Hand Dry</p>
                                <button className="bookBtn">Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 orderRow2">
                    <div>
                            <div>
                                <p className="o1">Rs. 3999</p>
                                <p className="o2">ULTIMATE WASH</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Exterior Hand Wash</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Wheel Shine</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Tire Dressing</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Windows in and out</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Interior Vaccum</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Dashboard Clean</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Febreze Odor Eliminator</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{order(3)}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                        </div>

</div>                    </div>
        </div>
        </Paper>
    );
}

export default WashPack;