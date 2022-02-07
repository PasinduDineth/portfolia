import Image from 'next/image'
import navbar from '../styles/navbar.module.scss'
import { Icon } from 'react-icons-kit'
import {ic_forward_to_inbox_outline} from 'react-icons-kit/md/ic_forward_to_inbox_outline'
import { Link } from "react-scroll";
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
            <NavItem className={navbar.navbarItem}>
                <Link className={navbar.customFont} 
                activeClass="active"
                to="HOME"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                    HOME
                </Link>
            </NavItem>
            <NavItem className={navbar.navbarItem}>
                <Link className={navbar.customFont} 
                activeClass="active"
                to="EXPERTISE"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                    EXPERTISE
                </Link>
            </NavItem>
            <NavItem className={navbar.navbarItem}>
                <Link className={navbar.customFont} 
                activeClass="active"
                to="ABOUT"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                    ABOUT
                </Link>
            </NavItem>
            <NavItem className={navbar.navbarItem}>
                <Link className={navbar.customFont} 
                activeClass="active"
                to="PROJECTS"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                    PROJECTS
                </Link>
            </NavItem>
            <NavItem className={navbar.navbarItem}>
                <Link className={navbar.customFont} 
                activeClass="active"
                to="RECOMMENDATIONS"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                    RECOMMENDATIONS
                </Link>
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
