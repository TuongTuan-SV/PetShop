import { createSlice } from "@reduxjs/toolkit";

export const cartreducer = createSlice({
    name : "cartitem",
    initialState:{
        numberofcart : 0,
        list:[],
    },
    reducers:{
        addtocart:(state ,action)=>{
            const listitem = [...state.list]
            if(state.numberofcart===0){
                let cart 
                if (action.payload.item.sendfrom === "0") {
                    cart = {
                    id:action.payload.item.id,
                    quantity:action.payload.item.quantity,
                    title:action.payload.item.title,
                    src:action.payload.item.src,
                    Price:action.payload.item.Price,
                    realprice : action.payload.item.realprice
                    }
                }
                else{
                    cart = {
                        id:action.payload.item.id,
                        quantity:action.payload.item.quantity,
                        title:action.payload.item.title,
                        src:action.payload.item.src,
                        Price:action.payload.item.Price,
                        realprice : action.payload.item.realprice
                        }
                }

                listitem.push(cart); 
                return{
                    ...state,
                    list : listitem,
                    numberofcart:state.numberofcart+1,
                }
            }
            else{
                let check = false;
                let cart
                listitem.map((item,key)=>{
                    if(item.id === action.payload.item.id){
                        if(action.payload.item.sendfrom === "0")
                        {
                            cart = {
                                id:action.payload.item.id,
                                quantity:listitem[key].quantity++,
                                title:action.payload.item.title,
                                src:action.payload.item.src,
                                Price:action.payload.item.Price,
                                realprice : action.payload.item.realprice
                            }
                            console.log(action.payload.item.sendfrom);
                        }
                        else{
                            cart = {
                                id:action.payload.item.id,
                                quantity:action.payload.item.quantity,
                                title:action.payload.item.title,
                                src:action.payload.item.src,
                                Price:action.payload.item.Price,
                                realprice : action.payload.item.realprice
                                }
                            console.log('false')
                                console.log(cart.quantity)    
                        }
                        listitem[key]= cart
                        console.log(  listitem)

                        check=true;
                        return{
                            ...state,
                            list : listitem,
                        }
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.item.id,
                        quantity:action.payload.item.quantity,
                        title:action.payload.item.title,
                        src:action.payload.item.src,
                        Price:action.payload.item.Price,
                        realprice : action.payload.item.realprice
                    }
                    listitem.push(_cart);
                    return{
                        ...state,
                        list : listitem,
                        numberofcart:state.numberofcart+1,
                    }
                }
            }
        },
        increase:(state,action)=>{
            const listitem = [...state.list]
                    let cart = {
                        id:listitem[action.payload].id,
                        quantity:Number(listitem[action.payload].quantity)+1,
                        title:listitem[action.payload].title,
                        src:listitem[action.payload].src,
                        Price:listitem[action.payload].Price,
                        realprice :listitem[action.payload].realprice,
                    } 
                    listitem[action.payload]= cart
            return{
                ...state,
                list:listitem
                
            }
        },
        decrease:(state,action)=>{
            const listitem = [...state.list]
                let cart = {
                    id:listitem[action.payload].id,
                    quantity:listitem[action.payload].quantity-1,
                    title:listitem[action.payload].title,
                    src:listitem[action.payload].src,
                    Price:listitem[action.payload].Price,
                    realprice :listitem[action.payload].realprice,
                } 
                listitem[action.payload] = cart
                if(listitem[action.payload].quantity === 0 ){
                    console.log("xoa thanh cong")    
                    return{
                        ...state,
                        numberofcart : state.numberofcart -1,   
                        list:listitem.filter(item=>{
                            return item.id!==listitem[action.payload].id
                        })
                    }       
                }
          
            
            return{ 
                ...state,
               
                list:listitem
                
            }
        },
        deletecart:(state,action)=>{
            
            return{
                ...state,          
                numberofcart : state.numberofcart -1,
                list:state.list.filter(item=>{
                    return item.id!==state.list[action.payload].id
                }),
            }
        }
    }
})
export const {addtocart,increase,decrease,deletecart } = cartreducer.actions

export default cartreducer.reducer