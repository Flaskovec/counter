import { ChangeEvent } from 'react';
import Button from './Button';

export type SettingsType = {
  maxValue: number;
  startValue: number;
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onSetHandler: () => void;
};

const Settings: React.FC<SettingsType> = ({
  maxValue,
  startValue,
  onChangeMaxValueHandler,
  onChangeStartValueHandler,
  onSetHandler,
}) => {
  return (
    <div>
      <div>
        max value:
        <input onChange={onChangeMaxValueHandler} value={maxValue} type="number" />
        start value:
        <input onChange={onChangeStartValueHandler} value={startValue} type="number" />
      </div>
      <div>
        <Button disabled={maxValue < 0 || startValue < 0 || startValue > maxValue} onClick={onSetHandler}>
          set
        </Button>
      </div>
    </div>
  );
};

export default Settings;
