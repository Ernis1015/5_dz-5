import React from 'react';
import { useSelector } from 'react-redux';

const UxorUi = () => {
  const data = useSelector(state => state.postSlice.post);
  return <div>{JSON.stringify(data)}</div>;
};

export default UxorUi;