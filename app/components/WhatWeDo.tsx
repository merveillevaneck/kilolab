import React from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';

export interface WhatWeDoProps extends Partial<ViewProps> { }

export const WhatWeDo: React.FC<WhatWeDoProps> = props => {
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();
  return (
    <View
      backgroundColor={theme.colors.background.secondary}
      position="relative"
      height="650px"
      overflowX="hidden"
      paddingTop="100px"
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      {...props}
    >
      <img src="/Vector.svg" width={mobile ? "1000px" : width}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
      />
      <View
        paddingX={mobile ? "20px" : undefined}
        marginLeft={mobile ? undefined : "20px"}
      >
        <Title
          fontFamily="Ubuntu"
          color={theme.colors.primary}
          textShadow={theme.textShadow}
          fontSize={mobile ? "34px" : "40px"}
          fontWeight="normal"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
        >
          Reuseable Software
        </Title>
        <Text
          fontFamily="Ubuntu"
          fontSize={mobile ? "18px" : "24px"}
          color={theme.colors.text}
          maxWidth="650px"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
          textShadow={theme.textShadow}>
          We help companies design, develop and kickstart achievable digital backbones through reuseable and custom software.
        </Text>
      </View>
      <View 
        display={mobile ? "none" : undefined}
      >
        <img src="/kilolab_ipad.svg" width="500px" height="600px" />
      </View>
    </View>
  )
}
