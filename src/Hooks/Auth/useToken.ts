import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const useTokens = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);
  const [accessToken, setAccessToken] = useState<string|null>(cookies.accessToken || null);
  const [refreshToken, setRefreshToken] = useState<string|null>(cookies.refreshToken || null);

  // Set the access token
  const setTokens = (newAccessToken: string|null, newRefreshToken: string|null) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    setCookie('accessToken', newAccessToken, { path: '/' });
  };

  // Clear the tokens
  const clearTokens = () => {
    setTokens(null, null);
    removeCookie('accessToken');
    removeCookie('refreshToken');
  };

  useEffect(() => {
    if (accessToken) {
      setCookie('accessToken', accessToken, { path: '/' });
    } else {
      removeCookie('accessToken');
    }
  }, [accessToken, setCookie, removeCookie]);

  useEffect(() => {
  setAccessToken(cookies.accessToken)
  }, [cookies.accessToken]);

  return {
    accessToken,
    refreshToken,
    setTokens,
    clearTokens,
  };
};

export default useTokens;