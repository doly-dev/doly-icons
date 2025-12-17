import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS4yNTUgNS43ODZhLjIzNy4yMzcgMCAwIDAgLjI0MS4yNDdoLjgyNWMuMTM4IDAgLjI0OC0uMTEzLjI2Ni0uMjUuMDktLjY1Ni41NC0xLjEzNCAxLjM0Mi0xLjEzNC42ODYgMCAxLjMxNC4zNDMgMS4zMTQgMS4xNjggMCAuNjM1LS4zNzQuOTI3LS45NjUgMS4zNzEtLjY3My40ODktMS4yMDYgMS4wNi0xLjE2OCAxLjk4N2wuMDAzLjIxN2EuMjUuMjUgMCAwIDAgLjI1LjI0NmguODExYS4yNS4yNSAwIDAgMCAuMjUtLjI1di0uMTA1YzAtLjcxOC4yNzMtLjkyNyAxLjAxLTEuNDg2LjYwOS0uNDYzIDEuMjQ0LS45NzcgMS4yNDQtMi4wNTYgMC0xLjUxMS0xLjI3Ni0yLjI0MS0yLjY3My0yLjI0MS0xLjI2NyAwLTIuNjU1LjU5LTIuNzUgMi4yODZtMS41NTcgNS43NjNjMCAuNTMzLjQyNS45MjcgMS4wMS45MjcuNjA5IDAgMS4wMjgtLjM5NCAxLjAyOC0uOTI3IDAtLjU1Mi0uNDItLjk0LTEuMDI5LS45NC0uNTg0IDAtMS4wMDkuMzg4LTEuMDA5Ljk0Ii8+Cjwvc3ZnPg==)*/
const Question: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="question"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
</svg>
      )}
    />
  );

export default Question;
