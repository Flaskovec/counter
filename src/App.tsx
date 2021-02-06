import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Dispay } from './Dispay';
import Settings from './Settings';

function App() {
  const [value, setValue] = useState<number>(0);

  const onIncHandler = () => {
    setValue(value + 1);
  };

  const onResetHandler = () => {
    setValue(startValue);
  };

  let [maxValue, setMaxValue] = useState<number>(0);
  let [startValue, setStartValue] = useState<number>(0);

  const onSetHandler = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('startValue', JSON.stringify(startValue));
    setValue(startValue);
  };

  useEffect(() => {
    let maxValueString = localStorage.getItem('maxValue');
    if (maxValueString) {
      let newMaxValue = JSON.parse(maxValueString);
      setMaxValue(newMaxValue);
    }

    let startValueString = localStorage.getItem('startValue');
    if (startValueString) {
      let newStartValue = JSON.parse(startValueString);
      setStartValue(newStartValue);
    }
  }, []);

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    maxValue = Number(e.currentTarget.value);
    setMaxValue(maxValue);
  };
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    startValue = Number(e.currentTarget.value);
    setStartValue(startValue);
  };

  return (
    <div className="App">
      <div>
        <Settings
          maxValue={maxValue}
          startValue={startValue}
          onChangeMaxValueHandler={onChangeMaxValueHandler}
          onChangeStartValueHandler={onChangeStartValueHandler}
          onSetHandler={onSetHandler}
        />
      </div>
      <div>
        <Dispay
          startValue={startValue}
          value={value}
          maxValue={maxValue}
          onIncHandler={onIncHandler}
          onResetHandler={onResetHandler}
        />
      </div>
    </div>
  );
}

export default App;
