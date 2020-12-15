import React from "react";
import styled from "styled-components";

const Test = styled.div`
  padding: 16px;
  background-color: #000;
  font-size: 48px;
  color: #fff;
`;

const Airlines = () => {
  return (
    <Test>
      <p>Hello from the nested airlines/airlines component!</p>
    </Test>
  );
};

export default Airlines;
