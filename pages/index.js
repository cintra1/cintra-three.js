import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  SimpleGrid,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import thumbYouTube from '../public/images/works/harunai-eyecatch12.png'
import thumbInkdrop from '../public/images/works/harunai-eyecatch22.png'
import { BioSection, BioYear } from '../components/bio'
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
            Sobre mim
          </Heading>
          <Paragraph>
            Olá! Está a procura de um serviço de criação de sites ou design? Sou Desenvolvedor Web e Web Designer, com mais de 4 anos de experiência com programação e design. Crio sites profissionais, totalmente responsivos e utilizando UI/UX Design. Está interessado no meu trabalho? De uma olhada no meu portfólio.
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
            Bio
          </Heading>
          <BioSection>
            <BioYear>2005</BioYear>
            Nascido em São Paulo, Brasil.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Concluiu o Ensino Médio como Técnico em Desenvolvimento de Sistemas na Escola Técnica Estadual de São Paulo (ETESP).
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Ingressou no curso de Sistemas de Informação na Universidade de São Paulo
            Paulo (USP).
          </BioSection>
        </Section>

      <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Contato
          </Heading>
          <Paragraph>
            Quer conversar um pouco sobre seu projeto e esclarecer suas dúvidas sobre meus serviços? Vamos marcar uma chamada ou
            conversar por mensagem se você preferir para que possamos concluir com sucesso a criação de seu site ou design.
          </Paragraph>
          </Section>
          <Section>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/posts"
            thumbnail={thumbYouTube}
          >
          </GridItem>
          <GridItem
            href="/posts"
            thumbnail={thumbInkdrop}
          >
          </GridItem>
        </SimpleGrid>
          
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://api.whatsapp.com/send?phone=5511977501867&text=Ol%C3%A1,%20tenho%20interesse%20em%20"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="blue"
          >
            Whatsapp
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
              Música, Programar, Skateboarding, Esportes (Futebol, Voleibol,
              Ping Pong, Basquete), I.A, Crypto.
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
                  leftIcon={<IoLogoBehance />}
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

     
      </Container>
    </Layout>
  )
}
export default Home
export { getServerSideProps } from '../components/chakra'
