import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap/';
import productList from './Product';
import Product from './Product'



const AddProduct = () => {
    const [details,setDetails]=useState({
        Id:'',
        Name:'',
        Price:''
    })
    const handleClick=(e)=>{
        setDetails({...details,Id:productList.length+1})
        e.preventDefault();
        // setDetails({})
    }
    console.log(details)
    localStorage.setItem('ID',details.Id)
    localStorage.setItem('Name',details.Name)
    localStorage.setItem('Price',details.Price)
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ProductName</Form.Label>
                    <Form.Control type="name" placeholder="Enter Productname" onChange={(e) => { setDetails({...details,Name:e.target.value}) }} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ProductPrice</Form.Label>
                    <Form.Control type="number" placeholder="Price" onChange={(e) => { setDetails({...details,Price:e.target.value}) }}/>
                </Form.Group>
                <Button onClick={handleClick} variant="primary" type="submit">
                    Add
                </Button>
            </Form>

        </div>
    );
}

export default AddProduct