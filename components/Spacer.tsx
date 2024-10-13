import React from 'react';
import { View, ViewStyle } from 'react-native';

// Define the prop types for the component
interface SpacerProps {
  height?: number;
  width?: number;
}

const Spacer: React.FC<SpacerProps> = ({ height, width }) => {
  // Dynamic style based on props
  const style: ViewStyle = {
    height: height || 0,
    width: width || 0,
  };

  return <View style={style} />;
};

export default Spacer;
