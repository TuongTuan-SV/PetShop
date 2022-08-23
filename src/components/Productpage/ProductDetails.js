import React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import { useLocation} from 'react-router';
import '../CSS/Productdt.css'
import { Button } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { useDispatch } from 'react-redux';
import { addtocart } from "../../reducers/Cartreducer";
class Bar extends Component {
  render() {
    const number = Number(this.props.ratingnumber);
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={number}
        starDimension="40px"
        starSpacing="15px"
      />
    );
  }
}
var NewComponent = (props) => {

    const location = useLocation()
    var { title, src , price,id,realprice, quantity} = location.state
    const item = {
      id : id,
      item :{title : title, src : src, Price: price, id : id, realprice : realprice, quantity : Number(quantity), sendfrom : "1"
            }
    };
    function setquantity(val){
      console.log(val.target.value)
      item.item.quantity = val.target.value;
      console.log(quantity)
      console.log(item.item.quantity)
    }
    console.log(item)
    const dispatch = useDispatch();
    
      return (
         <div className="container mt-4" >
                      <div className="Holder">
                         <div className="container-fliud">
                           <form name="frmsanphamchitiet" id="frmsanphamchitiet">
                             <div className="wrapper row">
                               <div className="col-md-6">
                                 <div className="tab-content">
                                     <img src={src}/>
                                 </div>
                                
                               </div>
                               <div className="col-md-6">
                                 <h3 className="product-title">{title}</h3>
                                 <div className="rating">
                                  <Bar ratingnumber = "3" />
                                   <span className="review-no">123 reviews</span>
                                 </div>
                                 <h4 className="price">Giá hiện tại: <span>{price} vnđ</span></h4>
                                 <div className="form-group">
                                   <label htmlFor="soluong">Số lượng đặt mua:</label>
                                   <input type="number" className="form-control" id="soluong" name="soluong" min = "1"  defaultValue = "1"  placeholder = {item.item.quantity}   onClick={setquantity}/>
                                 </div>
                                 <div className="action">
                                   <Button className = "add-to-cart btn btn-default " onClick = {() => dispatch(addtocart(item))}>
                                      Add To Cart
                                  </Button>
                                 </div>
                               </div>
                             </div>
                           </form>
                         </div>
                       </div>
                       <div className="Holder">
                         <div className="container-fluid">
                           <h3>Description</h3>
                           <div className="row">
                             <div className="col">
                             
                             </div>
                           </div>
                         </div>
                       </div>
         </div>
              );
  }
  export default NewComponent;