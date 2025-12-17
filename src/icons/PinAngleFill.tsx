import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pin-angle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS44MjguNzIyYS41LjUgMCAwIDEgLjM1NC4xNDZsNC45NSA0Ljk1YS41LjUgMCAwIDEgMCAuNzA3Yy0uNDguNDgtMS4wNzIuNTg4LTEuNTAzLjU4OC0uMTc3IDAtLjMzNS0uMDE4LS40Ni0uMDM5bC0zLjEzNCAzLjEzNGE2IDYgMCAwIDEgLjE2IDEuMDEzYy4wNDYuNzAyLS4wMzIgMS42ODctLjcyIDIuMzc1YS41LjUgMCAwIDEtLjcwNyAwbC0yLjgyOS0yLjgyOC0zLjE4MiAzLjE4MmMtLjE5NS4xOTUtMS4yMTkuOTAyLTEuNDE0LjcwN3MuNTEyLTEuMjIuNzA3LTEuNDE0bDMuMTgyLTMuMTgyLTIuODI4LTIuODI5YS41LjUgMCAwIDEgMC0uNzA3Yy42ODgtLjY4OCAxLjY3My0uNzY3IDIuMzc1LS43MmE2IDYgMCAwIDEgMS4wMTMuMTZsMy4xMzQtMy4xMzNhMyAzIDAgMCAxLS4wNC0uNDYxYzAtLjQzLjEwOC0xLjAyMi41ODktMS41MDNhLjUuNSAwIDAgMSAuMzUzLS4xNDYiLz4KPC9zdmc+)*/
const PinAngleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pin-angle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146"/>
</svg>
      )}
    />
  );

export default PinAngleFill;
