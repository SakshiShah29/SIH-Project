import React, { Fragment } from "react";
import Logout from "./Logout";
import classes from "./MainHeader.module.css";
import Navbar from "./Navbar";
import Notification from "./Notification";
import Message from '../../images/Message.png'
import editor from '../../images/text-editor.png'
import arrow from "../../images/Vector.png";
import { Link } from "react-router-dom";
import ProfileBadge from "./ProfileBadge";
function MainHeader(props) {
  let { name, institute, branch, interests, description, id } = props;

  const handleMessageIcon = () => {
    document.querySelector("#chatApp").classList.toggle('d-none')
  }
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.upper}>
          <Link to="/">
            <a>
              <img src={arrow}></img>
            </a>
          </Link>
          <img src={Message} alt="" className={classes.message_icon} onClick={handleMessageIcon} />
          <img src={editor} alt="" className={classes.message_icon} onClick={handleMessageIcon} />
          <Notification />

          <Link to="/">
            <Logout />
          </Link>
        </div>
        <Navbar
          onClick={props.onClick}
          onEdit={props.onEdit}
          onMessage={props.onMessage}
          username={name}
          institute={institute}
          branch={branch}
          interests={interests}
          description={description}
          id={id}
        />
        <ProfileBadge />
      </div>
    </Fragment>
  );
}

export default MainHeader;
