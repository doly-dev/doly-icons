import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![list-task](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDIuNWEuNS41IDAgMCAwLS41LjV2MWEuNS41IDAgMCAwIC41LjVoMWEuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNMyAzSDJ2MWgxeiIvPgogIDxwYXRoIGQ9Ik01IDMuNWEuNS41IDAgMCAxIC41LS41aDlhLjUuNSAwIDAgMSAwIDFoLTlhLjUuNSAwIDAgMS0uNS0uNU01LjUgN2EuNS41IDAgMCAwIDAgMWg5YS41LjUgMCAwIDAgMC0xem0wIDRhLjUuNSAwIDAgMCAwIDFoOWEuNS41IDAgMCAwIDAtMXoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjUgN2EuNS41IDAgMCAxIC41LS41aDFhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41SDJhLjUuNSAwIDAgMS0uNS0uNXpNMiA3aDF2MUgyem0wIDMuNWEuNS41IDAgMCAwLS41LjV2MWEuNS41IDAgMCAwIC41LjVoMWEuNS41IDAgMCAwIC41LS41di0xYS41LjUgMCAwIDAtLjUtLjV6bTEgLjVIMnYxaDF6Ii8+Cjwvc3ZnPg==)*/
const ListTask: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="list-task"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
  <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
</svg>
      )}
    />
  );

export default ListTask;
