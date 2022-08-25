import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./AccountBox.module.css";



import Loginform from "./loginForm";
import { AccountContext } from "./accountContext";
import { Marginer } from "./marginer";

import Adminlogin from "./Adminlogin";

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
    top: "-440px",
    left: "-420px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  typr: "spring",
  duration: 2.3,
  stiffness: 30,
};
function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("student");
  const [addClass, setAddClass] = useState("false")
  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToAdmin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("admin");
    }, 400);
  };

  const switchToStudent = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("student");
    }, 400);
  };

  const addingTheclassName = () => {
    setAddClass(true)
  }
  const contextvalue = { switchToAdmin, switchToStudent };

  return (
    <AccountContext.Provider value={contextvalue}>
      <div className={classes.boxcontainer}>
        <div className={classes.topcontainer}>
          <div className={classes.top}>
            <a className={classes.student} onClick={switchToStudent}>Student</a>
            <a className={classes.admin} onClick={switchToAdmin}>Admin</a>
          </div>
          <motion.div
            className={classes.backdrop}
            animate={isExpanded ? "expanded" : "collapsed"}
            initial={false}
            variants={backdropVariants}
          />

        </div>
        <div className={classes.innercontainer}>
          {active === "student" && <Loginform />}
          {active === "admin" && <Adminlogin walletaddress={props.walletaddress} setwalletaddress={props.setwalletaddress} />}
        </div>
        <Marginer direction="vertical" margin="1em" />
      </div>
    </AccountContext.Provider>
  );
}

export default AccountBox;
