import * as React from 'react';
import type { RadioGroupProps } from 'antd';
import { Radio } from 'antd';
import { useDebounce } from 'rc-hooks';

// 只支持非受控模式
interface RadioExtendProps extends Omit<RadioGroupProps, 'value'> {
  wait?: number;
  defaultValue?: any;
  onChange?: (val: any) => void;
}

const RadioExtend: React.FC<RadioExtendProps> = ({
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

  return (
    <Radio.Group
      optionType="button"
      buttonStyle="solid"
      size="large"
      value={innerValue}
      onChange={(e) => setInnerValue(e.target.value)}
      {...restProps}
    />
  );
};

export default RadioExtend;
