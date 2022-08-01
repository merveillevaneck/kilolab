import React, { useState } from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { Button } from '@kilo-lab/web-design.button';
import { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';

export interface ProjectsProps extends Partial<ViewProps> { }

export const Projects: React.FC<ProjectsProps> = props => {
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();

  const [index, setIndex] = useState<number>(0);

  return (
    <View
      backgroundColor={theme.colors.background.secondary}
      position="relative"
      height="650px"
      overflowX="hidden"
      paddingTop="200px"
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      zIndex={2}
      overflowY="hidden"
      {...props}
    >
      {!mobile && <img src="/purple_wave_2.svg" width={mobile ? "1000px" : width}
        style={{ position: 'absolute', top: -1, left: 0, zIndex: 1 }}
      />}
      {index === 0 && <Section
        as={motion.div}
        title="InForm"
        description="InForm is a partner business that aims to digitize communication between private medical  practices and patients. KiloLab has been actively involved in getting this product to market and improving the lives of patients all over South Africa."
        src="/iphone_12_pro.svg"
      />}
      {index === 1 && <Section
        title="Busy Bees"
        description="InForm is a partner business that aims to digitize communication between private medical  practices and patients. KiloLab has been actively involved in getting this product to market and improving the lives of patients all over South Africa."
        src="/busy_bees_ipad.svg"
      />}
    </View>
  )
}

export interface SectionProps extends Partial<ViewProps> {
  src: string;
  title: string;
  description: string;
}

export const Section: React.FC<SectionProps> = props => {


  const {
    title,
    description,
    src,
  } = props;

  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();
  return (
    <View
      width="100%"
      height="100%"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      {...props}>
      <View 
        flex={1}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <img src={src} width="400px" />
      </View>
      <View
        flex={1}
        paddingX={mobile ? "20px" : undefined}
        marginLeft={mobile ? undefined : "20px"}
      >
        <Title
          fontFamily="Ubuntu"
          color={theme.colors.primary}
          textShadow={theme.textShadow}
          fontSize={mobile ? "34px" : "45px"}
          fontWeight="normal"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
          marginTop="0px"
        >
          {title}
        </Title>
        <Text
          fontFamily="Ubuntu"
          fontSize={mobile ? "18px" : "24px"}
          color={theme.colors.text}
          maxWidth="650px"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
          textShadow={theme.textShadow}
          lineHeight="1.5">
          {description}
        </Text>
      </View>
    </View>
  );
}
