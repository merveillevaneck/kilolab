import React from 'react'
import { useNavigate } from '@remix-run/react';
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { Button } from '@kilo-lab/web-design.button';
import { useTheme } from 'styled-components';
import { useWidth, useIsMobile } from '~/hooks';
import { motion } from 'framer-motion';

export interface TitleSectionProps extends Partial<ViewProps> {}

export const TitleSection: React.FC<TitleSectionProps> = props => {
  const theme = useTheme();
  const width = useWidth();
  const navigate = useNavigate();
  const mobile = useIsMobile();
  return (
    <View
      backgroundColor={theme.colors.background.dark}
      position="relative"
      width="100%"
      height="100vh"
      display="flex"
      flexDirection={mobile ? "column-reverse" : "row"}
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
        marginLeft={mobile ? 0 : "100px"}
        paddingBottom="170px"
        minWidth={mobile ? undefined : "400px"}
      >
        <Title
          fontSize={mobile ? "40px" : "90px"}
          fontWeight="normal"
          textShadow={theme.titleShadow}
          marginBottom={0}
          paddingBottom={0}
          textAlign={mobile ? "center" : "left"}
          width={mobile ? "100%" : undefined}
        >
          The Reuseable Software Powerhouse
        </Title>
        <Text
          fontSize={mobile ? "18px" : "34px"}
          textShadow={theme.titleShadow}
          marginBottom="10px"
          textAlign={mobile ? "center" : "left"}
          width={mobile ? "100%" : undefined}
        >
          Making Massive Ideas Achievable
        </Text>
        <Button
          opacity={1}
          backgroundColor="white"
          color={theme.colors.text}
          fontWeight="bold"
          fontSize="18px"
          boxShadow="1px 0px 5px rgba(0, 0, 0, 0.5)"
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate('/#contact')}
          minHeight="50px"
          width="90%"
          alignSelf={mobile ? "center" : undefined}
          marginTop="40px"
        >
          Kickstart your Idea!
        </Button>
      </View>
      <View
        flex={1}
        display={mobile ? "none" : "flex"}
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        position="relative"
        overflowX="hidden"
      >
        <motion.img
          initial={{ x: 500, y: -100 }}
          animate={{ x: 0, y: -10 }}
          transition={{ ease: "easeOut", duration: 1 }}
          src="/kilolab_logo.svg"
          width="600px"
          style={{ position: 'absolute', left: 300 }}
        />
      </View>
      <View
        display={!mobile ? "none" : "flex"}
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="100px"
      >
        <img src="/kilolab_logo.svg" width="200px" />
      </View>
    </View>
  )
}
