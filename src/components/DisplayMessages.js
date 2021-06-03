import styled from "styled-components";
import React from "react";

export default function DisplayMessages({ message, id }) {
  return (
    <DisplayWrapper>
      <h2>Message</h2>
      <StyledID>{id}</StyledID>
      <p>{message}</p>
      {message && (
        <a
          href={`https://explorer.iota.org/mainnet/message/${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          See this on explorer.iota.org{" "}
        </a>
      )}
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  background-color: #8493ad;
  height: 400px;
  border-radius: 15px;
  width: 500px;
  overflow-y: scroll;
  padding: 15px;
`;

const StyledID = styled.p`
  font-size: 0.6em;
`;
