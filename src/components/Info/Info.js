import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { infoContents } from '../../data/dataStore';

const Info = props => (
  <Container>
    <Hero titleText={props.title} image={props.imageUrl}></Hero>
    <h2>{props.titleText}</h2>
    <p>{props.content}</p>
  </Container>
);

Info.propTypes = {
  titleText: PropTypes.node,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.node,
};

Info.defaultProps = {
  titleText: infoContents.title,
  content: infoContents.content,
  imageUrl: infoContents.imageUrl,
};

export default Info;
