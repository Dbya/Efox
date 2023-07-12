import React from 'react'
import '../css/Form.css'
import Dropdowns from './Dropdowns';
import Tables from './Tables';
import { Button } from 'semantic-ui-react';

const Form = () => {

    
  return (
    <div>
    <div className="forms">
     <form action="">
     <div className="topRow">
     <div className="fiscalyear">
     <label htmlFor="Fiscal">Fiscal Year : </label>
     <input type="text" name='Fiscal'  />
     </div>
     <div className="date">
     <label htmlFor="date">Date : </label>
     <input type="date" name='date'  />
     </div>
     <div className="bill">
     <label htmlFor="bill">Bill no : </label>
     <input type="text" name='bill'  />
     </div>
     </div>
     <div className="secondRow">
     <div className="Name">
     <label htmlFor="name">Name : </label>
     <input type="text" name='name'  />
     </div>
     <div className="Address">
     <label htmlFor="address">Address : </label>
     <input type="text" name='address'  />
     </div>
     <div className="Pan">
     <label htmlFor="pan">PAN No : </label>
     <input type="text" name='pan'  />
     </div>
     <div className="Payment">
     <Dropdowns />
     </div>
     </div>
  <div className="third">
  <div className="Item">
  <label htmlFor="item">Item : </label>
  <input type="text" name='item'  />
  </div>
  <div className="Quantity">
  <label htmlFor="quantity">Quantity : </label>
  <input type="text" name='quantity'  />
  </div>
  <div className="Price">
  <label htmlFor="price">Price : </label>
  <input type="text" name='price'  />
  </div>
  <div className="Discount">
  <label htmlFor="discount">Discount Rate : </label>
  <input type="text" name='discount'  />
  </div>
  <div className="Amount">
  <label htmlFor="amount">Amount : </label>
  <input type="text" name='amount'  />
  </div>
  <div className="submit">
  <input type="Submit"  value="Add" />
  </div>
</div>
     </form>
    <div className="table">
    <Tables />
    </div>
     <div className="clear">
     <Button type='danger'>Clear All</Button>
     </div>
     <div className="last">
     <div className="content">
     <p>Thank You Visit again</p>
     </div>
     <div className="details">
     <h3>Subtotal:60000</h3>
     <h3>Taxable Amount:200</h3>
     <h3>Vat[13%]:200 </h3>
     <h3>Total:7000</h3>
     </div>
     </div>
     </div>
     <div className="print">
     
     </div>
    </div>
  )
}

export default Form
