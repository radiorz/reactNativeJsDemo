import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Button, useTheme} from '@rneui/themed';
function CoolButton({color}) {
  const tailwind = useTailwind();
  const {theme} = useTheme();
  if (!color) {
    color = theme.colors.primary;
  }
  return <Button style={[{color}, tailwind('text-white')]} />;
}
export default CoolButton;
