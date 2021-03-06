import React from "react";
import styled from "styled-components";
import Rating from "../rating/rating";

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  margin: 0 20px 20px 0;
`;
const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const RatingScoreContainer = styled.div``;
const Title = styled.div`
  padding: 20px 0 0 0;
  font-size: 16px;
`;
const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 12px;
`;

const Review = (props) => {
  const { score, title, description } = props.attributes;
  return (
    <Card>
      <RatingContainer className="rating-container">
        <Rating score={score} />
      </RatingContainer>
      <Title className="title">{title}</Title>
      <Description className="description">{description}</Description>
    </Card>
  );
};

export default Review;
