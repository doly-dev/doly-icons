import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDRhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTItMWExIDEgMCAwIDAtMSAxdi4yMTdsMy4yMzUgMS45NGEyLjggMi44IDAgMCAwLS4yMzMgMS4wMjdMMSA1LjM4NHY1LjcyMWwzLjQ1My0yLjEyNHEuMjE5LjQxNi41NS44MzVsLTMuOTcgMi40NDNBMSAxIDAgMCAwIDIgMTNoMTJhMSAxIDAgMCAwIC45NjYtLjc0MWwtMy45NjgtMi40NDJxLjMzLS40MjEuNTUtLjgzNkwxNSAxMS4xMDVWNS4zODNsLTMuMDAyIDEuODAxYTIuOCAyLjggMCAwIDAtLjIzMy0xLjAyNkwxNSA0LjIxN1Y0YTEgMSAwIDAgMC0xLTF6bTYgMi45OTNjMS42NjQtMS43MTEgNS44MjUgMS4yODMgMCA1LjEzMi01LjgyNS0zLjg1LTEuNjY0LTYuODQzIDAtNS4xMzIiLz4KPC9zdmc+)*/
const EnvelopeHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l3.235 1.94a2.8 2.8 0 0 0-.233 1.027L1 5.384v5.721l3.453-2.124q.219.416.55.835l-3.97 2.443A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741l-3.968-2.442q.33-.421.55-.836L15 11.105V5.383l-3.002 1.801a2.8 2.8 0 0 0-.233-1.026L15 4.217V4a1 1 0 0 0-1-1zm6 2.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default EnvelopeHeart;
