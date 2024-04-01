import useTokens from '@/Hooks/Auth/useToken';
import { UseQueryOptions, useQuery } from 'react-query';

const fetchData = async (serviceName: string, accessToken: string|null) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${serviceName}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const useGetAll = (serviceName: string, options?: { onSuccess?: any; onError?: any,enabled?:boolean }) => {
  const { accessToken } = useTokens();
  return useQuery(serviceName, () => fetchData(serviceName, accessToken), options);
};