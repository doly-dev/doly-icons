import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![award-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtOCAwIDEuNjY5Ljg2NCAxLjg1OC4yODIuODQyIDEuNjggMS4zMzcgMS4zMkwxMy40IDZsLjMwNiAxLjg1NC0xLjMzNyAxLjMyLS44NDIgMS42OC0xLjg1OC4yODJMOCAxMmwtMS42NjktLjg2NC0xLjg1OC0uMjgyLS44NDItMS42OC0xLjMzNy0xLjMyTDIuNiA2bC0uMzA2LTEuODU0IDEuMzM3LTEuMzIuODQyLTEuNjhMNi4zMzEuODY0eiIvPgogIDxwYXRoIGQ9Ik00IDExLjc5NFYxNmw0LTEgNCAxdi00LjIwNmwtMi4wMTguMzA2TDggMTMuMTI2IDYuMDE4IDEyLjF6Ii8+Cjwvc3ZnPg==)*/
const AwardFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="award-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
</svg>
      )}
    />
  );

export default AwardFill;
