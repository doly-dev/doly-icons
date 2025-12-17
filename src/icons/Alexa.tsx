import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![alexa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy45OTYgMEE4IDggMCAwIDAgMCA4YTggOCAwIDAgMCA2LjkzIDcuOTN2LTEuNjEzYTEuMDYgMS4wNiAwIDAgMC0uNzE3LTEuMDA4QTUuNiA1LjYgMCAwIDEgMi40IDcuODY1IDUuNTggNS41OCAwIDAgMSA4LjA1NCAyLjRhNS42IDUuNiAwIDAgMSA1LjUzNSA1LjgxbC0uMDAyLjA0Ni0uMDEyLjE5Mi0uMDA1LjA2MWE1IDUgMCAwIDEtLjAzMy4yODRsLS4wMS4wNjhjLS42ODUgNC41MTYtNi41NjQgNy4wNTQtNi41OTYgNy4wNjhBNy45OTggNy45OTggMCAwIDAgMTUuOTkyIDggOCA4IDAgMCAwIDcuOTk2LjAwMVoiLz4KPC9zdmc+)*/
const Alexa: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="alexa"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z"/>
</svg>
      )}
    />
  );

export default Alexa;
