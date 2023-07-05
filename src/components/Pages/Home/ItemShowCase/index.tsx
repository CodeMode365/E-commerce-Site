import { Container, Title, Divider, Text, Box } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
// import ItemCard from './Card'

const ItemShowCase = ({ title }: { title: string }) => {
    return (
        <Container size="md">
            <Box my={30}>
                <Title align='center' >{title}</Title>
                <Text align="center">Explore the New Items on Store</Text>
            </Box>
            <Carousel slideSize="25%"
                breakpoints={[{ maxWidth: 'sm', slideSize: '33.33%', slideGap: "sm" }, { maxWidth: 'md', slideSize: '33.33%', slideGap: "md" }]}
                slideGap="xl"
                align="start"
                slidesToScroll={1}
                loop={true}
            >
                {/* {[...Array(8).keys()].map((element, index) => (
                    <Carousel.Slide key={index}>
                        <ItemCard key={element} />
                    </Carousel.Slide>
                ))} */}
            </Carousel>
            <Divider my={20} mx={30} />
        </Container>
    )
}

export default ItemShowCase