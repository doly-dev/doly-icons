import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sort-alpha-up-alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuOTYgN0g5LjAyOHYtLjY5MWwyLjU3OS0zLjcydi0uMDU0SDkuMDk4di0uODY3aDMuNzg1di42OTFsLTIuNTY3IDMuNzJ2LjA1NGgyLjY0NXoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4wODIgMTIuNjI5IDkuNjY0IDE0SDguNTk4bDEuNzg5LTUuMzMyaDEuMjM0TDEzLjQwMiAxNGgtMS4xMmwtLjQxOS0xLjM3MXptMS41Ny0uNzg1TDExIDkuNjg4aC0uMDQ3bC0uNjUyIDIuMTU2eiIvPgogIDxwYXRoIGQ9Ik00LjUgMTMuNWEuNS41IDAgMCAxLTEgMFYzLjcwN0wyLjM1NCA0Ljg1NGEuNS41IDAgMSAxLS43MDgtLjcwOGwyLTEuOTk5LjAwNy0uMDA3YS41LjUgMCAwIDEgLjcuMDA2bDIgMmEuNS41IDAgMSAxLS43MDcuNzA4TDQuNSAzLjcwN3oiLz4KPC9zdmc+)*/
const SortAlphaUpAlt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sort-alpha-up-alt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645z"/>
  <path fillRule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371zm1.57-.785L11 9.688h-.047l-.652 2.156z"/>
  <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707z"/>
</svg>
      )}
    />
  );

export default SortAlphaUpAlt;
