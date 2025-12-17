import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![minecart-loaded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAxNWExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJtMCAxYTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNG04LTFhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAybTAgMWEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDRNLjExNSAzLjE4QS41LjUgMCAwIDEgLjUgM2gxNWEuNS41IDAgMCAxIC40OTEuNTkybC0xLjUgOEEuNS41IDAgMCAxIDE0IDEySDJhLjUuNSAwIDAgMS0uNDkxLS40MDhsLTEuNS04YS41LjUgMCAwIDEgLjEwNi0uNDExem0uOTg3LjgyIDEuMzEzIDdoMTEuMTdsMS4zMTMtN3oiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhMi40OTggMi40OTggMCAwIDEgNCAwYy44MTggMCAxLjU0NS4zOTQgMiAxIC42NyAwIDEuNTUyLjU3IDIgMWgtMmMtLjMxNCAwLS42MTEtLjE1LS44LS40LS4yNzQtLjM2NS0uNzEtLjYtMS4yLS42LS4zMTQgMC0uNjExLS4xNS0uOC0uNGExLjQ5NyAxLjQ5NyAwIDAgMC0yLjQgMGMtLjE4OS4yNS0uNDg2LjQtLjguNC0uNTA3IDAtLjk1NS4yNTEtMS4yMjguNjM4cS0uMTM2LjE5NC0uMzA4LjM2MkgzYy4xMy0uMTQ3LjQwMS0uNDMyLjU2Mi0uNTQ1YTEuNiAxLjYgMCAwIDAgLjM5My0uMzkzQTIuNSAyLjUgMCAwIDEgNiAxIi8+Cjwvc3ZnPg==)*/
const MinecartLoaded: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="minecart-loaded"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7z"/>
  <path fillRule="evenodd" d="M6 1a2.498 2.498 0 0 1 4 0c.818 0 1.545.394 2 1 .67 0 1.552.57 2 1h-2c-.314 0-.611-.15-.8-.4-.274-.365-.71-.6-1.2-.6-.314 0-.611-.15-.8-.4a1.497 1.497 0 0 0-2.4 0c-.189.25-.486.4-.8.4-.507 0-.955.251-1.228.638q-.136.194-.308.362H3c.13-.147.401-.432.562-.545a1.6 1.6 0 0 0 .393-.393A2.5 2.5 0 0 1 6 1"/>
</svg>
      )}
    />
  );

export default MinecartLoaded;
