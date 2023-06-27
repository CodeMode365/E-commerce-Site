import { Card, Image, Group, Text, Button, Badge } from "@mantine/core"
import { BiCart } from 'react-icons/bi'

const ItemCard = () => {

  function addToCart(event: MouseEvent) {
    event?.stopPropagation()
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="#" sx={{ cursor: "pointer" }} >
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Black Resham T-shirt</Text>
        <Text size="sm" color="dimmed">
          Winter Light weight silk
        </Text>
        <Group spacing={"sm"}>
          <Badge color="pink" variant="light">
            Sale
          </Badge>
          <Badge color="pink" variant="light">
            New Arrival
          </Badge>
        </Group>
      </Group>


      <Button onClick={(e: MouseEvent) => addToCart(e)} variant="light" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} color="blue" fullWidth mt="md" radius="md">
        <BiCart style={{ marginRight: "10px" }} /> Add To Cart
      </Button>
    </Card>
  )
}

export default ItemCard