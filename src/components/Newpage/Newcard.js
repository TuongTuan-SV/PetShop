import { Card, CardImg,CardTitle,CardText,CardBody } from "reactstrap"
import "../CSS/New.css"
const NewCard =(props)=>{
    return(
        <Card className = "cardcontainer mt-3 mb-3">
            <CardImg
            alt="Card image cap "
            src={props.src}
            top
            width="100%"
            className = "newimg"
            />
            <CardBody>
            <CardTitle tag="h5" className = "Newtitle">
            {props.title}
            </CardTitle>
            <CardText className = "newtext">
                    {props.text}
            </CardText>
            <CardText>
                <small className="text-muted newdate">
                    Last updated {props.time} ago
                </small>
            </CardText>
            </CardBody>
        </Card>
    )
    
    }
    export default NewCard