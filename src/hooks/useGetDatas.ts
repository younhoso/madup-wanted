// @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useGetDatas() {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState([]);
  const navigate = useNavigate();

  const getDatas = async () => {};

  return { isLoading, values, getDatas };
}

export default useGetDatas;
