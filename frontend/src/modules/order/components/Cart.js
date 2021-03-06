import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrProductQty,
  incrProductQty,
  deleteProductFromCart,
} from "../../../redux/order/order.action";

let Cart = () => {
  let OrderInfo = useSelector((state) => {
    return state.order;
  });
  let dispatch = useDispatch();
  let { cartItems } = OrderInfo;
  let Tax = 5.0;

  let calcTotal = () => {
    let result = 0;
    if (cartItems.length > 0) {
      for (let item of cartItems) {
        result += item.price * item.qty;
      }
    }
    return result;
  };
  let calcTax = () => {
    return (calcTotal() * Tax) / 100;
  };
  let calcGrandTotal = () => {
    return calcTotal() + calcTax();
  };

  let decrHandler = (productId) => {
    dispatch(decrProductQty(productId));
  };
  let incrHandler = (productId) => {
    dispatch(incrProductQty(productId));
  };
  let deleteHandler = (productId) => {
    dispatch(deleteProductFromCart(productId));
  };
  return (
    <React.Fragment>
      <section className="p-3 bg-primary text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Cart Items</h3>
            </div>
          </div>
        </div>
      </section>
      {/*   <pre>{JSON.stringify(cartItems)}</pre> */}
      <React.Fragment>
        <section className="mt-2">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <p className="h4"> Cart Items</p>
                  </div>
                  <div className="card-body">
                    <table className="table bg-info text-center table-striped">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Name</th>
                          <th>QTY</th>
                          <th>Price</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((cartItem) => {
                          return (
                            <tr>
                              <td>
                                <img
                                  src={cartItem.image}
                                  alt=""
                                  width="50"
                                  height="80"
                                />
                              </td>
                              <td>{cartItem.name}</td>
                              <td>
                                <i
                                  className="fa fa-minus-circle"
                                  onClick={decrHandler.bind(this, cartItem._id)}
                                ></i>
                                {cartItem.qty}
                                <i
                                  className="fa fa-plus-circle"
                                  onClick={incrHandler.bind(this, cartItem._id)}
                                ></i>
                              </td>
                              <td>{cartItem.price}</td>
                              <td>{cartItem.price * cartItem.qty}</td>
                              <td>
                                <i
                                  class="fa fa-trash"
                                  onClick={deleteHandler.bind(
                                    this,
                                    cartItem._id
                                  )}
                                ></i>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    {" "}
                    <p className="h4"> Cart Info</p>
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">Total: {calcTotal()}</li>
                      <li className="list-group-item">Tax: {calcTax()}</li>
                      <li className="list-group-item">
                        Grand Total: {calcGrandTotal()}
                      </li>
                    </ul>
                    <Link
                      to="/orders/checkout"
                      className="btn btn-success btn-sm "
                    >
                      Check Out
                    </Link>
                    <Link to="/" className="btn btn-success btn-sm m-4">
                      Continue Shoping...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </React.Fragment>
  );
};
export default Cart;
