import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversation";
import getUsers from "../actions/getUser";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
    const conversation = await getConversations()
    const users = await getUsers()

  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList
        users={users}
          initialItems={conversation}
        />
        {children}
        </div>
    </Sidebar>
  );
}
