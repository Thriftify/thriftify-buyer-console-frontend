import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/Login.module.scss";
import Image from "next/image";
import images from "../../public/images";
import { InfoIcon } from "@/components/SVGs/SVGicons";

interface SignupProps {

}

const Signup: FunctionComponent<SignupProps> = (): ReactElement => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginPageContainer}>
                <div className={styles.container}>
                    <div className={styles.container__lhs}>
                        <Image src={images.loginImg1} alt="product" />
                        <div className={styles.textContents}>
                            <h4>Welcome to Thriftify!</h4>
                            <p>Join a world of exciting auctions and one-time sales. Discover hidden treasures and exclusive deals that match your style and budget.</p>
                        </div>
                    </div>
                    <div className={styles.container__rhs}>
                        <div className={styles.logo}>
                            <Image src={images.blueLogo} alt="Logo" />
                        </div>
                        <div className={styles.topText}>
                            <h3>Create a free account</h3>
                            <p>No hidden fees</p>
                        </div>

                        <form>
                            <div className={styles.formInputContainer}>
                                <label htmlFor="emailAddress">Email address</label>
                                <input type="text" placeholder="example@gmail.com" />
                                <span className={styles.errorMsg}><InfoIcon /> Error message here</span>
                            </div>
                            <div className={styles.formInputContainer}>
                                <label htmlFor="emailAddress">Password</label>
                                <div className={styles.subInputContainer}>
                                    <input type="password" />
                                    <button>Show</button>
                                </div>
                                <span className={styles.passwordNote}>Minimum of 8 characters, 1 letter, 1 number and 1 special character</span>
                                <span className={styles.errorMsg}><InfoIcon /> Error message here</span>
                            </div>
                            <button type="submit">Sign Up!</button>
                        </form>
                    </div>
                </div>
                <p>Already signed up? <span>Log in</span></p>
            </div>
        </div>
    );
}

export default Signup;