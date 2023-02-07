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
  <Layout title="Rapport">
    <Container>
      <Title>
        Rapport <Badge>2021-</Badge>
      </Title>
      <P>
      An application that manages all customers, orders and final billing of your company, displaying profit and loss if any and adapting to your choice of day, month or year.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C# </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/rapport.png" alt="Rapport" />
      <WorkImage src="/images/works/rapport-1.png" alt="Rapport" />
      <WorkImage src="/images/works/rapport-2.png" alt="Rapport" />
      <WorkImage src="/images/works/rapport-3.png" alt="Rapport" />
    </Container>
  </Layout>
)

export default Work
