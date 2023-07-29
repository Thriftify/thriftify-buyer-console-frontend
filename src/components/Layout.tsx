import { FunctionComponent, ReactElement, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

interface LayoutProps {
    children?: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {

    const route = useRouter();

    const isLoginOrSignUp = route.pathname == '/login' || route.pathname == '/signup';

    return (
        <>
            {isLoginOrSignUp ?
                <>{children}</>
                : <>
                    <Navbar />
                    {children}
                    <Footer />
                </>
            }
        </>
    );
}

export default Layout;