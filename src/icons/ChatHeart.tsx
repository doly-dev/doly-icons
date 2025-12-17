import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjk2NSAxMi42OTVhMSAxIDAgMCAwLS4yODctLjgwMUMxLjYxOCAxMC44MyAxIDkuNDY4IDEgOGMwLTMuMTkyIDMuMDA0LTYgNy02czcgMi44MDggNyA2LTMuMDA0IDYtNyA2YTggOCAwIDAgMS0yLjA4OC0uMjcyIDEgMSAwIDAgMC0uNzExLjA3NGMtLjM4Ny4xOTYtMS4yNC41Ny0yLjYzNC44OTNhMTEgMTEgMCAwIDAgLjM5OC0ybS0uOCAzLjEwOC4wMi0uMDA0YzEuODMtLjM2MyAyLjk0OC0uODQyIDMuNDY4LTEuMTA1QTkgOSAwIDAgMCA4IDE1YzQuNDE4IDAgOC0zLjEzNCA4LTdzLTMuNTgyLTctOC03LTggMy4xMzQtOCA3YzAgMS43Ni43NDMgMy4zNyAxLjk3IDQuNmExMC40IDEwLjQgMCAwIDEtLjUyNCAyLjMxOGwtLjAwMy4wMTFhMTEgMTEgMCAwIDEtLjI0NC42MzdjLS4wNzkuMTg2LjA3NC4zOTQuMjczLjM2MmEyMiAyMiAwIDAgMCAuNjkzLS4xMjVNOCA1Ljk5M2MxLjY2NC0xLjcxMSA1LjgyNSAxLjI4MyAwIDUuMTMyLTUuODI1LTMuODUtMS42NjQtNi44NDMgMC01LjEzMiIvPgo8L3N2Zz4=)*/
const ChatHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2m-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default ChatHeart;
