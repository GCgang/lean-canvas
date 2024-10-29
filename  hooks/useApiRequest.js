import { useCallback, useState } from 'react';

export default function useApiRequest(apiFn) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const execute = useCallback(
    async (params, executeOptions) => {
      const { onSuccess, onError } = executeOptions || {};
      try {
        setIsLoading(true);
        setIsError(null);
        await new Promise((resolver) => setTimeout(resolver, 1000));
        const response = await apiFn(params);
        setData(response.data);
        if (onSuccess) {
          onSuccess(response);
        }
      } catch (error) {
        setIsError(error);
        if (onError) {
          onError(error);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [apiFn]
  );
  return {
    isLoading,
    isError,
    data,
    execute,
  };
}
