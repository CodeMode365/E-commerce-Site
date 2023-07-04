import { Group, Text, Button, Badge, Rating, createStyles, Card, Image } from "@mantine/core"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { BiCart } from 'react-icons/bi'
import { iItems } from "../../assets/Items"
import { AppDispatch } from "../../Redux/store"
import { useDispatch } from "react-redux"
import { addToCart } from "../../Redux/Slices/Cart"
import React from 'react'
import Swal from "sweetalert2"

const useStyles = createStyles((theme) => ({
  lazyImage: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    filter: "brightness(.8)",
    objectFit: "cover"
  },
  wrapper: {
    position: "relative",
    // paddingBottom:theme.spacing.xl,
    // paddingInline:"20px"
  },
  cartBtn: {
    // position: "absolute",
    // bottom: 10,
    // left: "50%",
    // transform:"translateX(-50%)",
  }
}))

const ItemCard = ({ Item }: { Item: iItems }) => {

  const dispatch = useDispatch<AppDispatch>()
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false)

  const { classes } = useStyles()
  function addItemTocart() {
    // event?.stopPropagation()
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: `<span style={{color:'red'}}>${Item.title}</span> added to Cart`

    })
    dispatch(addToCart(Item))

  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.wrapper}>
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

        <LazyLoadImage
          effect="blur"
          src={Item.src}
          height={160}
          alt="Norway"
          className={classes.lazyImage}
          onLoadCapture={() => setIsLoaded(true)}
        />
        {
          !isLoaded && (
            <LazyLoadImage
              effect="blur"
              // src={Item.src}
              src={'./placeholder.png'}
              height={160}
              alt="Norway"
              className={classes.lazyImage}
            />
          )
        }
      </Card.Section>

      <Group position="apart" mt={3} mb={2} align="center" >
        <Text weight={500} my={0} mx={"auto"}>{Item.title}</Text>
        <Text fz={12} p={0} color="dimmed" align="center" my={-10} mx={"auto"} >
          Winter Light weight silk
        </Text>
        <Rating value={3} mx="auto" fz={10} readOnly />
      </Group>


      <Button className={classes.cartBtn} variant="light" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} color="blue" fullWidth mt="md" radius="md"
        onClick={() => addItemTocart()}
      >
        <BiCart style={{ marginRight: "10px" }} /> Add To Cart
      </Button>
    </Card >



  )

}

export default ItemCard