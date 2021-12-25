// 当前运行环境是否可以使用 dom
export const canUseDom =
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window?.document &&
  window.document?.createElement;

const styleNodeCache: { [key: string]: HTMLStyleElement } = {};

// 插入样式
export const injectStyle = (css: string, key: string) => {
  if (!canUseDom) {
    return null;
  }

  if (styleNodeCache[key]) {
    if (styleNodeCache[key].innerHTML !== css) {
      styleNodeCache[key].innerHTML = css;
    }
    return styleNodeCache[key];
  }

  const styleNode = document.createElement('style');
  styleNode.innerHTML = css;

  const container = document.querySelector('head') || document.body;

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
