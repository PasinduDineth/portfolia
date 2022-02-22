import Image from 'next/image'
import portfolio from '../styles/portfolioSection.module.scss'
import { Icon } from 'react-icons-kit'
import {ic_forward_to_inbox_outline} from 'react-icons-kit/md/ic_forward_to_inbox_outline'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function PortfolioSection() {
  return (
    <div className={portfolio.portfolioMain}>
        <div className={portfolio.portfolioLeftMain} id="PROJECTS">
                <p className={portfolio.fullName}>Some Of My</p>
                <p className={portfolio.welcomeMessage}>Selected <span className={portfolio.softwareEngineerText}>Contributions</span><br/></p>
        </div>
        <div className={portfolio.portfolioCardMain}>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                <CardImg top width="100%" src='/project1.jpg'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>INFOTEL Exhibition Official App</p>
                    <p className={portfolio.statItemTitle}>Lead Developer/ Technical Manager</p>
                </div>
            </Card>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                    <CardImg top width="100%" src='/project2.jpg'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>WAVE 2018 Exhibition Official app</p>
                    <p className={portfolio.statItemTitle}>UI/UX Designer/Lead Developer/Technical Manager</p>
                </div>
            </Card>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                    <CardImg top width="100%" src='/project3.jpg'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>Imperial Hotels London Booking Engine</p>
                    <p className={portfolio.statItemTitle}>Developer/Technical Manager</p>
                </div>
            </Card>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                    <CardImg top width="100%" src='/project4.jpg'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>Banking Financial Calculator</p>
                    <p className={portfolio.statItemTitle}>UI/UX Designer/Lead Developer/Technical Manager</p>
                </div>
            </Card>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                    <CardImg top width="100%" src='/project5.jpg'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>Hotel Booking App for London Hotel Chain</p>
                    <p className={portfolio.statItemTitle}>Developer</p>
                </div>
            </Card>
        </div>
    </div>
  )
}
