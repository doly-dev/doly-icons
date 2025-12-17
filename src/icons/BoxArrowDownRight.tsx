import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjYzNiAxMi41YS41LjUgMCAwIDEtLjUuNUgxLjVBMS41IDEuNSAwIDAgMSAwIDExLjV2LTEwQTEuNSAxLjUgMCAwIDEgMS41IDBoMTBBMS41IDEuNSAwIDAgMSAxMyAxLjV2Ni42MzZhLjUuNSAwIDAgMS0xIDBWMS41YS41LjUgMCAwIDAtLjUtLjVoLTEwYS41LjUgMCAwIDAtLjUuNXYxMGEuNS41IDAgMCAwIC41LjVoNi42MzZhLjUuNSAwIDAgMSAuNS41Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYgMTUuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMSAwLTFoMy43OTNMNi4xNDYgNi44NTRhLjUuNSAwIDEgMSAuNzA4LS43MDhMMTUgMTQuMjkzVjEwLjVhLjUuNSAwIDAgMSAxIDB6Ii8+Cjwvc3ZnPg==)*/
const BoxArrowDownRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-down-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8.636 12.5a.5.5 0 0 1-.5.5H1.5A1.5 1.5 0 0 1 0 11.5v-10A1.5 1.5 0 0 1 1.5 0h10A1.5 1.5 0 0 1 13 1.5v6.636a.5.5 0 0 1-1 0V1.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5"/>
  <path fillRule="evenodd" d="M16 15.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L6.146 6.854a.5.5 0 1 1 .708-.708L15 14.293V10.5a.5.5 0 0 1 1 0z"/>
</svg>
      )}
    />
  );

export default BoxArrowDownRight;
