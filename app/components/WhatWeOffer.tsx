import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';
import { motion, useInView } from 'framer-motion';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export interface WhatWeOfferProps extends Partial<ViewProps> {}

export const WhatWeOffer: React.FC<WhatWeOfferProps> = props => {
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();
  const [current, setCurrent] = useState<number>(1);
  const animate = useCallback(async () => {
    setCurrent(2);
    await sleep(1000);
    setCurrent(3);
  }, []);
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView && current !== 3) {
      animate();
    }
  }, [inView]);
  return (
    <View
      backgroundColor="white"
      position="relative"
      overflowX="hidden"
      paddingTop="200px"
      paddingX="50px"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      overflowY="hidden"
      {...props}
    >
      <img src="/green_wave.svg" width={mobile ? "1000px" : width}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
      />
      <AboutRow
        title="Software Design"
        list={[
          'UI & UX Designs and Mockups',
          'Design Prototypes',
          'Tehnical Consultations',
          'Outsourced React Development',
          'Research',
          'Software Prototypes',
        ]}
        src="/inform_iphone.svg"
        number={1}
        _img={{width: '200px'}}
        current={current}
      />
      <AboutRow
        title="Web Development"
        list={[
          'Custom React Websites, SSR and SEO',
          'Headless Content Management Solutions',
          'Custom Web API development',
          'Reusable UI Component libraries',
          'Continuous Integration and Cloud Hosting',
        ]}
        src="/busy_bees_macbook.svg"
        reverse
        number={2}
        _img={{width: '300px'}}
      />
      <AboutRow
        title="Mobile Development"
        list={[
          'React Native Development',
          'Cross Platform Application Development',
          'App Store Hosting',
          'Reusable Native Component Libraries',
        ]}
        src="/inform_standing_iphone.svg"
        number={3}
        _img={{width: '250px'}}
        ref={ref}
      />

    </View>
  )
}

export interface AboutRowProps extends Partial<ViewProps> {
  title: string;
  list: string[]
  src: string;
  reverse?: boolean;
  number: number;
  _img?: React.ImgHTMLAttributes<HTMLImageElement>
  current?: number;
  handleAnimation?: () => Promise<void>;
  ref?: any;
}

export const AboutRow: React.FC<AboutRowProps> = props => {

  const {
    children,
    title,
    list,
    src,
    reverse,
    number,
    _img,
    current,
    handleAnimation,
    ...rest
  } = props;

  const theme = useTheme();
  const mobile = useIsMobile();

  return (
      <View
        as={motion.div}
        onEnter={handleAnimation}
        display="flex"
        flexDirection={mobile ? "column" : reverse ? "row-reverse" : "row"}
        justifyContent="center"
        alignItems="center"
        width="100%"
        maxWidth="1200px"
        marginX="30px"
        position="relative"
        marginBottom="50px"
        {...rest}
      >
        <View
          marginRight={!mobile ? !reverse ? "100px" : undefined : undefined}
          marginLeft={!mobile ? reverse ? "100px" : undefined : undefined}>
          <Title
            color={theme.colors.primary}
            fontFamily="Ubuntu"
            fontSize="30px"
            fontWeight="normal"
            textShadow={theme.textShadow}
            marginLeft="10px"
          >
            {title}
          </Title>
          <Text
            color={theme.colors.text}
            textShadow={theme.textShadow}
            lineHeight="1.5"
          >
            {
              list.map((item: string) => <li>{item}</li>)
            }
          </Text>
        </View>
        <View width="300px">
          <img src={src} width="200px" style={{aspectRatio: "auto"}} {..._img} />
        </View>
        { current === number && <View
          as={motion.div}
          layoutId="bubble"
          display={mobile ? "none" : undefined}
          position="absolute"
          right={!reverse ? 0 : undefined}
          left={reverse ? 0 : undefined}
        >
          <View
            backgroundColor={theme.colors.primary}
            width="300px"
            height="300px"
            borderRadius="150px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="white" fontSize="32px" fontFamily="Ubuntu" fontWeight="bold">1</Text>
          </View>
        </View>}
      </View>
  );
}
