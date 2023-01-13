import React from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import productList from './Product'
import { Tooltip, Button } from 'antd';
const GetProduct = () => {
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
            {productList.map((data) => {
              return (
                <tr>
                  <td>{data.Id}</td>
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