# Azure Chat Updates

Below are the updates for the Azure Chat Solution accelerator

## 📂 Chat with file

- Users can utilize this functionality to upload files through the portal and engage in chat discussions related to the content of those files. Files uploaded via this feature are visible only to the original uploader.
- You can now see citations within the responses. Simply click on the citation to access the related context.
- You can now upload files to existing chats, allowing you to chat with multiple files simultaneously.

## 🏢 Chat with Enterprise Data

- The chat with enterprise data feature allows users to chat with pre-provisioned data using the Retrieval Augmented Generation pattern. As ScoopGPT is trained, the experience will allow users to ask questions about benefits, internal policies, and other HJF specific information.

- You can now see citations within the responses. Simply click on the citation to access the related context.
  
## 🎙️ Speech

Ability to use Azure Speech in conversations. This feature is not enabled by default. To enable this feature, you must set the environment variable `PUBLIC_SPEECH_ENABLED=true` along with the Azure Speech subscription key and region.

```
PUBLIC_SPEECH_ENABLED=true
AZURE_SPEECH_REGION="REGION"
AZURE_SPEECH_KEY="1234...."
```

## 🔑 Environment variable change

Please note that the solution has been upgraded to utilise the most recent version of the OpenAI JavaScript SDK, necessitating the use of the `OPENAI_API_KEY` environment variable.

Ensure that you update the variable name in both your '.env' file and the configuration within Azure App Service or Key Vault, changing it from `AZURE_OPENAI_API_KEY` to `OPENAI_API_KEY`.
