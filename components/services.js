import Image from 'next/image'
import services from '../styles/services.module.scss'
import { Icon } from 'react-icons-kit'
import {cloudDownload} from 'react-icons-kit/oct/cloudDownload'
import { Navbar, Card, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function Services() {
  return (
    <div className={services.servicesMain} id="EXPERTISE">
        <p className={services.servicesTitle}>EXPERTISE</p>
        <p className={services.servicesSubtitle}>What I am good at?</p>
        <p className={services.servicesDescription}>I can involve in more than one sectors of product development process.<br/>I have expeience in all below sectors during my career.</p>
        <div className={services.servicesCardMain}>
            <Card className={services.statItemWrapper}>
                <Image
                        src='/fe.png'
                        width="30px"
                        height="30px"
                    />
                <p className={services.statItemAmount}>Frontend Engineer</p>
                <p className={services.statItemTitle}>Developing frontends for Web and Mobile applications in my main forcused area. Most of my career, I have worked as a Frontend developer for number of organizations.</p>
            </Card>
            <Card className={services.statItemWrapper}>
                <Image
                        src='/be.png'
                        width="30px"
                        height="30px"
                    />
                <p className={services.statItemAmount}>Backend Engineer</p>
                <p className={services.statItemTitle}>Although I don't have lot of experence in backend development, I have done several projects as a Backend developer to support my Frontend development work.</p>
            </Card>
            <Card className={services.statItemWrapper}>
                <Image
                    src='/ux.png'
                    width="30px"
                    height="30px"
                />
                <p className={services.statItemAmount}>UI/UX Designer</p>
                <p className={services.statItemTitle}>I have also involved in UI/UX designing for some mobile and web applications though out my career mainly using Photoshop, Illustrator, Adobe XD and Figma.</p>
            </Card>
            <Card className={services.statItemWrapper}>
                <Image
                        src='/qa.png'
                        width="30px"
                        height="30px"
                    />
                <p className={services.statItemAmount}>BA/QA Engineer</p>
                <p className={services.statItemTitle}>Apart from my daily development responsibilities, I have been working really close with clients to buid their products and make sure we deliver what we asked for.</p>
            </Card>
            <Card className={services.statItemWrapper}>
                <Image
                        src='/manager.png'
                        width="30px"
                        height="30px"
                    />
                <p className={services.statItemAmount}>Technical Manager</p>
                <p className={services.statItemTitle}>Apart from my development tasks, I have been also involved in Sprint planning, Task allocation and Team management to make sure the entire team will deliver the work on time.</p>
            </Card>
        </div>
    </div>
  )
}
