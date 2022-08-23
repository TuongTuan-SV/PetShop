import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from "reactstrap"
import { Link } from 'react-router-dom';
import {useDispatch } from "react-redux";
import "../CSS/Productpageitem.css"

import { addtocart } from "../../reducers/Cartreducer";
const Item =(props)=>{
   
    const dispatch = useDispatch();

    const item = {
        id : props.id,
        item : props,
    };
    return(
         <div className = "pditem">
                    <Card className = "Card"  >
                        <Link to={{ pathname: `/Product/Detail/${props.id}`,state: {title : props.title, src : props.src, price : props.Price, id : props.id, realprice: props.realprice, quantity : props.quantity}
                        }}  className = "Link title">
                            <div className = "ImageBorder"  >
                                <CardImg
                                    src = {props.src}
                                    width = "100%"
                                    className = "Image"
                                />
                            </div>
                            </Link>
                            <CardBody className = "pdCbody">
                         
                            <div className = "pdCardTitle" >
                                <CardTitle tag="h6" className="CardTitletxt">
                                {props.title}
                                </CardTitle>
                            </div>
                        <div className = "CardPrice">
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {props.Price}VNĐ
                                </CardSubtitle>
                        </div>

                            <Button className = "pdaddToCart" color="success" onClick = {() => dispatch(addtocart(item))}>
                                
                                Add To Cart
                            </Button>
                            </CardBody>
                        </Card>              
           
        </div>
    )
}
export default Item