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
  <Layout title="Scientific Calculator">
    <Container>
      <Title>
      Scientific Calculator <Badge>2021-</Badge>
      </Title>
      <P>
      In the systems development course, there was a subject on mobile, where I did this scientific calculator project.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Android Studio</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/calculadora.png" alt="Calculator" />
    </Container>
  </Layout>
)

export default Work
