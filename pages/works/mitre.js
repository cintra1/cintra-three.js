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
  <Layout title="Essência Brasileira - Mitre">
    <Container>
      <Title>
        Essência Brasileira - Mitre <Badge>2023-</Badge>
      </Title>
      <P>
      Uma landing page para venda do empreendimento Essência Brasileira.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://essenciabrasileira-mitre.com.br/">
          https://essenciabrasileira-mitre.com.br/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>WordPress, Elementor, JavaScript ,HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="">
          <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mitre-pag.png" alt="Essência Brasileira - Mitre" />
    </Container>
  </Layout>
)

export default Work
