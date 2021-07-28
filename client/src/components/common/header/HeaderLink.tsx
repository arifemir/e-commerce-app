import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './header-link.css';

interface Props {
  to: string;
  icon?: string;
  title: string;
  animation?: string;
}

const HeaderLink = (props: Props) => {
  const { to, icon, title, animation } = props;
  const [className, setClassName] = useState(['animate__animated']);

  const onMouseOut = () => {
    if (animation) setTimeout(() => setClassName(['animate__animated']), 1000);
  };

  const onMouseOver = () => {
    if (animation) setClassName([...className, animation]);
  };

  return (
    <Link className='header-link-container' to={to} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
      {icon && <img src={icon} className={className.join(' ')} />}
      <h3>{title}</h3>
    </Link>
  );
};

export default HeaderLink;
