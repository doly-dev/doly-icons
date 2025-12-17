import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![forward-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtOS43NyAxMi4xMSA0LjAxMi0yLjk1M2EuNjQ3LjY0NyAwIDAgMCAwLTEuMTE0TDkuNzcxIDUuMDlhLjY0NC42NDQgMCAwIDAtLjk3MS41NTdWNi42NUgydjMuOWg2Ljh2MS4wMDNjMCAuNTA1LjU0NS44MDguOTcuNTU3Ii8+Cjwvc3ZnPg==)*/
const ForwardFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="forward-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557"/>
</svg>
      )}
    />
  );

export default ForwardFill;
