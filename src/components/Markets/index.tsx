import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Center, Container } from '@mantine/core';
import CardContainer from './Card';

// import Card from './Card'
// import { SimpleGrid } from '@mantine/core'

const data = [
    {
        image: "./src/assets/clothes.jpg",
        title: 'Best forests to visit in North America',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Hawaii beaches review: better than you think',
        category: 'godown',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Mountains at night: 12 best locations to enjoy the view',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Mountains at night: 12 best locations to enjoy the view',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Mountains at night: 12 best locations to enjoy the view',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Mountains at night: 12 best locations to enjoy the view',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Mountains at night: 12 best locations to enjoy the view',
        category: 'store',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Mountains at night: 12 best locations to enjoy the view',
        category: 'store',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Mountains at night: 12 best locations to enjoy the view',
        category: 'store',
    },

];

const Markets = () => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item, ind) => (
        <Carousel.Slide key={item.title + ind}>
            <CardContainer {...item} />
        </Carousel.Slide>
    ));
    return (
        <Container my={40}>
            <Title align='center' my={10}>Our Markets</Title>
            <Carousel
                slideSize="33.33%"
                breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
                slideGap="xl"
                align="start"
                slidesToScroll={mobile ? 1 : 2}
                // slidesToScroll={1}
            >
                {slides}
            </Carousel>
        </Container>
    )
}

export default Markets