import PropTypes from 'prop-types';

const { SectionStyled, Title } = require('./StyledSection');

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
