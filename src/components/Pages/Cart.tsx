import { Container, Stack, Title, Card, Image, AspectRatio } from '@mantine/core'
import React from 'react'

const Cart = () => {
    return (
        <Container size={"md"} py={20}>
            <Title>Your Cart Items</Title>
            <Stack>
                <Card>
                    <Card.Section>
                        <Title variant='' order={3}>Item1</Title>

                        <Image src="./assets/clothes.jpg" height={200} />
                    </Card.Section>
                </Card>
            </Stack>
        </Container>
    )
}

export default Cart