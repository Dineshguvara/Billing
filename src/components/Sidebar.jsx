import React from "react";
import { Link as NavLink } from "react-router-dom";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,Switch,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiSettings, FiMenu, FiTruck, FiPackage, FiUser } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { setNavSize } from "../features/navSlice";

const LinkItems = [
  { name: "DASHBOARD", icon: FiHome, to: "/" },
  { name: "ITEMS", icon: FiPackage, to: "items_list" },
  { name: "PARTIES", icon: FiUser, to: "parties_list" },
  { name: "SALES", icon: FiTruck, to: "sales_list" } ,
  // { name: "practice", icon: FiTruck, to: "pc" } ,
  
];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {

  const dispatch = useDispatch();

  const { navSiz } = useSelector((state)=> state.poste.value)

   
 
 
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
    
      {...rest}
      onMouseOver={()=>dispatch(setNavSize())} 
      onMouseOut={()=>dispatch(setNavSize())}
      
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Billing
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        <Switch size='sm' 
        onClick={()=>dispatch()}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} to={link.to}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ to, icon, children, ...rest }) => {
  return (
    <Link
      as={NavLink}
      to={to}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Billing
      </Text>
    </Flex>
  );
};
