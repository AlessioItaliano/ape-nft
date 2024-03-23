import * as s from './MenuNavList.styled';

const MenuNavList = ({ type, onClose }) => {
  return (
    <nav>
      <s.List type={type}>
        <li>
          <s.Link
            href="#about"
            aria-label="Scroll to about us section"
            type={type}
            onClick={onClose}
          >
            About
          </s.Link>
        </li>

        <li>
          <s.Link
            href="#m-map"
            aria-label="Scroll to m-map section"
            type={type}
            onClick={onClose}
          >
            M-map
          </s.Link>
        </li>

        <li>
          <s.Link
            href="#faq"
            aria-label="Scroll to faq section"
            type={type}
            onClick={onClose}
          >
            Faq
          </s.Link>
        </li>

        <li>
          <s.Link
            href="#arts"
            aria-label="Scroll to arts section"
            type={type}
            onClick={onClose}
          >
            Arts
          </s.Link>
        </li>

        <li>
          <s.Link
            href="#mint"
            aria-label="Scroll to mint section"
            type={type}
            onClick={onClose}
          >
            Mint
          </s.Link>
        </li>
      </s.List>
    </nav>
  );
};

export default MenuNavList;
