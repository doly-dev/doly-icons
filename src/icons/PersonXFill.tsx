import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-x-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDE0cy0xIDAtMS0xIDEtNCA2LTQgNiAzIDYgNC0xIDEtMSAxem01LTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2bTYuMTQ2LTIuODU0YS41LjUgMCAwIDEgLjcwOCAwTDE0IDYuMjkzbDEuMTQ2LTEuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhMMTQuNzA3IDdsMS4xNDcgMS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEwxNCA3LjcwN2wtMS4xNDYgMS4xNDdhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDdsLTEuMTQ3LTEuMTQ2YS41LjUgMCAwIDEgMC0uNzA4Ii8+Cjwvc3ZnPg==)*/
const PersonXFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-x-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708"/>
</svg>
      )}
    />
  );

export default PersonXFill;
