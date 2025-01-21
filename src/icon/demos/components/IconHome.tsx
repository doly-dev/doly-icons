import React from 'react';
import Icon, { IconBaseProps } from 'doly-icons';

const IconHome: React.FC<IconBaseProps> = (props) => {
  return (
    <Icon
      renderSVG={(mergeSVGProps) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
          {...mergeSVGProps}
        >
          <path fillOpacity=".01" fill="#fff" d="M0 0h48v48H0z" />
          <path d="M9 18v24h30V18L24 6 9 18z" />
          <path strokeWidth="3" stroke="currentColor" d="M9 42V18l-5 4L24 6l20 16-5-4v24H9z" />
          <path strokeWidth="3" stroke="currentColor" d="M19 29v13h10V29H19z" />
          <path strokeWidth="3" stroke="currentColor" d="M9 42h30" />
        </svg>
      )}
      {...props}
    />
  );
};

export default IconHome;
