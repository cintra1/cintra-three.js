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
  <Layout title="Cintra Sales + Gear SEO">
    <Container>
      <Title>
        Cintra Sales + Gear SEO <Badge>2023-</Badge>
      </Title>
      <P>
      Landing Page para divulgação de serviços de SEO.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.cintracomunicacao.com.br/gear">
          https://www.cintracomunicacao.com.br/gear <ExternalLinkIcon mx="2px" />
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
      </List>

      <WorkImage src="/images/works/gearcintra-pag.png" alt="Cintra Sales + Gear SEO" />
    
    </Container>
  </Layout>
)

export default Work
