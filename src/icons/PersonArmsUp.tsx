import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-arms-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAzYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzIi8+CiAgPHBhdGggZD0ibTUuOTMgNi43MDQtLjg0NiA4LjQ1MWEuNzY4Ljc2OCAwIDAgMCAxLjUyMy4yMDNsLjgxLTQuODY1YS41OS41OSAwIDAgMSAxLjE2NSAwbC44MSA0Ljg2NWEuNzY4Ljc2OCAwIDAgMCAxLjUyMy0uMjAzbC0uODQ1LTguNDUxQTEuNSAxLjUgMCAwIDEgMTAuNSA1LjVMMTMgMi4yODRhLjc5Ni43OTYgMCAwIDAtMS4yMzktLjk5OEw5LjYzNCAzLjg0YS43LjcgMCAwIDEtLjMzLjIzNWMtLjIzLjA3NC0uNjY1LjE3Ni0xLjMwNC4xNzYtLjY0IDAtMS4wNzQtLjEwMi0xLjMwNS0uMTc2YS43LjcgMCAwIDEtLjMyOS0uMjM1TDQuMjM5IDEuMjg2YS43OTYuNzk2IDAgMCAwLTEuMjQuOTk4bDIuNSAzLjIxNmMuMzE3LjMxNi40NzUuNzU4LjQzIDEuMjA0WiIvPgo8L3N2Zz4=)*/
const PersonArmsUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-arms-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
</svg>
      )}
    />
  );

export default PersonArmsUp;
