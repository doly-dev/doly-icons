import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![lightbulb](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiA2YTYgNiAwIDEgMSAxMC4xNzQgNC4zMWMtLjIwMy4xOTYtLjM1OS40LS40NTMuNjE5bC0uNzYyIDEuNzY5QS41LjUgMCAwIDEgMTAuNSAxM2EuNS41IDAgMCAxIDAgMSAuNS41IDAgMCAxIDAgMWwtLjIyNC40NDdhMSAxIDAgMCAxLS44OTQuNTUzSDYuNjE4YTEgMSAwIDAgMS0uODk0LS41NTNMNS41IDE1YS41LjUgMCAwIDEgMC0xIC41LjUgMCAwIDEgMC0xIC41LjUgMCAwIDEtLjQ2LS4zMDJsLS43NjEtMS43N2EyIDIgMCAwIDAtLjQ1My0uNjE4QTUuOTggNS45OCAwIDAgMSAyIDZtNi01YTUgNSAwIDAgMC0zLjQ3OSA4LjU5MmMuMjYzLjI1NC41MTQuNTY0LjY3Ni45NDFMNS44MyAxMmg0LjM0MmwuNjMyLTEuNDY3Yy4xNjItLjM3Ny40MTMtLjY4Ny42NzYtLjk0MUE1IDUgMCAwIDAgOCAxIi8+Cjwvc3ZnPg==)*/
const Lightbulb: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="lightbulb"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
</svg>
      )}
    />
  );

export default Lightbulb;
