import React, {useEffect, useState} from 'react';
import PRODUCT_SERVICE from '../services/productServices'

const Home = () => {

const [productData, setProductData] = useState([]);    

const onGetProductDetail = async() => {
    try{
  const response = await  PRODUCT_SERVICE.getProduct("5ee8d92f6622a419f0be20e4")
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

useEffect(()=> {
    onGetProductDetail();
})

return(
    <div>
        hola
    </div>
)
}

export default Home;