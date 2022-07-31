import React from 'react';
import { View, view, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import styled, { useTheme } from 'styled-components';
import { TitleGraphic } from './TitleGraphic';
import { StylesProps } from 'styled-system';
import { motion } from 'framer-motion';
import { useIsMobile } from '~/hooks';

const FooterContainer = styled.footer<StylesProps>(
  view
);

export interface FooterProps extends ViewProps {
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = props => {

  const {
    children,
    ...rest
  } = props;

  const theme = useTheme();

  const mobile = useIsMobile();

  return (
    <FooterContainer
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      height="300px"
      alignItems="center"
      backgroundColor={theme.colors.primary}
      {...rest}
    >
      <TitleGraphic
        width="300px"
        height="250px"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        image={
          <img src="https://kilolab-next-template.netlify.app/earth_spin.svg" width="200px" height="200px" />
        }
        title={
          <Title  color="white" fontSize="30px" marginLeft="-50px" marginBottom="55px">
            KiloLab
            <br />
            Pty Ltd
          </Title>
        }
      />
      <View height="150px" style={{color: 'white'}}>
        <Title color={theme.colors.header}>
          Location
        </Title>
        <Text style={{fontSize:"14px"}}>
          51 Mount Du Roche Crescent<br />
          Somerset Ridge<br />
          Somerset West<br />
          Cape Town<br />
          7130<br />
        </Text>
      </View>
      <View height="150px" style={{color: 'white'}}>
        <Title color={theme.colors.header}>
          Contact Us
        </Title>
        <Text>
          info@kilolab.co.za
          <br />
          +27 84 254 8270
        </Text>
      </View>
    </FooterContainer>
  )
}
