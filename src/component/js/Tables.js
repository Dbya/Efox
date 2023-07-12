import React from 'react'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'

const Tables = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>S.N</Table.HeaderCell>
        <Table.HeaderCell>Item</Table.HeaderCell>
        <Table.HeaderCell>Quantity </Table.HeaderCell>
        <Table.HeaderCell>Price </Table.HeaderCell>
        <Table.HeaderCell>Discount Rate</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     
        
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>samsung</Table.Cell>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>60000</Table.Cell>
        <Table.Cell>10%</Table.Cell>
        <Table.Cell>6000</Table.Cell>
        <Table.Cell><Button>Edit</Button> <Button>Delete</Button> </Table.Cell>
      </Table.Row>
    </Table.Body>

    
  </Table>
)

export default Tables