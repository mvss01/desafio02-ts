import { Button, Link, ListItem } from "@chakra-ui/react"

type NavbarProps = {
    label: string
    url: string
}
export const NavItems = ({label, url}: NavbarProps ) =>{
    return (
        <ListItem>
            <Button as={Link} href={url} colorScheme="pink" variant="outline" _active={{variant: "solid"}}>
                {label}
            </Button>
        </ListItem>
    )
}
