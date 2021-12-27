import { useEffect } from 'react';
import { injectStyle } from './utils';

export const iconStyle = `@-webkit-keyframes doly-icon-animate_spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes doly-icon-animate_spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes doly-icon-animate_spin-reverse {
  from {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  to {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@keyframes doly-icon-animate_spin-reverse {
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
  color: inherit;
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
  -webkit-animation: doly-icon-animate_spin 1s infinite linear;
  animation: doly-icon-animate_spin 1s infinite linear;
}
.doly-icon-spin-reverse {
  -webkit-animation: doly-icon-animate_spin-reverse 1s infinite linear;
  animation: doly-icon-animate_spin-reverse 1s infinite linear;
}`;

export function useInsertStyle() {
  useEffect(() => {
    injectStyle(iconStyle, 'doly-icons');
  }, []);
}