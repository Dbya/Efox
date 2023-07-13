import React , { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import '../css/Form.css'
import Dropdowns from './Dropdowns';
import Tables from './Tables';


import { useForm } from 'react-hook-form';









const Form = () => {
 
    const componentRef = useRef();
   
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log(data); // Do something with the form data
    };
  // const formik = useFormik({
  //   initialValues: {
  //     name:" ",
  //     date:" ",
  //     bill:" ",
  //     fiscal:" ",
  //     pan:" ",
  //     address:" ",
  //     item:" ",
  //     quantity:" ",
  //     price:" ",
  //     discount:" ",
  //     amount:" ",
  //   },
    


  return (
    <div >
    <div className="forms"  ref={componentRef}>
     <form action="" onSubmit={handleSubmit(onSubmit)} >
     <div className="topRow">
     <div className="fiscalyear">
     <label htmlFor="fiscal">Fiscal Year : </label>
     <input {...register('name', { required: true })}  /> <br />
     {errors.name && <span>This field is required</span>}
     </div>
     <div className="date">
     <label htmlFor="date">Date : </label>
     <input type="date" {...register('date', { required: true })}  /> <br />
     {errors.date && <span>Date is required</span>}
     </div>
     <div className="bill">
     <label htmlFor="bill">Bill no : </label>
     <input type="text" {...register('bill', { 
      required: 'Bill No  is required',
      pattern: {
        value: /^[0-9]+$/ ,
        message: 'Bill no cant be alphabet'
      }
    })}   />  <br />
    {errors.bill && <span>{errors.bill.message}</span>}
   
     </div>
     </div>
     <div className="secondRow">
     <div className="Name">
     <label htmlFor="name">Name : </label>
     <input  {...register('name', { 
      required: 'name is required',
      pattern: {
        value: /^[A-Za-z]+$/,
        message: 'Number are not accepted in name field'
      }
    })} 
      /> <br />
      {errors.name && <span>{errors.name.message}</span>}
    
     </div>
     <div className="Address">
     <label htmlFor="address">Address : </label>
     <input {...register('address', { required: true })}  />
     {errors.address && <span>address  is required</span>}
    
     </div>
     <div className="Pan">
     <label htmlFor="pan">PAN No : </label>
     <input  {...register('pan', { 
      required: 'PAN No  is required',
      pattern: {
        value: /^[0-9]+$/ ,
        message: 'PAN No cant be alphabet'
      }
    })}   /> <br />
    {errors.pan && <span>{errors.pan.message}</span>}
 
     </div>
     <div className="Payment">
     <Dropdowns />
     </div>
     </div>
  <div className="third">
  <div className="Item">
  <label htmlFor="item">Item : </label>
  <input  {...register('item', { required: true })}  /> <br />
  {errors.item && <span> item is required</span>}
  
  </div>
  <div className="Quantity">
  <label htmlFor="quantity">Quantity : </label>
  <input  {...register('quantity', { 
    required: 'quantity  is required',
    pattern: {
      value: /^[0-9]+$/ ,
      message: ' cant be alphabet'
    }
  })}     />
  {errors.quantity && <span>{errors.quantity.message}</span>}
  </div>
  <div className="Price">
  <label htmlFor="price">Price : </label>
  <input  {...register('price', { 
    required: '  is required',
    pattern: {
      value: /^[0-9]+$/ ,
      message: ' enter price in number'
    }
  })}   />
  {errors.price && <span>{errors.price.message}</span>}
  </div>
  <div className="Discount">
  <label htmlFor="discount">Discount Rate : </label>
  <input  {...register('discount', { 
    required: '  is required',
    pattern: {
      value: /^[0-9]+$/ ,
      message: ' enter in number'
    }
  })}   />
  {errors.discount && <span>{errors.discount.message}</span>}
  </div>
  <div className="Amount">
  <label htmlFor="amount">Amount : </label>
  <input  {...register('amount', { 
    required: '  is required',
    pattern: {
      value: /^[0-9]+$/ ,
      message: ' enter in number'
    }
  })}   />
  {errors.amount && <span>{errors.amount.message}</span>}
  </div>
  <div className="submit">
  <button type="submit">Submit</button>
  </div>
</div>
     </form>
    <div className="table">
    <Tables  />
    </div>
     <div className="clear">
     <button >Clear All</button>
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
     <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      
    </div>
     </div>
    </div>
  )
}

export default Form
