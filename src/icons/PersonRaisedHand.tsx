import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-raised-hand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiA2LjIwN3Y5LjA0M2EuNzUuNzUgMCAwIDAgMS41IDBWMTAuNWEuNS41IDAgMCAxIDEgMHY0Ljc1YS43NS43NSAwIDAgMCAxLjUgMHYtOC41YS4yNS4yNSAwIDEgMSAuNSAwdjIuNWEuNzUuNzUgMCAwIDAgMS41IDBWNi41YTMgMyAwIDAgMC0zLTNINi4yMzZhMSAxIDAgMCAxLS40NDctLjEwNmwtLjMzLS4xNjVBLjgzLjgzIDAgMCAxIDUgMi40ODhWLjc1YS43NS43NSAwIDAgMC0xLjUgMHYyLjA4M2MwIC43MTUuNDA0IDEuMzcgMS4wNDQgMS42ODlMNS41IDVjLjMyLjMyLjUuNzU0LjUgMS4yMDciLz4KICA8cGF0aCBkPSJNOCAzYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzIi8+Cjwvc3ZnPg==)*/
const PersonRaisedHand: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-raised-hand"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"/>
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg>
      )}
    />
  );

export default PersonRaisedHand;
