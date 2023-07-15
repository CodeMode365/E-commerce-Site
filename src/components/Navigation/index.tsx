import React from 'react'
import {
    Header, HoverCard, Button, Group, UnstyledButton, Text, SimpleGrid,
    ThemeIcon, Anchor, Divider, Center, Box, Burger, Drawer, Collapse, ScrollArea, rem
} from "@mantine/core"
import { useDisclosure } from '@mantine/hooks'
import { DiHeroku } from "react-icons/di"


import { NavLink as NLink, NavLink } from 'react-router-dom'
import { AppDispatch, RootState } from '../../Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMode } from '../../Redux/Slices/ColorMode'
import { useLocation } from 'react-router-dom'
import { useStyles } from './useStyles'
import { Categories as mockdata } from './data'
import { BsArrowDownShort } from 'react-icons/bs'
import { BiMoon, BiSun } from 'react-icons/bi'




const Navigation: React.FC = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
    const { classes, theme } = useStyles()
    const { cartItems } = useSelector((state: RootState) => state)
    const loggedIn = useSelector((state:RootState)=>state.auth.loginStatus)

    const colorMode = useSelector((state: RootState) => state.colorMode)
    const dispatch = useDispatch<AppDispatch>()
    const page = useLocation()

    const isActiveLink = (path: string): boolean => {
        if (path === page.pathname) return true
        return false
    }


    const links = mockdata.map((item) => (
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
                        <NLink to="/cart" className={`${classes.link} ${isActiveLink('/cart') ? classes.activeLink : ''}`} style={{ position: "relative" }}>
                            Cart
                            <Text color='red' sx={{ position: "absolute", top: 10, right: -5, }} >{cartItems.length}</Text>
                        </NLink>
                        <UnstyledButton onClick={() => dispatch(toggleMode())} className={classes.link}>
                            {colorMode === "light" ?

                                (<BiMoon className={classes.icons} size={26} style={{ borderRadius: "100%" }} />) :
                                (

                                    <BiSun className={classes.icons} size={26} style={{ borderRadius: "100%" }} />
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
                sx={{ position: "fixed", top: 0, left: 0, zIndex: 500 }}

            >
                <UnstyledButton display={"inline"} mr={-20} pr={-20} onClick={() => dispatch(toggleMode())} className={classes.link}>
                    {colorMode === "light" ?

                        (<BiMoon className={classes.icons} size={26} style={{ borderRadius: "100%" }} />) :
                        (

                            <BiSun className={classes.icons} size={26} style={{ borderRadius: "100%" }} />
                        )
                    }
                </UnstyledButton>
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <NLink onClick={closeDrawer} to="/" className={`${classes.link} ${isActiveLink('/') ? classes.activeLink : ''}`}>
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
                    <NLink onClick={closeDrawer} to="/products" className={`${classes.link} ${isActiveLink('/products') ? classes.activeLink : ''}`}>
                        Products
                    </NLink>
                    <NLink onClick={closeDrawer} to="/cart" className={`${classes.link} ${isActiveLink('/cart') ? classes.activeLink : ''}`}>
                        Cart <Center ml={5} bg={"red"} sx={{ borderRadius: 20, color: "white" }} w={25} h={25}>{cartItems.length}</Center>
                    </NLink>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md" fw={500}>
                        <Button variant="default" onClick={closeDrawer}>
                            <NavLink to="/auth" className={classes.authBtn}>
                                Log in
                            </NavLink>
                        </Button>
                        <Button>
                            <NavLink to="/auth" className={classes.authBtn}>
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