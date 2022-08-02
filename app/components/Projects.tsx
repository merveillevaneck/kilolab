import React, { useState, useCallback, useEffect } from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { Button } from '@kilo-lab/web-design.button';
import { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { sleep } from '~/util';

export interface ProjectsProps extends Partial<ViewProps> { }

const CAROUSEL_INTERVAL = 10000;

export const Projects: React.FC<ProjectsProps> = props => {
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();

  const [index, setIndex] = useState<number>(0);

  const repeat = async () => {
    setIndex(-1);
    await sleep(500);
    setIndex(1);
    await sleep(CAROUSEL_INTERVAL);
    setIndex(-1);
    await sleep(500);
    setIndex(0);
    setTimeout(() => repeat(), CAROUSEL_INTERVAL);
  }

  useEffect(() => {
    setTimeout(() => repeat(), CAROUSEL_INTERVAL);
  }, [])

  return (
    <View
      backgroundColor={theme.colors.background.secondary}
      position="relative"
      height="650px"
      overflowX="hidden"
      paddingTop="200px"
      paddingBottom={mobile ? "50px" : undefined}
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      zIndex={2}
      overflowY="hidden"
      {...props}
    >
      <img src="/purple_wave_2.svg" width={mobile ? "1000px" : width}
        style={{ position: 'absolute', top: -1, left: 0, zIndex: 1 }}
      />
      <AnimatePresence>
        {index === 0 && <Section
          key="inform"
          as={motion.div}
          title="InForm"
          description="InForm is a partner business that aims to digitize communication between private medical  practices and patients. KiloLab has been actively involved in getting this product to market and improving the lives of patients all over South Africa."
          src="/iphone_12_pro.svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />}
        {index === 1 && <Section
          as={motion.div}
          key="busy_bees"
          title="Busy Bees"
          description="Busy Bees is a young and driven company looking to combine more cost-effective, healthier, high quality and locally sourced Honey with an easy and confortable way to order. KiloLab has been working diligently with this startup to help them kickstart their online sales."
          src="/busy_bees_ipad.svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />}
      </AnimatePresence>
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
      flexDirection={mobile ? "column" : "row"}
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
        <img src={src} width="100%" style={{maxWidth: "600px"}} />
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
