import { Container, Card, Title, Image, createStyles, Text, Paper, rem, Button } from '@mantine/core'
import React from 'react'


const useStyles = createStyles((theme) => ({
    card: {
        height: rem(200),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
        transition:".4s",
        "&:hover": {
            cursor: "pointer",
            background: theme.colors.blue[7],
            color:"#fff"
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
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Button variant="light" className={classes.btn}>
                Read article
            </Button>
        </Paper>
    )
}

export default CardContainer