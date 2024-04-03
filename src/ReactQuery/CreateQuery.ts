import useTokens from '@/Hooks/Auth/useToken';
import { useMutation } from 'react-query';

const create = async (data:any,serviceName:string,headers?:any, accessToken?:any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${serviceName}`, {
    method: 'POST',
     headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers,
        Authorization: `Bearer ${accessToken}`,
      
  },
    body: data,
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useCreate = (serviceName:string,options?:{onSuccess?:any,onError?:any},headers?:any) => {
  const { accessToken } = useTokens();
  return useMutation((data:any)=>create(data,serviceName,headers, accessToken),
  {
    onSuccess: (data) => {
      console.log('Mutation succeeded:', data);
      options?.onSuccess && options?.onSuccess(data)
      // Do something else here, such as updating your UI or refetching data
    }
  ,
onError:()=>{
  options?.onError && options?.onError()
}},);
};
