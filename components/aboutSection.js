import Image from 'next/image'
import about from '../styles/aboutSection.module.scss'
import { Icon } from 'react-icons-kit'
import {ic_forward_to_inbox_outline} from 'react-icons-kit/md/ic_forward_to_inbox_outline'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function AboutSection() {
  return (
    <div className={about.aboutMain}>
        <div className={about.aboutLeftMain}>
            <div>
                <p className={about.fullName}>Software Engineer</p>
                <p className={about.welcomeMessage}>With <span className={about.softwareEngineerText}>5 Years</span><br/>
                    of Experience. </p>
                    <Button
                        className={about.hireMeButton}
                    >
                        <p className={about.hireMeButtonText}><Icon icon={ic_forward_to_inbox_outline} size={16} className={about.cvButton} />CONTACT ME</p>
                    </Button>
            </div>
        </div>
        <div className={about.aboutRightMain}>
            <Image
                src='/Avatar.png'
                layout='fill'
                objectFit='contain'
            />
        </div>
    </div>
  )
}
