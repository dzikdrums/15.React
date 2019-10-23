import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { faqContents } from '../../data/dataStore';

const Faq = props => (
  <Container>
    <Hero titleText={props.title} image={props.imageUrl}></Hero>
    <h2>{props.titleText}</h2>
    <p>{props.content}</p>
  </Container>
);

Faq.propTypes = {
  titleText: PropTypes.node,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.node,
};

Faq.defaultProps = {
  titleText: faqContents.title,
  content: faqContents.content,
  imageUrl: faqContents.imageUrl,
};

export default Faq;
