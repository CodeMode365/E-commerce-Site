import { useState, lazy, Suspense, useCallback,useMemo } from 'react'
import { Container, SimpleGrid, Box, Skeleton, Divider, Card, Title, Stack, Text, Group, Flex, MultiSelect, NativeSelect } from '@mantine/core'
import Data, { iItems, iCategory } from '../../Reusable/DummyProducts'
import { useStyles } from './Styles'
import { Options } from './Options'

const LazyCard = lazy(() => import("../../Reusable/Card"))


type pricing = "Low to High" | "High to Low"

const index = () => {
    const { classes } = useStyles()
    const [price, setPrice] = useState<pricing>('Low to High')
    const [data, setData] = useState(Data)
    const [filterItem, setFilterItem] = useState<string[]>(Options.map(opt => opt.value))

    const sortItems = useCallback((items: iItems[]): iItems[] => {
        if (price === "Low to High") {
            return items.sort((a, b) => a.price - b.price)
        }
        return items.sort((a, b) => b.price - a.price)
    }, [price])

    return (
        <Container>
            <Stack my={15}>
                <Title>Our Products</Title>
                <Text>Explore What You need</Text>
            </Stack>
            <Group className={classes.Filter}>
                <Text >Filter</Text>
                <MultiSelect data={Options} onChange={(e) => setFilterItem(e)} placeholder='Pick all that you like' />
                <NativeSelect data={["Low to High", "High to Low"] as pricing[]} value={price} onChange={(event) => setPrice(event.currentTarget.value as pricing)} />
            </Group>
            <Container >
                {data.map((item: iCategory) => {
                    return (
                        <Box key={item.id} my={10}>
                            <Title color='blue' order={3}>{item.category}</Title>
                            <Divider my={5} />
                            <SimpleGrid spacing={"xs"} breakpoints={[{ maxWidth: "xs", cols: 2 }, { maxWidth: "sm", cols: 3, spacing: "xs" }, { maxWidth: "md", cols: 4 }, { minWidth: "lg", cols: 5, spacing: "md" }, { maxWidth: "lg", cols: 5, spacing: "md" }]} >

                                {sortItems(item.Items).map((SingleItem: iItems) => {
                                    const included = SingleItem.highlight.some((showUp) => filterItem.includes(showUp))
                                    if (included) {
                                        return (
                                            <Suspense key={SingleItem.id} fallback={
                                                <Card py={"auto"} px={"auto"} mih={150} withBorder shadow={"md"}>
                                                    <Flex mx="auto" direction={"column"} align={"center"}>
                                                        <Skeleton height={60} radius="sm" />
                                                        <Skeleton height={8} radius="xl" />
                                                        <Skeleton height={8} mt={6} radius="xl" />
                                                        <Skeleton height={8} mt={6} width="70%" radius="xl" />
                                                        <Skeleton height={8} mt={6} width="50%" radius="xl" />
                                                    </Flex>
                                                </Card>
                                            }>
                                                <LazyCard Item={SingleItem} />
                                            </Suspense>

                                        )
                                    }
                                    return false
                                })}
                            </SimpleGrid >
                        </Box>
                    )
                })}
            </Container>
            <Box my={15}>
                {/* <Card /> */}
            </Box>
        </Container>
    )
}

export default index