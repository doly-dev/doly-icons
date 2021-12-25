const DARK_STYLE_ID = '__doly_icons_antd_dark_style__';

function getDarkStyle() {
  return document.querySelector(`#${DARK_STYLE_ID}`);
}

export function loadDarkStyle() {
  if (!getDarkStyle()) {
    const oStyle = document.createElement('link');
    oStyle.setAttribute('id', DARK_STYLE_ID);
    oStyle.setAttribute('rel', 'stylesheet');
    oStyle.setAttribute('href', 'https://unpkg.com/antd@4/dist/antd.dark.css');
    document.head.appendChild(oStyle);
  }
}

export function unloadDarkStyle() {
  const oStyle = getDarkStyle();
  oStyle && document.head.removeChild(oStyle);
}
