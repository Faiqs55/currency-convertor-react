import { useState } from "react";
import { useEffect } from "react";

const useCurrencyInfo = (curr) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${curr}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[curr]));
  }, [curr]);

  return data;
};

export default useCurrencyInfo;
