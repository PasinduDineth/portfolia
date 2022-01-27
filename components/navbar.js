import Image from 'next/image'
import navbar from '../styles/navbar.module.scss'
import { Icon } from 'react-icons-kit'
import {ic_forward_to_inbox_outline} from 'react-icons-kit/md/ic_forward_to_inbox_outline'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function NavbarComponent() {
  return (
    <Navbar
        expand="md"
        className={navbar.navbarMain}
        fixed="top"
    >
        <NavbarBrand href="/" className={navbar.logoWrapper}>
            <Image src="/LOGO.png" alt="me" width="96" height="22" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar className={navbar.collapse}>
        <div/>
        <Nav
            navbar
        >
            <NavItem>
                <NavLink href="/components/" className={navbar.customFont}>
                    HOME
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/components/" className={navbar.customFont}>
                    ABOUT
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/components/" className={navbar.customFont}>
                    TECH STACH
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/components/" className={navbar.customFont}>
                    EDUCATION
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/components/" className={navbar.customFont}>
                    FEEDBACKS
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/components/" className={navbar.customFont}>
                    CONTACT
                </NavLink>
            </NavItem>
        </Nav>
        <Button
            className={navbar.hireMeButton}
        >
            <p className={navbar.hireMeButtonText}>HIRE ME <Icon icon={ic_forward_to_inbox_outline} /></p>
        </Button>
        </Collapse>
    </Navbar>
  )
}
