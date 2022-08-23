import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import '../CSS/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faMapMarked, faHeadset,faQuestion,faTruck, faUserFriends } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return( 
        <>
            <div className = "line" style = {{background :"#a99e9e"}} ></div>
            <div className = 'Footer pt-4'>
                
                <Container>
                    <Row xs = '3' className = "mb-4 Footerow">
                        <Col>
                            <ul className = "footer-item">
                                <li>
                                    <p>Liên Hệ</p>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon = {faMapMarked} className = "mr-1"></FontAwesomeIcon>L319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon = {faHeadset} className = "mr-1"></FontAwesomeIcon>087 897 5231</p>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon = {faEnvelope} className = "mr-1"></FontAwesomeIcon>PetLove@gmail.com</p>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className = "footer-item">
                                <li>
                                    <p>Hỗ trợ</p>
                                </li>
                                <li>
                                    <p> <FontAwesomeIcon icon = {faQuestion} className = "mr-1"></FontAwesomeIcon> FAQ</p>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon = {faUserFriends} className = "mr-1"></FontAwesomeIcon>Chăm sóc khách hàng</p>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon = {faTruck} className = "mr-1"></FontAwesomeIcon>Vận chuyển và Đổi trả hàng</p>
                                </li>
                            </ul>
                        </Col>
                        
                    </Row> 
                    <div className = "line mb-2" ></div>
                    <Row>
                        <Col>
                            <p>
                            © 2021 Company, Inc. All rights reserved.
                            </p>
                        </Col>    
                    </Row>          
                </Container>
            </div>
        </>
   
    )
}

const TurnOnHeader = ({ isLoggedIn }) => {
    if (isLoggedIn == false) {
      return (<Footer />);
    }
    return (<div></div>);
  }
  export default TurnOnHeader