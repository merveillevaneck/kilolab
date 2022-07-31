import React from 'react'
import { useNavigate } from '@remix-run/react';
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { Button } from '@kilo-lab/web-design.button';
import { useTheme } from 'styled-components';
import { useWidth, useIsMobile } from '~/hooks';
import { motion } from 'framer-motion';

export interface TitleSectionProps extends Partial<ViewProps> { }

export const TitleSection: React.FC<TitleSectionProps> = props => {
  const theme = useTheme();
  const width = useWidth();
  const navigate = useNavigate();
  const mobile = useIsMobile();
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
        marginLeft={mobile ? "20px" : "100px"}
        paddingBottom="170px"
        minWidth={mobile ? undefined : "400px"}
      >
        <Title
          fontFamily="Ubuntu"
          fontSize={mobile ? "40px" : "90px"}
          fontWeight="normal"
          textShadow={theme.titleShadow}
          marginBottom={0}
          paddingBottom={0}
        >
          The Reuseable Software Powerhouse
        </Title>
        <Text
          fontSize={mobile ? "18px" : "34px"}
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
          boxShadow="1px 0px 5px rgba(0, 0, 0, 0.5)"
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate('/#contact')}
          minHeight="50px"
          width="90%"
          marginTop="40px"
        >
          Kickstart your Idea!
        </Button>
      </View>
      <View
        flex={1}
        width="100px"
        display={mobile ? "hidden" : "flex"}
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        position="relative"
        overflowX="hidden"
      >
        <motion.img
          initial={{ x: 500 }}
          animate={{ x: 0, y: 50 }}
          transition={{ ease: "easeOut", duration: 1 }}
          src="/inform_title.svg"
          width="100%"
          style={{ position: 'absolute', left: 300 }}
        />
      </View>
    </View>
  )
}
