import Button from './Button';

export type DispayType = {
  value: number;
  maxValue: number;
  startValue: number;
  onIncHandler: () => void;
  onResetHandler: () => void;
};

export const Dispay: React.FC<DispayType> = ({ value, onIncHandler, onResetHandler, maxValue, startValue }) => {
  let disabledIncrement = value === maxValue ? true : false;

  return (
    <div>
      {maxValue < 0 || startValue < 0 ? (
        <div>incorrect value!</div>
      ) : (
        <div className={value === maxValue ? 'display-red-value' : ''}>{value}</div>
      )}

      <div>
        <Button disabled={disabledIncrement || maxValue < 0 || startValue < 0 || startValue > maxValue} onClick={onIncHandler}>
          inc
        </Button>
        <Button disabled={maxValue < 0 || startValue < 0 || startValue > maxValue} onClick={onResetHandler}>
          reset
        </Button>
      </div>
    </div>
  );
};
