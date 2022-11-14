import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const SignDoNotEnterFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="sign-do-not-enter-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M4.237 4.28h-.32v1.44h.32c.396 0 .582-.239.582-.718 0-.481-.188-.722-.582-.722Zm2.392.859v-.277c0-.413-.211-.617-.494-.617-.285 0-.495.204-.495.617v.277c0 .414.21.618.495.618.283 0 .494-.204.494-.618Zm4.163 0v-.277c0-.413-.211-.617-.494-.617-.285 0-.495.204-.495.617v.277c0 .414.21.618.495.618.283 0 .494-.204.494-.618Zm.006 5.828v-.694h.39c.231 0 .378.126.378.354 0 .225-.142.34-.387.34h-.38Z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM3.584 6V4h.69c.596 0 .886.355.886.998S4.867 6 4.274 6h-.69Zm3.382-1.135v.272c0 .566-.318.903-.83.903-.513 0-.833-.337-.833-.903v-.272c0-.569.32-.904.832-.904.513 0 .83.337.83.904Zm1.021-.305V6h-.319V4h.293l.933 1.436h.015V4h.319v2h-.291L8 4.56h-.013Zm3.142.305v.272c0 .566-.318.903-.83.903-.513 0-.833-.337-.833-.903v-.272c0-.569.32-.904.832-.904.513 0 .83.337.83.904Zm.899-.58V6h-.333V4.285h-.584V4h1.503v.285h-.586ZM5.413 11.72V12H4.165v-2h1.248v.28h-.917v.57h.862v.268h-.862v.602h.917Zm.572.28h-.32v-2h.294l.933 1.436h.014v-1.435h.32V12h-.292l-.936-1.44h-.013V12Zm2.279 0H7.93v-1.715h-.584V10H8.85v.284h-.586V12Zm1.953-.28V12H8.97v-2h1.248v.28H9.3v.57h.863v.268H9.3v.602h.917ZM11.235 10c.42 0 .674.244.674.616a.575.575 0 0 1-.368.56l.404.824h-.373l-.36-.769h-.414V12h-.328v-2h.765ZM3.5 7h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/>
</svg>
    </IconBase>
  );
});

SignDoNotEnterFill.displayName = 'SignDoNotEnterFill';

export default SignDoNotEnterFill;  
