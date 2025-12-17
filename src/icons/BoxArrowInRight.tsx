import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-in-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDMuNWEuNS41IDAgMCAxIC41LS41aDhhLjUuNSAwIDAgMSAuNS41djlhLjUuNSAwIDAgMS0uNS41aC04YS41LjUgMCAwIDEtLjUtLjV2LTJhLjUuNSAwIDAgMC0xIDB2MkExLjUgMS41IDAgMCAwIDYuNSAxNGg4YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtOUExLjUgMS41IDAgMCAwIDE0LjUgMmgtOEExLjUgMS41IDAgMCAwIDUgMy41djJhLjUuNSAwIDAgMCAxIDB6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuODU0IDguMzU0YS41LjUgMCAwIDAgMC0uNzA4bC0zLTNhLjUuNSAwIDEgMC0uNzA4LjcwOEwxMC4yOTMgNy41SDEuNWEuNS41IDAgMCAwIDAgMWg4Ljc5M2wtMi4xNDcgMi4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOHoiLz4KPC9zdmc+)*/
const BoxArrowInRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-in-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
      )}
    />
  );

export default BoxArrowInRight;
