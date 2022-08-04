import { FC, ReactNode } from 'react';
import { view, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import styled, { useTheme } from 'styled-components';
import { StylesProps } from 'styled-system';


export interface HeaderProps extends StylesProps, HTMLHeadElement {}

const HeaderContainer = styled.header<Partial<ViewProps>>(view)

export const Header: FC<ViewProps> = props => {

  const { children } = props;

  const theme = useTheme();

  return (
    <HeaderContainer
      position="fixed"
      top={0}
      zIndex={11}
      backgroundColor={theme.colors.background.dark}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.5)"
      height={theme.headerHeight}
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <>
        <Title fontWeight="normal" display="flex" flexDirection="row" alignItems="center" color="white">
          <img style={{marginRight: '-20px'}} src="https://kilolab-next-template.netlify.app/logo.svg" width={theme.headerHeight} height={theme.headerHeight} alt="kilolab logo" />
          iloLab
        </Title>
      {children}
      </>
    </HeaderContainer>
  )
}
