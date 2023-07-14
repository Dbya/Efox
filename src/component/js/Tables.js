import React from 'react'

import Table from 'react-bootstrap/Table';

const Tables =() => {
  const tableStyle= {
    backgroundColor:'rgb(142, 150, 189)'
  };
  return (
    <Table striped>
      <thead>
        <tr>
          <th style={tableStyle}>S.N</th>
          <th style={tableStyle}>Item</th>
          <th style={tableStyle}>Qty</th>
          <th style={tableStyle}>Rate</th>
          <th style={tableStyle}>Discount</th>
          <th style={tableStyle}>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Noodles</td>
          <td> <input type='text' value={''} />
          </td>
          <td><input type='text' value={''} /></td>
          <td><input type='text' value={''} /></td>
          <td>1000</td>
        </tr>
        <tr>
        <td>1</td>
          <td>Noodles</td>
          <td> <input type='text' value={''} />
          </td>
          <td><input type='text' value={''} /></td>
          <td><input type='text' value={''} /></td>
          <td>800</td>
         </tr>
  
      </tbody>
    </Table>
  );
}

export default Tables;

