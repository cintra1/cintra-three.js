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
         <Section>
            <WorkGridItem id="site" title="Criação de Website" thumbnail={thumbPortfolio4}>
              Landing Page para uma agência de vendas de websites.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="hospedagem" title="Hospedagem de Website" thumbnail={thumbPortfolio5}>
              Landing Page para uma agência de vendas de websites.
            </WorkGridItem>
          </Section>

           <Section>
            <WorkGridItem id="design" title="Design para Rede Sociais" thumbnail={thumbPortfolio7}>
              Landing Page para uma agência de vendas de websites.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="arte" title="Criação de Artes, Banners e Flyers" thumbnail={thumbPortfolio8}>
              Landing Page para uma agência de vendas de websites.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="arte" title="Criação de Atalhos Personalizados" thumbnail={thumbPortfolio9}>
              Landing Page para uma agência de vendas de websites.
            </WorkGridItem>
          </Section>
         
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
