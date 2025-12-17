import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![paragraph](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuNSAxNWEuNS41IDAgMCAxLS41LS41VjJIOXYxMi41YS41LjUgMCAwIDEtMSAwVjlIN2E0IDQgMCAxIDEgMC04aDUuNWEuNS41IDAgMCAxIDAgMUgxMXYxMi41YS41LjUgMCAwIDEtLjUuNSIvPgo8L3N2Zz4=)*/
const Paragraph: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="paragraph"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5"/>
</svg>
      )}
    />
  );

export default Paragraph;
