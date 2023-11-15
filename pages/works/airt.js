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
  <Layout title="Airt">
    <Container>
      <Title>
        Airt <Badge>2023-</Badge>
      </Title>
      <P>
      Uma experiência visual utilizando Art, CSS, JavaScript effects e um pouco de I.A.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://airt.vercel.app/">
          https://airt.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript ,HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/cintra1/airt">
          https://github.com/cintra1/airt <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/airt-index.png" alt="Airt" />
      <WorkImage src="/images/works/airt-2.png" alt="Airt" />
      <WorkImage src="/images/works/airt-3.png" alt="Airt" />
      <WorkImage src="/images/works/air-end.png" alt="Airt" />
    </Container>
  </Layout>
)

export default Work
