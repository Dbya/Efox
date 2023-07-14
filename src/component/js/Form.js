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
     <input autofocus {...register('name', { required: true })}  /> <br />
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

   <div className="dropdown">
   
   <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo"> <img src=" data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRYZGBgaGhocGBwYGBoaGBgYGhoZGhoYGBwcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGBISHDQhISE0NDQxMTE0MTExMTE0NDE0NDQ2NDE0NDQ1NTExNDQ0NDE0NjYxNjQ0NDQ0MTE0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xABBEAABAgQFAgIHBQYDCQAAAAABAAIDESExBBITQVEFYSJxMkKBkaHB0QYHsfDxFFJywtLhFyOCFkNTVGKSoqOy/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDBAIF/8QAJhEAAwABBAICAQUBAAAAAAAAAAECEQMSITEEQVFhgRMikbHRBf/aAAwDAQACEQMRAD8A+uJkHdXpDlUfD7VSDSsjXTRGMSjEFQBQd0brJZOWyrUKAWnQbKaQ5VE5aIBjrFZkzUnTlQwxygDhW9qJ9ikk5aD4qxEnRALT4NlWkOUJdlogGPsVnTM86cotIcqgKFZSJYoC/LRcj7UdWdhsLFjMa1zmAEB05El7W1kZ7qA6SdCdNoP5uvkjfvKxOWboMEH/AF0rITk4967SqpB+8nHPBMLCsewODczWRSATYGTiATMU3XrDJk+uRbJC+Uv+8zHzLDhGBwcxpBZFmHP9BpE6F0jlG8qTVM+8fHuE24NhEwJhkYiZcWAXuXAt8xJMMZPr8OwVRbL5J/iV1AHL+xtzZssskWefLnySn6WUh0uDOykT7x+ogTOCaB4pksjD0QXO32DXE8Bp4TDGUfVFoZYL5A/7xseA1xwbQ1zg1pMOMA55s1pzVd2C0wvvC6i5rcuCa4vBLA1kUzaLunO1R7/KbDCZ9VjWSF8pifebjWGUTDQ2ClS2JIZs2QnxVByOt+668is7/vUxQMjAgf8An7x47JhjJ9eUXx//ABXxP/Agf+z+pRNrGT7TnHKRGdO1ULgjgNuvJQGsPC05xyrKyoBkStqqgw8I4O6N1kBM45SolbVS06DZAA1pnZGHjlG6xWYhAG+pn+CjGEFHAFEb7FATOOUl4maIE+DZCi2NINU7OOVT7FZ0AbxMzC4X2vwzomDjMY0vcQ2TWgkk52nau3zXoGibVHtofzuqQ/PMX7M4+QaMNHIG+R1aSoNh+NymYDoXUYRm3BxD44b/ABQ3HxQnF7NxSZM198WiHYK7iYPhcOD1VoAGCdKbCR+zyBdDEIMNJZQ0wWENblbMupIyRMZ1UZZ4N7y3Tk58J5OZjzEDy3NkzlxOZ+XMZmtV9xi2SEyMHxGFh+rNaG/sjnNAoDhm+nlLA/wgVEM5A30MoAy7o4kPqxykYNzXNLyxzYbwWl7HsOUZ8oAER2USkKACQkvucOwVRbJkYPgOI6X1J8RsQ4OIHMimM0NhODc5EESlP0ZQGUHftLazAY5sRzz09z87GMeckUF7WCHknKIA0tMNnohtqzX2paGigTIwfF+q4HH4hh1sLEcMzXtaGEPzNEQTLhYHUcS2wNRUmfmon2Wx7jP9kjdgGGQAsAv0XFFElFQaPzx/snjv+Ujf9hUX6HUTcMGjTHCB9LUV6o7qj4rbcryegc55TdMcJekUWqO6EKfS1EIeeUThmt8VWmUAzTHCW8ysj1R3QkZqhACHE7pumOEsQyKotUd0ALzIyCpryTJWRmqFAwiqAZpjhLcZGQRao7oXNzVCApriTIpumOEsMIrwpExDWgudQATJNgEAvER2sq4hrZgTJkJm10bXEmRsvDda6oY7piYYPQH8x7n4LT0XrhhkMiTczY3c36t7fosVrLdj0c68id+PXye10xwlOcQZBWzENcAWmYNQRIghQtJqFsdBGumZFM0xwltblqUeqO6FFucQZBW0zMioWk1Ua3LUoQZpjhKc4gyCPVHdCWE1QEYZmRTNMcJbW5alFqjugC0xwqVao7qIUSmwd02SVG2Qg0rKrC0yQC4O6N1kqNsgF0BSdBsmSSY10A11isyJtwtEkAEK3tRPsUmLdU24QAp8GyOSRFugGPsV5HqGLdiX6UM/5bTNztnS38uBvfyf1rqLnu0IVSaPI+LZ8c+5OwmGbDblb7TyeVjVbntXXs57rc9q69nEjdGeD4ZOG1ZH2zTsJ0UznEIl+601Pmdl21F4/TnJmtGc5OTBixMI7d8Im3H0PwP4erwOJbEYHMMwfgeCNiuLEiszZHETcPRO47rmvhPw7s8KrPWaeO/bvcL1NOftf0eppx9r+j2USyQs/TOoMjDM013abt8+3ddFbpprKOlNUsoqHYKotkp9yrhXQoC0ssFclnfcoBsayQjhXT5IDKotUlEGBOqVY8XsQZDwVbDKc6IA9Luh1SimOUoNPBQDAMyvS7qoZleiMvHKAXqlWBmqgyHgpkMyFaICjDlXhVqlMc4Suk5TwgDDc1VTW0n+KpjpCRojzCSAHUXE691QtlDh1iOpT1Qf5jt7+E/rPUhAby53oj+Y9h8VyunYQtnEiHxuqS71Qbz7/osrv0jDUt52r8/Q3p2CENtavPpH5DstiwResQm0BLv4RT3mSFnWYZvmHmPoV4VSuMmaqZ4THdRxohtndx9EfM9guDD6jEbm8ZObmsu4Gy1uY/EuDpZGCgJvL5n4Le/pLC0NaJEWdck/9XPkvDVN5R4pVTzPR5zOZ5pmc5znWfM16XB9QD4ZefSYDmHkJzHYyXOPRXzkSyXNQfOUkGLwToIzNdmDgWvpK/y+YUSpZZ4lVOXjgxwcU5r87TldOdLV2lx2XsukdabGEjJrxdvPdvI7bLwy9d0Do5YNR7fGR4QR6AP8x+HvV0XW7C6PXj1W7C69nfDJ1ULctUTXACqp5mKLrO8HVKsMnXlBkPBTQ4AVQAkZaoWxidlIjp29yEMPCAPVKiHIeCoqDSs8W6moeVbRmuoUXOd/1WoBBphLznlCFx9kDbpjBO6IsCAYkRrqtQ8omVuhRbbhNJWLE4oDwtEz50B+azl7nek72CgXHqebpy2ly18dfyazpU+XwbI8drTU14FSsGO6pptzSlxO5PACGK9rGlxoAuNh4bsQ/O8SYKNbse31PsXPOtra1YTwvr/TPWqdJYXLYzAwDEcY8YzJq2dgBY9gNvesuIiPxLy1noNqATIHue5XT6q/LCfLgD3kA/BcDAw3ud/lzBlIkUAB5K6K4wj518NLvPf2DGwxZIEgvPqipHmRSfYLp4Do/rRPY3+r6LdgsAyEJmrt3Hby4Wpj2mxB8iCrML2WNJLllgSoKBE0yVLk9U6mWEsYKi5O0xOnvutHSlZZs2pWWdlx3PsCU+GHAtcJgiRC5nSmvaHPiOytMpBx+NbfNdVE8oKty6OHgYLYOIaIom31HGwPqud5W7Gq9yF5jqGEERhBoRVp4Pfsm/Z3qpe3Te7xtFDQ5mjvuR9O6abUvb8jSah7fno7b7lXCujDQRMqOEhMLc6BiyRDMlG555RshiUzcoAIAqtKU5sqhBqHlCmhRZtQ8q0JkvSKtvhunJMbZCl6oQ6RQBakAlpy3VmIEMfZA26EC0ikYyKWtlufw3W1czq1x5H5Ll8y3GjTXf8AprpSnaTMsFu6MuABJoBc8BVDsuN1rEFzxCBkKZj3NQPwPtC+Noxuwkba+qtOW3+AXudiXyExDaff/c/ALficUyC0A8eFov8A2Hdc5uOyNEOE3M7Yivme5+C0YPplc8U53msjUDz5PwX1olSsI+TudNvtvt/AlkCJiCHPOSHsBv5fUpuOxbYDQxgGb4N7nkrpvdIEnYT9y80zCRIzs2U+IzmaX45S6ULl8sjilxKy2SPg47iC5rnEid5y7HZvksj2FpIIkRtwV6PqTokNgyCQFCTUgCgMt/Nefcx7yXZXOnUnKfkF5bT65MtXT2vDzk24DqrmEB5Lm8mrm957+S7EeGyRiZA5wbMHmQmP1XlF6HoUbMwtPqmnkaj4zXuHnhl0qb/azmBsTEu7D2Mb/f4r0eHh5GNbOeUAT8kYCi0mccm0xt57ZzOuxi1gaPWNfIbfELgwYrmuDmmTmmYK7nXg3IJkBwM2jcix/PZI6T0N0aTnTazn1nfwjjufis6TdYRlc1V/tPVdL6i2LDDhezhw7cLWTOgWbD4VsMZWANA957k7lPhXXWs457O6c4WeyaRRh4FE1Zn3Kp6Dc7NQKtIqQbp6Az6RUWhRCYMs0yDupo91D4e80AyQWeaZq9lNHugLgo3BLnl7qavZALmsHUDVvkV09LuuV1D0pcAD5/NcH/SrGi18tG/jr94MOwXnuqYRxjHYOqCbUABHnSy9G0KnNBuJ+a+dpVsaZ68jRWtO3OOcnP6bh2Mb4RXcm5+g7LZm4qmZRwPcrXRflU1iVg8afizK55FhhN1pwmVpr7ClpOJxDWNLnGg95OwCwiqVqu398m9KZl+kTrfUmwwJDM47Tl519y4sPrTy8DIJEgSE514/Rc3GYl0R5c72DgbBdOD1GAyRawh1ATIT71n+q+jLbbbeMnxr1d98PCXQrr0Noe0i7hX2G/54T/s8yjz3aPdM/MLF1B4ixf8ALm6YA9o4nYf3Xbw8NsGGA4gAVceSeF6lZpv0eJWbdekalzsX1KuSEM7zSlQD8yltdFxLi2EMrLOcfmf5R7V3+ndOZAEgJn1nG5+g7LVJ1118my3X1wvk5/T+g/7yOczryu0ef7x7W8125pmadFNLutVKlYRvMKVhBsFFUUUQ55UUzZqL0ehc09goEGj3UzypwgLiiiVNMDs1LKaPdALmomaPdRUB5xyEEWspVSk2DuoAMp4TWvB/VU4zSGoBsWtqoQ08JkHdG6yArMOVw4pzOJ5PwXRixA0VIsZd5DZcyCKr5P8A0nlxP5Orx12zQqUUXGbEUVFskqKA9pabESpwVrp6NW8Iy1NVQsszY3qjGUHjf+63nufldOZN7BnaJkeJu3ks+D6cyHUTJ5dceXC2Lv0dBRz7Pn1q3ffC+DlR+iMNWOLe3pD6pbOhcvp2b9SuySuXH6g57tOAMzj62w7jt3K0cyvRg5hei4kSFhhJom89/Ef4jsEzB9JiR3B8ebW7MsZfyj4ro9I6E2HJ7/HEvM1APadz3PwXZiWK0nTz3/BrGk3y+vgCExrGhrQGgWAlIKnTNZJJK1QfRC2NxbBI1Tc45CkWyzoA3iqkMSNU2HYKotkBecchKc0zQJzDMD8zQAwxI1omZxyEuKKJYKA0ZxyFFnUQZH6YSojpWTDECAjNbZClNeU7TCVplM1QhAXUshDyidWyy4+Npsc47W/iNB8Ubwskbwsnn+v4nPEyj0WU/wBXrH8B7FeGjOYBOvM/qsEFuZ0zXc9yti46mb5pZOWbtU6Txk6MPEtPY9/qnArkJjIzm2Ps2XNXiruWdkeW+qRq6hjGsAzetMD5k/BZG45rKOI7D87LpRcGMRAkWhpE8p7jfyNRJeMjQnNcWuEnAyI7reYelK+zm8nVrdldej0jMcHVEiOxTYmMY1uZxl23J4A3Xl4L3BwyzntKs+0t16TpvQXOOePU7Nn/APX0C0mqrhIyirvhIzQYMXFn9yFO/P8AUfgF6bBdOhwm5WCXJ3J5J3TWw5SpIDjYdkzVC3mEue2dMaanl8v5Ac7LQWQhxcZFE9maoUYwgzK0NAxBCFziDII9UIHNJqFARriTIpmmEtrSKlHqhCi3OIMgra6dCo5pNQo1uWpQgzTCTnIpwm6oS3MJqhSMOa6ZpBA1uWpR6oQhemFSmqFEKITYO6ZlHCXFpKSEGlZVYK0ZRwgAg7ontBBBEx3S4tLIQUBzovSmGZZ4CeLe7b2LBHwL2VImORUe3henyhKiUNF5cSzxWnL+jyiKGwucGi5Ml3Y2BY+4keRQ/wB0OB6ZkcSSCJSbTm8x+brP9N5M/wBJ5N2HYGtAFhQe5cX7QdGMaT2SDxIOnQFvJ7j8PYu1EoaKmmoWjlUsM1qZpbWcvpnSWQRP0nbuP4NGwXYhWRZQkxLqqUlhFmVKwhr7FZ0bDUJ2UcKlKhWUiWKXEuqYaoAFohWCvKOEl5qgGxbLOmQ7puUcICodgqi2S3mpVw7oBa0ssFMo4SXGpQDI1khMh1NU3KOEBmUWnKOFEGBet2U9LtJLynhMhUnOioJpd/gprdkZcOQkZTwoBks3ZTSlupDMr0TC4coBet2UlmrZLynhNhGQqgK05VnZTW7InOEjVJynhAMy5q2U05VnZXCMhVW5wkaoAdbsplzVsl5TwmwzIVQFZJVnZTW7InuEik5TwqBmXNWymTLVFDMhVR7hJQA63ZTLmql5TwnMcJIAcuWqmt2RRDMUScp4QDMk6qZctbo2OElUQzFEAOt2UyTrO6XlPCc1wkKoAcuWt1NbsrimYolZTwgGa3ZRLynhRUGpJjbIdQqN8V9lCghaknSH5KERSgLj7IG3TGjNdEYYQgxIjXVahRMGapQoDbjzWlLLAKpZilAXGughGZHmiHiuiySE90IOWeLdTUKNonUoUWy4WlKLQKhBqFASLdSHcI2tnUoXM3CEHrPEuVWco2NDhM3QoMK60JTmyqEGoUBH3KkK6MNBqVHCVQhBqzPuVeoUWUSnuhQWGvsTws7myqFeoUIaFFn1CogyTTKjPDfey0JEcWQpZeEIhFAAtaAS05bojECCPsgbdCBaZRNOW6ckRroUJ0QSSch4VgVHmtACEFQ/DdGXg0QRroWXCAvTKNplQpqzxboUMuBoEGmVTLhaUAppkJFCXzoL7Kot1TBUIQvTKNpDRIpgCREuUAbjMSCDTKkK60IUUHAUKjnToED7lSFdCFOYeFbHj6pzhNIeKlAG4giQQ6ZVwbp6FM+mVFoUQmCJMbZRRCiwtSiiEQiPsgbdRRUGpIi3UUUDAbcea1KKIEIjXQsuFFFQaVni3UUUDKZcLSoogRni3Uh3CiioNCzRLlWooGSFdaFFECM77lSFdRRUGhZn3KiigZcG60KKIERRRRCn/9k= " alt="" />  Cash</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
   
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
