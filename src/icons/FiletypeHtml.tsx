import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filetype-html](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA0LjVWMTFoLTFWNC41aC0yQTEuNSAxLjUgMCAwIDEgOS41IDNWMUg0YTEgMSAwIDAgMC0xIDF2OUgyVjJhMiAyIDAgMCAxIDItMmg1LjV6bS05LjczNiA3LjM1djMuOTk5aC0uNzkxdi0xLjcxNEgxLjc5djEuNzE0SDFWMTEuODVoLjc5MXYxLjYyNmgxLjY4MlYxMS44NWguNzlabTIuMjUxLjY2MnYzLjMzN2gtLjc5NHYtMy4zMzdINC41ODh2LS42NjJoMy4wNjR2LjY2MnptMi4xNzYgMy4zMzd2LTIuNjZoLjAzOGwuOTUyIDIuMTU5aC41MTZsLjk0Ni0yLjE2aC4wMzh2Mi42NjFoLjcxNVYxMS44NWgtLjhsLTEuMTQgMi41OTZIOS45M0w4Ljc5IDExLjg1aC0uODA1djMuOTk5em00LjcxLS42NzRoMS42OTZ2LjY3NEgxMi42MVYxMS44NWguNzl2My4zMjVaIi8+Cjwvc3ZnPg==)*/
const FiletypeHtml: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filetype-html"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
</svg>
      )}
    />
  );

export default FiletypeHtml;
