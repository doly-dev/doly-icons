import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![check-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptMTAuMDMgNC45N2EuNzUuNzUgMCAwIDEgLjAxMSAxLjA1bC0zLjk5MiA0Ljk5YS43NS43NSAwIDAgMS0xLjA4LjAyTDQuMzI0IDguMzg0YS43NS43NSAwIDEgMSAxLjA2LTEuMDZsMi4wOTQgMi4wOTMgMy40NzMtNC40MjVhLjc1Ljc1IDAgMCAxIDEuMDgtLjAyMnoiLz4KPC9zdmc+)*/
const CheckSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="check-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg>
      )}
    />
  );

export default CheckSquareFill;
