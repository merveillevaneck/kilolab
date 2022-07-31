import React from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';

export interface WhatWeDoProps extends Partial<ViewProps> {}

export const WhatWeDo: React.FC<WhatWeDoProps> = props => {
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();
  return (
    <View
      backgroundColor={theme.colors.secondary}
      position="relative"
      height="100vh"
      overflowX="hidden"
      {...props}
    >
      <img src="/Vector.svg" width={mobile ? "1000px" : width}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
      />
    </View>
  )
}
