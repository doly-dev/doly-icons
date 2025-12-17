import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![life-preserver](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2bTYuNDMtNS4yMjhhNy4wMyA3LjAzIDAgMCAxLTMuNjU4IDMuNjU4bC0xLjExNS0yLjc4OGE0IDQgMCAwIDAgMS45ODUtMS45ODV6TTUuMjI4IDE0LjQzYTcuMDMgNy4wMyAwIDAgMS0zLjY1OC0zLjY1OGwyLjc4OC0xLjExNWE0IDQgMCAwIDAgMS45ODUgMS45ODV6bTkuMjAyLTkuMjAyLTIuNzg4IDEuMTE1YTQgNCAwIDAgMC0xLjk4NS0xLjk4NWwxLjExNS0yLjc4OGE3LjAzIDcuMDMgMCAwIDEgMy42NTggMy42NThtLTguMDg3LS44N2E0IDQgMCAwIDAtMS45ODUgMS45ODVMMS41NyA1LjIyOEE3LjAzIDcuMDMgMCAwIDEgNS4yMjggMS41N3pNOCAxMWEzIDMgMCAxIDEgMC02IDMgMyAwIDAgMSAwIDYiLz4KPC9zdmc+)*/
const LifePreserver: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="life-preserver"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m6.43-5.228a7.03 7.03 0 0 1-3.658 3.658l-1.115-2.788a4 4 0 0 0 1.985-1.985zM5.228 14.43a7.03 7.03 0 0 1-3.658-3.658l2.788-1.115a4 4 0 0 0 1.985 1.985zm9.202-9.202-2.788 1.115a4 4 0 0 0-1.985-1.985l1.115-2.788a7.03 7.03 0 0 1 3.658 3.658m-8.087-.87a4 4 0 0 0-1.985 1.985L1.57 5.228A7.03 7.03 0 0 1 5.228 1.57zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
      )}
    />
  );

export default LifePreserver;
