import React, { useState } from 'react'
import Card from "../../ItemShowCase/Card"
import { Container, SimpleGrid, Box, Title, Stack, Text, Group, createStyles, MultiSelect, NativeSelect } from '@mantine/core'

const useStyles = createStyles((theme) => (
    {
        Filter: {
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing.md,
            border: theme.colorScheme === "light" ? `2px solid ${theme.colors.gray[3]}` : `2px solid ${theme.colors.gray[8]}`,
            padding: theme.spacing.sm,
            borderRadius: theme.radius.md,
            marginBlock: theme.spacing.sm,

        }
    }

))

interface iData {
    value: string,
    label: string
}

const data: iData[] = [
    { value: 'New', label: 'New' },
    { value: 'Trending', label: 'Trending' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Upper', label: 'Upper' },
    { value: 'Lower', label: 'Lower' },
    { value: 'Shoes', label: 'Shoes' },
    { value: 'Top', label: 'Top Rated' },
]

const index = () => {
    const { classes } = useStyles()
    const [price, setPrice] = useState('')
    return (
        <Container>
            <Stack my={15}>
                <Title>Our Products</Title>
                <Text>Explore What You need</Text>
            </Stack>
            <Group className={classes.Filter}>
                <Text >Filter</Text>
                <MultiSelect data={data} placeholder='Pick all that you like' />
                <NativeSelect data={["Low to High", "High to Low"]} value={price} onChange={(event) => setPrice(event.currentTarget.value)} />
            </Group>
            <SimpleGrid spacing={"xs"} breakpoints={[{ maxWidth: "xs", cols: 2 }, { maxWidth: "sm", cols: 3, spacing: "xs" }, { maxWidth: "md", cols: 4 }, { minWidth: "lg", cols: 5, spacing: "md" }, { maxWidth: "lg", cols: 5, spacing: "md" }]}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} />
                ))}
            </SimpleGrid>
            <Box my={15}>
                <Card />
            </Box>
        </Container>
    )
}

export default index