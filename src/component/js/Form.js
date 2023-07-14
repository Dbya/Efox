import React, { useRef, useEffect, useState } from "react";
import "../css/Form.css";
import Tables from "./Tables";
import Form from "react-bootstrap/Form";
import { FaMoneyBillAlt } from "react-icons/fa";
import Dropdowns from "./Dropdowns";
import { useForm } from "react-hook-form";

const Forms = () => {
    const inputRef = useRef(null);

    const [shouldFocus, setShouldFocus] = useState(true);

    useEffect(() => {
      if (shouldFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [shouldFocus]);
  
    const handleInputFocus = () => {
      setShouldFocus(true);
    };
  
    const handleInputBlur = () => {
      setShouldFocus(false);
    };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="main" >
      <div className="left-page">
        <div className="heading">
          <div>
            <FaMoneyBillAlt />
          </div>
          <div>
            <div className="addHeading">&nbsp;&nbsp;Add Bill</div>
          </div>
        </div>

        <div className="input-field">
          <form action="" onSubmit={handleSubmit(onSubmit)}>

              <div className="inputs">
                <Form.Group className="item" >
                  <Form.Label htmlFor="items" >  </Form.Label>
                  <Form.Control
                    className="inputStyles"
                    ref={inputRef}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder="Scan Products...."
                  />
                </Form.Group>
                </div>
          </form>
        </div>

        <hr />

        <div className="table">
          <Tables />
          <div className="clear">
            <input type="submit" value="Clear All" />
          </div>
        </div>
      </div>

      <div className="mid-line"></div>

      <div className="right-page">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label className="customerLabel" htmlFor="fiscal">
                Fiscal Year
              </Form.Label>
              <Form.Control
                type="date"
                className="customerInput"
                {...register("fiscal", { required: true })}
              />
            </Form.Group>
            <div className="error">
              {errors.fiscal && <span>"Required fields must be filled."</span>}
            </div>
          </div>

          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label className="customerLabel" htmlFor="date">
                Date
              </Form.Label>
              <Form.Control
                className="customerInput"
                type="date"
                {...register("date", { required: true })}
              />
            </Form.Group>
            <div className="error">
              {errors.fiscal && <span>"Required fields must be filled."</span>}
            </div>
          </div>

          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label  className="customerLabel" htmlFor="bill">
                Bill No
              </Form.Label>
              <Form.Control
                className="customerInput"
                {...register("bill", {
                  required: "Required fields must be filled.",
                  pattern: {
                    value: /^[0-9\s]+$/,
                    message: "Invalid input. Only numbers are allowed.",
                  },
                })}
              />
            </Form.Group>

            <div className="error">
              {errors.bill && <span>{errors.bill.message}</span>}
            </div>
          </div>

          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label className="customerLabel" htmlFor="name">
                Name
              </Form.Label>
              <Form.Control
               className="customerInput"
                {...register("name", {
                  required: "Required fields must be filled.",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message:
                      "Invalid input. Only alphabets and spaces are allowed.",
                  },
                })}
              />
            </Form.Group>

            <div className="error">
              {errors.name && <span>{errors.name.message}</span>}
            </div>
          </div>

          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label  className="customerLabel" htmlFor="address">
                Address
              </Form.Label>
              <Form.Control
        className="customerInput"
                {...register("address", { required: true })}
              />
          
            </Form.Group>

            <div className="error">
              {errors.address && <span>Required fields must be filled.</span>}
            </div>
          </div>


          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label className="customerLabel" htmlFor="pan">
                Pan No
              </Form.Label>
              <Form.Control
              className="customerInput"
                {...register("pan", {
                  required: "Required fields must be filled.",
                  pattern: {
                    value: /^[0-9\s]+$/,
                    message:
                      "Invalid input. Only alphabets and spaces are allowed.",
                  },
                })}
              />
            </Form.Group>

            <div className="error">
              {errors.pan && <span>{errors.pan.message}</span>}
            </div>
          </div>

          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label  className="customerLabel" htmlFor="payment">
                Payment
              </Form.Label>
              <div className="customerInput">
              <Dropdowns />
              </div>
    
            </Form.Group>
          </div>

          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label className="customerLabel" htmlFor="tenderAmount">
                Tender Amount
              </Form.Label>
              <Form.Control
               className="customerInput"
                {...register("tenderAmount", {
                  required: "Required fields must be filled.",
                  pattern: {
                    value: /^[0-9\s]+$/,
                    message: "Invalid input. Only numbers re allowed.",
                  },
                })}
              />
            </Form.Group>
            <div className="error">
              {errors.tenderAmount && (
                <span>{errors.tenderAmount.message}</span>
              )}
            </div>
          </div>

          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label className="customerLabel" htmlFor="billAmount">
                Bill Amount
              </Form.Label>

              <Form.Control
                className="customerInput"
                {...register("billAmount", {
                  required: "Required fields must be filled.",
                  pattern: {
                    value: /^[0-9\s]+$/,
                    message: "Invalid input. Only numbers are allowed.",
                  },
                })}
              />
            </Form.Group>
            <div className="error">
              {errors.billAmount && <span>{errors.billAmount.message}</span>}
            </div>
          </div>

          <div className="details">
            <Form.Group className="customer-details">
              <Form.Label className="customerLabel" htmlFor="returnAmount">
                Return Amount
              </Form.Label>
              <Form.Control
              className="customerInput"
                {...register("returnAmount", {
                  required: "Required fields must be filled.",
                  pattern: {
                    value: /^[0-9\s]+$/,
                    message: "Invalid input. Only numbers are allowed.",
                  },
                })}
              />
            </Form.Group>
            <div className="error">
              {errors.returnAmount && (
                <span>{errors.returnAmount.message}</span>
              )}
            </div>
          </div>


        </form>
        <div className="footer">
              
              <button className="print"> Button</button>
               
             </div>
      </div>
    </div>
  );
  
};


export default Forms;
