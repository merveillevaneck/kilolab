import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { Button } from '@kilo-lab/web-design.button';
import { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';
import { motion, useInView, LayoutGroup } from 'framer-motion';
import { useNavigate } from 'react-router';
import { sleep } from '~/util';


export interface WhatWeOfferProps extends Partial<ViewProps> {}

export const WhatWeOffer: React.FC<WhatWeOfferProps> = props => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();
  const [current, setCurrent] = useState<number>(1);
  const animate = useCallback(async () => {
    await sleep(1000);
    setCurrent(2);
    await sleep(1000);
    setCurrent(3);
  }, [setCurrent]);
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView && current !== 3) {
      animate();
    }
  }, [inView]);

  return (
    <View
      backgroundColor={theme.colors.background.dark}
      position="relative"
      overflowX="hidden"
      paddingTop="200px"
      paddingX="50px"
      paddingBottom="100px"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      overflowY="hidden"
      zIndex={1}
      {...props}
    >
      <img src="/wave_purple_shadow_1.svg" width={mobile ? "1000px" : width + 20}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, marginLeft: -5 }}
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
        src="/design.svg"
        number={1}
        _img={{width: mobile ? "100%" : "400px"}}
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
        src="/web.svg"
        reverse
        number={2}
        current={current}
        _img={{width: mobile ? "100%" : "300px"}}
      />
      <AboutRow
        title="Mobile Development"
        list={[
          'React Native Development',
          'Cross Platform Application Development',
          'App Store Hosting',
          'Reusable Native Component Libraries',
        ]}
        src="/mobile.svg"
        number={3}
        current={current}
        _img={{width: mobile ? "100%" : "300px"}}
        ref={ref}
        marginBottom="10px"
      />
      <View
        maxWidth="800px"
        width="100%"
        display="flex"
        alignItems="center"
        marginBottom="50px"
      >
        <Button
          as={motion.button}
          opacity={1}
          whileHover={{ scale: 1.1}}
          minHeight="40px"
          width="100%"
          maxWidth="300px"
          onClick={() => navigate('#contact')}
          backgroundColor={theme.colors.primary}
          color="white"
          fontWeight="bold"
          boxShadow="none"
          marginLeft={mobile ? undefined : "30px"}
        >
          Get A Quote!
        </Button>
      </View>

      <img src="/purple_wave_1.svg" width={mobile ? "1000px" : width}
        style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1 }}
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

export const AboutRow: React.FC<AboutRowProps> = React.forwardRef((props, ref) => {

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

  // if (current === number) console.log('current', current);
  console.log('number', number, 'current', current);

  return (
      <View
        as={motion.div}
        display="flex"
        flexDirection={mobile ? "column-reverse" : reverse ? "row-reverse" : "row"}
        justifyContent="space-evenly"
        alignItems="center"
        width="100%"
        maxWidth="800px"
        marginX="30px"
        position="relative"
        marginBottom="50px"
        ref={ref}
        {...rest}
      >
        <View
          marginRight={!mobile ? !reverse ? "100px" : undefined : undefined}
          marginLeft={!mobile ? reverse ? "100px" : undefined : undefined}>
          <Title
            color={theme.colors.primary}
            fontSize={mobile ? "24px" : "30px"}
            fontWeight="normal"
            textShadow={theme.textShadow}
            marginLeft="10px"
            marginBottom="10px"
          >
            {title}
          </Title>
          <Text
            as={motion.ul}
            color={theme.colors.textLight}
            textShadow={theme.textShadow}
            lineHeight="2"
            marginLeft={"-20px"}
            fontSize={mobile ? "14px" : undefined}
          >
            {
              list.map((item: string) => <li key={item}>{item}</li>)
            }
          </Text>
        </View>
        <View width={mobile ? "100%" : "300px"}>
          <img src={src} width="200px" style={{aspectRatio: "auto"}} {..._img} />
        </View>
        { current === number && <View
          as={motion.div}
          layout
          layoutId="bubble"
          display={mobile ? "none" : undefined}
          position="absolute"
          right={!reverse ? -200 : undefined}
          left={reverse ? -200 : undefined}
          zIndex={100}>
          <View
            as={motion.div}
            animate={{rotate: [0, 180, 360], scale: [1, 1.1, 1]}}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            backgroundColor={theme.colors.primary}
            width="300px"
            height="300px"
            borderRadius="49%"
            boxShadow="0 0 3px rgba(0, 0, 0, 0.5)"
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Text
              as={motion.p}
              animate={{rotate: [0, -180, -360], scale: [1, 0.9, 1]}}
              transition={{ease: "linear", duration: 5, repeat: Infinity}}
              color="white"
              fontSize="32px"
               
              fontWeight="bold">
              {number}
            </Text>
          </View>
        </View>}
      </View>
  );
});
