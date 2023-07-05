import { Card, Title} from '@mantine/core'
import { useHover, useMediaQuery } from '@mantine/hooks'
import { iCategory } from '../Data'
import { useStyles } from './Styles'

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