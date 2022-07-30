import React from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { useTheme } from 'styled-components';

export interface WhatWeDoProps extends Partial<ViewProps> {}

export const WhatWeDo: React.FC<WhatWeDoProps> = props => {
  const theme = useTheme();
  return (
    <View
      backgroundColor={theme.colors.secondary}
      position="relative"
      height="100vh"
      {...props}
    >

    </View>
  )
}
