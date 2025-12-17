import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![reply-all-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4wMjEgMTEuOSAzLjQ1MyA4LjYyYS43Mi43MiAwIDAgMSAwLTEuMjM4TDguMDIxIDQuMWEuNzE2LjcxNiAwIDAgMSAxLjA3OS42MTlWNmMxLjUgMCA2IDAgNyA4LTIuNS00LjUtNy00LTctNHYxLjI4MWMwIC41Ni0uNjA2Ljg5OC0xLjA3OS42MnoiLz4KICA8cGF0aCBkPSJNNS4yMzIgNC4yOTNhLjUuNSAwIDAgMS0uMTA2LjdMMS4xMTQgNy45NDVsLS4wNDIuMDI4YS4xNDcuMTQ3IDAgMCAwIDAgLjI1MmwuMDQyLjAyOCA0LjAxMiAyLjk1NGEuNS41IDAgMSAxLS41OTMuODA1TC41MzkgOS4wNzNhMS4xNDcgMS4xNDcgMCAwIDEgMC0xLjk0NmwzLjk5NC0yLjk0YS41LjUgMCAwIDEgLjY5OS4xMDYiLz4KPC9zdmc+)*/
const ReplyAllFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="reply-all-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.021 11.9 3.453 8.62a.72.72 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
  <path d="M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945l-.042.028a.147.147 0 0 0 0 .252l.042.028 4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106"/>
</svg>
      )}
    />
  );

export default ReplyAllFill;
