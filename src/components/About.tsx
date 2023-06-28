import { Container, Flex, Group, Text, Image, Title } from '@mantine/core'
import { useTheme } from '@emotion/react'

const About = () => {
    const theme = useTheme()
    return (
        <Container my={30}>
            <Flex>
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
        </Container>
    )
}

export default About