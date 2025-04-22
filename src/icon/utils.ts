import { isBrowser } from 'ut2';
import { injectStyle } from 'util-helpers';

// 插入样式节点缓存
const styleNodeCache: { [key: string]: HTMLStyleElement } = {};

export type InjectCssOptions = { csp?: { nonce?: string } };

// 插入样式
export const injectCss = (css: string, key: string, options: InjectCssOptions = {}) => {
  if (!isBrowser) {
    return null;
  }

  if (styleNodeCache[key]) {
    if (options.csp?.nonce && styleNodeCache[key].nonce !== options.csp.nonce) {
      styleNodeCache[key].nonce = options.csp.nonce;
    }
    if (styleNodeCache[key].innerHTML !== css) {
      styleNodeCache[key].innerHTML = css;
    }
    return styleNodeCache[key];
  }

  styleNodeCache[key] = injectStyle(css, {
    onBefore(style) {
      if (options.csp?.nonce) {
        style.nonce = options.csp.nonce;
      }
    },
  });

  return styleNodeCache[key];
};
