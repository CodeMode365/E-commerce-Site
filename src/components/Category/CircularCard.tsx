import { Card, Title } from '@mantine/core'
import React from 'react'
import { iCategory } from '.'
import { useHover, useMediaQuery } from '@mantine/hooks'

const CircularCard = ({ title }: iCategory) => {
    const { hovered, ref } = useHover()
    const smallScreen = useMediaQuery('(min-width:56.25rem)')

    return (
        <Card component={"a"} href="#" ref={ref} withBorder shadow='lg' h={!smallScreen ? 150 : 200} w={!smallScreen ? 150 : 200} radius={'100%'} sx={{ cursor: "pointer", backgroundImage: "url('./src/assets/clothes.jpg')", backdropFilter: "blur(.5)", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center" }} color="">
            <Card.Section >
                <Title fz={"lg"} tt={"uppercase"} sx={{ transition: ".3s" }} color={!hovered ? 'white' : 'blue'} > {title}
                </Title></Card.Section>
        </Card>
    )
}

export default CircularCard