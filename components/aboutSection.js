import Image from 'next/image'
import about from '../styles/aboutSection.module.scss'
import { Icon } from 'react-icons-kit'
import {ic_play_arrow} from 'react-icons-kit/md/ic_play_arrow'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function AboutSection() {
  return (
    <div className={about.aboutMain} id="ABOUT">
        <div className={about.aboutLeftMain}>
                <p className={about.fullName}>ABOUT</p>
                <p className={about.welcomeMessage}>Education and Experience. </p>               
                <p className={about.aboutDescription}>During my career, I have been contributing to the different aspects of the development cycle. Below will be some of my mainly forcused Programing lanuages, Frameworks and softwares.</p>
                <p className={about.techHeading}>Technologies and Frameworks</p>
                <div className={about.techMain}>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> React Js</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> React Native</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> Next Js</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> Gatsby</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> Node Js</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> Python</p>

                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> Adobe Photoshop</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> Adobe Illustrator</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> Adobe XD</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> Adobe After Effects</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> Figma</p>
                </div>
                <p className={about.eduHeading}>Education and Achievements</p>
                <div>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> MBA - University of Gloucestershire, UK</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> PGD in Strategic Management - OTHM Qualifications</p>
                        <p className={about.bulletText}><Icon icon={ic_play_arrow} size={20} className={about.bulletButton} /> BSc(Hons) Computer Science - University of Greenwich, UK</p>
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
