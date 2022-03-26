import { useState, useEffect, useCallback } from "react";

const useFetch = (path) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    fetch(path, options)
      .then((res) => {
        setIsLoading(false);
        return res.json();
      })
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [isLoading, path, options]);

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  return [{ response, error, isLoading }, doFetch];
};

export default useFetch;
