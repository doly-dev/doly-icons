import * as React from 'react';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { useDebounce } from 'rc-hooks';

// 只支持非受控模式
interface SelectExtendProps extends Omit<SelectProps<any>, 'value'> {
  wait?: number;
  defaultValue?: any;
  onChange?: (val: any) => void;
}

const SelectExtend: React.FC<SelectExtendProps> = ({
  wait = 300,
  defaultValue,
  onChange,
  ...restProps
}) => {
  const [innerValue, setInnerValue] = React.useState(defaultValue);
  const debounceInnerValue = useDebounce(innerValue, wait >= 0 ? wait : 0);
  const changeRef = React.useRef<typeof onChange>();
  changeRef.current = onChange;

  React.useEffect(() => {
    changeRef.current?.(debounceInnerValue);
  }, [debounceInnerValue]);

  return <Select value={innerValue} onChange={setInnerValue} showSearch {...restProps} />;
};

export default SelectExtend;
