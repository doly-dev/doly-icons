"use strict";(self.webpackChunkdoly_icons=self.webpackChunkdoly_icons||[]).push([[653],{52739:function(x,h,v){v.d(h,{Z:function(){return T}});var p=v(26068),r=v.n(p),g=v(82092),n=v.n(g),o=v(67825),t=v.n(o),a=v(75271),w=v(82187),d=v.n(w),c=v(61396),f=v(86909),m=v(74673),u={},_=function(M,j){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!f.jU)return null;if(u[j]){var H;return(H=C.csp)!==null&&H!==void 0&&H.nonce&&u[j].nonce!==C.csp.nonce&&(u[j].nonce=C.csp.nonce),u[j].innerHTML!==M&&(u[j].innerHTML=M),u[j]}return u[j]=(0,m.Z)(M,{onBefore:function(V){var z;(z=C.csp)!==null&&z!==void 0&&z.nonce&&(V.nonce=C.csp.nonce)}}),u[j]},A=`@-webkit-keyframes doly-icon-animate-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes doly-icon-animate-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes doly-icon-animate-spin-reverse {
  from {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  to {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@keyframes doly-icon-animate-spin-reverse {
  from {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  to {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
.doly-icon {
  display: inline-block;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  font-size: 1em;
  color: var(--doly-icon-color, currentColor);
  font-size: var(--doly-icon-font-size, 1em);
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.doly-icon > * {
  line-height: 1;
}
.doly-icon > svg {
  display: inline-block;
}
.doly-icon-spin {
  -webkit-animation: doly-icon-animate-spin 1s infinite linear;
  animation: doly-icon-animate-spin 1s infinite linear;
  -webkit-animation: doly-icon-animate-spin var(--doly-icon-spin-duration, 1s) infinite linear;
  animation: doly-icon-animate-spin var(--doly-icon-spin-duration, 1s) infinite linear;
}
.doly-icon-spin-reverse {
  -webkit-animation: doly-icon-animate-spin-reverse 1s infinite linear;
  animation: doly-icon-animate-spin-reverse 1s infinite linear;
  -webkit-animation: doly-icon-animate-spin-reverse var(--doly-icon-spin-duration, 1s) infinite linear;
  animation: doly-icon-animate-spin-reverse var(--doly-icon-spin-duration, 1s) infinite linear;
import {
  Gear,
  HeartFill,
  EmojiSmileFill,
  ArrowRepeat,
  ArrowClockwise,
  ArrowCounterclockwise,
  Search,
  YinYang,
} from 'doly-icons';
import styles from './demo.module.less';

const Demo = () => {
  return (
    <>
      <h3>\u5927\u5C0F</h3>
      <div className={styles.iconList}>
        <Gear style={{ fontSize: 16 }} />
        <Gear style={{ fontSize: 24 }} />
        <Gear style={{ fontSize: 32 }} />
        <Gear style={{ fontSize: 48 }} />
      </div>
      <h3>\u989C\u8272</h3>
      <div className={styles.iconList}>
        <HeartFill style={{ color: '#e91e63' }} />
        <EmojiSmileFill style={{ color: '#ffc107' }} />
        <Search style={{ color: '#2196f3' }} />
      </div>
      <h3>\u65CB\u8F6C\u52A8\u753B</h3>
      <div className={styles.iconList}>
        <YinYang spin />
        <ArrowRepeat spin />
        <ArrowClockwise spin />
        <ArrowCounterclockwise spinReverse />
      </div>
    </>
  );
};

export default Demo;
`},73242:function(x,h){h.Z=`import * as React from 'react';
import Icon from 'doly-icons';
import type { IconBaseProps } from 'doly-icons';

const EmailSVG = (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l64 54.250667V746.666667h597.333334V429.44l64-54.250667zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z m-9.6 64h-578.133334L512 523.882667 801.066667 277.333333z" />
  </svg>
);

const IconEmail: React.FC<IconBaseProps> = (props) => {
  return <Icon component={EmailSVG} {...props} />;
};

export default IconEmail;
`},79827:function(x,h){h.Z=`import * as React from 'react';
import Icon from 'doly-icons';
import type { IconBaseProps } from 'doly-icons';

const HomeSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="1em" height="1em" viewBox="0 0 48 48">
    <path fillOpacity=".01" fill="#fff" d="M0 0h48v48H0z" />
    <path d="M9 18v24h30V18L24 6 9 18z" />
    <path strokeWidth="3" stroke="currentColor" d="M9 42V18l-5 4L24 6l20 16-5-4v24H9z" />
    <path strokeWidth="3" stroke="currentColor" d="M19 29v13h10V29H19z" />
    <path strokeWidth="3" stroke="currentColor" d="M9 42h30" />
  </svg>
);

const IconHome: React.FC<IconBaseProps> = (props) => {
  return <Icon component={HomeSVG} {...props} />;
};

export default IconHome;
`},52836:function(x,h){h.Z=`import * as React from 'react';
import Icon from 'doly-icons';
import type { IconBaseProps } from 'doly-icons';

const LoadingSVG = (
  <svg viewBox="0 0 120 120" width="1em" height="1em">
    <defs>
      <line
        id="l"
        x1="60"
        x2="60"
        y1="7"
        y2="27"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
      />
    </defs>
    <g>
      <use xlinkHref="#l" opacity=".27" />
      <use xlinkHref="#l" opacity=".27" transform="rotate(30 60,60)" />
      <use xlinkHref="#l" opacity=".27" transform="rotate(60 60,60)" />
      <use xlinkHref="#l" opacity=".27" transform="rotate(90 60,60)" />
      <use xlinkHref="#l" opacity=".27" transform="rotate(120 60,60)" />
      <use xlinkHref="#l" opacity=".27" transform="rotate(150 60,60)" />
      <use xlinkHref="#l" opacity=".37" transform="rotate(180 60,60)" />
      <use xlinkHref="#l" opacity=".46" transform="rotate(210 60,60)" />
      <use xlinkHref="#l" opacity=".56" transform="rotate(240 60,60)" />
      <use xlinkHref="#l" opacity=".66" transform="rotate(270 60,60)" />
      <use xlinkHref="#l" opacity=".75" transform="rotate(300 60,60)" />
      <use xlinkHref="#l" opacity=".85" transform="rotate(330 60,60)" />
    </g>
  </svg>
);

const IconLoading: React.FC<IconBaseProps> = (props) => {
  return <Icon component={LoadingSVG} {...props} />;
};

export default IconLoading;
`},494:function(x,h){h.Z=`import * as React from 'react';
import Icon from 'doly-icons';
import type { IconBaseProps } from 'doly-icons';

const PuzzleSVG = (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M516.757333 149.333333a120.896 120.896 0 0 1 114.005334 161.173334h104.064a64 64 0 0 1 64 64V810.666667a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-87.104c0-15.701333 11.989333-28.629333 27.306666-30.08l2.922667-0.149334a90.666667 90.666667 0 0 0 4.394667-181.226666L264.896 512a30.229333 30.229333 0 0 1-30.08-27.306667L234.666667 481.749333v-107.242666a64 64 0 0 1 64-64h104.064a120.704 120.704 0 0 1-6.869334-40.32C395.861333 184.746667 431.274667 149.333333 516.757333 149.333333z m0 64a56.896 56.896 0 0 0-53.674666 75.861334l30.144 85.312H298.666667v77.184a154.730667 154.730667 0 0 1 5.162666 300.693333l-5.162666 1.258667V810.666667h436.16V374.528l-194.56-0.021333 30.144-85.333334A56.896 56.896 0 0 0 516.736 213.333333z" />
  </svg>
);

const IconPuzzle: React.FC<IconBaseProps> = (props) => {
  return <Icon component={PuzzleSVG} {...props} />;
};

export default IconPuzzle;
`},3611:function(x,h){h.Z=`import * as React from 'react';
import {
  Gear,
  HeartFill,
  EmojiSmileFill,
  ArrowRepeat,
  ArrowClockwise,
  ArrowCounterclockwise,
  Search,
  YinYang,
} from 'doly-icons';
import IconLoading from './components/IconLoading';
import styles from './demo.module.less';

const Demo = () => (
  <>
    <div
      className={styles.iconList}
      style={
        { '--doly-icon-font-size': '16px', '--doly-icon-color': '#2196f3' } as React.CSSProperties
      }
    >
      <Gear />
      <EmojiSmileFill />
      <Search />
      <HeartFill style={{ '--doly-icon-color': '#e91e63' }} />
    </div>
    <div
      className={styles.iconList}
      style={{ '--doly-icon-spin-duration': '2s' } as React.CSSProperties}
    >
      <YinYang spin />
      <ArrowRepeat spin />
      <ArrowClockwise spin />
      <ArrowCounterclockwise spinReverse />
      <ArrowCounterclockwise spinReverse style={{ '--doly-icon-spin-duration': '0.3s' }} />
      <IconLoading spin />
      <IconLoading spin style={{ '--doly-icon-spin-duration': '0.5s' }} />
    </div>
  </>
);

export default Demo;
`},15444:function(x,h){h.Z=`import * as React from 'react';
import IconEmail from './components/IconEmail';
import IconHome from './components/IconHome';
import IconLoading from './components/IconLoading';
import IconPuzzle from './components/IconPuzzle';
import styles from './demo.module.less';

const Demo = () => {
  return (
    <div className={styles.iconList}>
      <IconEmail style={{ color: 'blue' }} />
      <IconPuzzle />
      <IconHome />
      <IconLoading spin style={{ fontSize: 16, color: 'red' }} />
      <IconLoading spin style={{ color: 'red' }} />
      <IconLoading spin />
    </div>
  );
};

export default Demo;
`},77082:function(x,h){h.Z=`.iconList {
  font-size: 32px;

  :global {
    .doly-icon {
      margin-right: 6px;
    }
  }
}
`},19961:function(x,h){h.Z=`import * as React from 'react';
import { StarFill, MoonFill, SunFill } from 'doly-icons';
import styles from './provider.module.less';

const Demo: React.FC<{ title?: React.ReactNode }> = ({ title }) => {
  return (
    <>
      <h3>{title || '\u6D4B\u8BD5\u9875\u9762'}</h3>
      <div className={styles.iconList}>
        <StarFill style={{ color: 'gold' }} />
        <MoonFill />
        <SunFill />
      </div>
    </>
  );
};

export default Demo;
`},56240:function(x,h){h.Z=`/* stylelint-disable-next-line import-notation */
@import './demo.module.less';

.iconButton {
  width: 44px;
  height: 44px;
  color: red;
  font-size: 24px;
  background-color: #ccc;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
`},15086:function(x,h){h.Z=`import * as React from 'react';
import { IconProvider } from 'doly-icons';
import TestPage from './provider-test-page';
import styles from './provider.module.less';

const Demo = () => {
  return (
    <>
      <TestPage title="\u9ED8\u8BA4" />
      <IconProvider value={{ spin: true, style: { fontSize: 16, color: 'green' } }}>
        <TestPage title="\u5927\u5C0F\u989C\u8272\u65CB\u8F6C" />
      </IconProvider>
      <IconProvider value={{ className: styles.iconButton }}>
        <TestPage title="class" />
      </IconProvider>
    </>
  );
};

export default Demo;
`},34675:function(x,h){h.Z=`import * as React from 'react';
import { Helmet } from 'react-helmet';
import Icon from 'doly-icons';
import styles from './demo.module.less';

const Demo = () => {
  return (
    <>
      <Helmet>
        {/* \u5EFA\u8BAE\u4E0B\u8F7D\u5230\u9879\u76EE\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u4E00\u5B9A\u8981\u5F15\u5165\u5728\u7EBF\u5730\u5740\uFF0C\u5EFA\u8BAE\u5728\u9875\u9762\u5165\u53E3\u5F15\u5165\uFF0C\u907F\u514D\u91CD\u590D\u52A0\u8F7D\u3002 */}
        <script src="//at.alicdn.com/t/font_3061930_ney4a0jv5ul.js" type="text/javascript" />
      </Helmet>
      <div className={styles.iconList}>
        <Icon symbolId="loading" spin />
        <Icon symbolId="viewgallery" />
        <Icon symbolId="viewlist" />
        <Icon symbolId="vip" style={{ color: 'red' }} />
        <Icon symbolId="vip-fill" style={{ fontSize: 48 }} />
      </div>
    </>
  );
};

export default Demo;
`}}]);