import React from "react";
import PropTypes from "prop-types";

export interface ICard {
  title: string;
  details: string;
  backgroundColor: string;
  pictureLink: string;
  routeTo: string;
}

const Card: React.FC<ICard> = () => {
  return <div></div>;
};

export default Card;
