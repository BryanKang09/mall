import React, {useEffect, useState} from 'react'
import ProductCard from '../component/ProductCard'
import { Container , Row, Col} from 'react-bootstrap';

const ProductAll = () => {

  const [productList,setProductList] = useState([]);
  
  const getProducts= async ()=>{
    let url=` http://localhost:3004/products/`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  },[]);

  return (
    <div>
      <Container>
        <Row >
          {productList.map((menu)=>
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>
          )}

        </Row>
      </Container>
      <h1> all products</h1>
      
    </div>
  )
}

export default ProductAll
