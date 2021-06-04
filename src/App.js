import styled from "styled-components";
import DisplayMessages from "./components/DisplayMessages";
import Input from "./components/Input/Input";
import useIota from "./hooks/useIota";
import iotaLogo from "./assets/iota_logo.png";

function App() {
  const {
    messageIds,
    input,
    disabled,
    index,
    handleOnChange,
    sendMessage,
    getMessage,
    message,
  } = useIota();
  return (
    <div>
      <Display>
        <Input
          input={input}
          handleOnChange={handleOnChange}
          handleSendMessage={sendMessage}
          disabled={disabled}
        />
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
}

export default App;

const Display = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 15px;
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
