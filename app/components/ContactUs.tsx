import React, { useRef } from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { Button } from '@kilo-lab/web-design.button';
import { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';
import { motion } from 'framer-motion';

export interface ContactUsProps extends Partial<ViewProps> { }

export const ContactUs: React.FC<ContactUsProps> = props => {
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();
  if (mobile) return null;
  return (
    <View
      position="relative"
      height="650px"
      overflowX="hidden"
      paddingTop="300px"
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      {...props}
      zIndex={2}
      overflowY="hidden"
    >
      {!mobile && <img src="/green_wave_2.svg" width={mobile ? "1000px" : width}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      />}
      <View 
        flex={1}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <View
          as={motion.div}
          backgroundColor="white"
          width="400px"
          height="400px"
          borderRadius="200px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow={theme.titleShadow}
        >
          <Text textShadow={theme.textShadow} color={theme.colors.primary} fontFamily="Ubuntu" fontSize="24px">Drag Me!</Text>
        </View>
      </View>
      <View
        flex={1}
        paddingX={mobile ? "20px" : undefined}
        marginLeft={mobile ? undefined : "20px"}
      >
        <Title
          fontFamily="Ubuntu"
          color="white"
          textShadow={theme.textShadow}
          fontSize={mobile ? "34px" : "45px"}
          fontWeight="normal"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
          marginTop="0px"
        >
          Interactive UX
        </Title>
        <Text
          fontFamily="Ubuntu"
          fontSize={mobile ? "18px" : "24px"}
          color="white"
          maxWidth="650px"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
          textShadow={theme.textShadow}
          lineHeight="1.5">
            Create modern and interactive features for your users that make you stand out from your competition. Wanna see? Drag the bubble on the left.
        </Text>
      </View>
    </View>
  )
}
