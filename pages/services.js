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
              Está precisando de um site completo, totalmente responsivo e do jeito que você sempre quis? Clique aqui!
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="hospedagem" title="Hospedagem de Website" thumbnail={thumbPortfolio5}>
              Está precisando hospedar seu site mas não entende de hosting? Clique aqui!
            </WorkGridItem>
          </Section>

           <Section>
            <WorkGridItem id="design" title="Design para Rede Sociais" thumbnail={thumbPortfolio7}>
              Está precisando melhorar o seu perfil ou da sua empresa nas redes sociais para ter mais engajamento? Clique aqui!
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="arte" title="Criação de Artes, Banners e Flyers" thumbnail={thumbPortfolio8}>
              Está precisando de alguma arte, banners ou flyers? Clique aqui!
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="arte" title="Criação de Atalhos Personalizados" thumbnail={thumbPortfolio9}>
              Atalhos personalizados automatizam e facilitam o dia a dia, simplificando tarefas que antes eram muito repetitivas.
            </WorkGridItem>
          </Section>
         
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
