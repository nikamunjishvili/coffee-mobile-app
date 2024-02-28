import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomIcon = ({
  name,
  size,
  color,
}: {
  name: string;
  size: number;
  color: string;
}) => <Icon name={name} size={size} color={color} />;

export default CustomIcon;
