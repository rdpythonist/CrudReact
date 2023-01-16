
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap/';


const getLocalStorageData = () => {
    const getData = localStorage.getItem('Data');
    if (getData) {
        return JSON.parse(localStorage.getItem('Data'));
    }
    else{
        return [];
    }
}

const AddProduct = () => {
    const [addItems, setAddItems] = useState(getLocalStorageData());
    useEffect(()=>
    {
        localStorage.setItem('Data',JSON.stringify(addItems))

    },[addItems])
    const [details, setDetails] = useState({
        // Id: 0,
        Name: '',
        Price: 0
    })
    const handleClick = (e) => {
        e.preventDefault();
        setDetails({ ...details})
        if (addItems) {
            setAddItems([...addItems, details])
            localStorage.setItem("Data",JSON.stringify(addItems))
        }
        else {
            setAddItems([details])
            localStorage.setItem('Data',JSON.stringify(details))
        }
        setDetails()
        window.location.reload();   
    }
    
    

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ProductName</Form.Label>
                    <Form.Control type="text" placeholder="ProductName" onChange={(e) => { setDetails({ ...details, Name: e.target.value }) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ProductPrice</Form.Label>
                    <Form.Control type="number" placeholder="Price" onChange={(e) => { setDetails({ ...details, Price: Number(e.target.value) }) }} />
                </Form.Group>
                <Button onClick={handleClick} variant="primary" type="submit">
                    Add
                </Button>

                <Button onClick={() => console.info(details)} className="btn btn-danger">Show</Button>

            </Form>

        </div>
    );
}

export default AddProduct