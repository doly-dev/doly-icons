import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-stop-lights-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA2YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMm0wIDNhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAybTEgMmExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDAiLz4KICA8cGF0aCBkPSJNOS4wNS40MzVjLS41OC0uNTgtMS41Mi0uNTgtMi4xIDBMLjQzNiA2Ljk1Yy0uNTguNTgtLjU4IDEuNTE5IDAgMi4wOThsNi41MTYgNi41MTZjLjU4LjU4IDEuNTE5LjU4IDIuMDk4IDBsNi41MTYtNi41MTZjLjU4LS41OC41OC0xLjUxOSAwLTIuMDk4ek02IDRhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2OGExIDEgMCAwIDEtMSAxSDdhMSAxIDAgMCAxLTEtMXoiLz4KPC9zdmc+)*/
const SignStopLightsFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-stop-lights-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM6 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default SignStopLightsFill;
