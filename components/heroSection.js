import Image from 'next/image'
import hero from '../styles/heroSection.module.scss'
import { Icon } from 'react-icons-kit'
import {cloudDownload} from 'react-icons-kit/oct/cloudDownload'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function HeroSection() {
  return (
    <div className={hero.heroMain} id="HOME">
        <div className={hero.heroLeftMain}>
                <p className={hero.fullName}>Pasindu Dineth Peiris</p>
                <p className={hero.welcomeMessage}>Hello, my <br/>
                    name’s Pasindu. <br/>
                    I’m a <span className={hero.softwareEngineerText}>Software <br/>Engineer.</span></p>
                    <Button
                        className={hero.hireMeButton}
                    >
                        <p className={hero.hireMeButtonText}>DOWNLOAD CV <Icon icon={cloudDownload} className={hero.cvButton} /></p>
                    </Button>
        </div>
        <div className={hero.heroRightMain}>
            <Image
                src='/image.png'
                layout='fill'
                objectFit='contain'
            />
        </div>
    </div>
  )
}
