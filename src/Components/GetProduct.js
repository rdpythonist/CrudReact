import React, { useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { Tooltip, } from 'antd';


const getLocalStorageData = () => {
  const getData = localStorage.getItem('Data')
  if (getData) {
    return JSON.parse(localStorage.getItem('Data'));
  }
  else {
    return [];
  }
}
const GetProduct = () => {
  const [localStorageData, setLocalStorageData] = useState(getLocalStorageData());
  return (
    <Container>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!localStorageData ? <h2>No result</h2> : localStorageData.map((data,key) => {
              return (
                <tr>
                  <td>{key+1}</td>
                  <td>{data.Name}</td>
                  <td>{data.Price}</td>
                  <td><Tooltip placement='left' color={'#13669a'} title={'Delete this entry'}><button className='btn btn-warning'>Delete</button></Tooltip>
                    <Tooltip placement='right' color={'#13669a'} title={'Edit this entry'}><button className='btn btn-primary'>Edit</button></Tooltip>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}
export default GetProduct