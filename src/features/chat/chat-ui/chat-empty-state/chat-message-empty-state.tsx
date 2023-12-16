import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { FC, useState } from "react";
import { useChatContext } from "../chat-context";
import { ChatFileUI } from "../chat-file/chat-file-ui";
import { ChatStyleSelector } from "./chat-style-selector";
import { ChatTypeSelector } from "./chat-type-selector";


interface Prop {}

export const ChatMessageEmptyState: FC<Prop> = (props) => {
  const { fileState } = useChatContext();

  const { showFileUpload } = fileState;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [systemPrompt, setSystemPromptState] = useState('You are an AI assistant that helps people find information.');
  const [contextPrompt, setContextPromptState] = useState('Given the following extracted parts of a long document, create a final answer.If you dont know the answer, just say that you dont know. Dont try to make up an answer and dont include a citation.If you know the answer, you must always include a citation at the end of your answer and dont include full stop.');
  const { setSystemPrompt, setContextPrompt } = useChatContext();
  
  const resetSubmission = () => {
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    setSystemPrompt(systemPrompt);
    setContextPrompt(contextPrompt);

    setIsSubmitted(true);
    setTimeout(resetSubmission, 3000);
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
        <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">System Prompt</p>
      <textarea
        className="border border-gray-300 rounded p-2"
        value={systemPrompt}
        onChange={(e) => setSystemPrompt(e.target.value)}
        placeholder="Enter system prompt"
      />
    </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Context Prompt</p>
          <textarea
            className="border border-gray-300 rounded p-2"
            value={contextPrompt}
            onChange={(e) => setContextPromptState(e.target.value)}
            placeholder="Enter context prompt"
          />
          <button
      onClick={handleSubmit}
      className={`my-2 ${isSubmitted ? 'button-confirmation' : 'button-normal'}`}
      disabled={isSubmitted}  
    >
      {isSubmitted ? 'Prompts Submitted!' : 'Submit Prompts'}
    </button>
    {isSubmitted && <div className="text-green-500">Prompts have been submitted successfully.</div>}
        </div>
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

