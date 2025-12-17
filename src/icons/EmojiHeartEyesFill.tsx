import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-heart-eyes-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAwYTggOCAwIDEgMCAwIDE2QTggOCAwIDAgMCA4IDBNNC43NTYgNC41NjZjLjc2My0xLjQyNCA0LjAyLS4xMi45NTIgMy40MzQtNC40OTYtMS41OTYtMi4zNS00LjI5OC0uOTUyLTMuNDM0bTYuNTU5IDUuNDQ4YS41LjUgMCAwIDEgLjU0OC43MzZBNC41IDQuNSAwIDAgMSA3Ljk2NSAxM2E0LjUgNC41IDAgMCAxLTMuODk4LTIuMjUuNS41IDAgMCAxIC41NDgtLjczNmguMDA1bC4wMTcuMDA1LjA2Ny4wMTUuMjUyLjA1NWMuMjE1LjA0Ni41MTUuMTA4Ljg1Ny4xNjkuNjkzLjEyNCAxLjUyMi4yNDIgMi4xNTIuMjQyczEuNDYtLjExOCAyLjE1Mi0uMjQyYTI3IDI3IDAgMCAwIDEuMTA5LS4yMjRsLjA2Ny0uMDE1LjAxNy0uMDA0LjAwNS0uMDAyem0tLjA3LTUuNDQ4YzEuMzk3LS44NjQgMy41NDMgMS44MzgtLjk1MyAzLjQzNC0zLjA2Ny0zLjU1NC4xOS00Ljg1OC45NTItMy40MzR6Ii8+Cjwvc3ZnPg==)*/
const EmojiHeartEyesFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-heart-eyes-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
</svg>
      )}
    />
  );

export default EmojiHeartEyesFill;
