import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![menu-button-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDBBMS41IDEuNSAwIDAgMCAwIDEuNXYyQTEuNSAxLjUgMCAwIDAgMS41IDVoOEExLjUgMS41IDAgMCAwIDExIDMuNXYtMkExLjUgMS41IDAgMCAwIDkuNSAwem01LjkyNyAyLjQyN0EuMjUuMjUgMCAwIDEgNy42MDQgMmguNzkyYS4yNS4yNSAwIDAgMSAuMTc3LjQyN2wtLjM5Ni4zOTZhLjI1LjI1IDAgMCAxLS4zNTQgMHpNMCA4YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY1YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0xIDN2MmExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF2LTJ6bTE0LTFWOGExIDEgMCAwIDAtMS0xSDJhMSAxIDAgMCAwLTEgMXYyek0yIDguNWEuNS41IDAgMCAxIC41LS41aDlhLjUuNSAwIDAgMSAwIDFoLTlhLjUuNSAwIDAgMS0uNS0uNW0wIDRhLjUuNSAwIDAgMSAuNS0uNWg2YS41LjUgMCAwIDEgMCAxaC02YS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const MenuButtonFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="menu-button-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h8A1.5 1.5 0 0 0 11 3.5v-2A1.5 1.5 0 0 0 9.5 0zm5.927 2.427A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default MenuButtonFill;
