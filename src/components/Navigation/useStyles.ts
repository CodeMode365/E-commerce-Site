import { createStyles, rem } from "@mantine/core"
export const useStyles = createStyles((theme) => ({
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
        "&:hover": {
            borderBottom: theme.colorScheme == "light" ? `1px solid ${theme.colors.blue[7]}` : `1px solid ${theme.colors.blue[2]}`,
            fontWeight: 500,


        }
    },
    authBtn: {
        width: "100%", height: "auto", marginBlock: "auto",
        textDecoration:"none",
        color:theme.colors.gray[4]
    }
}))