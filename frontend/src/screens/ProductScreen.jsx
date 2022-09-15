import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card, Button, ListGroupItem} from 'react-bootstrap';
import Rating from '../components/Rating';
// import products from '../products';
import { useParams } from 'react-router';
import axios from 'axios';


const ProductScreen = () => { //props.match gives the url in v5

    //in v6 reat router we use - useParams
    const params = useParams();
    //const product = products.find(p=>p._id == params.id)
    const id = params.id;
   const [product,setProduct] = useState({});

   useEffect(()=>{

    const fetchProduct = async ()=>{
        const {data} = await axios.get(`/api/products/${id}`);
        setProduct(data);
    }
    fetchProduct();
   },[]);



  return (
    <>
    <Link to='/' className='btn btn-light my-3'>Go Back</Link>
    <Row>
        <Col md = {6}>
            <Image src={product.image} alt={product.name} fluid/>
            {/* By adding fluid the image will not flow out of its container, it will decrease in 
            size as and when the size of the container decreases */}
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Price:
                            </Col>
                            <Col>
                            {product.price}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Status:
                            </Col>
                            <Col>
                            {product.countInStock>0?'In Stock':'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                        <Button className='btn-block' type='button' disabled={product.countInStock===0}>Add to Cart</Button> 
                        </Row>
                       
                        {/* btn-block will stretch the button to take the entire space of the cell */}
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen