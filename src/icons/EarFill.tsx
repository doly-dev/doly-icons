import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ear-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDBBNS41IDUuNSAwIDAgMCAzIDUuNXY3LjA0N2EzLjQ1MyAzLjQ1MyAwIDAgMCA2LjY4NyAxLjIxMmwuNTEtMS4zNjNhNC42IDQuNiAwIDAgMSAuNjctMS4xOTdsMi4wMDgtMi41ODFBNS4zNCA1LjM0IDAgMCAwIDguNjYgMHpNNyA1LjV2Mi42OTVxLjE2OC0uMDkuMzMyLS4xOTJjLjMyNy0uMjA4LjU3Ny0uNDQuNzItLjcyN2EuNS41IDAgMSAxIC44OTUuNDQ4Yy0uMjU2LjUxMy0uNjczLjg2NS0xLjA3OSAxLjEyM0E5IDkgMCAwIDEgNyA5LjMxM1YxMS41YS41LjUgMCAwIDEtMSAwdi02YTIuNSAyLjUgMCAwIDEgNSAwVjZhLjUuNSAwIDAgMS0xIDB2LS41YTEuNSAxLjUgMCAxIDAtMyAwIi8+Cjwvc3ZnPg==)*/
const EarFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ear-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 0A5.5 5.5 0 0 0 3 5.5v7.047a3.453 3.453 0 0 0 6.687 1.212l.51-1.363a4.6 4.6 0 0 1 .67-1.197l2.008-2.581A5.34 5.34 0 0 0 8.66 0zM7 5.5v2.695q.168-.09.332-.192c.327-.208.577-.44.72-.727a.5.5 0 1 1 .895.448c-.256.513-.673.865-1.079 1.123A9 9 0 0 1 7 9.313V11.5a.5.5 0 0 1-1 0v-6a2.5 2.5 0 0 1 5 0V6a.5.5 0 0 1-1 0v-.5a1.5 1.5 0 1 0-3 0"/>
</svg>
      )}
    />
  );

export default EarFill;
