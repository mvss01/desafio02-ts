import { HStack, Spacer, VStack, useDisclosure} from "@chakra-ui/react"
import { RightContent } from "./RightContent"
import { LeftContent } from "./LeftContent"
import { MobileNav } from "./MobileNav";

export type NavbarProps = Array<{
  label: string;
  url: string;
}>;

const navBarItems: NavbarProps = [
  {
    label: "Entrar",
    url: "#"
  },
  {
    label: "Cadastre-se",
    url: "#"
  }
]

export const Navbar = () => {
  const {isOpen, onToggle} = useDisclosure()
  return(
    <VStack borderBottomWidth={1} spacing={0} background="pink">
      <HStack
        w="full"
        alignItems="center"
        p={2}
        minH="5em"
      >
      {/* left content */}
      <LeftContent/>
      <Spacer />
      {/* right content */}
      <RightContent items={navBarItems} onToggle={onToggle}/>

      </HStack>

      {/* mobile content */}
      <MobileNav items={navBarItems} isOpen={isOpen}/>
    </VStack>
  )
}
