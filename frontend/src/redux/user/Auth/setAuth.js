// HTTP Header - to update
import Axios from "axios";

let setAuth = (token) => {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete Axios.defaults.headers.common["Authorization"];
  }
};

export { setAuth };


//we are sending token as HTTP header with help of AXIOS 3rd party library.