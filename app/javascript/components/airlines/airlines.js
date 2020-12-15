import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const Test = styled.div`
  padding: 16px;
  background-color: #000;
  font-size: 48px;
  color: #fff;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 8px 16px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`;

const Airlines = () => {
  return (
    <>
      <Test>
        <p>Hello from the nested airlines/airlines component!</p>
      </Test>
      <LinkWrapper>
        <Link to={`/airlines/test`}>View Another Test</Link>
      </LinkWrapper>
    </>
  );
};

export default Airlines;
