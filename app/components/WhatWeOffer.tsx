import React from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';

export interface WhatWeOfferProps extends Partial<ViewProps> {}

export const WhatWeOffer: React.FC<WhatWeOfferProps> = props => {
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();
  return (
    <View
      backgroundColor="white"
      position="relative"
      height="800px"
      overflowX="hidden"
      paddingTop="100px"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      {...props}
    >
      <img src="/green_wave.svg" width={mobile ? "1000px" : width}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
      />

      <View
        display="flex"
        flexDirection={mobile ? "column" : "row"}
        justifyContent="space-evenly"
        alignItems="center"
        width="100%"
        maxWidth="1500px"
        marginX="30px"
      >
        <View
        flex={1}
        >
          <Title
            color={theme.colors.primary}
            fontFamily="Ubuntu"
            fontSize="40px"
            fontWeight="normal"
          >
            Software Design
          </Title>
          <Text
            color={theme.colors.text}
            textShadow={theme.textShadow}
            lineHeight="1.5"
            marginLeft="10px"
          >
            UI & UX Designs and Mockups
            <br />
Design Prototypes
            <br />
Tehnical Consultations
            <br />
Outsourced React Development
            <br />
Research
            <br />
Software Prototypes
          </Text>
        </View>
        <View
          flex={1}
        >
          <img src="/inform_iphone.svg" width="300px" />
        </View>
        <View display={mobile ? "none" : undefined} height="300px" width="300px">
          <View
            backgroundColor={theme.colors.primary}
            width="100%"
            height="100%"
            borderRadius="150px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="white" fontSize="32px" fontFamily="Ubuntu" fontWeight="bold">1</Text>
          </View>
        </View>
      </View>

    </View>
  )
}
