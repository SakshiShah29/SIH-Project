import React, { useContext, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import google from "../../images/google.png"
import { Marginer } from "./marginer";
function Loginform(props) {
  const [data, setData] = useState({ email: "None", password: "None" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const [uni, setUni] = useState("");
  // const [domain, setDomain] = useState("");

  const { switchToSignup } = useContext(AccountContext);

  const mutation = useMutation(async (string, obj, which) => {
    let _body;
    let data = await fetch(`http://localhost:3001/${string}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        // Name: name,
        email: email,
        password: password,
        // Phone_number: number,
        // Institute: uni,
        // Domains_of_interest: domain,
      }),
    });
    let res = await data.json();
    console.log(res);
    console.log("Now the cookie is going to be assigned");
    document.cookie = `jwt=${res.token};max-age=1800;`;
    if (res.error) {
      alert(res.error);
    } else {
      //This means that no error has occured in the response object and the sign up is done completely
      //Hence we can see the token of the user
      console.log(res.Connection);
      console.log();
      alert("The user has been logged in successfully");
      navigate("/");

      //At this stage just route the user to the home page of the application
    }
  });

  function Submitted(e) {
    e.preventDefault();
    let obj = { email, password };
    mutation.mutateAsync("api/student/login", obj, false);
  }

  return (
    <div className={classes.boxcontainer}>

      <form className={classes.formcontainer}>
        <input
          className={classes.inputcontainer}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={classes.inputcontainer}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
   
      <a className={classes.mutedlink} href="#">
        Forget your password?
      </a>
      <Marginer direction="vertical" margin="2em" />
      <button
        className={classes.submitbutton1}
        type="submit"
        onClick={Submitted}
      >
        Login
      </button>
      <Marginer direction="vertical" margin="1em" />
      <button
        className={classes.submitbutton2}
        type="submit"
        onClick={Submitted}
      >
        <img src={google}></img> Connect with Google
      </button>
      <Marginer direction="vertical" margin="2em" />
    </div>
  );
}

export default Loginform;
