import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![question-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTUuNDk2IDYuMDMzaC44MjVjLjEzOCAwIC4yNDgtLjExMy4yNjYtLjI1LjA5LS42NTYuNTQtMS4xMzQgMS4zNDItMS4xMzQuNjg2IDAgMS4zMTQuMzQzIDEuMzE0IDEuMTY4IDAgLjYzNS0uMzc0LjkyNy0uOTY1IDEuMzcxLS42NzMuNDg5LTEuMjA2IDEuMDYtMS4xNjggMS45ODdsLjAwMy4yMTdhLjI1LjI1IDAgMCAwIC4yNS4yNDZoLjgxMWEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtLjEwNWMwLS43MTguMjczLS45MjcgMS4wMS0xLjQ4Ni42MDktLjQ2MyAxLjI0NC0uOTc3IDEuMjQ0LTIuMDU2IDAtMS41MTEtMS4yNzYtMi4yNDEtMi42NzMtMi4yNDEtMS4yNjcgMC0yLjY1NS41OS0yLjc1IDIuMjg2YS4yMzcuMjM3IDAgMCAwIC4yNDEuMjQ3bTIuMzI1IDYuNDQzYy42MSAwIDEuMDI5LS4zOTQgMS4wMjktLjkyNyAwLS41NTItLjQyLS45NC0xLjAyOS0uOTQtLjU4NCAwLTEuMDA5LjM4OC0xLjAwOS45NCAwIC41MzMuNDI1LjkyNyAxLjAxLjkyN3oiLz4KPC9zdmc+)*/
const QuestionCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="question-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
</svg>
      )}
    />
  );

export default QuestionCircleFill;
