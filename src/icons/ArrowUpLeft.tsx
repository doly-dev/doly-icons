import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDIuNWEuNS41IDAgMCAxIC41LS41aDZhLjUuNSAwIDAgMSAwIDFIMy43MDdsMTAuMTQ3IDEwLjE0NmEuNS41IDAgMCAxLS43MDguNzA4TDMgMy43MDdWOC41YS41LjUgMCAwIDEtMSAweiIvPgo8L3N2Zz4=)*/
const ArrowUpLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0z"/>
</svg>
      )}
    />
  );

export default ArrowUpLeft;
