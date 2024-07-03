import { Flex, IconButton, List } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarProps } from "."
import { NavItems } from "./NavItems"

type RightContentProps = {
    items: NavbarProps
    onToggle(): void
}

export const RightContent = ({ items, onToggle }: RightContentProps) => {
    return (
        <Flex alignItems="center">
            <IconButton aria-label="menu" colorScheme="pink" variant="ghost" icon={<GiHamburgerMenu />} fontSize="1.7rem" rounded="full" display={{base: "flex", md: "none"}} onClick={onToggle}/>
            <List gap={2} display={{base: "none", md: "flex"}}>
                {items.map(item =>(
                    <NavItems key={item.label} {...item}/>
                ))}
            </List>
        </Flex>
    )
}
