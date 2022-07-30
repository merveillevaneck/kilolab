import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { View } from '@kilo-lab/web-design.compositions';
import styled, { useTheme } from 'styled-components';
import { TitleGraphic, CardLink } from '../components';
import { fontSize } from 'styled-system';

const List = styled.ul<FontSizeProps>`
  color: white;
  li {
    line-height: 1.5;
    ${fontSize}
  }
`;

const LI = styled.li`
  color: white;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Item = styled(LI)<FontSizeProps>(
  fontSize,
);

export default function Index() {

  const theme = useTheme();
  return (
    <View>
      <Text>henlo</Text>
    </View>
  );
}
