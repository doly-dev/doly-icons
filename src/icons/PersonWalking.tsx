import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-walking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS41IDEuNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME02LjQ0IDMuNzUyQS43NS43NSAwIDAgMSA3IDMuNWgxLjQ0NWMuNzQyIDAgMS4zMi42NDMgMS4yNDMgMS4zOGwtLjQzIDQuMDgzYTEuOCAxLjggMCAwIDEtLjA4OC4zOTVsLS4zMTguOTA2LjIxMy4yNDJhLjguOCAwIDAgMSAuMTE0LjE3NWwyIDQuMjVhLjc1Ljc1IDAgMSAxLTEuMzU3LjYzOGwtMS45NTYtNC4xNTQtMS42OC0xLjkyMUEuNzUuNzUgMCAwIDEgNiA4Ljk2bC4xMzgtMi42MTMtLjQzNS40ODktLjQ2NCAyLjc4NmEuNzUuNzUgMCAxIDEtMS40OC0uMjQ2bC41LTNhLjc1Ljc1IDAgMCAxIC4xOC0uMzc1bDItMi4yNVoiLz4KICA8cGF0aCBkPSJNNi4yNSAxMS43NDV2LTEuNDE4bDEuMjA0IDEuMzc1LjI2MS41MjRhLjguOCAwIDAgMS0uMTIuMjMxbC0yLjUgMy4yNWEuNzUuNzUgMCAxIDEtMS4xOS0uOTE0em00LjIyLTQuMjE1LS40OTQtLjQ5NC4yMDUtMS44NDMuMDA2LS4wNjcgMS4xMjQgMS4xMjRoMS40NGEuNzUuNzUgMCAwIDEgMCAxLjVIMTFhLjc1Ljc1IDAgMCAxLS41MzEtLjIyWiIvPgo8L3N2Zz4=)*/
const PersonWalking: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-walking"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
  <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
</svg>
      )}
    />
  );

export default PersonWalking;
