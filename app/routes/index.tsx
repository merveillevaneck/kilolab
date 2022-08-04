import { useCallback } from 'react';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { View } from '@kilo-lab/web-design.compositions';
import styled, { useTheme } from 'styled-components';
import { fontSize, FontSizeProps } from 'styled-system';
import { useNavigate } from '@remix-run/react';
import {
  TitleSection,
  WhatWeDo,
  WhatWeOffer,
  DragMe,
  Projects,
  ContactUs,
  TitleGraphic,
  Page,
} from '../components';
import { useIsMobile } from '../hooks';

const List = styled.ul<FontSizeProps>`
  color: white;
  li {
    line-height: 1.5;
    ${fontSize}
  }
`;

const LI = styled.li`
  color: white;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Roboto, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Item = styled(LI)<FontSizeProps>(
  fontSize,
);

export default function Index() {

  const theme = useTheme();

  const navigate = useNavigate();

  const mobile = useIsMobile();

  const onContact = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  return (
    <View minHeight={`calc(100vh - ${theme.headerHeight}px - ${theme.footerHeight}px)`} width="100%">
      <TitleSection />
      <WhatWeDo />
      <WhatWeOffer />
      <DragMe />
      <Projects />
      <ContactUs />
      <View height="300px" width="100%"/>
    </View>
  );
}
