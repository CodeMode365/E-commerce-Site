import { Container, Flex, Text, Image, Title, Accordion, Divider, createStyles } from '@mantine/core'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mantine/hooks'

const useStyles = createStyles((theme) => ({
    content: {
        [theme.fn.smallerThan('md')]: {
            marginBlock: 20

        },
        [theme.fn.largerThan('sm')]: {
            marginLeft: 20,
            width: "120%"
        }
    },

}))

const About = () => {
    const theme = useTheme()
    const smallScreen = useMediaQuery('(min-width:56.25rem)')
    const accWidth = smallScreen ? "70%" : "100%"
    const { classes } = useStyles()
    return (
        <Container my={30} 
            // sx={{ minWidth: "80%", maxWidth: "56.75rem" }}
            size="md"
        >
            <Title align='center' mb={15}>About <Text display={"inline"} color={theme.colors.blue[7]}>Our Store</Text></Title>
            <Flex direction={smallScreen ? "row" : "column"} >
                <Image src={"./src/assets/clothes.jpg"} />
                <Text align='justify' className={classes.content}>
                    &nbsp; Welcome to our Store, your ultimate destination for all your shopping needs! We are an online eCommerce store dedicated to providing you with a seamless and enjoyable shopping experience. Our goal is to offer a wide range of high-quality products, exceptional customer service, and convenient shopping
                    options right at your fingertips.
                    <br />
                    &nbsp; &nbsp;  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias doloribus facere impedit fuga reprehenderit suscipit praesentium sunt, maxime, minus blanditiis nobis architecto, aperiam pariatur!
                </Text>
            </Flex>
            <Divider my={15} />
            <Title align='center' mb={15} >Why  <Text display={"inline"} color={theme.colors.blue[7]}>Our Store</Text></Title>
            <Flex direction={smallScreen ? "row-reverse" : "column"} my={30} >
                <Image src={"./src/assets/clothes.jpg"} />
                <Flex direction={"column"} ml={smallScreen ? 25 : 0} mt={10} sx={{ width: accWidth }} mr={!smallScreen ? 25 : 0}>
                    <Accordion defaultValue="customization" >
                        <Accordion.Item value="Mission">
                            <Accordion.Control>Our Mission</Accordion.Control>
                            <Accordion.Panel>At Our Store, our mission is to revolutionize the way you shop by bringing together a curated selection of products that cater to your diverse needs.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Selection">
                            <Accordion.Control>Extensive Product Selection</Accordion.Control>
                            <Accordion.Panel>We take pride in our vast collection of products that span across various categories. Whether you're looking for the latest fashion trends, we've got you covered. </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Customer">
                            <Accordion.Control>Unparalleled Customer Service</Accordion.Control>
                            <Accordion.Panel>Your satisfaction is our priority. We are committed to providing exceptional customer service at your every step. Our knowledgeable and friendly support team is always ready to assist you. </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Experience">
                            <Accordion.Control>Seamless Shopping Experience</Accordion.Control>
                            <Accordion.Panel>We understand the importance of a smooth and hassle-free shopping experience. That's why we've designed our website with user-friendliness in mind.</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Flex >
            </Flex>
            <Divider my={35} mx={30}/>

        </Container >
    )
}

export default About