import { useCallback, useEffect, useState } from "react";

function string<Type>(object: Type): string {
  return JSON.stringify(object);
}

function object<Type>(string: string): Type {
  return JSON.parse(string);
}

type UseStorageType<Type> = {
  value: Type;
  key: string;
  storage?: Storage;
};

export default function useStorage<Type>({
  value,
  key,
  storage = sessionStorage,
}: UseStorageType<Type>): [Type, (payload: Type) => void] {
  const [state, setState] = useState<Type>(value);
  const stringValue = string(value);

  const setStateValue = useCallback(
    function () {
      const storageValue = storage.getItem(key);
      if (storageValue) {
        setState(object<Type>(storageValue));
      } else {
        storage.setItem(key, stringValue);
      }
    },
    [stringValue, key, storage]
  );

  useEffect(
    function () {
      setStateValue();
    },
    [setStateValue]
  );

  useEffect(
    function () {
      window.addEventListener(key, setStateValue);
      return function () {
        window.removeEventListener(key, setStateValue);
      };
    },
    [key, setStateValue]
  );

  function setStorage(payload: Type) {
    const stringPayload = string(payload);
    if (stringPayload === string(state)) return;
    storage.setItem(key, stringPayload);
    window.dispatchEvent(new Event(key));
  }

  return [state, setStorage];
}
