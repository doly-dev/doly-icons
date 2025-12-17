import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-heart-eyes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTExLjMxNSAxMC4wMTRhLjUuNSAwIDAgMSAuNTQ4LjczNkE0LjUgNC41IDAgMCAxIDcuOTY1IDEzYTQuNSA0LjUgMCAwIDEtMy44OTgtMi4yNS41LjUgMCAwIDEgLjU0OC0uNzM2aC4wMDVsLjAxNy4wMDUuMDY3LjAxNS4yNTIuMDU1Yy4yMTUuMDQ2LjUxNS4xMDguODU3LjE2OS42OTMuMTI0IDEuNTIyLjI0MiAyLjE1Mi4yNDJzMS40Ni0uMTE4IDIuMTUyLS4yNDJhMjcgMjcgMCAwIDAgMS4xMDktLjIyNGwuMDY3LS4wMTUuMDE3LS4wMDQuMDA1LS4wMDJ6TTQuNzU2IDQuNTY2Yy43NjMtMS40MjQgNC4wMi0uMTIuOTUyIDMuNDM0LTQuNDk2LTEuNTk2LTIuMzUtNC4yOTgtLjk1Mi0zLjQzNG02LjQ4OCAwYzEuMzk4LS44NjQgMy41NDQgMS44MzgtLjk1MiAzLjQzNC0zLjA2Ny0zLjU1NC4xOS00Ljg1OC45NTItMy40MzQiLz4KPC9zdmc+)*/
const EmojiHeartEyes: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-heart-eyes"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434"/>
</svg>
      )}
    />
  );

export default EmojiHeartEyes;
