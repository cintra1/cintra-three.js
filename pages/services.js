import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { WorkGridItem } from '../components/grid-item'
import thumbPortfolio from '../public/images/works/banner-opensea.png'
import thumbPortfolio1 from '../public/images/works/banner-instagram.png'
import thumbPortfolio2 from '../public/images/works/banner-twitter.png'
import thumbPortfolio3 from '../public/images/works/banner-mid.png'
import thumbPortfolio4 from '../public/images/works/servicos-1.png'
import thumbPortfolio5 from '../public/images/works/servicos-2.png'
import thumbPortfolio6 from '../public/images/works/servicos-3.png'
import thumbPortfolio7 from '../public/images/works/servicos-4.png'
import thumbPortfolio8 from '../public/images/works/servicos-5.png'
import thumbPortfolio9 from '../public/images/works/servicos-6.png'

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
            href="https://api.whatsapp.com/send?phone=5511977501867&text=Estou%20interessado%20no%20seu%20servi%C3%A7o%20de:%20Cria%C3%A7%C3%A3o%20de%20Website."
          />
           <GridItem
            title="Hospedagem de Website"
            thumbnail={thumbPortfolio5}
            href="https://api.whatsapp.com/send?phone=5511977501867&text=Estou%20interessado%20no%20seu%20servi%C3%A7o%20de:%20Hospedagem%20de%20Website."
          />  
            <GridItem
            title="Design para Rede Sociais"
            thumbnail={thumbPortfolio7}
            href="https://api.whatsapp.com/send?phone=5511977501867&text=Estou%20interessado%20no%20seu%20servi%C3%A7o%20de:%20Design%20para%20Redes%20Sociais."
          />
            <GridItem
            title="Criação de Artes, Banners e Flyers"
            thumbnail={thumbPortfolio8}
            href="https://api.whatsapp.com/send?phone=5511977501867&text=Estou%20interessado%20no%20seu%20servi%C3%A7o%20de:%20Cria%C3%A7%C3%A3o%20de%20Artes,%20Banners%20e%20Flyers."
          />
            <GridItem
            title="Criação de Atalhos Personalizados"
            thumbnail={thumbPortfolio9}
            href="https://api.whatsapp.com/send?phone=5511977501867&text=Estou%20interessado%20no%20seu%20servi%C3%A7o%20de:%20Cria%C3%A7%C3%A3o%20de%20Atalhos%20Personalizados"
          />
         
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
