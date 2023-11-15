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
  <Layout title="Apatel">
    <Container>
      <Title>
        Apatel <Badge>2023-</Badge>
      </Title>
      <P>
      Uma landing page para uma empresa que vende equipamentos de segurança.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://apatel.com.br/">
          https://apatel.com.br/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>WordPress, Elementor, WooCommerce, JavaScript ,HTML, CSS</span>
        </ListItem>
             <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://www.behance.net/gallery/177328609/Safety-Equipment-Quote-Website-Apatel">
          https://www.behance.net/gallery/177328609/Safety-Equipment-Quote-Website-Apatel <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/apatel-pag.png" alt="Apatel" />
    </Container>
  </Layout>
)

export default Work
