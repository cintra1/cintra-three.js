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
  <Layout title="Hive">
    <Container>
      <Title>
        Hive <Badge>2023-</Badge>
      </Title>
      <P>
      Uma landing page para uma agência de criação de websites.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dev-hivecoding.pantheonsite.io/">
          https://dev-hivecoding.pantheonsite.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>WordPress, Elementor, Royal Addons, JavaScript ,HTML, CSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hive-pag.png" alt="Hive" />

    </Container>
  </Layout>
)

export default Work
