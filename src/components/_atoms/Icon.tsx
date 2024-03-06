import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomIcon = ({name, size, color}: IconProps) => {
  try {
    return <Icon name={name} size={size} color={color} />;
  } catch (error) {
    console.error(`Error rendering icon: ${error}`);
    return null;
  }
};

export default CustomIcon;
