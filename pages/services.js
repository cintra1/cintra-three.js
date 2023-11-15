import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbPortfolio from '../public/images/works/banner-opensea.png'
import thumbPortfolio1 from '../public/images/works/banner-instagram.png'
import thumbPortfolio2 from '../public/images/works/banner-twitter.png'
import thumbPortfolio3 from '../public/images/works/banner-mid.png'
import thumbPortfolio4 from '../public/images/works/servicos-1.png'
import thumbPortfolio5 from '../public/images/works/servicos-2.png'
import thumbPortfolio6 from '../public/images/works/servicos-3.png'
import thumbPortfolio7 from '../public/images/works/servicos-4.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Serviços
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Criação de Website"
            thumbnail={thumbPortfolio4}
            href="https://opensea.io/collection/harunai-surface"
          />
           <GridItem
            title="Hospedagem de Website"
            thumbnail={thumbPortfolio5}
            href="https://midjourney.com/home/?callbackUrl=%2Fapp%2F"
          />  
            <GridItem
            title="Design para Rede Sociais"
            thumbnail={thumbPortfolio7}
            href="https://mobile.twitter.com/1harunai"
          />
            <GridItem
            title="Ghost Copy"
            thumbnail={thumbPortfolio6}
            href="https://www.instagram.com/harunaijpg/"
          />
           
          
         
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
