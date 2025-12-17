import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![suit-diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4zODQgMS4yMjZhLjQ2My40NjMgMCAwIDAtLjc2OCAwbC00LjU2IDYuNDY4YS41NC41NCAwIDAgMCAwIC42MTJsNC41NiA2LjQ2OWEuNDYzLjQ2MyAwIDAgMCAuNzY4IDBsNC41Ni02LjQ2OWEuNTQuNTQgMCAwIDAgMC0uNjEyek02Ljg0OC42MTNhMS4zOSAxLjM5IDAgMCAxIDIuMzA0IDBsNC41NiA2LjQ2OGExLjYxIDEuNjEgMCAwIDEgMCAxLjgzOGwtNC41NiA2LjQ2OGExLjM5IDEuMzkgMCAwIDEtMi4zMDQgMEwyLjI4OCA4LjkyYTEuNjEgMS42MSAwIDAgMSAwLTEuODM4eiIvPgo8L3N2Zz4=)*/
const SuitDiamond: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="suit-diamond"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.54.54 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.54.54 0 0 0 0-.612zM6.848.613a1.39 1.39 0 0 1 2.304 0l4.56 6.468a1.61 1.61 0 0 1 0 1.838l-4.56 6.468a1.39 1.39 0 0 1-2.304 0L2.288 8.92a1.61 1.61 0 0 1 0-1.838z"/>
</svg>
      )}
    />
  );

export default SuitDiamond;
