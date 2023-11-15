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
  <Layout title="FlyFrare">
    <Container>
      <Title>
        FlyFrare <Badge>2023-</Badge>
      </Title>
      <P>
      Website para venda de aeronaves (Helicópteros e Aviões), e de serviços especializados.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="Em processo de hospedagem.">
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
          <Link href="https://www.behance.net/gallery/177328471/Web-Design-for-Airplane-and-Helicopter-Sales-Website">
          https://www.behance.net/gallery/177328471/Web-Design-for-Airplane-and-Helicopter-Sales-Website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/flyfrare-pag.png" alt="FlyFrare" />

    </Container>
  </Layout>
)

export default Work
