import { Container, Stack, Title, Box, Card, Flex, Image, Text, Divider, UnstyledButton, createStyles, Grid } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../../Redux/store'
import { dcrQuantity, incQuantity, removeItem } from '../../../Redux/Slices/Cart'
import { iItems } from '../../Reusable/DummyProducts'
import Swal from "sweetalert2"
import React, { useState, useEffect } from 'react'
import { useStyles } from './Styles'

const Cart = React.memo(() => {
    const { classes } = useStyles()
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    const extraSmall = useMediaQuery('(max-width: 30em)');
    const cartItems = useSelector((state: RootState) => state.cartItems)

    const dispatch = useDispatch<AppDispatch>()

    const removeFromCart = (item: iItems): void => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                dispatch(removeItem(item))
            }
        })
    }
    const decrementQuantity = (item: iItems): void => {
        dispatch(dcrQuantity(item))
    }
    const incrementQuantity = (item: iItems): void => {
        dispatch(incQuantity(item))
    }

    const [totalAmount, setTotalAmount] = useState<number>(0)

    useEffect(() => {
        function calcTotal() {
            let finalAmount = 0
            cartItems.forEach((item) => {
                finalAmount += (item.quantity * item.price)
            })
            setTotalAmount(finalAmount)

        }
        calcTotal()
        return calcTotal()
    }, [cartItems])


    return (
        <Container size={"md"} py={20} >
            <Title>Your Cart Items</Title>
            <Grid columns={6} >
                <Grid.Col span={smallScreen ? 6 : 4}>
                    <Stack className={classes.ItemHolder}>
                        {cartItems.map((item) => {
                            return (<Card key={item.id}>
                                <Card.Section>
                                    <Flex direction={extraSmall ? "column" : "row"} >
                                        {!extraSmall &&
                                            <Box>
                                                <Image
                                                    mx={extraSmall ? "auto" : 0}
                                                    m={8} src={item.src} width={200} h={100} sx={{ objectPosition: "center" }} />
                                            </Box>}
                                        <Box mx={20} my={8} >
                                            <Title color="blue" order={3} sx={{ display: "flex", alignItems: "center" }}>{item.title} <UnstyledButton onClick={() => removeFromCart(item)}><BiTrash color="red" size={24} style={{ marginLeft: 20 }} /></UnstyledButton></Title>
                                            <Divider my={2} />
                                            <Text className={""}>Price Per Item:
                                                <Text display={"inline"} color="yellow" ml={"md"}>${item.price} </Text></Text>
                                            <Text className={classes.Quantity}>Quantity:
                                                <UnstyledButton onClick={() => incrementQuantity(item)} className={`${classes.OprBtn} ${classes.IncBtn}`} >
                                                    <BiPlus />
                                                </UnstyledButton>
                                                {item.quantity}
                                                <UnstyledButton onClick={() => decrementQuantity(item)} className={`${classes.OprBtn} ${classes.DcrBtn}`}><BiMinus />
                                                </UnstyledButton>
                                            </Text>
                                            <Title order={3} my={5}>Total: <Text display={"inline"} color='gold'>${item.quantity * item.price}</Text></Title>
                                        </Box>
                                    </Flex>
                                </Card.Section>
                            </Card>)
                        })}

                    </Stack>
                </Grid.Col>
                <Grid.Col span={smallScreen ? 6 : 2} >
                    <Box className={classes.ItemHolder} sx={{ position: "sticky", top: "15px" }}>
                        <Box className={classes.FinalCalc}>
                            <Title order={2}>Total: <Text color='gold' display={"inline"}>${totalAmount}</Text></Title>
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
})

export default Cart