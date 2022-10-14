import * as React from 'react';
import type { SliderSingleProps, InputNumberProps } from 'antd';
import { Slider, Row, Col, InputNumber } from 'antd';
import { useControllableValue } from 'rc-hooks';

interface SizeSliderProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  value?: number;
  step?: number;
  precision?: number;
  onChange?: (value: number) => void;
  sliderProps?: SliderSingleProps;
  inputProps?: InputNumberProps;
}

const SizeSlider: React.FunctionComponent<SizeSliderProps> = ({
  min = 12,
  max = 64,
  step = 1,
  precision = 0,
  sliderProps,
  inputProps,
  ...restProps
}) => {
  const [state, setState] = useControllableValue(restProps);

  return (
    <Row gutter={16} style={{ flexWrap: 'nowrap' }}>
      <Col flex={1}>
        <Slider
          min={min}
          max={max}
          step={step}
          {...sliderProps}
          value={state}
          onChange={setState}
        />
      </Col>
      <Col style={{ width: 90 }}>
        <InputNumber
          min={min}
          max={max}
          precision={precision}
          step={step}
          {...inputProps}
          value={state}
          // @ts-ignore
          onChange={setState}
        />
      </Col>
    </Row>
  );
};

export default SizeSlider;
