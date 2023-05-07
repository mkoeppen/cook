import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSession, signIn, signOut } from "next-auth/react"


const Layout = ({ children }: any) => {
    const { data: session } = useSession();

    if(session) {
        return (
            <>
                <Header />
                <main>{children}</main>
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <main>          <button onClick={() => signIn()} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button></main>
            </>
        );
    }

}

export default Layout;