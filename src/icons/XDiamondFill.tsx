import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![x-diamond-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4wNS40MzVjLS41OC0uNTgtMS41Mi0uNTgtMi4xIDBMNC4wNDcgMy4zMzkgOCA3LjI5M2wzLjk1NC0zLjk1NEw5LjA0OS40MzV6bTMuNjEgMy42MTFMOC43MDggOGwzLjk1NCAzLjk1NCAyLjkwNC0yLjkwNWMuNTgtLjU4LjU4LTEuNTE5IDAtMi4wOThsLTIuOTA0LTIuOTA1em0tLjcwNiA4LjYxNEw4IDguNzA4bC0zLjk1NCAzLjk1NCAyLjkwNSAyLjkwNGMuNTguNTggMS41MTkuNTggMi4wOTggMGwyLjkwNS0yLjkwNHptLTguNjE0LS43MDZMNy4yOTIgOCAzLjMzOSA0LjA0Ni40MzUgNi45NTFjLS41OC41OC0uNTggMS41MTkgMCAyLjA5OHoiLz4KPC9zdmc+)*/
const XDiamondFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="x-diamond-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098z"/>
</svg>
      )}
    />
  );

export default XDiamondFill;
