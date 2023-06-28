import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Title, useMantineTheme, Container } from '@mantine/core';
import CardContainer from './Card';

// import Card from './Card'
// import { SimpleGrid } from '@mantine/core'

const data = [
    {
        image: "./src/assets/clothes.jpg",
        title: 'Civil Mall',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'KL Tower',
        category: 'godown',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Swyambhu Super Store',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Bhatbhatenti, Chabhil',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Tokha Super Mart',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Bhatbhateni, lalitpur',
        category: 'mall',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Bhatbhateni, Bhaktapur',
        category: 'store',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'Civil Mall',
        category: 'store',
    },
    {
        image: "./src/assets/clothes.jpg",
        title: 'BG Mall',
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
        <Container my={40} size="md">
            <Title align='center' my={10}>Our Markets</Title>
            <Carousel
                slideSize="33.33%"
                breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
                slideGap="xl"
                align="start"
                // slidesToScroll={mobile ? 1 : 2}
                slidesToScroll={1}
                loop={true}
            >
                {slides}
            </Carousel>
        </Container>
    )
}

export default Markets