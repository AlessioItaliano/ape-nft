import * as s from './Section.styled';

const Section = ({ children, anhorId }) => (
  <s.Section id={anhorId}>{children}</s.Section>
);

export default Section;
