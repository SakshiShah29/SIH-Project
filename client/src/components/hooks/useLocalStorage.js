import { useEffect, useState } from "react";

const PREFIX = "Sahayog";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    // console.log("This is the json value", jsonValue);
    // console.log(typeof jsonValue);
    // console.log("Is this true");
    console.log(jsonValue === null);
    console.log("This means that there are no values");
    console.log(initialValue);
    if (jsonValue === "null" || jsonValue == null) return initialValue;
    console.log("Is this even printed");
    if (jsonValue != "undefined") return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
