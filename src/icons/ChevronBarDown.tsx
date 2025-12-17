import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-bar-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjY0NiA0LjE0NmEuNS41IDAgMCAxIC43MDggMEw4IDcuNzkzbDMuNjQ2LTMuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDggMGwtNC00YS41LjUgMCAwIDEgMC0uNzA4TTEgMTEuNWEuNS41IDAgMCAxIC41LS41aDEzYS41LjUgMCAwIDEgMCAxaC0xM2EuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const ChevronBarDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-bar-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708M1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default ChevronBarDown;
