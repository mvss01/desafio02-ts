import { Link, ListItem } from "@chakra-ui/react"

type MobileNavItemProps = {
    label: string
    url: string
}

export const MobileNavItem = ({label, url}: MobileNavItemProps) =>{
    return (
        <ListItem key={label} w="full">
            <Link
                href={url}
                display="block"
                rounded="lg"
                _hover={{ textDecoration: 'none', bg: "pink.50" }}
                _active={{ bg: "pink.50" }}
                px={4}
                py={2}
                fontWeight="semibold"
            >
                {label}
            </Link>
        </ListItem>
    )
}
