import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hammer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS45NzIgMi41MDhhLjUuNSAwIDAgMC0uMTYtLjU1NmwtLjE3OC0uMTI5YTUgNSAwIDAgMC0yLjA3Ni0uNzgzQzYuMjE1Ljg2MiA0LjUwNCAxLjIyOSAyLjg0IDMuMTMzSDEuNzg2YS41LjUgMCAwIDAtLjM1NC4xNDdMLjE0NiA0LjU2N2EuNS41IDAgMCAwIDAgLjcwNmwyLjU3MSAyLjU3OWEuNS41IDAgMCAwIC43MDggMGwxLjI4Ni0xLjI5YS41LjUgMCAwIDAgLjE0Ni0uMzUzVjUuNTdsOC4zODcgOC44NzNBLjUuNSAwIDAgMCAxNCAxNC41bDEuNS0xLjVhLjUuNSAwIDAgMCAuMDE3LS42ODlsLTkuMTI5LTguNjNjLjc0Ny0uNDU2IDEuNzcyLS44MzkgMy4xMTItLjgzOWEuNS41IDAgMCAwIC40NzItLjMzNCIvPgo8L3N2Zz4=)*/
const Hammer: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hammer"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334"/>
</svg>
      )}
    />
  );

export default Hammer;
