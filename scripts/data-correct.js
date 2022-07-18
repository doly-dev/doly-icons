// 数据修复，修正网页中部分缺少数据

// 类别修正
const categories = {
  // before bootstrap icons v1.8.0
  boxes: 'real world',
  'chevron-expand': 'chevrons',
  vinyl: 'media',
  bootstrap: 'brand',
  'bootstrap-fill': 'brand',
  'bootstrap-reboot': 'arrows',
  window: 'apps',

  // bootstrap icons v1.8.0
  'arrow-through-heart': 'arrows',
  'arrow-through-heart-fill': 'arrows',
  'calendar-heart': 'date and time',
  'calendar-heart-fill': 'date and time',
  'calendar2-heart': 'date and time',
  'calendar2-heart-fill': 'date and time',
  'balloon-heart': 'real world',
  'balloon-heart-fill': 'real world',
  'postcard-heart': 'real world',
  'postcard-heart-fill': 'real world',
  plugin: 'real world',
  'box2-fill': 'real world',
  'box2-heart': 'real world',
  'box2-heart-fill': 'real world',
  'postage-heart': 'real world',
  'postage-heart-fill': 'real world',
  'clipboard2-pulse': 'real world',
  'clipboard2-pulse-fill': 'real world',
  'chat-heart': 'communications',
  'chat-heart-fill': 'communications',
  'chat-left-heart': 'communications',
  'chat-left-heart-fill': 'communications',
  'chat-right-heart': 'communications',
  'chat-right-heart-fill': 'communications',
  'chat-square-heart': 'communications',
  'chat-square-heart-fill': 'communications',
  'search-heart': 'communications',
  'search-heart-fill': 'communications',
  'heart-arrow': 'person',
  heartbreak: 'person',
  'heartbreak-fill': 'person',
  hearts: 'person',
  valentine: 'real world',
  valentine2: 'real world',
  'heart-pulse': 'person',
  'heart-pulse-fill': 'person',
  hospital: 'commerce',
  'hospital-fill': 'commerce',
  'filetype-ppt': 'files and folders',
  'filetype-xls': 'files and folders',

  // bootstrap icons v1.9.1
  alexa: 'brand',
  pass: 'files and folders',
  'pass-fill': 'files and folders',
};

// 额外备注，为了检索
const remark = {
  backspace: 'delete 删除键退格键',
  'backspace-fill': 'delete 删除键退格键',
  'backspace-reverse': 'delete 删除键退格键',
  'backspace-reverse-fill': 'delete 删除键退格键',
  'yin-yang': 'Tai Ji, gossip Kungfu 太极八卦功夫',
};

module.exports = {
  categories,
  remark,
};
