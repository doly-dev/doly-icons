import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![medium](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4wMjUgOGMwIDIuNDg1LTIuMDIgNC41LTQuNTEzIDQuNUE0LjUwNiA0LjUwNiAwIDAgMSAwIDhjMC0yLjQ4NiAyLjAyLTQuNSA0LjUxMi00LjVBNC41MDYgNC41MDYgMCAwIDEgOS4wMjUgOG00Ljk1IDBjMCAyLjM0LTEuMDEgNC4yMzYtMi4yNTYgNC4yMzZTOS40NjMgMTAuMzM5IDkuNDYzIDhjMC0yLjM0IDEuMDEtNC4yMzYgMi4yNTYtNC4yMzZTMTMuOTc1IDUuNjYxIDEzLjk3NSA4TTE2IDhjMCAyLjA5Ni0uMzU1IDMuNzk1LS43OTQgMy43OTUtLjQzOCAwLS43OTMtMS43LS43OTMtMy43OTUgMC0yLjA5Ni4zNTUtMy43OTUuNzk0LTMuNzk1LjQzOCAwIC43OTMgMS42OTkuNzkzIDMuNzk1Ii8+Cjwvc3ZnPg==)*/
const Medium: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="medium"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/>
</svg>
      )}
    />
  );

export default Medium;
