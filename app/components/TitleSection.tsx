import React from 'react'
import { useNavigate } from '@remix-run/react';
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { Button } from '@kilo-lab/web-design.button';
import { useTheme } from 'styled-components';
import { useWidth } from '~/hooks';
import { motion } from 'framer-motion';

export interface TitleSectionProps extends Partial<ViewProps> {}

export const TitleSection: React.FC<TitleSectionProps> = props => {
  const theme = useTheme();
  const width = useWidth();
  const navigate = useNavigate();
  return (
    <View
      backgroundColor={theme.colors.primary}
      position="relative"
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="row"
      alignItems="stretch"
      color="white"
      {...props}
    >
      <View
        maxWidth="600px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        marginLeft="100px"
      >
        <Title
          fontFamily="Ubuntu"
          fontSize="90px" 
          textShadow={theme.titleShadow}
          marginBottom={0}
          paddingBottom={0}
          >
          The Resuable Software Powerhouse
        </Title>
        <Text
          fontSize="34px"
          textShadow={theme.titleShadow}
          fontFamily="Ubuntu"
          marginBottom="10px"
        >
          Making Massive Ideas Achievable
        </Text>
        <Button
          backgroundColor="white"
          color={theme.colors.primary}
          fontWeight="bold"
          fontFamily="Ubuntu"
          as={motion.button}
          onClick={() => navigate('/#contact')}
          height="40px"
          width="200px"
        >
          Kickstart your Idea!
        </Button>
      </View>
      <View
        flex={1}
        width="100px"
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        position="relative"
      >
        <img
          src="/inform_title.svg"
          width="800px"
          height="700px"
        />
      </View>
      <img src="/Vector.svg" width="100%"
        style={{position: 'absolute', bottom: "-100px", left: 0, zIndex: 10}}
      />
    </View>
  )
}
