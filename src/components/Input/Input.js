import styled from "styled-components";

export default function Input({
  input,
  handleOnChange,
  handleSendMessage,
  disabled,
}) {
  return (
    <InputWrapper>
      <label htmlFor="message">
        <h1>Insert message:</h1>
      </label>
      <textarea id="message" onChange={handleOnChange} value={input} />
      <button disabled={disabled} onClick={handleSendMessage}>
        {disabled ? "Sending..." : "Send Message to tangle"}
      </button>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
