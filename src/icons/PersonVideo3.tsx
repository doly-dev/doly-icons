import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-video3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgOS41YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMG0tNiA1LjdjMCAuOC44LjguOC44aDYuNHMuOCAwIC44LS44LS44LTMuMi00LTMuMi00IDIuNC00IDMuMiIvPgogIDxwYXRoIGQ9Ik0yIDJhMiAyIDAgMCAwLTIgMnY4YTIgMiAwIDAgMCAyIDJoNS4yNDNjLjEyMi0uMzI2LjI5NS0uNjY4LjUyNi0xSDJhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoMTJhMSAxIDAgMCAxIDEgMXY3LjgxYy4zNTMuMjMuNjU2LjQ5Ni45MS43ODNRMTYgMTIuMzEyIDE2IDEyVjRhMiAyIDAgMCAwLTItMnoiLz4KPC9zdmc+)*/
const PersonVideo3: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-video3"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z"/>
</svg>
      )}
    />
  );

export default PersonVideo3;
