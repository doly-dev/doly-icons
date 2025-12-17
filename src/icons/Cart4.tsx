import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cart4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyLjVBLjUuNSAwIDAgMSAuNSAySDJhLjUuNSAwIDAgMSAuNDg1LjM3OUwyLjg5IDRIMTQuNWEuNS41IDAgMCAxIC40ODUuNjIxbC0xLjUgNkEuNS41IDAgMCAxIDEzIDExSDRhLjUuNSAwIDAgMS0uNDg1LS4zNzlMMS42MSAzSC41YS41LjUgMCAwIDEtLjUtLjVNMy4xNCA1bC41IDJINVY1ek02IDV2MmgyVjV6bTMgMHYyaDJWNXptMyAwdjJoMS4zNmwuNS0yem0xLjExIDNIMTJ2MmguNjF6TTExIDhIOXYyaDJ6TTggOEg2djJoMnpNNSA4SDMuODlsLjUgMkg1em0wIDVhMSAxIDAgMSAwIDAgMiAxIDEgMCAwIDAgMC0ybS0yIDFhMiAyIDAgMSAxIDQgMCAyIDIgMCAwIDEtNCAwbTktMWExIDEgMCAxIDAgMCAyIDEgMSAwIDAgMCAwLTJtLTIgMWEyIDIgMCAxIDEgNCAwIDIgMiAwIDAgMS00IDAiLz4KPC9zdmc+)*/
const Cart4: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cart4"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
      )}
    />
  );

export default Cart4;
