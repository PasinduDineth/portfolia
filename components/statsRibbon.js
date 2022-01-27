import Image from 'next/image'
import statsRibbon from '../styles/statsRibbon.module.scss'
import { Icon } from 'react-icons-kit'
import {cloudDownload} from 'react-icons-kit/oct/cloudDownload'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function HeroSection() {
  return (
    <div className={statsRibbon.statsMain}>
        <div className={statsRibbon.statItemWrapper}>
            <p className={statsRibbon.statItemAmount}>100+</p>
            <p className={statsRibbon.statItemTitle}>PROJECTS</p>
        </div>
        <div className={statsRibbon.statItemWrapper}>
            <p className={statsRibbon.statItemAmount}>50+</p>
            <p className={statsRibbon.statItemTitle}>CLIENTS</p>
        </div>
        <div className={statsRibbon.statItemWrapper}>
            <p className={statsRibbon.statItemAmount}>20+</p>
            <p className={statsRibbon.statItemTitle}>YEARS EXPERIENCE</p>
        </div>
        <div className={statsRibbon.statItemWrapper}>
            <p className={statsRibbon.statItemAmount}>20+</p>
            <p className={statsRibbon.statItemTitle}>AWARDS</p>
        </div>
    </div>
  )
}
