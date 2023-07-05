import { Title, Image, Text, Paper, Button, } from '@mantine/core'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React from 'react'
import { useStyles } from './Styles';

interface CardProps {
    image: string;
    title: string;
    category: string;
}

const CardContainer = ({ image, title, category }: CardProps) => {
    const { classes } = useStyles()
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `linear-gradient(45deg, rgba(0,0,0,.7) 0%, rgba(255,255,255,.3) 90%)` }}
            className={classes.card}
        >
            <div style={{ zIndex: 50 }}>
                <Text color='blue' className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title} >
                    {title}
                </Title>
            </div>
            <Button sx={{ zIndex: 50, position: "absolute", bottom: 15 }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} className={classes.btn}>
                Read article
            </Button>
            <React.Suspense fallback={<Image src={"./placeholder.png"} className={classes.lazyImage} />}>
                <LazyLoadImage src={image} alt={title} className={classes.lazyImage} effect='blur' placeholderSrc={"./placeholder.png"} />
            </React.Suspense>
        </Paper>)
}

export default CardContainer