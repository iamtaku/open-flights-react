import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 48px 100px 48px 0;
  img {
    height: 56px;
    width: 56px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: -8px;
  }

  h1 {
    font-size: 56px;
  }
`;

const Header = (props) => {
  return (
    <Wrapper>
      <h1>{props.attribute}</h1>
      <p>This is from the header component in airline/airline✈️</p>
    </Wrapper>
  );
};

export default Header;
