import React from 'react';
import css from 'components/container/container.module.css';

const Section = ({ title, children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Section;
