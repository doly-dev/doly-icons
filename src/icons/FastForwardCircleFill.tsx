import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fast-forward-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2TTQuNzkgNS4wOTMgOCA3LjM4NlY1LjVhLjUuNSAwIDAgMSAuNzktLjQwN2wzLjUgMi41YS41LjUgMCAwIDEgMCAuODE0bC0zLjUgMi41QS41LjUgMCAwIDEgOCAxMC41VjguNjE0bC0zLjIxIDIuMjkzQS41LjUgMCAwIDEgNCAxMC41di01YS41LjUgMCAwIDEgLjc5LS40MDciLz4KPC9zdmc+)*/
const FastForwardCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fast-forward-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.79 5.093 8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .79-.407"/>
</svg>
      )}
    />
  );

export default FastForwardCircleFill;
