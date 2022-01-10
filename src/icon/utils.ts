// 当前运行环境是否可以使用 dom
export const canUseDom =
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window?.document &&
  window.document?.createElement;

// 插入样式节点缓存
const styleNodeCache: { [key: string]: HTMLStyleElement } = {};

// 插入样式
export const injectStyle = (
  css: string,
  key: string,
  options: { csp?: { nonce?: string } } = {},
) => {
  if (!canUseDom) {
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

  const container = document.querySelector('head') || document.body;
  const styleNode = document.createElement('style');
  styleNode.innerHTML = css;

  if (options.csp?.nonce) {
    styleNode.nonce = options.csp.nonce;
  }

  if (container.prepend) {
    container.prepend(styleNode);
  } else if (container.firstChild) {
    // IE not support `prepend`
    container.insertBefore(styleNode, container.firstChild);
  } else {
    container.appendChild(styleNode);
  }

  styleNodeCache[key] = styleNode;

  return styleNode;
};
