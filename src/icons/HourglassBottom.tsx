import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hourglass-bottom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxLjVhLjUuNSAwIDAgMSAuNS0uNWgxMWEuNS41IDAgMCAxIDAgMWgtMXYxYTQuNSA0LjUgMCAwIDEtMi41NTcgNC4wNmMtLjI5LjEzOS0uNDQzLjM3Ny0uNDQzLjU5di43YzAgLjIxMy4xNTQuNDUxLjQ0My41OUE0LjUgNC41IDAgMCAxIDEyLjUgMTN2MWgxYS41LjUgMCAwIDEgMCAxaC0xMWEuNS41IDAgMSAxIDAtMWgxdi0xYTQuNSA0LjUgMCAwIDEgMi41NTctNC4wNmMuMjktLjEzOS40NDMtLjM3Ny40NDMtLjU5di0uN2MwLS4yMTMtLjE1NC0uNDUxLS40NDMtLjU5QTQuNSA0LjUgMCAwIDEgMy41IDNWMmgtMWEuNS41IDAgMCAxLS41LS41bTIuNS41djFhMy41IDMuNSAwIDAgMCAxLjk4OSAzLjE1OGMuNTMzLjI1NiAxLjAxMS43OTEgMS4wMTEgMS40OTF2LjcwMnMuMTguMTQ5LjUuMTQ5LjUtLjE1LjUtLjE1di0uN2MwLS43MDEuNDc4LTEuMjM2IDEuMDExLTEuNDkyQTMuNSAzLjUgMCAwIDAgMTEuNSAzVjJ6Ii8+Cjwvc3ZnPg==)*/
const HourglassBottom: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hourglass-bottom"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2z"/>
</svg>
      )}
    />
  );

export default HourglassBottom;
