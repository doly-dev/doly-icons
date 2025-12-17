import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![trash2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgM2EuNy43IDAgMCAxLS4wMzcuMjI1bC0xLjY4NCAxMC4xMDRBMiAyIDAgMCAxIDEwLjMwNSAxNUg1LjY5NGEyIDIgMCAwIDEtMS45NzMtMS42NzFMMi4wMzcgMy4yMjVBLjcuNyAwIDAgMSAyIDNjMC0xLjEwNSAyLjY4Ni0yIDYtMnM2IC44OTUgNiAyTTMuMjE1IDQuMjA3bDEuNDkzIDguOTU3YTEgMSAwIDAgMCAuOTg2LjgzNmg0LjYxMmExIDEgMCAwIDAgLjk4Ni0uODM2bDEuNDkzLTguOTU3QzExLjY5IDQuNjg5IDkuOTU0IDUgOCA1cy0zLjY5LS4zMTEtNC43ODUtLjc5MyIvPgo8L3N2Zz4=)*/
const Trash2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="trash2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 3a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2M3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5s-3.69-.311-4.785-.793"/>
</svg>
      )}
    />
  );

export default Trash2;
