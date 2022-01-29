import Image from 'next/image'
import logoSection from '../styles/logoSection.module.scss'
import { Icon } from 'react-icons-kit'
import {cloudDownload} from 'react-icons-kit/oct/cloudDownload'
import { Navbar, Card, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function LogoSection() {
  return (
    <div className={logoSection.logoSectionMain} id="technologies">
        <p className={logoSection.logoSectionTitle}>logoSection</p>
        <p className={logoSection.logoSectionSubtitle}>What I Do For My Customer.</p>
        <p className={logoSection.logoSectionDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
        <div className={logoSection.logoSectionCardMain}>
            <Card className={logoSection.statItemWrapper}>
                <Image
                    src='/react.png'
                    width="750px"
                    height="200px"
                />
            </Card>
            <Card className={logoSection.statItemWrapper}>
                <Image
                    src='/node.svg'
                    width="750px"
                    height="250px"
                />
            </Card>
            <Card className={logoSection.statItemWrapper}>
                <Image
                    src='/rn.png'
                    width="750px"
                    height="200px"
                />
            </Card>
            <Card className={logoSection.statItemWrapper}>
                <Image
                    src='/next.png'
                    width="750px"
                    height="200px"
                />
            </Card>
            <Card className={logoSection.statItemWrapper}>
                <Image
                    src='/gatsby.png'
                    width="750px"
                    height="200px"
                />
            </Card>
        </div>
    </div>
  )
}
