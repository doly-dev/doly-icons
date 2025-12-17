import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-in-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjM2NCAyLjVhLjUuNSAwIDAgMSAuNS0uNUgxMy41QTEuNSAxLjUgMCAwIDEgMTUgMy41djEwYTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTBBMS41IDEuNSAwIDAgMSAyIDEzLjVWNi44NjRhLjUuNSAwIDEgMSAxIDBWMTMuNWEuNS41IDAgMCAwIC41LjVoMTBhLjUuNSAwIDAgMCAuNS0uNXYtMTBhLjUuNSAwIDAgMC0uNS0uNUg2Ljg2NGEuNS41IDAgMCAxLS41LS41Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEgMTAuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMSAwLTFoMy43OTNMMS4xNDYgMS44NTRhLjUuNSAwIDEgMSAuNzA4LS43MDhMMTAgOS4yOTNWNS41YS41LjUgMCAwIDEgMSAweiIvPgo8L3N2Zz4=)*/
const BoxArrowInDownRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-in-down-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5"/>
  <path fillRule="evenodd" d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0z"/>
</svg>
      )}
    />
  );

export default BoxArrowInDownRight;
