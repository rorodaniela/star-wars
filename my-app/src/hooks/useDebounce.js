import { useCallback } from "react";
import debounce from "lodash.debounce";

export default function useDebounce(cb, delay) {
  // console.log(debounce, "<< ini debounce lodash");
  const debounced = useCallback(
      debounce((...args) => cb(...args), delay),[delay]
  );
  return debounced;
}
