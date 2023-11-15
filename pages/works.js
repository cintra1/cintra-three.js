import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbRadix from '../public/images/works/radix-eyecatch1.png'
import thumbBlog from '../public/images/works/blog-eyecatch.png'
import thumbGrok from '../public/images/works/grok-eyecatch.png'
import thumbCBlog from '../public/images/works/cblog-eyecatch1.png'
import thumbRapport from '../public/images/works/rapport-eyecatch.png'
import thumbAgro from '../public/images/works/agroexpress-eyecatch.png'
import thumbKort from '../public/images/works/kort-eyecatch.png'
import thumbCalc from '../public/images/works/calculadora.png'
import thumbAirt from '../public/images/works/airt-eyecatch.png'
import thumbDentist from '../public/images/works/bressan-eyecatch.png'
import thumbApatel from '../public/images/works/apatel-eyecatch-2.png'
import thumbFly from '../public/images/works/flyfrare-eyecatch.png'
import thumbCG from '../public/images/works/cintrag-eyecatch-2.png'
import thumbHive from '../public/images/works/hive-eyecatch.png'
import thumbMitre from '../public/images/works/banner-mitre-blog-2.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Portfolio
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="hive" title="Hive Coding" thumbnail={thumbHive}>
              Landing Page para uma agência de vendas de websites.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="mitre" title="Essência Brasileira Mitre" thumbnail={thumbMitre}>
              Landing Page para o setor imobiliário.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="cintra+gear" title="Cintra Sales + Gear SEO" thumbnail={thumbCG}>
              Landing Page para divulgação de serviços de SEO.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="bressan" title="Bressan Odontologia" thumbnail={thumbDentist}>
              Landing Page completa para um consultório odontológico.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="flyfrare" title="Flyfrare" thumbnail={thumbFly}>
              Website para venda de aeronaves (Helicópteros e Aviões), e de serviços especializados.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="apatel" title="Apatel" thumbnail={thumbApatel}>
              E-Commerce para uma empresa de venda de produtos de segurança, com sistema de orçamento.
            </WorkGridItem>
          </Section>
           <Section>
            <WorkGridItem id="radix" title="Radix" thumbnail={thumbRadix}>
              Aplicação de delivery para produtos orgânicos, com contato direto entre cliente e produtor.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="blog" title="Meu Blog" thumbnail={thumbBlog}>
               Lugar onde eu mostro meus códigos, mostrando as experiências tive durante o processo de programação.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="airt" title="Airt" thumbnail={thumbAirt}>
            Uma experiência visual utilizando Art, CSS, JavaScript effects e um pouco de I.A.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>

      <Container>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Colaborações
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="cblog"
              title="Blog da Cintra Comunicação"
              thumbnail={thumbCBlog}
            >
              Um blog para conhecer os serviços da empresa e as principais notícias sobre marketing digital.
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>

      <Container>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Trabalhos Antigos
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>

           <Section>
            <WorkGridItem
              id="kort"
              title="Kort"
              thumbnail={thumbKort}
            >
              Uma aplicação que mapeia lojas e restaurantes ao seu redor.
            </WorkGridItem>
          </Section>

            <Section>
            <WorkGridItem
              id="agro"
              title="AgroExpress"
              thumbnail={thumbAgro}
            >
              Um aplicativo de vendas de produtos saudáveis.
            </WorkGridItem>
          </Section>



        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
