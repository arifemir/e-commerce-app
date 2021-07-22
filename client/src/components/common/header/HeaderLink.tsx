import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  icon?: string;
  title: string;
}

const HeaderLink = (props: Props) => {
  const { to, icon, title } = props;
  return (
    <Link to={to}>
      {icon && <img src={icon} />}
      <h3>{title}</h3>
    </Link>
  );
};

export default HeaderLink;
