import React from 'react'
import {
    createStyles, Header, HoverCard, Button, Group, UnstyledButton, Text, SimpleGrid,
    ThemeIcon, Anchor, Divider, Center, Box, Burger, Drawer, Collapse, ScrollArea, rem
} from "@mantine/core"
import { BsArrowDownShort, BsGenderMale, BsGenderFemale } from "react-icons/bs"
import { useDisclosure } from '@mantine/hooks'
import { DiHeroku } from "react-icons/di"
import { AiTwotoneStar } from "react-icons/ai"
import { RiShirtLine } from "react-icons/ri"
import { BiMoon, BiSolidTShirt, BiSun } from "react-icons/bi"
import { TbJacket } from "react-icons/tb"
import { GiArmoredPants, GiMonclerJacket, GiBallerinaShoes } from "react-icons/gi"
import { TfiShine } from "react-icons/tfi"
import { NavLink as NLink, NavLink } from 'react-router-dom'
import { AppDispatch, RootState } from '../Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMode } from '../Redux/Slices/ColorMode'
import { useLocation } from 'react-router-dom'
const useStyles = createStyles((theme) => ({
    wrapper: {
    },
    link: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        paddingInline: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,
        [theme.fn.smallerThan('sm')]: {
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        },
        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
        }),
    },
    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]
        }),
        '&:active': theme.activeStyles
    },
    dropdownFooter: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: `calc(${theme.spacing.md} * -1)`,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md} calc(${theme.spacing.md}*2)`,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none'
        }
    }, hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    icons: {
        boxShadow: "0 0 2px #aaa",
        padding: "2px"
    },
    activeLink: {
        color: theme.colorScheme == "light" ? theme.colors.blue[7] : theme.colors.blue[2],
        fontWeight: 700,
        borderBottom: theme.colorScheme == "light" ? `2px solid ${theme.colors.blue[7]}` : `2px solid ${theme.colors.blue[2]}`,
        transition: ".4s",
        "&:hover":{
            borderBottom: theme.colorScheme == "light" ? `1px solid ${theme.colors.blue[7]}` : `1px solid ${theme.colors.blue[2]}`,
        fontWeight: 500,

      
        }
    }
}))


const mockdata = [{
    icon: TfiShine,
    title: 'New Arrivals',
    description: 'This Pokémon’s cry is very loud and distracting',
},
{
    icon: AiTwotoneStar,
    title: 'Top Rated',
    description: 'The fluid of Smeargle’s tail secretions changes',
},
{
    icon: BsGenderMale,
    title: 'Male',
    description: 'The fluid of Smeargle’s tail secretions changes',
},
{
    icon: BsGenderFemale,
    title: 'Female',
    description: 'The fluid of Smeargle’s tail secretions changes',
},
{
    icon: BiSolidTShirt,
    title: 'T-Shirts',
    description: 'Yanma is capable of seeing 360 degrees without',
},
{
    icon: GiArmoredPants,
    title: 'Pants',
    description: 'The shell’s rounded shape and the grooves on its.',
},
{
    icon: RiShirtLine,
    title: 'Shirts',
    description: 'This Pokémon uses its flying ability to quickly chase',
},
{
    icon: GiBallerinaShoes,
    title: 'Shoes',
    description: 'Combusken battles with the intensely hot flames it spews',
},
{
    icon: TbJacket,
    title: 'Jackets',
    description: 'Combusken battles with the intensely hot flames it spews',
},
{
    icon: GiMonclerJacket,
    title: 'Hoody',
    description: 'Combusken battles with the intensely hot flames it spews',
},
];


const Navigation: React.FC = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
    const { classes, theme } = useStyles()

    const colorMode = useSelector((state: RootState) => state.colorMode)
    const dispatch = useDispatch<AppDispatch>()
    const page = useLocation()

    const isActiveLink = (path: string): boolean => {
        if (path === page.pathname) return true
        return false
    }

    const links = mockdata.map((item, ind) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group noWrap align="flex-start">
                <ThemeIcon size={34} variant='default' radius="md">
                    <item.icon />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color='dimmed'>
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ))

    return (
        <Box >
            <Header height={60} px="md" classNames={classes.wrapper}>
                <Group position='apart' sx={{ height: "100%" }}>
                    <DiHeroku size={30} />
                    <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
                        <NLink to='/' className={`${classes.link} ${isActiveLink('/') ? classes.activeLink : ''}`} >
                            Home
                        </NLink>
                        <HoverCard width={600} position='bottom' radius={'md'} shadow='md' withinPortal>
                            <HoverCard.Target>
                                <NLink to='#' className={classes.link}>
                                    <Center inline>
                                        <Box component='span' mr={5}>
                                            Categories
                                        </Box>
                                        <BsArrowDownShort size={16} color={theme.fn.primaryColor()} />
                                    </Center>
                                </NLink>
                            </HoverCard.Target>
                            <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                                <Group position="apart" px="md">
                                    <Text fw={500}>Categories</Text>
                                    <Anchor target="#" fz="xs">
                                        View all
                                    </Anchor>
                                </Group>

                                <Divider
                                    my="sm"
                                    mx="-md"
                                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                                />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                <div className={classes.dropdownFooter}>
                                    <Group position="apart">
                                        <div>
                                            <Text fw={500} fz="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" color="dimmed">
                                                Their food sources have decreased, and their numbers
                                            </Text>
                                        </div>
                                        <Button variant="default">Get started</Button>
                                    </Group>
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <NLink to="/products" className={`${classes.link} ${isActiveLink('/products') ? classes.activeLink : ''}`}>
                            Products
                        </NLink>
                        <NLink to="/cart"className={`${classes.link} ${isActiveLink('/cart') ? classes.activeLink : ''}`} style={{ position: "relative" }}>
                            Cart
                            <Text color='red' sx={{ position: "absolute", top: 10, right: -5, }} >20</Text>
                        </NLink>
                        <UnstyledButton onClick={() => dispatch(toggleMode())} className={classes.link}>
                            {colorMode === "light" ?

                                (<BiMoon className={classes.icons} size={26} />) :
                                (

                                    <BiSun className={classes.icons} size={26} />
                                )
                            }
                        </UnstyledButton>
                    </Group>

                    <Group className={classes.hiddenMobile} fw={500}>
                        <NavLink to="/auth">
                            <Button variant="default">Log in</Button>
                        </NavLink>
                        <NavLink to="/auth">
                            <Button>Sign up</Button>
                        </NavLink>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <UnstyledButton mr={-20} pr={-20} onClick={() => dispatch(toggleMode())} className={classes.link}>
                    {colorMode === "light" ?

                        (<BiMoon className={classes.icons} size={26} />) :
                        (

                            <BiSun className={classes.icons} size={26} />
                        )
                    }
                </UnstyledButton>
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <NLink to="/" className={`${classes.link} ${isActiveLink('/') ? classes.activeLink : ''}`}>
                        Home
                    </NLink>
                    <UnstyledButton className={`${classes.link} ${isActiveLink('/categories') ? classes.activeLink : ''}`} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Categories
                            </Box>
                            <BsArrowDownShort size={16} color={theme.fn.primaryColor()} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <NLink to="/products" className={`${classes.link} ${isActiveLink('/products') ? classes.activeLink : ''}`}>
                        Products
                    </NLink>
                    <NLink to="/cart" className={`${classes.link} ${isActiveLink('/cart') ? classes.activeLink : ''}`}>
                        Cart <Center ml={5} bg={"red"} sx={{ borderRadius: 20, color: "white" }} w={25} h={25}>20</Center>
                    </NLink>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md" fw={500}>
                        <Button variant="default">
                            <NavLink to="/auth"  style={{ width: "100%", height: "100%" }}>
                                Log in
                            </NavLink>
                        </Button>
                        <Button>
                            <NavLink to="/auth" style={{ width: "100%", height: "100%" }}>
                                Sign up
                            </NavLink>
                        </Button>
                    </Group>

                </ScrollArea>
            </Drawer>
        </Box>
    )
}

export default Navigation