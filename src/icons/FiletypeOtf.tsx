import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const FiletypeOtf = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="filetype-otf" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.622 13.666v.522c0 .256-.039.47-.117.641a.861.861 0 0 1-.322.387.877.877 0 0 1-.47.126.883.883 0 0 1-.47-.126.868.868 0 0 1-.32-.386 1.55 1.55 0 0 1-.117-.642v-.522c0-.257.039-.471.117-.641a.868.868 0 0 1 .32-.387.868.868 0 0 1 .47-.129c.177 0 .333.043.47.13a.861.861 0 0 1 .322.386c.078.17.117.384.117.641Zm.803.519v-.513c0-.377-.069-.7-.205-.972a1.46 1.46 0 0 0-.59-.63c-.253-.147-.559-.22-.916-.22-.356 0-.662.073-.92.22a1.441 1.441 0 0 0-.589.627c-.137.271-.205.596-.205.975v.513c0 .375.068.7.205.973.137.271.333.48.589.627.258.144.564.216.92.216.357 0 .663-.072.917-.216a1.47 1.47 0 0 0 .589-.627c.136-.274.205-.598.205-.973Zm2 1.74v-3.337H6.56v-.662H3.497v.662H4.63v3.337h.794Zm2.251-1.59v1.59h-.79v-3.999h2.548v.653H7.676v1.117h1.606v.638H7.676Z"/>
</svg>
    </IconBase>
  );
});

FiletypeOtf.displayName = 'FiletypeOtf';

export default FiletypeOtf;  
