import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();

  console.log("These are the conversations", conversations);

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          {console.log(conversation, "This is a conversation")}
          {/* {conversation.recipients.map((r) => r.name).join(", ")} */}
          {/* {conversations.receipents.map((ele) => {
            console.log(ele);
          })} */}
          {/* {console.log(conversation.recipients)}; */}
          {conversation.recipients.map((ele) => {
            console.log(ele);
            return `${ele.name}  `;
          })}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
