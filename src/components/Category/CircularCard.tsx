import { Card, Title, createStyles, } from '@mantine/core'
import { iCategory } from '.'
import { useHover, useMediaQuery } from '@mantine/hooks'

const useStyles = createStyles(() => ({
    card: {
        cursor: "pointer",
        background: "linear-gradient(180deg, rgba(30, 0, 0, 0.75) 0%, rgba(34, 139, 230, 0.55) 90%), url('./src/assets/clothes.jpg')",
        backdropFilter: "blur(.5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        color: "red",
        transition: ".2s",
        "&:hover": {
            boxShadow: "0 0 15px 1px black"
        }
    }
}))

const CircularCard = ({ title }: iCategory) => {
    const { hovered, ref }: { hovered: boolean, ref: any } = useHover()
    const smallScreen = useMediaQuery('(min-width:56.25rem)')
    const { classes } = useStyles()

    return (
        <Card component={"a"} href="#" ref={ref} withBorder shadow='lg' h={!smallScreen ? 150 : 200} w={!smallScreen ? 150 : 200} radius={'100%'} className={classes.card} >
            <Card.Section >
                <Title fz={"lg"} tt={"uppercase"} sx={{ transition: ".3s" }} color={!hovered ? 'white' : 'red'} > {title}
                </Title></Card.Section>
        </Card>
    )
}

export default CircularCard