import React, { useEffect } from "react";
import { getWatchAction } from "../../../../redux/product/product.actions";
import { Link, useHistory } from "react-router-dom";
import { addToCart } from "../../../../redux/order/order.action";

import { useDispatch, useSelector } from "react-redux";
let Watches = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  //how to read redux store
  let products = useSelector((state) => {
    return state.product;
  });

  let { product, loading } = products;
  useEffect(() => {
    dispatch(getWatchAction());
  }, [dispatch]);

  let clickAddToCart = (product) => {
    dispatch(addToCart(product, "1", history));
  };
  //dispatch actions
  return (
    <React.Fragment>
      <section className="p-3 bg-primary text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Laptop Data</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <pre>{JSON.stringify(product)}</pre> */}
      {loading ? (
        ""
      ) : (
        <React.Fragment>
          {product.length > 0 ? (
            <React.Fragment>
              {" "}
              <section className="mt-3">
                <div className="container">
                  <div className="row mt-3">
                    {product.map((singleProduct, index) => {
                      return (
                        <div className="col-md-3" key={index}>
                          <div className="card">
                            <div className="card-header">
                              <Link to={`/product/${singleProduct._id}`}>
                                <img
                                  src={singleProduct.image}
                                  className="img-fluid"
                                />
                              </Link>
                            </div>
                            <div className="card-body">
                              <ul className="list-group">
                                <li className="list-group-item">
                                  {singleProduct.name}
                                </li>
                                <li className="list-group-item">
                                  {singleProduct.price}
                                </li>
                                <li className="list-group-item">
                                  <button
                                    className="btn btn-primary btn-sm"
                                    onClick={clickAddToCart.bind(
                                      this,
                                      singleProduct
                                    )}
                                  >
                                    Add Cart
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </React.Fragment>
          ) : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default Watches;
