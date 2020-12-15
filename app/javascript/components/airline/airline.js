import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";

const Main = styled.div`
  padding-left: 48px;
`;

const Airline = (props) => {
  return (
    <>
      <Main>
        <Header attribute={props.match.params.slug} />
        <p>This is from the airline/airline component!</p>
      </Main>
    </>
  );
};

export default Airline;
