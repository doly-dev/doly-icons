import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSA5YTMuNSAzLjUgMCAxIDEgMCA3IDMuNSAzLjUgMCAwIDEgMC03bS4zNTQgNS44NTQgMS41LTEuNWEuNS41IDAgMCAwLS43MDgtLjcwOGwtLjY0Ni42NDdWMTAuNWEuNS41IDAgMCAwLTEgMHYyLjc5M2wtLjY0Ni0uNjQ3YS41LjUgMCAwIDAtLjcwOC43MDhsMS41IDEuNWEuNS41IDAgMCAwIC43MDggME0xMSA1YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgME04IDdhMiAyIDAgMSAwIDAtNCAyIDIgMCAwIDAgMCA0Ii8+CiAgPHBhdGggZD0iTTguMjU2IDE0YTQuNSA0LjUgMCAwIDEtLjIyOS0xLjAwNEgzYy4wMDEtLjI0Ni4xNTQtLjk4Ni44MzItMS42NjRDNC40ODQgMTAuNjggNS43MTEgMTAgOCAxMHEuMzkgMCAuNzQuMDI1Yy4yMjYtLjM0MS40OTYtLjY1LjgwNC0uOTE4UTguODQ0IDkuMDAyIDggOWMtNSAwLTYgMy02IDRzMSAxIDEgMXoiLz4KPC9zdmc+)*/
const PersonDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg>
      )}
    />
  );

export default PersonDown;
