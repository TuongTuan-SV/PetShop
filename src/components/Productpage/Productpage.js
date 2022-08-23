import GroudCard from "./ProductItem";
import { Link } from 'react-router-dom';
import "../CSS/productpage.css"
const productpage = () =>{
    return(
        <div className = "prodcutpage">
                <div className = "listitem">
                    <div className = "header">
                        <strong >Danh Mục Sản Phẩm</strong>
                    </div>
                    <ul >
                        <Link className = "Link" to = "/Product/Dog">
                            <li>
                                Sản phẩm cho Chó
                            </li>
                        </Link>
                        <Link className = "Link" to = "/Product/Cat">
                            <li>
                                Sản phẩm cho mèo
                            </li>
                        </Link>
                        <Link className = "Link" to = "/Product/Bunny">
                            <li>
                                Sản phẩm cho thỏ
                            </li>
                        </Link>
                        <Link className = "Link" to = "/Product/Hamster">
                            <li>
                                Sản phẩm cho hamster
                            </li>
                        </Link>
                    </ul>
                </div>

                    <div className = "itemgrid">
                        <GroudCard></GroudCard>   
                    </div>
        </div>    
    );
}
export default productpage;