import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mateus Cintra
            </Heading>
            <p> Cintra Comunicação ( Developer / Designer ) </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/cintra-foto.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Cintra is a full-stack developer born in São Paulo with a passion
            cultivated since childhood about technology and the internet. His
            first computer was a Linux that served as a starting point for all
            the initial curiosity about technology and helped in the development
            of skills with digital equipment. When not online, he enjoys playing
            esports and skating, as well as spending time with family and
            friends. In the last year of his technician he developed a startup
            called 
             {' '}
            <NextLink href="/works/radix">
              <Link>Radix</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                {' '}
                My Portfolio{' '}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            NFTs
          </Heading>
          <Paragraph>
            Created a unique collection of NFTs on OpenSea. The NFTs were
            created with the aid of artificial intelligence (MidJourney),
            where it was exposed to several ideas of mine that I wanted to
            reproduce and create new characters, after teaching her the way I
            wanted, it started to be able to create NFT models and I edited
            them later.
          </Paragraph>
          
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/posts"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Check out
          </Button>
        </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <BioSection>
            <Paragraph>
              {' '}
              Music, Coding, Drums, Skateboarding, Sports (Soccer, Volleyball,
              Ping Pong), I.A, Crypto, NFTs{' '}
            </Paragraph>
          </BioSection>
        </Section>

        
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/cintra1" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<IoLogoGithub />}
                >
                  @cintra1
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/cintrinhaa" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<IoLogoTwitter />}
                >
                  @cintrinhaa
                </Button>
              </Link>
            </ListItem>
        
            <ListItem>
              <Link href="https://instagram.com/mateus_cintr" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<IoLogoInstagram />}
                >
                  @mateus_cintr
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="blue"
          >
            Principal works
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}
export default Home
export { getServerSideProps } from '../components/chakra'
