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
            <h1>
                <strong>Welcome.</strong> Please login.
            </h1>
            <Form >
           
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
            </Form>

                <div style = {{display : "flex" , justifyContent :"space-between", fontSize : "10px"}}>
                <p>
                    <a href="#">Forgot Password?</a>
                </p>
                <p>
                    <Link to="/Sigin">Don't Have An Account ?</Link>
                </p>
                </div>
             
                <p>
                    
                 <Link to ="/Home"> <Button onClick = {()=>{return props.parentCallback(islogin);}} color = "primary" style = {{width : "85%", }} className= "ml-4">
                     Log In
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
