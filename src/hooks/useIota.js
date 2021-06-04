import { useEffect, useState } from "react";
import hex_to_ascii from "../services/hex_to_ascii";
const {
  Converter,
  INDEXATION_PAYLOAD_TYPE,
  MAX_NUMBER_PARENTS,
  SingleNodeClient,
} = require("@iota/iota.js");

const INDEX = process.env.REACT_APP_INDEX;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const client = new SingleNodeClient(API_ENDPOINT);

export default function useIota() {
  const [messageIds, setMessageIds] = useState([]);
  const [input, setInput] = useState("");
  const [disabled, setDisabeld] = useState(false);
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(null);
  useEffect(() => {
    getAllMessages();
  }, []);

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  async function getAllMessages() {
    const messages = await client.messagesFind(Converter.utf8ToBytes(INDEX));
    setMessageIds(messages.messageIds || []);
  }

  async function sendMessage() {
    if (input) {
      setDisabeld(true);
      const tipsResponse = await client.tips();
      const submitMessage = {
        // Parents can be left undefined if you want the node to populate the field
        parentMessageIds: tipsResponse.tipMessageIds.slice(
          0,
          MAX_NUMBER_PARENTS
        ),
        payload: {
          type: INDEXATION_PAYLOAD_TYPE,
          index: Converter.utf8ToHex(INDEX),
          data: Converter.utf8ToHex(input),
        },
      };
      const messageId = await client.messageSubmit(submitMessage);
      if (messageId) {
        setInput("");
        setMessageIds([messageId, ...messageIds]);
        setDisabeld(false);
      }
    }
  }

  async function getMessage(index) {
    const message = await client.message(messageIds[index]);
    setMessage(hex_to_ascii(message.payload.data));
    setIndex(index);
  }

  return {
    messageIds,
    input,
    disabled,
    index,
    handleOnChange,
    sendMessage,
    getMessage,
    message,
  };
}
