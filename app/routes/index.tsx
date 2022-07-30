import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import styled, { useTheme } from 'styled-components';
import { TitleGraphic, CardLink } from '../components';

const Link = styled.p`
  font-size: 90px;
  margin: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Main = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
  margin: 20px 0px;
`;

const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.4rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export default function Index() {

  const theme = useTheme();
  return (
      <Main>
        <TitleGraphic
          marginTop="50px"
          image={
            <img src="https://kilolab-next-template.netlify.app/earth_spin.svg" width="700px" height="700px" />
          }
          title={
            <Title textShadow="0px 1px 2px rgba(0, 0, 0, 0.8)" marginTop="100px" marginLeft="-150px" color="black" fontSize={90}>
              Welcome to<br />
              <Link style={{ color: theme.colors.primary }}>
                KiloLab&apos;s NextJS<br />
                Template
              </Link>
            </Title>
          }
        />

        <Text fontSize="1.5rem">
          Get started by editing{' '}
          <Code>pages/index.tsx</Code>
        </Text>
        
        <Grid>
          <CardLink
            width="250px"
            height="200px"
            padding="10px 20px"
            background={theme.colors.primary}
            href="https://www.kilolab.co.za"
            target="_blank"
            transition="all 0.1s linear"
            _hover={{
              opacity: 1,
              boxShadow: '0px 0px 10px grey',
              color: theme.colors.secondary
            }}
            boxShadow="0px 0px 5px grey"
            title="Custom Software"
            description="Looking for Custom Software? Visit our home page and tell us what you&apos;re looking for!"
          />
          <CardLink
            width="250px"
            height="200px"
            padding="10px 20px"
            background={theme.colors.primary}
            href="https://styled-system.com/"
            target="_blank"
            transition="all 0.1s linear"
            _hover={{
              opacity: 1,
              boxShadow: '0px 0px 10px grey',
              color: theme.colors.secondary
            }}
            boxShadow="0px 0px 5px grey"
            title="Styled System"
            description="We build our components using styled system! We know...we like it too. Check out their home page here."
          />
        </Grid>
        <Grid>
          <CardLink
            width="250px"
            height="200px"
            padding="10px 20px"
            background={theme.colors.primary}
            href="https://bit.cloud/kilo-lab/web-design"
            target="_blank"
            transition="all 0.1s linear"
            _hover={{
              opacity: 1,
              boxShadow: '0px 0px 10px grey',
              color: theme.colors.secondary
            }}
            boxShadow="0px 0px 5px grey"
            title="Components"
            description="Want to make your own Components? Visit our component registry and publish using Bit!"
          />
        </Grid>
      </Main>
  );
}
