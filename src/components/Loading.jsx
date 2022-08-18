import React from 'react';
import { Rings } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Rings color="#00BFFF" height={300} width={200} />
    </div>
  )
}
