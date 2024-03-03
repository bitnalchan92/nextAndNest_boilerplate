import React from 'react';
export interface NameProps{
  name: string;
  age: number;
}
export const Name = (props: NameProps) => {
  return <p>my name is {props.name}, i'm {props.age} years old.</p>
}
