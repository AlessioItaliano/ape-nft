import * as s from './Section.styled';

const Section = ({ anhorId, children }) => (
  <s.Section id={anhorId}>{children}</s.Section>
);

export default Section;
