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
  <Layout title="Bressan Odontologia">
    <Container>
      <Title>
        Bressan Odontologia <Badge>2023-</Badge>
      </Title>
      <P>
      Uma landing page para um consultório odontológico.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://bressanodontologia.com.br/">
          https://bressanodontologia.com.br/ <ExternalLinkIcon mx="2px" />
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
          <Link href="https://www.behance.net/gallery/179251397/Landing-Page-for-a-Dental-Clinic">
          https://www.behance.net/gallery/179251397/Landing-Page-for-a-Dental-Clinic <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bressan-pag.png" alt="Bressan Odontologia" />
    
    </Container>
  </Layout>
)

export default Work
