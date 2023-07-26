import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
const Login = () => {
  const intialState = {
    email: "",
    password: "",
  };
  const [login, setlogin] = useState(intialState);
  const [error,setError]=useState({color: "red",visibility:"hidden" });
  const navigate=useNavigate();

  const inputHandler = (e) => {
    setError({color: "red",visibility:"hidden"});
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(login);

    try {
      const response = await axios.get("http://localhost:5000/login");
      const data = response.data.user;
      const exist = data.find((element) => {
        return element.email === login.email;
      });
      if (exist) {
        //console.log(exist);
        navigate("/welcome");
      } else {
        setError({color: "red",visibility:"visible"});
        
      }
    } catch (error) {
      console.log("error while get request", error);
    }
  };

  return (
    <div className="container">
      <div className="inner_container">
        <h3>Log In</h3>
        <form onSubmit={submitHandler}>
          <div className="box">
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={inputHandler}
              minLength="3"
              maxLength="64"
              multiple
            />
          </div>

          <div className="box">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={inputHandler}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </div>

          <div className="box">
            <button type="submit">LogIn</button>
            <p>
              Don't have an account ? please{" "}
              <Link to="/signup">
                <b>SignUp</b>
              </Link>{" "}
            </p>
          </div>
          <span style={error} >
            Error : account doesn't exist
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
