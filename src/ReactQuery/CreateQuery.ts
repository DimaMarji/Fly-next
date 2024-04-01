import { useMutation } from 'react-query';

const create = async (data:any,serviceName:string,headers?:any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${serviceName}`, {
    method: 'POST',
     headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
  },
    body: data,
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useCreate = (serviceName:string,options?:{onSuccess?:any,onError?:any},headers?:any) => {
  return useMutation((data:any)=>create(data,serviceName,headers),
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
