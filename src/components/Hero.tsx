import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: "url('./src/assets/clothes.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,
    textAlign: "center",

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    transition: ".5s",
    "&:hover": {
      background: theme.colors.blue[7],
      border: `1px solid ${theme.colors.blue[7]}`,
      color: "white",
    },

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Explore Best out of Bests<br /> Get More than what you expect</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Fully Customized Ecommerce Store for Your Best Choices.
          Choose what you want and we will take all risk to make it into your house.
        </Text>

        <Button variant="outline" size="lg" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}