import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbRadix from '../public/images/works/only-radix.png'
import thumbBlog from '../public/images/works/blog.png'
import thumbCBlog from '../public/images/works/cblog.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="radix" title="Radix" thumbnail={thumbRadix}>
              Application for delivery of organic products, with direct customer
              contact with the producer.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="blog" title="My Blog" thumbnail={thumbBlog}>
              Place where I write the day-to-day coding, showing experiences I
              had during the programming process.
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
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
