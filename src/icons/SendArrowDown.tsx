import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![send-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS44NTQuMTQ2YS41LjUgMCAwIDEgLjExLjU0bC0yLjggN2EuNS41IDAgMSAxLS45MjgtLjM3MmwxLjg5NS00LjczOC03LjQ5NCA3LjQ5NCAxLjM3NiAyLjE2MmEuNS41IDAgMSAxLS44NDQuNTM3bC0xLjUzMS0yLjQwN0wuNjQzIDcuMTg0YS43NS43NSAwIDAgMSAuMTI0LTEuMzNMMTUuMzE0LjAzN2EuNS41IDAgMCAxIC41NC4xMVpNNS45MyA5LjM2M2w3LjQ5NC03LjQ5NEwxLjU5MSA2LjYwMnoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi41IDE2YTMuNSAzLjUgMCAxIDAgMC03IDMuNSAzLjUgMCAwIDAgMCA3bS4zNTQtMS42NDZhLjUuNSAwIDAgMS0uNzIyLS4wMTZsLTEuMTQ5LTEuMjVhLjUuNSAwIDEgMSAuNzM3LS42NzZsLjI4LjMwNVYxMWEuNS41IDAgMCAxIDEgMHYxLjc5M2wuMzk2LS4zOTdhLjUuNSAwIDAgMSAuNzA4LjcwOHoiLz4KPC9zdmc+)*/
const SendArrowDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="send-arrow-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54l-2.8 7a.5.5 0 1 1-.928-.372l1.895-4.738-7.494 7.494 1.376 2.162a.5.5 0 1 1-.844.537l-1.531-2.407L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM5.93 9.363l7.494-7.494L1.591 6.602z"/>
  <path fillRule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg>
      )}
    />
  );

export default SendArrowDown;
