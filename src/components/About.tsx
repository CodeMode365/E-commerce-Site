import { Container, Flex, Text, Image, Title } from '@mantine/core'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mantine/hooks'

const About = () => {
    const theme = useTheme()
    const smallScreen = useMediaQuery('(min-width:56.25rem)')

    return (
        <Container my={30} sx={{minWidth:"80%", maxWidth:"56.75rem"}}>
            <Flex direction={smallScreen ? "row" : "column"} >
                <Image src={"./src/assets/clothes.jpg"} height={400} />
                <Flex direction={"column"} ml={25}>
                    <Title>About <Text display={"inline"} color={theme.colors.blue[7]}>Our Store</Text></Title>
                    <Text align='justify'>

                        &nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a ratione saepe aut harum tempora dolorum aperiam, voluptatem, nam molestiae eum possimus. Nobis, nam ad!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ea. Hic id error alias quisquam ducimus officiis tenetur unde tempore.
                        <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus.
                    </Text>
                </Flex >
            </Flex>
        </Container >
    )
}

export default About