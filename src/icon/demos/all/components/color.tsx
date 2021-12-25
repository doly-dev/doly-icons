import * as React from 'react';
import { SketchPicker } from 'react-color';
import { Popover } from 'antd';
import { useControllableValue } from 'rc-hooks';
import styles from './color.less';

function rgbToString({ r, g, b, a }: { r: number; g: number; b: number; a?: number }) {
  return `rgba(${r}, ${g}, ${b}, ${typeof a === 'undefined' ? 1 : a})`;
}

interface ColorProps {
  value?: string;
  onChange?: (colorValue: string) => void;
}

const Color: React.FunctionComponent<ColorProps> = (props) => {
  const [color, setColor] = useControllableValue(props, {
    defaultValue: 'transparent',
  });
  const [innerColor, setInnerColor] = React.useState(() => color);

  const handleChange = React.useCallback((colorObj) => {
    setInnerColor(rgbToString(colorObj.rgb));
  }, []);

  const handleChangeComplete = React.useCallback(
    (colorObj) => {
      setColor?.(rgbToString(colorObj.rgb));
    },
    [setColor],
  );

  return (
    <Popover
      trigger="click"
      placement="bottomRight"
      // arrowPointAtCenter
      overlayClassName={styles.colorPopover}
      content={
        <div className={styles.colorPicker}>
          <SketchPicker
            color={innerColor}
            disableAlpha={false}
            onChangeComplete={handleChangeComplete}
            onChange={handleChange}
          />
        </div>
      }
    >
      <span className={styles.colorBox}>
        <span className={styles.colorBoxInner} style={{ background: color }} />
      </span>
    </Popover>
  );
};

export default Color;
