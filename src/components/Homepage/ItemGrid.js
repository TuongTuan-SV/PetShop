    import { Container,Row,Col } from "reactstrap";
    import Card from './Card';
    import CP1 from "../HinhSanPham/CAT/Product1.png"
    import CP2 from "../HinhSanPham/CAT/Product2.png"

    import DP1 from "../HinhSanPham/DOG/Product1.png"
    import DP2 from "../HinhSanPham/DOG/Product2.png"

    const GroupCard = ()=>{
    

        return(
            <div>
                <Container>
                    <Row xs = '4' className ="itemrow">
                        <Col className = "itemcol">
                            <Card sendfrom = "0" quantity = "1" src = {CP1} title = "Áo thun siêu nhân thú cưng có mũ có thể tháo rời, XXS" Price = '187.120' id = '01' realprice = "187120" ></Card>
                        </Col>
                        <Col className = "itemcol">
                            <Card sendfrom = "0"  quantity = "1" src = {DP1} title = "Trang phục trái chuối cho chó, XXS" Price = '233.900' id = '02' realprice = "233900"></Card>
                        </Col>
                        <Col className = "itemcol">
                            <Card sendfrom = "0"  quantity = "1" src = {DP2} title = "Ngũ cốc bổ dưỡng cho chó vị Vịt và Bí ngô 10kg " Price = "350.000" id = '03' realprice = "350000"></Card>
                        </Col>
                        <Col className = "itemcol">
                            <Card sendfrom = "0" quantity = "1" src = {CP2} title = "Cây Mèo Xám 5 tầng với Căn hộ" Price = "1.239.436" id = '04'  realprice = '1239436'></Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
    export default GroupCard;