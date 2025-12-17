import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-bounding-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDFhLjUuNSAwIDAgMC0uNS41djNhLjUuNSAwIDAgMS0xIDB2LTNBMS41IDEuNSAwIDAgMSAxLjUgMGgzYS41LjUgMCAwIDEgMCAxek0xMSAuNWEuNS41IDAgMCAxIC41LS41aDNBMS41IDEuNSAwIDAgMSAxNiAxLjV2M2EuNS41IDAgMCAxLTEgMHYtM2EuNS41IDAgMCAwLS41LS41aC0zYS41LjUgMCAwIDEtLjUtLjVNLjUgMTFhLjUuNSAwIDAgMSAuNS41djNhLjUuNSAwIDAgMCAuNS41aDNhLjUuNSAwIDAgMSAwIDFoLTNBMS41IDEuNSAwIDAgMSAwIDE0LjV2LTNhLjUuNSAwIDAgMSAuNS0uNW0xNSAwYS41LjUgMCAwIDEgLjUuNXYzYTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtM2EuNS41IDAgMCAxIDAtMWgzYS41LjUgMCAwIDAgLjUtLjV2LTNhLjUuNSAwIDAgMSAuNS0uNSIvPgogIDxwYXRoIGQ9Ik0zIDE0cy0xIDAtMS0xIDEtNCA2LTQgNiAzIDYgNC0xIDEtMSAxem04LTlhMyAzIDAgMSAxLTYgMCAzIDMgMCAwIDEgNiAwIi8+Cjwvc3ZnPg==)*/
const PersonBoundingBox: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-bounding-box"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"/>
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
</svg>
      )}
    />
  );

export default PersonBoundingBox;
