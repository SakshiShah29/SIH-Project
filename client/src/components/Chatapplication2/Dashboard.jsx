import React from "react";
import { useConversations } from "../contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";
import Sidebar from "./SideBar";

// console.log(OpenConversation);

export default function Dashboard(props) {
  let { id } = props;
  const { selectedConversation } = useConversations();
  console.log(selectedConversation);
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}
