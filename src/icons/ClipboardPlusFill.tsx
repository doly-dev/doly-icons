import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard-plus-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDBBMS41IDEuNSAwIDAgMCA1IDEuNXYxQTEuNSAxLjUgMCAwIDAgNi41IDRoM0ExLjUgMS41IDAgMCAwIDExIDIuNXYtMUExLjUgMS41IDAgMCAwIDkuNSAwem0zIDFhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41aC0zYS41LjUgMCAwIDEtLjUtLjV2LTFhLjUuNSAwIDAgMSAuNS0uNXoiLz4KICA8cGF0aCBkPSJNNCAxLjVIM2EyIDIgMCAwIDAtMiAyVjE0YTIgMiAwIDAgMCAyIDJoMTBhMiAyIDAgMCAwIDItMlYzLjVhMiAyIDAgMCAwLTItMmgtMXYxQTIuNSAyLjUgMCAwIDEgOS41IDVoLTNBMi41IDIuNSAwIDAgMSA0IDIuNXptNC41IDZWOUgxMGEuNS41IDAgMCAxIDAgMUg4LjV2MS41YS41LjUgMCAwIDEtMSAwVjEwSDZhLjUuNSAwIDAgMSAwLTFoMS41VjcuNWEuNS41IDAgMCAxIDEgMCIvPgo8L3N2Zz4=)*/
const ClipboardPlusFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard-plus-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm4.5 6V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5a.5.5 0 0 1 1 0"/>
</svg>
      )}
    />
  );

export default ClipboardPlusFill;
