import { Container, Flex, Text, Image, Title, Accordion, Divider } from '@mantine/core'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mantine/hooks'
const About = () => {
    const theme = useTheme()
    const smallScreen = useMediaQuery('(min-width:56.25rem)')
    const accWidth = smallScreen ? "70%" : "100%"

    return (
        <Container my={30} 
        // sx={{ minWidth: "80%", maxWidth: "56.75rem" }}
        size="md"
        >
            <Title align='center' mb={15}>About <Text display={"inline"} color={theme.colors.blue[7]}>Our Store</Text></Title>
            <Flex direction={smallScreen ? "row" : "column"} >
                <Image src={"./src/assets/clothes.jpg"} height={400} />
                <Flex direction={"column"} ml={25}>
                    <Text align='justify' my={20}>

                        &nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a ratione saepe aut harum tempora dolorum aperiam, voluptatem, nam molestiae eum possimus. Nobis, nam ad!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ea. Hic id error alias quisquam ducimus officiis tenetur unde tempore.
                        <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus.
                    </Text>
                </Flex >
            </Flex>
            <Divider my={15} />
            <Title align='center' mb={15} >Why  <Text display={"inline"} color={theme.colors.blue[7]}>Our Store</Text></Title>
            <Flex direction={smallScreen ? "row-reverse" : "column"} my={30} >
                <Image src={"./src/assets/clothes.jpg"} height={400} />
                <Flex direction={"column"} ml={25} sx={{ width: accWidth }} mr={25}>
                    <Accordion defaultValue="customization" >
                        <Accordion.Item value="Advantage 1">
                            <Accordion.Control>Advantage 1</Accordion.Control>
                            <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Advantage2">
                            <Accordion.Control>Advantage2</Accordion.Control>
                            <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Advantage3">
                            <Accordion.Control>No annoying focus ring</Accordion.Control>
                            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Advantage4">
                            <Accordion.Control>No annoying focus ring</Accordion.Control>
                            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Flex >
            </Flex>
            {/* <Divider my={15} /> */}

        </Container >
    )
}

export default About