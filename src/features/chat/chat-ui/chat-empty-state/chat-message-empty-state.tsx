import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { FC, useState } from "react";
import { useChatContext } from "../chat-context";
import { ChatFileUI } from "../chat-file/chat-file-ui";
import { ChatStyleSelector } from "./chat-style-selector";
import { ChatTypeSelector } from "./chat-type-selector";
import { Textarea } from "@/components/ui/textarea";


interface Prop {}

export const ChatMessageEmptyState: FC<Prop> = (props) => {
  const { fileState } = useChatContext();

  const { showFileUpload } = fileState;
  const { setSystemPrompt, setContextPrompt } = useChatContext();
  const [localSystemPrompt, setLocalSystemPrompt] = useState(''); 
  const [localContextPrompt, setLocalContextPrompt] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  
 
  const handleSystemPromptChange = (e:any) => {
    setLocalSystemPrompt(e.target.value);
  };

  const handleContextPromptChange = (e:any) => {
    setLocalContextPrompt(e.target.value);
  };

  const applyPrompts = () => {
    setSystemPrompt(localSystemPrompt);
    setContextPrompt(localContextPrompt);
    setConfirmationMessage('Prompts applied successfully!');
    setTimeout(() => setConfirmationMessage(''), 3000); // Clears the message after 3 seconds
  };
  

  return (
    <div className="grid grid-cols-5 w-full items-center container mx-auto max-w-3xl justify-center h-full gap-9">
      <div className="col-span-2 gap-5 flex flex-col flex-1">
        <img src="/ai-icon.png" className="w-36" />
        <p className="">
          Start by just typing your message in the box below. You can also
          personalise the chat by making changes to the settings on the right.
        </p>
      </div>
      <Card className="col-span-3 flex flex-col gap-5 p-5 ">
        <Typography variant="h4" className="text-primary">
          Personalise
        </Typography>
        <Card className="col-span-3 flex flex-col gap-5 p-5 ">
        {/* ... other components */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">System Prompt</p>
          <Textarea value={localSystemPrompt} onChange={handleSystemPromptChange} placeholder="Enter System Prompt" rows={3} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Context Prompt</p>
          <Textarea value={localContextPrompt} onChange={handleContextPromptChange} placeholder="Enter Context Prompt" rows={3} />
        </div>
        <button onClick={applyPrompts} className="px-4 py-2 bg-blue-500 text-white rounded">Apply Prompts</button>
        {confirmationMessage && (
          <p className="text-green-500 mt-2">{confirmationMessage}</p>
      )}
      </Card>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Choose a conversation style
          </p>
          <ChatStyleSelector disable={false} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            How would you like to chat?
          </p>
          <ChatTypeSelector disable={false} />
        </div>
        {showFileUpload === "data" && <ChatFileUI />}
      </Card>
    </div>
  );
};
