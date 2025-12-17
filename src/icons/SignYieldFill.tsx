import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-yield-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuNDggNS4zMjNoLS4yOHYxLjM1M2guMjhjLjM3MiAwIC41NC0uMjIyLjU0LS42NzQgMC0uNDUtLjE2OS0uNjgtLjU0LS42OFoiLz4KICA8cGF0aCBkPSJNNy4wMjIgMTQuNDM0YTEuMTMxIDEuMTMxIDAgMCAwIDEuOTYgMGw2Ljg1Ny0xMS42NjdjLjQ1Ny0uNzc4LS4wOTItMS43NjctLjk4LTEuNzY3SDEuMTQ0Yy0uODg5IDAtMS40MzcuOTktLjk4IDEuNzY3ek01LjUwNiA2LjIzMlY3SDUuMTF2LS43Nkw0LjQ0IDVoLjQ0bC40MjQuODQ5aC4wMTZMNS43NDggNWguNDI4ek02LjYyOCA1djJoLS4zOTZWNXptLjY4NCAxLjY3NmguODk1VjdINi45MTlWNWgxLjI4OHYuMzI0aC0uODk1di41MTNoLjg0MnYuMzAzaC0uODQyem0xLjUyMS0uMDEzaC44NDhWN0g4LjQzN1Y1aC4zOTZ6bS45Ny4zMzdWNWguNzNjLjYwOCAwIC44OTUuMzY0Ljg5NS45OTUgMCAuNjM2LS4yOTEgMS4wMDUtLjg5NSAxLjAwNXoiLz4KPC9zdmc+)*/
const SignYieldFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-yield-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.48 5.323h-.28v1.353h.28c.372 0 .54-.222.54-.674 0-.45-.169-.68-.54-.68Z"/>
  <path d="M7.022 14.434a1.131 1.131 0 0 0 1.96 0l6.857-11.667c.457-.778-.092-1.767-.98-1.767H1.144c-.889 0-1.437.99-.98 1.767zM5.506 6.232V7H5.11v-.76L4.44 5h.44l.424.849h.016L5.748 5h.428zM6.628 5v2h-.396V5zm.684 1.676h.895V7H6.919V5h1.288v.324h-.895v.513h.842v.303h-.842zm1.521-.013h.848V7H8.437V5h.396zm.97.337V5h.73c.608 0 .895.364.895.995 0 .636-.291 1.005-.895 1.005z"/>
</svg>
      )}
    />
  );

export default SignYieldFill;
