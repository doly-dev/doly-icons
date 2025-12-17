import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-down-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSA5YTMuNSAzLjUgMCAxIDEgMCA3IDMuNSAzLjUgMCAwIDEgMC03bS4zNTQgNS44NTQgMS41LTEuNWEuNS41IDAgMCAwLS43MDgtLjcwN2wtLjY0Ni42NDZWMTAuNWEuNS41IDAgMCAwLTEgMHYyLjc5M2wtLjY0Ni0uNjQ2YS41LjUgMCAwIDAtLjcwOC43MDdsMS41IDEuNWEuNS41IDAgMCAwIC43MDggMCIvPgogIDxwYXRoIGQ9Ik04LjcwNyAxLjVhMSAxIDAgMCAwLTEuNDE0IDBMLjY0NiA4LjE0NmEuNS41IDAgMCAwIC43MDguNzA4TDggMi4yMDdsNi42NDYgNi42NDdhLjUuNSAwIDAgMCAuNzA4LS43MDhMMTMgNS43OTNWMi41YS41LjUgMCAwIDAtLjUtLjVoLTFhLjUuNSAwIDAgMC0uNS41djEuMjkzeiIvPgogIDxwYXRoIGQ9Im04IDMuMjkzIDQuNzEyIDQuNzEyQTQuNSA0LjUgMCAwIDAgOC43NTggMTVIMy41QTEuNSAxLjUgMCAwIDEgMiAxMy41VjkuMjkzeiIvPgo8L3N2Zz4=)*/
const HouseDownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-down-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.707l-.646.646V10.5a.5.5 0 0 0-1 0v2.793l-.646-.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0"/>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg>
      )}
    />
  );

export default HouseDownFill;
