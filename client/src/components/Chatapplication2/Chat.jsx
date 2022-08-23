import React, { useState } from "react";
import Profileid from "./Profileid";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { SocketProvider } from "../contexts/SocketProvider";

export default function Chat() {
  const [id, setid] = useState("");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return (
    <div>
      {id ? dashboard : <Profileid title={"Hello world"} setid={setid} />}
    </div>
  );
}
