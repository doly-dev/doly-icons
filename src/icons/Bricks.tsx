import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bricks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAuNUEuNS41IDAgMCAxIC41IDBoMTVhLjUuNSAwIDAgMSAuNS41djNhLjUuNSAwIDAgMS0uNS41SDE0djJoMS41YS41LjUgMCAwIDEgLjUuNXYzYS41LjUgMCAwIDEtLjUuNUgxNHYyaDEuNWEuNS41IDAgMCAxIC41LjV2M2EuNS41IDAgMCAxLS41LjVILjVhLjUuNSAwIDAgMS0uNS0uNXYtM2EuNS41IDAgMCAxIC41LS41SDJ2LTJILjVhLjUuNSAwIDAgMS0uNS0uNXYtM0EuNS41IDAgMCAxIC41IDZIMlY0SC41YS41LjUgMCAwIDEtLjUtLjV6TTMgNHYyaDQuNVY0em01LjUgMHYySDEzVjR6TTMgMTB2Mmg0LjV2LTJ6bTUuNSAwdjJIMTN2LTJ6TTEgMXYyaDMuNVYxem00LjUgMHYyaDVWMXptNiAwdjJIMTVWMXpNMSA3djJoMy41Vjd6bTQuNSAwdjJoNVY3em02IDB2MkgxNVY3ek0xIDEzdjJoMy41di0yem00LjUgMHYyaDV2LTJ6bTYgMHYySDE1di0yeiIvPgo8L3N2Zz4=)*/
const Bricks: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bricks"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5zM3 4v2h4.5V4zm5.5 0v2H13V4zM3 10v2h4.5v-2zm5.5 0v2H13v-2zM1 1v2h3.5V1zm4.5 0v2h5V1zm6 0v2H15V1zM1 7v2h3.5V7zm4.5 0v2h5V7zm6 0v2H15V7zM1 13v2h3.5v-2zm4.5 0v2h5v-2zm6 0v2H15v-2z"/>
</svg>
      )}
    />
  );

export default Bricks;
