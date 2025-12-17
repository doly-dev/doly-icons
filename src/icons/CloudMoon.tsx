import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-moon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyA4YTMuNSAzLjUgMCAwIDEgMy41IDMuNTU1LjUuNSAwIDAgMCAuNjI1LjQ5MkExLjUwMyAxLjUwMyAwIDAgMSAxMyAxMy41YTEuNSAxLjUgMCAwIDEtMS41IDEuNUgzYTIgMiAwIDEgMSAuMS0zLjk5OC41LjUgMCAwIDAgLjUwOS0uMzc1QTMuNSAzLjUgMCAwIDEgNyA4bTQuNDczIDNhNC41IDQuNSAwIDAgMC04LjcyLS45OUEzIDMgMCAwIDAgMyAxNmg4LjVhMi41IDIuNSAwIDAgMCAwLTV6Ii8+CiAgPHBhdGggZD0iTTExLjI4NiAxLjc3OGEuNS41IDAgMCAwLS41NjUtLjc1NSA0LjU5NSA0LjU5NSAwIDAgMC0zLjE4IDUuMDAzIDUuNSA1LjUgMCAwIDEgMS4wNTUuMjA5QTMuNiAzLjYgMCAwIDEgOS44MyAyLjYxN2E0LjU5MyA0LjU5MyAwIDAgMCA0LjMxIDUuNzQ0IDMuNTggMy41OCAwIDAgMS0yLjI0MS42MzRxLjI0NC40NzcuMzk0IDFhNC41OSA0LjU5IDAgMCAwIDMuNjI0LTIuMDQuNS41IDAgMCAwLS41NjUtLjc1NSAzLjU5MyAzLjU5MyAwIDAgMS00LjA2NS01LjQyMnoiLz4KPC9zdmc+)*/
const CloudMoon: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-moon"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
  <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
</svg>
      )}
    />
  );

export default CloudMoon;
