import { ChatAPIData } from "./chat-api-data";
import { ChatAPIEnterprise } from "./chat-api-enterprise";
import { ChatAPISimple } from "./chat-api-simple";
import { PromptGPTProps } from "./models";

export const chatAPIEntry = async (props: PromptGPTProps) => {
  if (props.chatType === "simple") {
    return await ChatAPISimple(props);
  } else if (props.chatType === "data") {
    return await ChatAPIData({ ...props, systemPrompt: props.systemPrompt, contextPrompt: props.contextPrompt });
  } else if (props.chatType === "enterprise") {
    return await ChatAPIEnterprise(props);
  } else if (props.chatType === "mssql") {
    return await ChatAPIData(props);
  } 
  else {
    return await ChatAPISimple(props);
  }
};
