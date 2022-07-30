import { Header as HeaderContainer, HeaderProps as HeaderBaseProps } from '@kilo-lab/web-design.header';
import { Title } from '@kilo-lab/web-design.title';
import { useTheme } from 'styled-components';

export interface HeaderProps extends HeaderBaseProps {

}

export const Header = () => {

  const theme = useTheme();
  return (
    <HeaderContainer
      backgroundColor="rgba(0, 0, 0, 0.8)"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.5)"
      height={theme.headerHeight}
      width="100vw"
      title={
        <Title fontWeight="normal" display="flex" flexDirection="row" alignItems="center" color="white">
          <img style={{marginRight: '-5px'}} src="https://kilolab-next-template.netlify.app/logo.svg" width={theme.headerHeight} height={theme.headerHeight} alt="kilolab logo" />
          iloLab
        </Title>
      }
    />
  )
}
