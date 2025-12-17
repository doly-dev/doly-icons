import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hourglass-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxNC41YS41LjUgMCAwIDAgLjUuNWgxMWEuNS41IDAgMSAwIDAtMWgtMXYtMWE0LjUgNC41IDAgMCAwLTIuNTU3LTQuMDZjLS4yOS0uMTM5LS40NDMtLjM3Ny0uNDQzLS41OXYtLjdjMC0uMjEzLjE1NC0uNDUxLjQ0My0uNTlBNC41IDQuNSAwIDAgMCAxMi41IDNWMmgxYS41LjUgMCAwIDAgMC0xaC0xMWEuNS41IDAgMCAwIDAgMWgxdjFhNC41IDQuNSAwIDAgMCAyLjU1NyA0LjA2Yy4yOS4xMzkuNDQzLjM3Ny40NDMuNTl2LjdjMCAuMjEzLS4xNTQuNDUxLS40NDMuNTlBNC41IDQuNSAwIDAgMCAzLjUgMTN2MWgtMWEuNS41IDAgMCAwLS41LjVtMi41LS41di0xYTMuNSAzLjUgMCAwIDEgMS45ODktMy4xNThjLjUzMy0uMjU2IDEuMDExLS43OSAxLjAxMS0xLjQ5MXYtLjcwMnMuMTguMTAxLjUuMTAxLjUtLjEuNS0uMXYuN2MwIC43MDEuNDc4IDEuMjM2IDEuMDExIDEuNDkyQTMuNSAzLjUgMCAwIDEgMTEuNSAxM3YxeiIvPgo8L3N2Zz4=)*/
const HourglassTop: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hourglass-top"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5m2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1z"/>
</svg>
      )}
    />
  );

export default HourglassTop;
