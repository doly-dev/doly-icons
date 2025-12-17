import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![asterisk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAwYTEgMSAwIDAgMSAxIDF2NS4yNjhsNC41NjItMi42MzRhMSAxIDAgMSAxIDEgMS43MzJMMTAgOGw0LjU2MiAyLjYzNGExIDEgMCAxIDEtMSAxLjczMkw5IDkuNzMyVjE1YTEgMSAwIDEgMS0yIDBWOS43MzJsLTQuNTYyIDIuNjM0YTEgMSAwIDEgMS0xLTEuNzMyTDYgOCAxLjQzOCA1LjM2NmExIDEgMCAwIDEgMS0xLjczMkw3IDYuMjY4VjFhMSAxIDAgMCAxIDEtMSIvPgo8L3N2Zz4=)*/
const Asterisk: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="asterisk"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default Asterisk;
