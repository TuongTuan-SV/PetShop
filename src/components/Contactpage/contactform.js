import { Form, FormGroup, Label, Col, Input, FormText, Button} from "reactstrap"
import "../CSS/Contact.css"
const contactform =()=>{
    return(
        <div className ="content">
                <div className = "m-5 p-4 contacform" >
                <Form>
                <FormGroup row>
                    <Label
                        for="name"
                        sm={2}
                    >
                        Name
                    </Label>
                    <Col sm={10}>
                        <Input
                        className ="contactinpit"
                        id="name"
                        name="text"
                        type="text"
                        placeholder = "Enter Your Name Here"
                        />
                    </Col>
                    </FormGroup>
                <FormGroup row>
                    <Label
                        for="email"
                        sm={2}
                    >
                        Email
                    </Label>
                    <Col sm={10}>
                        <Input
                        className ="contactinpit"
                        id="email"
                        name="email"
                        placeholder = "Enter Your Email Here"
                        type="email"
                        />
                    </Col>
                    </FormGroup>
            
            
                <FormGroup row>
                    <Label
                        for="phone"
                        sm={2}
                    >
                        Phone
                    </Label>
                    <Col sm={10}>
                        <Input
                        className ="contactinpit"
                        id="phone"
                        name="text"
                        type="text"
                        placeholder = "Enter Your Phone Here"
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label
                        for="msg"
                        sm={2}
                    >
                        Message
                    </Label>
                    <Col sm={10}>
                        <Input
                        className ="contactinpit"
                        id="mssg"
                        name="text"
                        type="textarea"
                        placeholder = "Input Your Issue Here"
                        
                        />
                    </Col>
                    </FormGroup>
                
                    <FormGroup
                    check
                    row
                    >
                    <Col
                        sm={{
                        offset: 2,
                        size: 10
                        }}
                    >
                        <Button color= "success">
                        Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
            </div>
        </div>
     
    )
}
export default contactform