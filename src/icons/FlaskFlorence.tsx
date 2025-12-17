import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![flask-florence](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDBhLjUuNSAwIDAgMCAwIDFINnY1LjQxNmE1IDUgMCAxIDAgNCAwVjFoLjVhLjUuNSAwIDAgMCAwLTF6TTkgMmgtLjVhLjUuNSAwIDAgMCAwIDFIOXYxaC0uNWEuNS41IDAgMCAwIDAgMUg5djFoLS41YS41LjUgMCAwIDAgMCAxaC41NjRhLjUuNSAwIDAgMCAuMjcuMjI3QTQuMDAyIDQuMDAyIDAgMCAxIDggMTVhNCA0IDAgMCAxLTEuMzMzLTcuNzczLjUuNSAwIDAgMCAuMzMzLS40N1YxaDJ6Ii8+Cjwvc3ZnPg==)*/
const FlaskFlorence: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="flask-florence"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 0a.5.5 0 0 0 0 1H6v5.416a5 5 0 1 0 4 0V1h.5a.5.5 0 0 0 0-1zM9 2h-.5a.5.5 0 0 0 0 1H9v1h-.5a.5.5 0 0 0 0 1H9v1h-.5a.5.5 0 0 0 0 1h.564a.5.5 0 0 0 .27.227A4.002 4.002 0 0 1 8 15a4 4 0 0 1-1.333-7.773.5.5 0 0 0 .333-.47V1h2z"/>
</svg>
      )}
    />
  );

export default FlaskFlorence;
