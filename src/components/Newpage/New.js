import { Container, Row, Col } from "reactstrap"
import NewCard from "./Newcard"
import hinh1 from "./Img/1.jpg"
import hinh2 from "./Img/2.png"
import hinh3 from "./Img/3.jpg"
import hinh4 from "./Img/4.jpeg"
import hinh5 from "./Img/5.jpg"
import hinh6 from "./Img/6.png"

const News =() =>{
    return(
        <Container className = "mt-3 mb-3">
        <Row xs = '3' className ="Newrow">
            <Col>
                <NewCard src = {hinh1} title = 'AS Mobile khoe "hoàng thượng" siêu đáng yêu' text = "Mới đây, streamer AS Mobile đã khoe những hình ảnh về chú mèo cưng rất đáng yêu khiến dân mạng tỏ ra thích thú." time = "13 Hours">
                </NewCard>
            </Col>
            <Col>
                <NewCard src = {hinh2} title = 'Hội những người thích nuôi chó mèo ở chung cư nhưng...' text = "Trong hầu hết các trường hợp thú cưng ở chung cư gây tranh cãi, không nghi ngờ gì, người chủ sẽ phải chịu trách nhiệm lớn nhất." time = "1 Hours">
                </NewCard>
            </Col>
            <Col>
                <NewCard src = {hinh3} title = "Sẻ chia 'ngôi nhà chung' với động vật" text = "Năm 2019, khi chị Geneva Marcelino và anh Alex Ward sang Việt Nam làm việc, họ quyết định tìm đến trạm cứu hộ động vật để nhận nuôi một chú chó bầu bạn." time = "2 Day">
                </NewCard>
            </Col>
            <Col>
                <NewCard src = {hinh4} title = "Tổng thống Biden chia tay cún cưng sau 13 năm chung sống" text = "Tổng thống Mỹ Joe Biden và Đệ nhất phu nhân Jill Biden ngày 19-6 thông báo sự ra đi của cún cưng, chú chó becgie Champ. Champ đã ở bên cạnh cặp đôi suốt 13 năm." time = "3 Week">
                </NewCard>
            </Col>
            <Col>
                <NewCard src = {hinh5} title = "Xả stress mùa giãn cách bên thú cưng" text = "Những ngày giãn cách xã hội, thú cưng trở thành người bạn thân thiết của nhiều bạn trẻ và các thành viên trong gia đình." time = "4 Day"> </NewCard>
            </Col>
            <Col>
                <NewCard src = {hinh6} title = "Tình yêu thương loài vật không thuộc về riêng ai" text = "Chúng ta đau vì tình yêu thương loài vật không thuộc về riêng ai. Đó là thứ tình cảm mang tính nhân loại, nhân bản và gợi đồng cảm ở bất cứ đâu." time = "1 Month"></NewCard>
            </Col>
        </Row>
    </Container>
    )
}
export default  News