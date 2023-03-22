import useSWR from 'swr';

import fetcher from '../../libs/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);
  console.log('[currentUser]', { data });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
