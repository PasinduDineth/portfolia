import Image from 'next/image'
import Testamonials from '../styles/testamonials.module.scss'
import { Icon } from 'react-icons-kit'
import {cloudDownload} from 'react-icons-kit/oct/cloudDownload'
import { Navbar, Card, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function TestamonialsSection() {
  return (
    <div className={Testamonials.TestamonialsMain} id="RECOMMENDATIONS">
        <p className={Testamonials.TestamonialsTitle}>RECOMMENDATIONS</p>
        <p className={Testamonials.TestamonialsSubtitle}>What My Colleagues Say.</p>
        <p className={Testamonials.TestamonialsDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
        <div className={Testamonials.TestamonialsCardMain}>
            <Card className={Testamonials.statItemWrapper}>
                <Image
                    src='/Rating.png'
                    width="65px"
                    height="12px"
                />
                <p className={Testamonials.statItemAmount}>Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.</p>
                <div className={Testamonials.feedbackBottomWrapper}>
                    <div className={Testamonials.profileImageWrapper}>
                        <div className={Testamonials.profileImageWrapper}>
                            <Image
                                src='/profile.png'
                                width="30px"
                                height="30px"
                            />
                        </div>
                        <div className={Testamonials.nameDesignationWrapper}>
                            <p className={Testamonials.profileName}>David Hanable</p>
                            <p className={Testamonials.designation}>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={Testamonials.chatImageWrapper}>
                        <Image
                            src='/chat.png'
                            width="20px"
                            height="20px"
                        />
                    </div>
                </div>
            </Card>
            <Card className={Testamonials.statItemWrapper}>
                <Image
                    src='/Rating.png'
                    width="65px"
                    height="12px"
                />
                <p className={Testamonials.statItemAmount}>Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.</p>
                <div className={Testamonials.feedbackBottomWrapper}>
                    <div className={Testamonials.profileImageWrapper}>
                        <div className={Testamonials.profileImageWrapper}>
                            <Image
                                src='/profile.png'
                                width="30px"
                                height="30px"
                            />
                        </div>
                        <div className={Testamonials.nameDesignationWrapper}>
                            <p className={Testamonials.profileName}>David Hanable</p>
                            <p className={Testamonials.designation}>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={Testamonials.chatImageWrapper}>
                        <Image
                            src='/chat.png'
                            width="20px"
                            height="20px"
                        />
                    </div>
                </div>
            </Card>
            <Card className={Testamonials.statItemWrapper}>
                <Image
                    src='/Rating.png'
                    width="65px"
                    height="12px"
                />
                <p className={Testamonials.statItemAmount}>Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.</p>
                <div className={Testamonials.feedbackBottomWrapper}>
                    <div className={Testamonials.profileImageWrapper}>
                        <div className={Testamonials.profileImageWrapper}>
                            <Image
                                src='/profile.png'
                                width="30px"
                                height="30px"
                            />
                        </div>
                        <div className={Testamonials.nameDesignationWrapper}>
                            <p className={Testamonials.profileName}>David Hanable</p>
                            <p className={Testamonials.designation}>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={Testamonials.chatImageWrapper}>
                        <Image
                            src='/chat.png'
                            width="20px"
                            height="20px"
                        />
                    </div>
                </div>
            </Card>
        </div>
    </div>
  )
}
