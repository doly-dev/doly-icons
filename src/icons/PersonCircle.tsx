import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNmEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDhhOCA4IDAgMSAxIDE2IDBBOCA4IDAgMCAxIDAgOG04LTdhNyA3IDAgMCAwLTUuNDY4IDExLjM3QzMuMjQyIDExLjIyNiA0LjgwNSAxMCA4IDEwczQuNzU3IDEuMjI1IDUuNDY4IDIuMzdBNyA3IDAgMCAwIDggMSIvPgo8L3N2Zz4=)*/
const PersonCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
      )}
    />
  );

export default PersonCircle;
