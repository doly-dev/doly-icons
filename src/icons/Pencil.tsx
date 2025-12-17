import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pencil](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuMTQ2LjE0NmEuNS41IDAgMCAxIC43MDggMGwzIDNhLjUuNSAwIDAgMSAwIC43MDhsLTEwIDEwYS41LjUgMCAwIDEtLjE2OC4xMWwtNSAyYS41LjUgMCAwIDEtLjY1LS42NWwyLTVhLjUuNSAwIDAgMSAuMTEtLjE2OHpNMTEuMjA3IDIuNSAxMy41IDQuNzkzIDE0Ljc5MyAzLjUgMTIuNSAxLjIwN3ptMS41ODYgM0wxMC41IDMuMjA3IDQgOS43MDdWMTBoLjVhLjUuNSAwIDAgMSAuNS41di41aC41YS41LjUgMCAwIDEgLjUuNXYuNWguMjkzem0tOS43NjEgNS4xNzUtLjEwNi4xMDYtMS41MjggMy44MjEgMy44MjEtMS41MjguMTA2LS4xMDZBLjUuNSAwIDAgMSA1IDEyLjVWMTJoLS41YS41LjUgMCAwIDEtLjUtLjVWMTFoLS41YS41LjUgMCAwIDEtLjQ2OC0uMzI1Ii8+Cjwvc3ZnPg==)*/
const Pencil: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pencil"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>
      )}
    />
  );

export default Pencil;
