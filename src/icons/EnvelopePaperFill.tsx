import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-paper-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjUgOS41IDMgNy41di02QTEuNSAxLjUgMCAwIDEgNC41IDBoN0ExLjUgMS41IDAgMCAxIDEzIDEuNXY2bC0zLjUgMkw4IDguNzV6TTEuMDU5IDMuNjM1IDIgMy4xMzN2My43NTNMMCA1LjcxM1Y1LjRhMiAyIDAgMCAxIDEuMDU5LTEuNzY1TTE2IDUuNzEzbC0yIDEuMTczVjMuMTMzbC45NDEuNTAyQTIgMiAwIDAgMSAxNiA1LjR6bTAgMS4xNi01LjY5MyAzLjMzN0wxNiAxMy4zNzJ2LTYuNVptLTggMy4xOTkgNy45NDEgNC40MTJBMiAyIDAgMCAxIDE0IDE2SDJhMiAyIDAgMCAxLTEuOTQxLTEuNTE2em0tOCAzLjMgNS42OTMtMy4xNjJMMCA2Ljg3M3Y2LjVaIi8+Cjwvc3ZnPg==)*/
const EnvelopePaperFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-paper-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75zM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765M16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
</svg>
      )}
    />
  );

export default EnvelopePaperFill;
