import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![5-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwbS04LjAwNiA0LjE1OGMxLjc0IDAgMi45MjQtMS4xMTkgMi45MjQtMi44MDYgMC0xLjY0MS0xLjE3OC0yLjU4NC0yLjU2LTIuNTg0LS44OTcgMC0xLjQ0Mi40MjEtMS42MTIuNjhoLS4wNjRsLjE5My0yLjM0NGgzLjYyMVY0LjAwMkg1Ljc5MUw1LjQ0NSA4LjYzaDEuMTQ5Yy4xOTMtLjM1OC42NjgtLjgwOSAxLjQzNS0uODA5Ljg1IDAgMS41ODIuNjA0IDEuNTgyIDEuNTcgMCAxLjA4NS0uNzc5IDEuNjgyLTEuNTcgMS42ODItLjY5NyAwLTEuMzg5LS4zMS0xLjUzLTEuMDMxSDUuMjc2Yy4wNjUgMS4yMTMgMS4xNDkgMi4xMTUgMi43MiAyLjExNVoiLz4KPC9zdmc+)*/
const Icon5CircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="5-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.006 4.158c1.74 0 2.924-1.119 2.924-2.806 0-1.641-1.178-2.584-2.56-2.584-.897 0-1.442.421-1.612.68h-.064l.193-2.344h3.621V4.002H5.791L5.445 8.63h1.149c.193-.358.668-.809 1.435-.809.85 0 1.582.604 1.582 1.57 0 1.085-.779 1.682-1.57 1.682-.697 0-1.389-.31-1.53-1.031H5.276c.065 1.213 1.149 2.115 2.72 2.115Z"/>
</svg>
      )}
    />
  );

export default Icon5CircleFill;
