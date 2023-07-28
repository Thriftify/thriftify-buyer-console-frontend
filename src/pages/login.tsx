import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/Login.module.scss";
import Image from "next/image";
import images from "../../public/images";
import { InfoIcon } from "@/components/SVGs/SVGicons";
import useResponsive from "@/components/hooks/useResponsiveness";
import Link from "next/link";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = (): ReactElement => {

    const onMobile = useResponsive();

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginPageContainer}>
                <div className={styles.container}>
                    {!onMobile && <div className={styles.container__lhs}>
                        <Image src={images.loginImg3} alt="product" />
                        <div className={styles.textContents}>
                            <h4>Stay in the Loop</h4>
                            <p>Never miss a great deal or auction again! Customize your notifications to receive alerts on your favorite products and events.</p>
                        </div>
                    </div>}
                    <div className={styles.container__rhs}>
                        <div className={styles.logo}>
                            <Image src={images.blueLogo} alt="Logo" />
                        </div>
                        <div className={styles.topText}>
                            <h3>Log in to account</h3>
                            <p>We are glad you are back.</p>
                        </div>

                        <form>
                            <div className={styles.formInputContainer}>
                                <label htmlFor="emailAddress">Email / Username</label>
                                <input type="text" />
                                <span className={styles.errorMsg}><InfoIcon /> Error message here</span>
                            </div>
                            <div className={styles.formInputContainer}>
                                <label htmlFor="emailAddress">Password</label>
                                <div className={styles.subInputContainer}>
                                    <input type="password" />
                                    <button>Show</button>
                                </div>
                                <span className={styles.errorMsg}><InfoIcon /> Error message here</span>
                            </div>
                            <button type="submit">Log in</button>
                        </form>
                    </div>
                </div>
                <p>Don&apos;t have an account?&nbsp;
                    <Link href='/signup'>
                        <span>Sign up</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;