import {Link} from "react-router-dom"
import "./CSS/Login.css"
import { Button, Form, FormGroup, Label, Input,  } from "reactstrap";
import { BsFacebook, BsTwitter } from "react-icons/bs";
const LoginForm =(props)=>{
    var islogin = false;
    function onload(){
        return props.parentCallback(!islogin);
    }
    console.log(islogin)
    return(
        <div className = "Loginpage" onLoad = {onload()}>
            <div id="login">
            <h4>
                <strong>Create Your Own Account.</strong>
            </h4>
            <Form >
            <FormGroup>
                <Label for="exampleEmail">
                User Name
                </Label>
                <Input
                type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">
                Email
                </Label>
                <Input
                id="exampleEmail"
                name="email"
                type="email"
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">
                Password
                </Label>
                <Input
                id="examplePassword"
                name="password"
                type="password"
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">
                Confirm Password
                </Label>
                <Input
                id="examplePassword"
                name="password"
                type="password"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleNumber">
                Phone Number
                </Label>
                <Input
                id="exampleNumber"
                name="number"
                type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">
                Date
                </Label>
                <Input
                id="exampleDate"
                name="date"
                type="date"
                />
            </FormGroup>
            </Form>
                <p>
                    
                 <Link to ="/Home"> <Button onClick = {()=>{return props.parentCallback(islogin);}} color = "primary" style = {{width : "85%", }} className= "ml-4">
                     Create Account
                </Button></Link>
                </p>

            <p>
                <span className="btn-round">or</span>
            </p>
            <p>
                <a className="facebook-before">
                <BsFacebook style ={{fontSize : "30px"}}/>
                </a>
                <button className="facebook">   Login Using Facbook</button>
            </p>
            <p>
                <a className="twitter-before">
                <BsTwitter style ={{fontSize : "30px"}}></BsTwitter>
                </a>
                <button className="twitter">Login Using Twitter</button>
            </p>
            </div>
        </div>
    )
}
export default LoginForm
