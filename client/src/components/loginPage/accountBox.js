import React, { useState } from "react";


// import Signup from "../Signup/Signup";
import { motion } from "framer-motion";
import classes from "./AccountBox.module.css";



import Loginform from "./loginForm";
import { AccountContext } from "./accountContext";
import { Marginer } from "./marginer";
import Signup from "./signUp";

const backdropVariants = {
  expanded: {
    width: "220%",
    height: "1530px",
    borderRadius: "10%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "100%",
    height: "500px",
    top: "-340px",
    left: "-220px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  typr: "spring",
  duration: 2.3,
  stiffness: 30,
};
function AccountBox() {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextvalue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextvalue}>
      <div className={classes.boxcontainer}>
        <div className={classes.topcontainer}>
          <motion.div
            className={classes.backdrop}
            animate={isExpanded ? "expanded" : "collapsed"}
            initial={false}
            variants={backdropVariants}
          />
          {active === "signin" && (
            <div className={classes.headercontainer}>
              <h2 className={classes.headertext}>Welcome Back</h2>
              <h4>Welcome Back! Please enter your credentials</h4>
            </div>
          )}
          {active === "signup" && (
            <div className={classes.headercontainer}>
              <h2 className={classes.headertext}>Create Your Account</h2>
              <h4>Please enter your details!</h4>
            </div>
          )}
        </div>
        <div className={classes.innercontainer}>
          {active === "signin" && <Loginform />}
          {active === "signup" && <Signup />}
        </div>
        <Marginer direction="vertical" margin="1em"/>
      </div>
    </AccountContext.Provider>
  );
}

export default AccountBox;
