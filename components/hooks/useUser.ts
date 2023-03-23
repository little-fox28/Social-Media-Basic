import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useUSer = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/user/${userId}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUSer;
