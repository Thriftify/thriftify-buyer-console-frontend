import { FunctionComponent, ReactElement, useState, useRef } from "react";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import images from "../../public/images";
import { CaretDownIcon, DropDownArrowIcon, HamburgerIcon, UserIcon } from "./SVGs/SVGicons";
import useOuterClick from "./hooks/useOuterClick";
import useResponsive from "./hooks/useResponsiveness copy";
interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {

    const onMobile = useResponsive();

    const [navbarDropdownIsVisible, setNavbarDropdownIsVisible] = useState(false);
    const [mobileNavbarIsVisible, setMobileNavbarIsVisible] = useState(false);

    const navbarDropdownRef = useRef<HTMLDivElement>(null);

    useOuterClick(navbarDropdownRef, setNavbarDropdownIsVisible);

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.logoArea}>
                <Image src={images.wordmark_white} alt="logo" />
            </div>
            {!onMobile ? <div className={styles.linksSection}>
                <ul className={styles.navLinks}>
                    <li>Products</li>
                    <li>About us</li>
                    <li>Support</li>
                </ul>
                <div className={styles.accountSection} ref={navbarDropdownRef}>
                    <div className={styles.profileCircle}>
                        <UserIcon />
                    </div>
                    <h3>Account</h3>
                    <span className={styles.dropdownIcon} onClick={() => setNavbarDropdownIsVisible(!navbarDropdownIsVisible)}>
                        <CaretDownIcon />
                    </span>
                    {navbarDropdownIsVisible &&
                        <div className={styles.dropdownContainer}>
                            <span>Account</span>
                            <span>Log out</span>
                        </div>}
                </div>
            </div> :
                <div
                    className={styles.mobileNavIcon}
                    onClick={() => { setMobileNavbarIsVisible(!mobileNavbarIsVisible) }}>
                    <HamburgerIcon isOpen={mobileNavbarIsVisible} />
                </div>}

            {/* Mobile navbar */}
            {onMobile && mobileNavbarIsVisible &&
                <>
                    <div className={styles.mobileNavbarOverlay}></div>
                    <div className={styles.mobileNavbar}>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>About us</li>
                            <li>Support</li>
                            <li>Account</li>
                            <li><button>Become a seller</button></li>
                        </ul>
                        <span></span>
                        <span></span>
                    </div>
                </>
            }
        </div>
    );
}

export default Navbar;