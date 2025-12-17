import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-fill-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuODc5IDEwLjQxNGEyLjUwMSAyLjUwMSAwIDAgMC0zLjQ2NSAzLjQ2NXptLjcwNy43MDctMy40NjUgMy40NjVhMi41MDEgMi41MDEgMCAwIDAgMy40NjUtMy40NjVtLTQuNTYtMS4wOTZhMy41IDMuNSAwIDEgMSA0Ljk0OSA0Ljk1IDMuNSAzLjUgMCAwIDEtNC45NS00Ljk1Wk0xMSA1YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMG0tOSA4YzAgMSAxIDEgMSAxaDUuMjU2QTQuNSA0LjUgMCAwIDEgOCAxMi41YTQuNSA0LjUgMCAwIDEgMS41NDQtMy4zOTNROC44NDQgOS4wMDIgOCA5Yy01IDAtNiAzLTYgNCIvPgo8L3N2Zz4=)*/
const PersonFillSlash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-fill-slash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465m-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>
      )}
    />
  );

export default PersonFillSlash;
