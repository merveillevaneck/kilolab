import React from 'react';
import { view, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import styled, { useTheme } from 'styled-components';
import { TitleGraphic } from './TitleGraphic';
import { StylesProps } from 'styled-system';

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

  return (
    <FooterContainer
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
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
        alignItems="center"
        image={
          <img src="https://kilolab-next-template.netlify.app/earth_spin.svg" width="200px" height="200px" />
        }
        title={
          <Title  color="white" fontSize="30px" marginLeft="-50px" marginBottom="20px">
            KiloLab
            <br />
            Pty Ltd
          </Title>
        }
      />
      <div style={{color: 'white'}}>
        <Title color={theme.colors.header}>
          Location
        </Title>
        <p style={{fontSize:"14px"}}>
          51 Mount Du Roche Crescent<br />
          Somerset Ridge<br />
          Somerset West<br />
          Cape Town<br />
          7130<br />
        </p>
      </div>
      <div style={{color: 'white'}}>
        <Title color={theme.colors.header}>
          Contact Us
        </Title>
        <p>
          info@kilolab.co.za
          <br />
          +27 84 254 8270
        </p>
      </div>
    </FooterContainer>
  )
}
