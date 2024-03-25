import * as s from './MenuNavList.styled';

import { menuItems } from 'data/menuItems';

const MenuNavList = ({ type, onClose, theme }) => {
  return (
    <nav>
      <s.List type={type}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <s.Link
              href={item.href}
              aria-label={item.ariaLabel}
              theme={theme}
              type={type}
              onClick={onClose}
            >
              {item.label}
            </s.Link>
          </li>
        ))}
      </s.List>
    </nav>
  );
};

export default MenuNavList;
