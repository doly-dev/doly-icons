import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![code-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuNDc4IDEuNjQ3YS41LjUgMCAxIDAtLjk1Ni0uMjk0bC00IDEzYS41LjUgMCAwIDAgLjk1Ni4yOTR6TTQuODU0IDQuMTQ2YS41LjUgMCAwIDEgMCAuNzA4TDEuNzA3IDhsMy4xNDcgMy4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtMy41LTMuNWEuNS41IDAgMCAxIDAtLjcwOGwzLjUtMy41YS41LjUgMCAwIDEgLjcwOCAwbTYuMjkyIDBhLjUuNSAwIDAgMCAwIC43MDhMMTQuMjkzIDhsLTMuMTQ3IDMuMTQ2YS41LjUgMCAwIDAgLjcwOC43MDhsMy41LTMuNWEuNS41IDAgMCAwIDAtLjcwOGwtMy41LTMuNWEuNS41IDAgMCAwLS43MDggMCIvPgo8L3N2Zz4=)*/
const CodeSlash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="code-slash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
</svg>
      )}
    />
  );

export default CodeSlash;
