import { Container, Stack, Title, Group, Box, Card, Flex, Image, Text, Divider, UnstyledButton, createStyles, Grid } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'

const useStyles = createStyles((theme) => ({
    Quantity: {
        display: "flex",
        alignItems: "center",
    },

    OprBtn: {
        borderRadius: theme.radius.lg,
        border: "1px solid black",
        margin: 0,
        // padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginInline: theme.spacing.md,
        padding: "4px",
        color: theme.colors.lime[1]
    },
    IncBtn: {
        background: theme.colors.green[5]
    },
    DcrBtn: {
        background: theme.colors.blue[5]
    },
    ItemHolder: {
        background: theme.colorScheme == "dark" ? theme.colors.gray[8] : theme.colors.gray[3],
        borderRadius: theme.radius.sm,
        padding: theme.spacing.xs
    },
    FinalCalc: {
        background: theme.colorScheme == "dark" ? theme.colors.gray[9] : theme.colors.gray[1],
        borderRadius: theme.radius.sm,
        padding: theme.spacing.xs

    }
}))

const Cart = () => {
    const { classes } = useStyles()
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    const extraSmall = useMediaQuery('(max-width: 30em)');
    return (
        <Container size={"md"} py={20} >
            <Title>Your Cart Items</Title>
            <Grid columns={6} >
                <Grid.Col span={smallScreen ? 6 : 4}>
                    <Stack className={classes.ItemHolder}>
                        <Card>
                            <Card.Section>
                                <Flex direction={extraSmall ? "column" : "row"}>
                                    <Image
                                        mx={extraSmall ? "auto" : 0}
                                        m={8} src="./assets/clothes.jpg" width={200} />
                                    <Box mx={20} my={8} >
                                        <Title order={3}>Item1</Title>
                                        <Divider my={2} />
                                        <Text className={""}>Price Per Item:
                                            <Text display={"inline"} color="yellow" ml={"md"}>$455 </Text></Text>
                                        <Text className={classes.Quantity}>Quantity:
                                            <UnstyledButton className={`${classes.OprBtn} ${classes.IncBtn}`} ><BiPlus /></UnstyledButton> 5 <UnstyledButton className={`${classes.OprBtn} ${classes.DcrBtn}`}><BiMinus /></UnstyledButton></Text>
                                        <Title order={3} my={5}>Total: <Text display={"inline"} color='gold'>$4545</Text></Title>
                                    </Box>
                                </Flex>
                            </Card.Section>
                        </Card>
                        <Card>
                            <Card.Section>
                                <Flex direction={extraSmall ? "column" : "row"}>
                                    <Image
                                        mx={extraSmall ? "auto" : 0}
                                        m={8} src="./assets/clothes.jpg" width={200} />
                                    <Box mx={20} my={8} >
                                        <Title order={3}>Item1</Title>
                                        <Divider my={2} />
                                        <Text className={""}>Price Per Item:
                                            <Text display={"inline"} color="yellow" ml={"md"}>$455 </Text></Text>
                                        <Text className={classes.Quantity}>Quantity:
                                            <UnstyledButton className={`${classes.OprBtn} ${classes.IncBtn}`} ><BiPlus /></UnstyledButton> 5 <UnstyledButton className={`${classes.OprBtn} ${classes.DcrBtn}`}><BiMinus /></UnstyledButton></Text>
                                        <Title order={3} my={5}>Total: <Text display={"inline"} color='gold'>$4545</Text></Title>
                                    </Box>
                                </Flex>
                            </Card.Section>
                        </Card>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={smallScreen ? 6 : 2}>
                    <Box className={classes.ItemHolder}>
                        <Box className={classes.FinalCalc}>
                            <Title order={2}>Total: <Text color='gold' display={"inline"}>$45500</Text></Title>
                            <Divider my={2} />
                            <Title order={4}>Discount: <Text color="green" display="inline">14%</Text></Title>
                            <Title order={4}>VAT: <Text color="red" display="inline">14%</Text></Title>
                            <Title order={4}>Delevery Charge: <Text color="green" display="inline">Free</Text> </Title>
                        </Box>
                    </Box>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Cart