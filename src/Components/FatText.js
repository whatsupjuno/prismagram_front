import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FatText = ({ text, className }) => (
  <Text className={className}>{text}</Text>
);

FatText.propTypes = {
  text: PropTypes.string.isRequired
};

export default FatText;

const Text = styled.span`
  font-weight: 600;
`;
