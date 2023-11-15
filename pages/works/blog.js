import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="My Blog">
    <Container>
      <Title>
        My Blog <Badge>2022-</Badge>
      </Title>
      <P>
        Lugar onde eu mostro meus códigos, mostrando as experiências tive durante o processo de programação.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cintra1.github.io/cblog/">
          https://cintra1.github.io/cblog/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/blog-index.png" alt="Blog" />
      <WorkImage src="/images/works/blog-double.png" alt="Blog" />
      <WorkImage src="/images/works/blog-coffe.png" alt="Blog" />
    </Container>
  </Layout>
)

export default Work
