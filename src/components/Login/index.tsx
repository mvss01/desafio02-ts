import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Center
} from "@chakra-ui/react"
import { LoginAlert } from "../../services/login"

export const Login = () => {
    return(
        <Center h='40vh'>
            <FormControl>
                <FormLabel mt="1rem">Email</FormLabel>
                <Input type="email" borderColor="gray.400" focusBorderColor='pink.250'/>
                <FormLabel mt="1rem">Senha</FormLabel >
                <Input type="password" borderColor="gray.400" focusBorderColor='pink.250'/>
                <Button colorScheme='pink' size='md' mt="1rem" onClick={LoginAlert}>
                    Button
                </Button>
            </FormControl>
        </Center>
    )
}
