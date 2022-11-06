/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
// @typescript-eslint/no-unused-vars
import React, { useState, createContext, useContext, useEffect } from 'react';

const MadupContext = createContext(null);
export const useDatas = () => useContext(MadupContext);

export function MadupProvider({ children, madupService }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const test = async () => {
      const response = await madupService.get();
      setDatas(response);
    };
    test();
  }, [madupService]);

  // const create = async (data: any) => {
  //   const newData = await madupService.create(data);
  //   setDatas((prev) => [...prev, newData]);
  // };

  return <MadupContext.Provider value={{ datas }}>{children}</MadupContext.Provider>;
}
