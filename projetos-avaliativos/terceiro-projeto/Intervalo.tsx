import React from 'react';
import { Text } from 'react-native';

interface Value {
  min: number;
  max: number;
}

const Intervalo = (props: Value) => {
  console.warn(props);
  return (
    <Text>O valor {props.max} é maior que o valor {props.min}</Text>
  );
};

export default Intervalo;
