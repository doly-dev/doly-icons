import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![dice-2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAzYTMgMyAwIDAgMSAzLTNoMTBhMyAzIDAgMCAxIDMgM3YxMGEzIDMgMCAwIDEtMyAzSDNhMyAzIDAgMCAxLTMtM3ptNS41IDFhMS41IDEuNSAwIDEgMC0zIDAgMS41IDEuNSAwIDAgMCAzIDBtNi41IDkuNWExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgMyIvPgo8L3N2Zz4=)*/
const Dice2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="dice-2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg>
      )}
    />
  );

export default Dice2Fill;
