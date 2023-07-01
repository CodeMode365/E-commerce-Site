import { Title, Image, createStyles, Text, Paper, rem, Button, } from '@mantine/core'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React from 'react'


export const useStyles = createStyles((theme) => ({
    card: {
        height: rem(200),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: "relative"
    },
    lazyImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius: theme.radius.md,
        filter: "brightness(.8)"
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
    btn: {
        transition: ".4s",
        "&:hover": {
            cursor: "pointer",
            // background: theme.colors.blue[7],
            // color: "#fff"
            backdropFilter: 'brightness(.2)',
        }
    }
}));


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