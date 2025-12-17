import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAxMi41YS41LjUgMCAwIDEtLjUuNWgtOGEuNS41IDAgMCAxLS41LS41di05YS41LjUgMCAwIDEgLjUtLjVoOGEuNS41IDAgMCAxIC41LjV2MmEuNS41IDAgMCAwIDEgMHYtMkExLjUgMS41IDAgMCAwIDkuNSAyaC04QTEuNSAxLjUgMCAwIDAgMCAzLjV2OUExLjUgMS41IDAgMCAwIDEuNSAxNGg4YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMmEuNS41IDAgMCAwLTEgMHoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS44NTQgOC4zNTRhLjUuNSAwIDAgMCAwLS43MDhsLTMtM2EuNS41IDAgMCAwLS43MDguNzA4TDE0LjI5MyA3LjVINS41YS41LjUgMCAwIDAgMCAxaDguNzkzbC0yLjE0NyAyLjE0NmEuNS41IDAgMCAwIC43MDguNzA4eiIvPgo8L3N2Zz4=)*/
const BoxArrowRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
      )}
    />
  );

export default BoxArrowRight;
