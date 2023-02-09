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

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="airt" title="Airt" thumbnail={thumbAirt}>
            A visual experience powered by Art, CSS, JavaScript effects a little artificial intelligence.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="blog" title="My Blog" thumbnail={thumbBlog}>
              Place where I write the day-to-day coding, showing experiences I
              had during the programming process.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="radix" title="Radix" thumbnail={thumbRadix}>
              Application for delivery of organic products, with direct customer
              contact with the producer.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="grok" title="Grok" thumbnail={thumbGrok}>
            With our new application, exchange messages quickly and in a simplified way.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>

      <Container>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="cblog"
              title="Cintra Comunicação&apos;s Blog"
              thumbnail={thumbCBlog}
            >
              A blog to find out about the company&apos;s services and the main news
              about digital marketing.
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>

      <Container>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="rapport"
              title="Rapport Comunicação"
              thumbnail={thumbRapport}
            >
              An application that manages all your company&apos;s customers, orders and billing.
            </WorkGridItem>
          </Section>

           <Section>
            <WorkGridItem
              id="kort"
              title="Kort"
              thumbnail={thumbKort}
            >
              An application that maps and indicates stores and restaurants around you.
            </WorkGridItem>
          </Section>

            <Section>
            <WorkGridItem
              id="agro"
              title="AgroExpress"
              thumbnail={thumbAgro}
            >
              An organic product sales app with fast delivery.
            </WorkGridItem>
          </Section>

          
          <Section>
            <WorkGridItem
              id="calc"
              title="Scientific Calculator"
              thumbnail={thumbCalc}
            >
              My first project with android Studio was this scientific calculator.
            </WorkGridItem>
          </Section>


        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
