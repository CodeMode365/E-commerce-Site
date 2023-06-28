import { Container, SimpleGrid, Title, Text, Group, Box } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import React from 'react'
import ItemCard from './Card'

const ItemShowCase = () => {
    return (
        <Container>
            <Box my={10}>
                <Title align='center' >New Arrivals</Title>
                <Text align="center">Explore the New Items on Store</Text>
            </Box>
            {/* <SimpleGrid cols={4} breakpoints={[{ maxWidth: "md", cols: 3 }, { maxWidth: "sm", cols: 3 }, { maxWidth: "xs", cols: 2 }]}> */}
            <Carousel slideSize="25%"
                breakpoints={[{ maxWidth: 'sm', slideSize: '50%', slideGap: 1, slideGap: "md" },{ maxWidth: 'md', slideSize: '33.33%', slideGap: "md", slideGap: "md" }]}
                slideGap="xl"
                align="start"
                // slidesToScroll={mobile ? 1 : 2}
                slidesToScroll={1}
                loop={true}
        
            >
                {[...Array(8).keys()].map((element, index) => (
                    <Carousel.Slide key={index}>
                        <ItemCard key={element} />
                    </Carousel.Slide>
                ))}
                {/* </SimpleGrid> */}
            </Carousel>
        </Container>
    )
}

export default ItemShowCase