import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![gem](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy4xLjdhLjUuNSAwIDAgMSAuNC0uMmg5YS41LjUgMCAwIDEgLjQuMmwyLjk3NiAzLjk3NGMuMTQ5LjE4NS4xNTYuNDUuMDEuNjQ0TDguNCAxNS4zYS41LjUgMCAwIDEtLjggMEwuMSA1LjNhLjUuNSAwIDAgMSAwLS42em0xMS4zODYgMy43ODUtMS44MDYtMi40MS0uNzc2IDIuNDEzem0tMy42MzMuMDA0Ljk2MS0yLjk4OUg0LjE4NmwuOTYzIDIuOTk1ek01LjQ3IDUuNDk1IDggMTMuMzY2bDIuNTMyLTcuODc2em0tMS4zNzEtLjk5OS0uNzgtMi40MjItMS44MTggMi40MjV6TTEuNDk5IDUuNWw1LjExMyA2LjgxNy0yLjE5Mi02Ljgyem03Ljg4OSA2LjgxNyA1LjEyMy02LjgzLTIuOTI4LjAwMnoiLz4KPC9zdmc+)*/
const Gem: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="gem"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
</svg>
      )}
    />
  );

export default Gem;
