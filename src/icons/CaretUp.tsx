import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy4yMDQgMTFoOS41OTJMOCA1LjUxOXptLS43NTMtLjY1OSA0Ljc5Ni01LjQ4YTEgMSAwIDAgMSAxLjUwNiAwbDQuNzk2IDUuNDhjLjU2Ni42NDcuMTA2IDEuNjU5LS43NTMgMS42NTlIMy4yMDRhMSAxIDAgMCAxLS43NTMtMS42NTkiLz4KPC9zdmc+)*/
const CaretUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659"/>
</svg>
      )}
    />
  );

export default CaretUp;
