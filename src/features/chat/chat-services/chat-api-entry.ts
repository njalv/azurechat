import { ChatAPIData } from "./chat-api-data";
import { ChatAPIEnterprise } from "./chat-api-enterprise";
import { ChatAPISimple } from "./chat-api-simple";
import { PromptGPTProps } from "./models";

@@ -9,6 +10,8 @@ export const chatAPIEntry = async (props: PromptGPTProps) => {
    return await ChatAPIData(props);
  } else if (props.chatType === "mssql") {
    return await ChatAPIData(props);
  } else if (props.chatType === "enterprise") {
    return await ChatAPIEnterprise(props);
  } else {
    return await ChatAPISimple(props);
  }
