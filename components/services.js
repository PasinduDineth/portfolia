import Image from 'next/image'
import services from '../styles/services.module.scss'
import { Icon } from 'react-icons-kit'
import {cloudDownload} from 'react-icons-kit/oct/cloudDownload'
import { Navbar, Card, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function Services() {
  return (
    <div className={services.servicesMain} id="services">
        <p className={services.servicesTitle}>SERVICES</p>
        <p className={services.servicesSubtitle}>What I Do For My Customer.</p>
        <p className={services.servicesDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
        <div className={services.servicesCardMain}>
            <Card className={services.statItemWrapper}>
                <Image
                    src='/icon.png'
                    width="30px"
                    height="30px"
                />
                <p className={services.statItemAmount}>UI/UX Design</p>
                <p className={services.statItemTitle}>lorem ipsum dolor sit amet consectur adi pising leo</p>
            </Card>
            <Card className={services.statItemWrapper}>
                <Image
                        src='/icon.png'
                        width="30px"
                        height="30px"
                    />
                <p className={services.statItemAmount}>Product Design</p>
                <p className={services.statItemTitle}>lorem ipsum dolor sit amet consectur adi pising leo</p>
            </Card>
            <Card className={services.statItemWrapper}>
                <Image
                        src='/icon.png'
                        width="30px"
                        height="30px"
                    />
                <p className={services.statItemAmount}>Motion Graphics</p>
                <p className={services.statItemTitle}>lorem ipsum dolor sit amet consectur adi pising leo</p>
            </Card>
        </div>
    </div>
  )
}
