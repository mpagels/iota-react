import styled from "styled-components";
import { useEffect, useState } from "react";
import iotaLogo from "./assets/iota_logo.png";
import React from "react";
import DisplayMessages from "./components/DisplayMessages";

const {
  Converter,
  INDEXATION_PAYLOAD_TYPE,
  MAX_NUMBER_PARENTS,
  SingleNodeClient,
} = require("@iota/iota.js");

const INDEX = process.env.REACT_APP_INDEX;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const client = new SingleNodeClient(API_ENDPOINT);

function App() {
  const [messageIds, setMessageIds] = useState([]);
  const [input, setInput] = useState("");
  const [disabled, setDisabeld] = useState(false);
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(null);
  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <div>
      <Display>
        <Input>
          <label htmlFor="message">
            <h1>Insert message:</h1>
          </label>
          <textarea
            id="message"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <button disabled={disabled} onClick={sendMessage}>
            {disabled ? "Sending..." : "Send Message to tangle"}
          </button>
        </Input>
        <DisplayMessages
          message={message}
          id={index > -1 && messageIds[index]}
        />
      </Display>
      <h2>💎 Transactions so far: {messageIds.length}</h2>
      {messageIds.map((id, _index) => (
        <IOTAButton key={id} onClick={() => getMessage(_index)}>
          <StyledImage
            src={iotaLogo}
            alt="IOTA Logo"
            isActive={index === _index}
          />
        </IOTAButton>
      ))}
    </div>
  );

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
          index: Converter.utf8ToHex("MartinPagels"),
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

  function hex_to_ascii(str1) {
    var hex = str1.toString();
    var str = "";
    for (var n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
  }
}

export default App;

const Display = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 15px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
`;

const IOTAButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 50%;
`;

const StyledImage = styled.img`
  ${(props) => props.isActive && "box-shadow:inset 0px 0px 0px 5px #131F37;"}
  background-color: #485776;
  width: 60px;
  border-radius: 50%;
  margin: 5px;
`;
