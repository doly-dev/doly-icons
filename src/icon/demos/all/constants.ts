// 图标风格
export enum ETheme {
  All = 'all',
  Outline = 'outline',
  Fill = 'fill',
}

// 布尔值枚举
export enum EBoolType {
  Yes = '1',
  No = '0',
}
export const BoolTypeOptions = [
  {
    label: '是',
    value: EBoolType.Yes,
  },
  {
    label: '否',
    value: EBoolType.No,
  },
];

// 点击图标操作
export enum EClickIconAction {
  None,
  CopySvg,
  CopyPng,
  CopyComponentName,
  CopyJSX,
}
export const ClickIconActionOptions = [
  {
    label: '复制组件名称',
    value: EClickIconAction.CopyComponentName,
  },
  {
    label: '复制JSX',
    value: EClickIconAction.CopyJSX,
  },
  {
    label: '复制SVG',
    value: EClickIconAction.CopySvg,
  },
  {
    label: '复制PNG',
    value: EClickIconAction.CopyPng,
  },
  {
    label: '无',
    value: EClickIconAction.None,
  },
];
