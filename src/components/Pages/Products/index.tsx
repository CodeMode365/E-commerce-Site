import { useState, lazy, Suspense } from 'react'
import { Container, SimpleGrid, Box, Skeleton, Divider, Card, Title, Stack, Text, Group, Flex, createStyles, MultiSelect, NativeSelect } from '@mantine/core'
import Data, { iItems, iCategory } from '../../../assets/Items'
const LazyCard = lazy(() => import("../../ItemShowCase/Card"))



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
            <Container >
                {Data.map((item: iCategory) => {
                    return (
                        <Box key={item.id} my={10}>
                            <Title color='blue' order={3}>{item.category}</Title>
                            <Divider my={5} />
                            <SimpleGrid spacing={"xs"} breakpoints={[{ maxWidth: "xs", cols: 2 }, { maxWidth: "sm", cols: 3, spacing: "xs" }, { maxWidth: "md", cols: 4 }, { minWidth: "lg", cols: 5, spacing: "md" }, { maxWidth: "lg", cols: 5, spacing: "md" }]} >

                                {[...item.Items].map((SingleItem: iItems) => (
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

                                ))}
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