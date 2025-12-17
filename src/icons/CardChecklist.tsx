import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![card-checklist](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQuNSAzYS41LjUgMCAwIDEgLjUuNXY5YS41LjUgMCAwIDEtLjUuNWgtMTNhLjUuNSAwIDAgMS0uNS0uNXYtOWEuNS41IDAgMCAxIC41LS41em0tMTMtMUExLjUgMS41IDAgMCAwIDAgMy41djlBMS41IDEuNSAwIDAgMCAxLjUgMTRoMTNhMS41IDEuNSAwIDAgMCAxLjUtMS41di05QTEuNSAxLjUgMCAwIDAgMTQuNSAyeiIvPgogIDxwYXRoIGQ9Ik03IDUuNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAwIDFoLTVhLjUuNSAwIDAgMS0uNS0uNW0tMS40OTYtLjg1NGEuNS41IDAgMCAxIDAgLjcwOGwtMS41IDEuNWEuNS41IDAgMCAxLS43MDggMGwtLjUtLjVhLjUuNSAwIDEgMSAuNzA4LS43MDhsLjE0Ni4xNDcgMS4xNDYtMS4xNDdhLjUuNSAwIDAgMSAuNzA4IDBNNyA5LjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgMCAxaC01YS41LjUgMCAwIDEtLjUtLjVtLTEuNDk2LS44NTRhLjUuNSAwIDAgMSAwIC43MDhsLTEuNSAxLjVhLjUuNSAwIDAgMS0uNzA4IDBsLS41LS41YS41LjUgMCAwIDEgLjcwOC0uNzA4bC4xNDYuMTQ3IDEuMTQ2LTEuMTQ3YS41LjUgMCAwIDEgLjcwOCAwIi8+Cjwvc3ZnPg==)*/
const CardChecklist: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="card-checklist"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
</svg>
      )}
    />
  );

export default CardChecklist;
