import Image from 'next/image'
import portfolio from '../styles/portfolioSection.module.scss'
import { Icon } from 'react-icons-kit'
import {ic_forward_to_inbox_outline} from 'react-icons-kit/md/ic_forward_to_inbox_outline'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
export default function PortfolioSection() {
  return (
    <div className={portfolio.portfolioMain}>
        <div className={portfolio.portfolioLeftMain}>
                <p className={portfolio.fullName}>Some Of My Latest</p>
                <p className={portfolio.welcomeMessage}>Selected <span className={portfolio.softwareEngineerText}>Works</span><br/></p>
        </div>
        <div className={portfolio.portfolioCardMain}>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                <CardImg top width="100%" src='/imageplaceholder.png'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>Creativa - Elementor Template Kit</p>
                    <p className={portfolio.statItemTitle}>UI/UX Design</p>
                </div>
            </Card>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                    <CardImg top width="100%" src='/imageplaceholder.png'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>Nusapp - Elementor Template Kit</p>
                    <p className={portfolio.statItemTitle}>UI/UX Design</p>
                </div>
            </Card>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                    <CardImg top width="100%" src='/imageplaceholder.png'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>Marketin - Elementor Template Kit</p>
                    <p className={portfolio.statItemTitle}>UI/UX Design</p>
                </div>
            </Card>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                    <CardImg top width="100%" src='/imageplaceholder.png'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>Marketin - Elementor Template Kit</p>
                    <p className={portfolio.statItemTitle}>UI/UX Design</p>
                </div>
            </Card>
            <Card className={portfolio.statItemWrapper}>
                <div className={portfolio.cardImage}>
                    <CardImg top width="100%" src='/imageplaceholder.png'/>
                </div>
                <div className={portfolio.cardDetails}>
                    <p className={portfolio.statItemAmount}>Marketin - Elementor Template Kit</p>
                    <p className={portfolio.statItemTitle}>UI/UX Design</p>
                </div>
            </Card>
        </div>
    </div>
  )
}
