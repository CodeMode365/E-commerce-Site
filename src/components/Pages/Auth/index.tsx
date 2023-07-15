import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack, Container
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, singIn } from '../../../Redux/Slices/Auth';
import { RootState } from '../../../Redux/store';
import { useEffect } from "react"

interface iCredential {
    name?: string,
    email: string,
    password: string
    terms: boolean
}

export default function Auth(props: PaperProps) {
    const dispatch = useDispatch()
    const loggedIn = useSelector((state: RootState) => state.auth.loginStatus)
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: false,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    useEffect(() => {
        if (loggedIn) window.location.href = "/"
    }, [loggedIn])



    const handleSubmit = (credentials: iCredential) => {
        if (type === "login") dispatch(singIn(credentials))
        if (type === "register") {
            if (credentials.terms) {
                console.log("registering")
                dispatch(signUp(credentials))
                form.reset()
            }
        }
    }


    return (
        <Container size="xs" my={35}>
            <Paper radius="md" p="xl" withBorder {...props}>
                <Text size="lg" weight={500}>
                    Welcome to Our Store, <Text display={"inline"} color="none">{type}</Text> with
                </Text>

                <Divider labelPosition="center" my="lg" />

                <form onSubmit={form.onSubmit(() => handleSubmit(form.values))}>
                    <Stack>
                        {type === 'register' && (
                            <TextInput
                                label="Name"
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                radius="md"
                            />
                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && 'Invalid email'}
                            radius="md"
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                            error={form.errors.password && 'Password should include at least 6 characters'}
                            radius="md"
                        />

                        {type === 'register' && (
                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        )}
                    </Stack>

                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="dimmed"
                            onClick={() => toggle()}
                            size="xs"
                        >
                            {type === 'register'
                                ? 'Already have an account? Login'
                                : "Don't have an account? Register"}
                        </Anchor>
                        <Button type="submit" radius="xl" >
                            {upperFirst(type)}
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
}