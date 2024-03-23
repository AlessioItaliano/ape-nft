import * as s from './Section.styled';

const Section = ({ anchorId: anchorId, children }) => (
  <s.Section id={anchorId}>{children}</s.Section>
);

export default Section;
