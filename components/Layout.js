import Footer from "./Footer";
// import Navbar from "./Header";

const Layout = ({children}) => {
    return ( 
        <>
            
            <main>{children}</main>
            <Footer /> 
        </>
     );
}
 
export default Layout;