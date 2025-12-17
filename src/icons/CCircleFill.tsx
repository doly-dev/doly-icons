import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![c-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTguMTQ2IDQuOTkyYy45NjEgMCAxLjY0MS42MzMgMS43MjkgMS41MTJoMS4yOTV2LS4wODhjLS4wOTQtMS41MTgtMS4zNDgtMi41NzItMy4wMy0yLjU3Mi0yLjA2OCAwLTMuMjY5IDEuMzc3LTMuMjY5IDMuNjM4djEuMDczYzAgMi4yNjcgMS4xNzggMy42MDMgMy4yNyAzLjYwMyAxLjY3NSAwIDIuOTMtMS4wMiAzLjAyOS0yLjQ2N3YtLjA5M0g5Ljg3NWMtLjA4OC44MzItLjc1IDEuNDE4LTEuNzI5IDEuNDE4LTEuMjI0IDAtMS45MjctLjg5MS0xLjkyNy0yLjQ2MXYtMS4wNmMwLTEuNTgzLjcxNS0yLjUwMyAxLjkyNy0yLjUwMyIvPgo8L3N2Zz4=)*/
const CCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="c-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503"/>
</svg>
      )}
    />
  );

export default CCircleFill;
