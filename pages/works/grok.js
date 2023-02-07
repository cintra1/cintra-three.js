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
  <Layout title="Grok">
    <Container>
      <Title>
        Grok <Badge>2021-</Badge>
      </Title>
      <P>
      With our new application, exchange messages quickly and in a simplified way, easy to use functions, with a clean environment.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Async(JavaScript), HTML, CSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/grok-index.png" alt="Grok" />
      <WorkImage src="/images/works/grok-log.png" alt="Grok" />
      <WorkImage src="/images/works/grok-chat.png" alt="Grok" />

    </Container>
  </Layout>
)

export default Work
