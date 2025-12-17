import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sunset-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy42NDYgNC44NTRhLjUuNSAwIDAgMCAuNzA4IDBsMS41LTEuNWEuNS41IDAgMCAwLS43MDgtLjcwOGwtLjY0Ni42NDdWMS41YS41LjUgMCAwIDAtMSAwdjEuNzkzbC0uNjQ2LS42NDdhLjUuNSAwIDEgMC0uNzA4LjcwOHptLTUuMzAzLS41MWEuNS41IDAgMCAxIC43MDcgMGwxLjQxNCAxLjQxM2EuNS41IDAgMCAxLS43MDcuNzA3TDIuMzQzIDUuMDVhLjUuNSAwIDAgMSAwLS43MDd6bTExLjMxNCAwYS41LjUgMCAwIDEgMCAuNzA2bC0xLjQxNCAxLjQxNGEuNS41IDAgMSAxLS43MDctLjcwN2wxLjQxNC0xLjQxNGEuNS41IDAgMCAxIC43MDcgMHpNMTEuNzA5IDExLjVhNCA0IDAgMSAwLTcuNDE4IDBILjVhLjUuNSAwIDAgMCAwIDFoMTVhLjUuNSAwIDAgMCAwLTFoLTMuNzl6TTAgMTBhLjUuNSAwIDAgMSAuNS0uNWgyYS41LjUgMCAwIDEgMCAxaC0yQS41LjUgMCAwIDEgMCAxMG0xMyAwYS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const SunsetFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sunset-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default SunsetFill;
