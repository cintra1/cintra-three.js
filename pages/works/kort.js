import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Kort">
    <Container>
      <Title>
        Kort <Badge>2022-</Badge>
      </Title>
      <P>
      An app that maps and indicates stores and restaurants around you, based on reviews provided by Google.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ASP.NET, MasterPage</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kort.png" alt="Kort" />
      <WorkImage src="/images/works/kort-mapa.png" alt="Kort" />

    </Container>
  </Layout>
)

export default Work
