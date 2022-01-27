import Image from 'next/image'
import services from '../styles/services.module.scss'
import { Icon } from 'react-icons-kit'
import {cloudDownload} from 'react-icons-kit/oct/cloudDownload'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function Services() {
  return (
    <div className={services.servicesMain}>
        <p className={services.servicesTitle}>SERVICES</p>
        <p className={services.servicesSubtitle}>What I Do For My Customer.</p>
        <p className={services.servicesDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
    </div>
  )
}
