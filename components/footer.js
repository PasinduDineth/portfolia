import Image from 'next/image'
import footer from '../styles/footer.module.scss'
import { Icon } from 'react-icons-kit'
import {ic_forward_to_inbox_outline} from 'react-icons-kit/md/ic_forward_to_inbox_outline'
import {ic_phone} from 'react-icons-kit/md/ic_phone'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {twitterSquare} from 'react-icons-kit/fa/twitterSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {globe} from 'react-icons-kit/fa/globe'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function Footer() {
  return (
    <div className={footer.footerMain}>
        <div className={footer.logoSection}>
            <Image src="/LOGOWHITE.png" alt="me" width="140" height="22" />
            <p className={footer.logoDescription}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Cras vitae <br/>blandit lectus. Praesent at hendrerit.</p>
        </div>
        <div className={footer.contactSection}>
            <p className={footer.contactItem}><Icon className={footer.contactItemIcon} icon={ic_forward_to_inbox_outline} /> inquiry@portostar.com</p>
            <p className={footer.contactItem}><Icon className={footer.contactItemIcon} icon={ic_phone} /> (001) 1231 3435</p>
            <div className={footer.socialMain}>
                <Icon className={footer.contactItemIcon} icon={twitterSquare} />
                <Icon className={footer.contactItemIcon} icon={linkedinSquare} />
                <Icon className={footer.contactItemIcon} icon={globe} />
                <Icon className={footer.contactItemIcon} icon={facebookSquare} />
            </div>
        </div>
    </div>
  )
}
