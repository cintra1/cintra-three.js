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
  <Layout title="Radix">
    <Container>
      <Title>
        Radix <Badge>2022-</Badge>
      </Title>
      <P>
        Aplicação de delivery para produtos orgânicos, com contato direto entre cliente e produtor.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cintra1.github.io/radix/">
          https://cintra1.github.io/radix/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Laravel, JavaScript ,HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://cintra1.github.io/cblog/php.html">
          How I developed the radix <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
          <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://www.behance.net/gallery/174047073/Website-for-a-Organic-Delivery-Aplication-Radix">
          https://www.behance.net/gallery/174047073/Website-for-a-Organic-Delivery-Aplication-Radix <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/radix-eyecatch.png" alt="Radix" />
      <WorkImage src="/images/works/radix-index.png" alt="Radix" />
      <WorkImage src="/images/works/radix-initial-prod.png" alt="Radix" />
    </Container>
  </Layout>
)

export default Work
