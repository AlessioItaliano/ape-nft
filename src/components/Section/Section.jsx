import * as s from './Section.styled';

const Section = ({ children, id }) => <s.Section id={id}>{children}</s.Section>;

export default Section;
