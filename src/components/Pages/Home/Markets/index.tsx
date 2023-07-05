import { Carousel } from '@mantine/carousel';
import { Title, Container, Divider, Loader, Center, Paper } from '@mantine/core';
import React from "react"
import { MarketData as data } from './Data';
import { useStyles } from './Styles';

const LazyStore = React.lazy(() => import("./MaketCard"))


const Markets = () => {
    
    const { classes } = useStyles()

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