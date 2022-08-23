import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,  Nav, NavItem,
  NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  NavbarText, Input,InputGroup,Badge, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShoppingCart, faSearch,faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import "../CSS/Header.css"
const Header = (props) => {
  const counter= useSelector(state => state.cart.numberofcart) 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  
  return (
    <>
      <Navbar  light expand="md" className="MyHeader" >
      <NavbarBrand ><Link to = '/Home'  className = "HLink title"><FontAwesomeIcon icon = {faPaw}></FontAwesomeIcon> <pr>Pets</pr><pr style ={{color :"#7413cd"}}>Paradise</pr> </Link> </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto " navbar className ="Headerlink">
          <NavItem>
            <NavLink><Link  to = "/Home"  className = "HLink"> Home </Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink ><Link  to = "/Product"  className = "HLink"> Product </Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink ><Link  to = "/New"  className = "HLink"> News </Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink ><Link  to = "/Contact"  className = "HLink"> Contact </Link></NavLink>
          </NavItem>
        </Nav>
        <div className = "Leftside">
             <NavbarText className = "SearchBar">
                <InputGroup >
                <Input placeholder = "Enter Product Name" />
                <Button color = "success">
                <FontAwesomeIcon icon = {faSearch} className = "mr-1"></FontAwesomeIcon>Search
                </Button>
                </InputGroup>
              </NavbarText >
            <NavbarText className = "Login">
            <UncontrolledDropdown  style = {{background: 'transparent', border : 'transparent', boxShadow:"none"}}>
              <DropdownToggle caret style = {{background: 'transparent', border : 'transparent', boxShadow:"none"}}>
                <FontAwesomeIcon icon = {faUserCircle} className = 'fa-2x'></FontAwesomeIcon>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><Link to = "/Login" className = "HLink">Log In</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to = "/Sigin" className = "HLink">Create Account</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              </NavbarText>
            <NavbarText className = "Cart">
            <Link to = "/CartItem">
            <Badge color="primary">
              <div style = {{position: "relative",paddingBottom:"30%"}}>
                <div style = {{position: "absolute",right:"30%",top:"1%"}}>
                  {counter} 
                </div>
                <FontAwesomeIcon icon = {faShoppingCart}  className = 'fa-2x' style ={{color:"yellow",position:"relative",top:"10px"}}></FontAwesomeIcon>
                </div>
            </Badge>
            </Link>
            </NavbarText>
        </div>
       
      </Collapse>
      </Navbar>
      <div className = "line" style = {{background :"#a99e9e"}} ></div>
     </>
  );
}
const TurnOnHeader = ({ isLoggedIn }) => {
  if (isLoggedIn == false) {
    return (<Header />);
  }
  return (<div></div>);
}
export default TurnOnHeader;


