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
  <Layout title="AgroExpress">
    <Container>
      <Title>
        My Blog <Badge>2022-</Badge>
      </Title>
      <P>
      An organic product sales app with fast delivery.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ASP.NET</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/agro-express.png" alt="Agro" />
      <WorkImage src="/images/works/agro-prod.png" alt="Agro" />
      <WorkImage src="/images/works/agro-metodos.png" alt="Agro" />
    </Container>
  </Layout>
)

export default Work
