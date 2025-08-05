import { useCallback, useState } from 'react';

export const useSwitch = (
  initialState = false
): [boolean, () => void, () => void, () => void] => {
  const [isActive, setIsActive] = useState(initialState);

  const onTurnOn = useCallback(() => {
    setIsActive(true);
  }, []);
  const onTurnOff = useCallback(() => {
    setIsActive(false);
  }, []);
  const onToggle = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  return [isActive, onTurnOn, onTurnOff, onToggle];
};
