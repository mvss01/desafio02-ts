import { Collapse, List} from "@chakra-ui/react"
import { NavbarProps } from ".."
import { MobileNavItem } from "./MobileNavItem"

type MobileNavProps = {
    items: NavbarProps
    isOpen: boolean
}

export const MobileNav = ({ items, isOpen }: MobileNavProps) =>{
    return (
        <Collapse in={isOpen} animateOpacity style={{ width: "100%"}}>
            <List gap={2} spacing={2} width="100%" padding={2}>
                {items.map((item) => (
                    <MobileNavItem key={item.label} {...item}/>
                ))}
            </List>
        </Collapse>
    )
}
