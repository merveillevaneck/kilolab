import React, { useRef } from 'react'
import { useNavigate } from '@remix-run/react';
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { Button } from '@kilo-lab/web-design.button';
import { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';
import { motion } from 'framer-motion';

export interface DragMeProps extends Partial<ViewProps> { }

export const DragMe: React.FC<DragMeProps> = props => {
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();
  const limitRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  return (
    <View
      backgroundColor={theme.colors.background.primary}
      position="relative"
      height="650px"
      overflowX="hidden"
      paddingTop="100px"
      display="flex"
      flexDirection={mobile ? "column" : "row"}
      justifyContent="space-evenly"
      alignItems="center"
      {...props}
      ref={limitRef}
      zIndex={2}
      overflowY="hidden"
    >
      <View 
        flex={1}
        height="80%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <View
          as={motion.div}
          backgroundColor="white"
          drag
          dragConstraints={limitRef}
          width={mobile ? "200px" : "400px"}
          height={mobile ? "200px" : "400px"}
          borderRadius="200px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow={theme.titleShadow}
        >
          <Text textShadow={theme.textShadow} color={theme.colors.primary}   fontSize="24px">Drag Me!</Text>
        </View>
      </View>
      <View
        flex={1}
        paddingX={mobile ? "20px" : undefined}
        marginLeft={mobile ? undefined : "20px"}
      >
        <Title
           
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
          fontSize={mobile ? "18px" : "24px"}
          color="white"
          maxWidth="650px"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
          textShadow={theme.textShadow}
          lineHeight="1.5">
            Create modern and interactive features for your users that make you stand out from your competition. Wanna see? Drag the bubble {mobile ? "above" : "on the left"}.
        </Text>
        <Button
          as={motion.button}
          backgroundColor="white"
          color={theme.colors.primary}
          minHeight="40px"
          width="100%"
          maxWidth="400px"
          whileHover={{scale: 1.1}}
          boxShadow={theme.textShadow}
          fontWeight="bold"
          onClick={() => navigate("#contact")}
        >
          I Want One Too!
        </Button>
      </View>
    </View>
  )
}
