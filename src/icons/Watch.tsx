import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![watch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDVhLjUuNSAwIDAgMC0xIDB2Mi41SDZhLjUuNSAwIDAgMCAwIDFoMmEuNS41IDAgMCAwIC41LS41eiIvPgogIDxwYXRoIGQ9Ik01LjY2NyAxNkM0Ljc0NyAxNiA0IDE1LjI1NCA0IDE0LjMzM3YtMS44NkE2IDYgMCAwIDEgMiA4YzAtMS43NzcuNzcyLTMuMzc0IDItNC40NzJWMS42NjdDNCAuNzQ3IDQuNzQ2IDAgNS42NjcgMGg0LjY2NkMxMS4yNTMgMCAxMiAuNzQ2IDEyIDEuNjY3djEuODZhNiA2IDAgMCAxIDEuOTE4IDMuNDguNTAyLjUwMiAwIDAgMSAuNTgyLjQ5M3YxYS41LjUgMCAwIDEtLjU4Mi40OTNBNiA2IDAgMCAxIDEyIDEyLjQ3M3YxLjg2YzAgLjkyLS43NDYgMS42NjctMS42NjcgMS42Njd6TTEzIDhBNSA1IDAgMSAwIDMgOGE1IDUgMCAwIDAgMTAgMCIvPgo8L3N2Zz4=)*/
const Watch: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="watch"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5z"/>
  <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A6 6 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a6 6 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A6 6 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0"/>
</svg>
      )}
    />
  );

export default Watch;
