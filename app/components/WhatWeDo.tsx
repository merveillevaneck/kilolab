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
      backgroundColor={theme.colors.background.primary}
      position="relative"
      height="650px"
      overflowX="hidden"
      paddingTop="200px"
      display="flex"
      flexDirection={mobile ? "column-reverse" : "row"}
      justifyContent="space-evenly"
      alignItems="center"
      {...props}
    >
      <img src="/wave_dark.svg" width={mobile ? "1000px" : width + 20}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, marginLeft: -10 }}
      />
      <View
        paddingX={mobile ? "20px" : undefined}
        marginLeft={mobile ? undefined : "20px"}
      >
        <Title
          color={theme.colors.textLight}
          textShadow={theme.textShadow}
          fontSize={mobile ? "34px" : "40px"}
          fontWeight="normal"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
          marginBottom="15px"
        >
          Reuseable Software
        </Title>
        <Text
          fontSize={mobile ? "18px" : "24px"}
          color={theme.colors.textLight}
          maxWidth="650px"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
          textShadow={theme.textShadow}
          lineHeight={1.5}>
          We help companies design, develop and kickstart achievable digital backbones through reuseable and custom software.
        </Text>
      </View>
      <View>
        <img src="/kilolab_ipad.svg" width={mobile ? "200px" : "500px"} />
      </View>
    </View>
  )
}
