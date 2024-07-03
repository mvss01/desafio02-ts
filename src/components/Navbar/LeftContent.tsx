import { Flex, Image } from "@chakra-ui/react"

export const LeftContent = () =>{
    return (
        <Flex alignItems="center" justifyContent="space-btween" gap="4">
            <Image
            boxSize='100px'
            objectFit='cover'
            src='./diobank.png' alt='Logo DIOBANK'/>
        </Flex>
    )
}
