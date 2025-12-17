import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-mini-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAzYTEgMSAwIDAgMC0xIDF2MS4yOTNMLjI5MyA3QTEgMSAwIDAgMCAwIDcuNzA3VjEyYTEgMSAwIDAgMCAxIDFoMTRhMSAxIDAgMCAwIDEtMVY3LjcwN0ExIDEgMCAwIDAgMTUuNzA3IDdMMTQgNS4yOTNWNGExIDEgMCAwIDAtMS0xem0uNSA1aDlhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41aC05YS41LjUgMCAwIDEtLjUtLjV2LTFhLjUuNSAwIDAgMSAuNS0uNSIvPgo8L3N2Zz4=)*/
const UsbMiniFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-mini-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 3a1 1 0 0 0-1 1v1.293L.293 7A1 1 0 0 0 0 7.707V12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.707A1 1 0 0 0 15.707 7L14 5.293V4a1 1 0 0 0-1-1zm.5 5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default UsbMiniFill;
