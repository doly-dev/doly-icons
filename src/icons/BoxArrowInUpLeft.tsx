import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-in-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjYzNiAxMy41YS41LjUgMCAwIDEtLjUuNUgyLjVBMS41IDEuNSAwIDAgMSAxIDEyLjV2LTEwQTEuNSAxLjUgMCAwIDEgMi41IDFoMTBBMS41IDEuNSAwIDAgMSAxNCAyLjV2Ni42MzZhLjUuNSAwIDAgMS0xIDBWMi41YS41LjUgMCAwIDAtLjUtLjVoLTEwYS41LjUgMCAwIDAtLjUuNXYxMGEuNS41IDAgMCAwIC41LjVoNi42MzZhLjUuNSAwIDAgMSAuNS41Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNSA1LjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgMCAxSDYuNzA3bDguMTQ3IDguMTQ2YS41LjUgMCAwIDEtLjcwOC43MDhMNiA2LjcwN1YxMC41YS41LjUgMCAwIDEtMSAweiIvPgo8L3N2Zz4=)*/
const BoxArrowInUpLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-in-up-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M9.636 13.5a.5.5 0 0 1-.5.5H2.5A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v6.636a.5.5 0 0 1-1 0V2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5"/>
  <path fillRule="evenodd" d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H6.707l8.147 8.146a.5.5 0 0 1-.708.708L6 6.707V10.5a.5.5 0 0 1-1 0z"/>
</svg>
      )}
    />
  );

export default BoxArrowInUpLeft;
