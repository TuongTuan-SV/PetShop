import React, { Component } from 'react';
import { Table,ButtonGroup,Button } from 'reactstrap';
import "../CSS/Cart.css";    
import { useSelector, useDispatch } from 'react-redux';

import { increase,decrease, deletecart } from '../../reducers/Cartreducer';


const Cart = ()=> {
        const state = useSelector((state) => state.cart.list)
        const dispatch = useDispatch();
        var total = 0;
        function totalprice(price,quantity){
            total += price*quantity
            return((Number(price*quantity)).toLocaleString("vi-VN"))    
        }

        function gettotal(){
            return((Number(total)).toLocaleString("vi-VN"))    
        }

        return (
            
            <Table  responsive className = "carttable">
                <thead>
                    <tr>
                    <th>
                        
                    </th>
                    <th>
                        Sản Phẩm
                    </th>
                    <th>
                        Giá
                    </th>
                    <th>
                        Số Lượng
                    </th>
                    <th>
                       Tổng Cộng
                    </th>
                    <th>
                      
                    </th>
                    </tr>
                </thead>
                <tbody >
                    {state.map((item,key) =>(
                         <tr key = {key}>
                         <th scope="row" className = "align-middle">

                         </th>
                         <td className = "ProductName align-middle">
                             <div style ={{display : "flex", flexDirection :"column"}}>
                                <img src = {item.src} className ="cartimg"></img>
                                {item.title}
                             </div>
                             
                         </td>
                         <td  className = "ProductPrice align-middle" >
                         {item.Price}VND
                         </td>
                         <td  className = "Quantity align-middle">
                             <div style ={{display:"flex"}}>  
                             {item.quantity}<ButtonGroup className ="ml-1"><  Button className="cartbtn" size ="sm" color = "primary" onClick = {() => dispatch(decrease(key))}>-</Button><Button className="cartbtn" size ="sm" color = "primary"  onClick = {() => dispatch(increase(key))}> +</Button>
                            </ButtonGroup>
                         </div>
                            
                         </td>
                         <td  className = "Total align-middle">
                            {totalprice(item.realprice,item.quantity)}VND
                         </td>
                         <td  className = "align-middle pl-3">
                             <Button className="cartbtn" size ="sm" color = "danger" onClick = {() => dispatch(deletecart(key))}>x</Button>
                         </td>
                         </tr>
                    ))}
                    <tr>
                    <th>  
                        </th>
                        <th>
                          
                        </th>
                        <th>
                            
                        </th>
                        <th>
                           
                        </th>
                        <th>
                           {gettotal()}VND
                        </th>
                        <th>
                            <Button className="cartbtn" size ="sm" color = "primary" onClick={()=>{alert("Bạn Đã Thanh Toán Thành Công")}}>Thanh Toán</Button>
                        </th>
                    </tr>
        
                </tbody>
            </Table>
        );
    }

      
export default Cart