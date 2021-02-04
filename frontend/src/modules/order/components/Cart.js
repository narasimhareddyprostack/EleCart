import React from "react";
import { useSelector } from "react-redux";
let Cart = () => {
  let OrderInfo = useSelector((state) => {
    return state.order;
  });
  let { cartItems } = OrderInfo;
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
      <pre>{JSON.stringify(cartItems)}</pre>
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
                                <i className="fa fa-minus-circle"></i>
                                {cartItem.qty}
                                <i className="fa fa-plus-circle"></i>
                              </td>
                              <td>{cartItem.price}</td>
                              <td>{cartItem.price * cartItem.qty}</td>
                              <td>
                                <i class="fa fa-trash"></i>
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
                      <li className="list-group-item">Total:</li>
                      <li className="list-group-item">Tax:</li>
                      <li className="list-group-item">Grand Total:</li>
                    </ul>
                    <button className="btn btn-success mt-3">CheckOut</button>
                    <button className="btn btn-primary ml-3 mt-3">
                      Continue...
                    </button>
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
