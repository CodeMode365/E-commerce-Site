import { Card, Image, Group, Text, Button, Badge, Rating } from "@mantine/core"
import { BiCart } from 'react-icons/bi'

const ItemCard = () => {

  function addToCart(event: MouseEvent) {
    event?.stopPropagation()
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="#" sx={{ cursor: "pointer" }} >
        <Group spacing={"xs"} mx={"auto"} sx={{ position: "absolute", left: 5, zIndex: 50 }} mt={4}>
          {/* <Badge color="red" variant="light" bg={"#dded"}>
            Sale
          </Badge>
          <Badge color="red" variant="light" bg={"#dded"}>
            New
          </Badge> */}
          <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Sale</Badge>
          <Badge variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>New</Badge>
        </Group>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt={3} mb={2} align="center" >
        <Text weight={500} my={0} mx={"auto"}>Black Resham T-shirt</Text>
        <Text fz={12} p={0} color="dimmed" align="center" my={-10} mx={"auto"} >
          Winter Light weight silk
        </Text>
        <Rating value={3} mx="auto" fz={10} readOnly />
      </Group>


      <Button onClick={(e: MouseEvent) => addToCart(e)} variant="light" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} color="blue" fullWidth mt="md" radius="md">
        <BiCart style={{ marginRight: "10px" }} /> Add To Cart
      </Button>
    </Card>
  )
}

export default ItemCard