import { Container,Row,Col } from "reactstrap";
import Card from './ProductCard';
import CP1 from "../HinhSanPham/CAT/Product1.png"
import CP2 from "../HinhSanPham/CAT/Product2.png"

import DP1 from "../HinhSanPham/DOG/Product1.png"
import DP2 from "../HinhSanPham/DOG/Product2.png"

const ItemGrid = ()=>{
//    realprice = '233900'
    
    return(
        <div>
            <Container>
                <Row xs = '4'  className ="itempagerow">
                    <Col className = "itempagecol">
                        <Card src = {CP1} title = "Áo thun siêu nhân thú cưng có mũ có thể tháo rời, XXS" Price = '187.120' id = '01'></Card>
                    </Col>
                    <Col className = "itempagecol">
                        <Card src = {DP1} title = "Trang phục trái chuối cho chó, XXS" Price = '233.900' id = '02'></Card>
                    </Col>
                    <Col className = "itempagecol">
                        <Card src = {DP2} title = "Ngũ cốc bổ dưỡng cho chó vị Vịt và Bí ngô 10kg " Price = "350.000" id = '03'></Card>
                    </Col>
                  
                </Row>
            </Container>
        </div>
    )

}
export default ItemGrid;