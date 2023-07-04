import { Carousel } from '@mantine/carousel';
import { Title, Container, Divider, Loader, Center, createStyles, Paper } from '@mantine/core';
import React from "react"

const LazyStore = React.lazy(() => import("./Card"))

const useStyles = createStyles((theme) => ({
    holder: {
        paddingBlock: 50,
        backgroundImage: "linear-gradient(45deg, rgba(80,130,200,.7) 0%, rgba(255,255,255,.3) 90%)",
        borderRadius: theme.radius.md
    }
}))

const data = [
    {
        image: "./Stores/store1.jpg",
        title: 'Civil Mall',
        category: 'mall',
    },
    {
        image: "./Stores/store2.jpg",
        title: 'KL Tower',
        category: 'godown',
    },
    {
        image: "./Stores/store3.jpg",
        title: 'Swyambhu Super Store',
        category: 'mall',
    },
    {
        image: "./Stores/store9.jpg",
        title: 'Bhatbhatenti, Chabhil',
        category: 'mall',
    },
    {
        image: "./Stores/store5.jpg",
        title: 'Tokha Super Mart',
        category: 'mall',
    },
    {
        image: "./Stores/store6.jpg",
        title: 'Bhatbhateni, lalitpur',
        category: 'mall',
    },
    {
        image: "./Stores/store7.jpg",
        title: 'Bhatbhateni, Bhaktapur',
        category: 'store',
    },
    {
        image: "./Stores/store8.jpg",
        title: 'Civil Mall',
        category: 'store',
    },
    {
        image: "./Stores/store9.jpg",
        title: 'BG Mall',
        category: 'store',
    },

];

const Markets = () => {
    const { classes } = useStyles()
    // const slides = 
    // ));
    return (
        <Container mt={40} size="md">
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
                {data.map((item, ind) => (
                    <Carousel.Slide key={item.title + ind}>
                        <React.Suspense fallback={
                            <Paper className={classes.holder}>
                                <Center>
                                    <Loader variant='oval' />
                                </Center>
                            </Paper>}>
                            <LazyStore {...item} />
                        </React.Suspense>
                    </Carousel.Slide>))}
            </Carousel>
            <Divider mt={35} />
        </Container>
    )
}

export default Markets