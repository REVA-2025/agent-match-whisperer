
import { MainLayout } from "@/components/layout/MainLayout";
import { ConversationAnalyzer } from "@/components/conversations/ConversationAnalyzer";
import { ClientConversations } from "@/components/conversations/ClientConversations";

const Conversations = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="text-2xl font-bold text-reva-navy mb-1">Conversation Analysis</h1>
        <p className="text-gray-600 mb-6">Extract client preferences and needs from your conversations</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ConversationAnalyzer />
          </div>
          <div>
            <ClientConversations />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Conversations;
