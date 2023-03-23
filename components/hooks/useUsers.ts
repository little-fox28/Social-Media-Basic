import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useUSers = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/user', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUSers;
