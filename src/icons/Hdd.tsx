import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdd](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41IDExYS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxTTMgMTAuNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMCIvPgogIDxwYXRoIGQ9Ik0xNiAxMWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY5LjUxYzAtLjQxOC4xMDUtLjgzLjMwNS0xLjE5N2wyLjQ3Mi00LjUzMUExLjUgMS41IDAgMCAxIDQuMDk0IDNoNy44MTJhMS41IDEuNSAwIDAgMSAxLjMxNy43ODJsMi40NzIgNC41M2MuMi4zNjguMzA1Ljc4LjMwNSAxLjE5OHpNMy42NTUgNC4yNiAxLjU5MiA4LjA0M1ExLjc5IDggMiA4aDEycS4yMSAwIC40MDguMDQyTDEyLjM0NSA0LjI2YS41LjUgMCAwIDAtLjQzOS0uMjZINC4wOTRhLjUuNSAwIDAgMC0uNDQuMjZ6TTEgMTB2MWExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF2LTFhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDEiLz4KPC9zdmc+)*/
const Hdd: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdd"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
  <path d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198zM3.655 4.26 1.592 8.043Q1.79 8 2 8h12q.21 0 .408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
</svg>
      )}
    />
  );

export default Hdd;
