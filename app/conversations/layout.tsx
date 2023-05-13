import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversation";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
    const conversation = await getConversations()

  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList
          initialItems={conversation}
        />
        {children}
        </div>
    </Sidebar>
  );
}