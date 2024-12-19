import "./Global.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


const appStyle = {
    color: "#27272a",
    backgroundColor: "#f7f2e9",
    borderBottom: "1rem solid #edc84b"
    
};

function App() {

    // 1. Header
    // 2. Menu
    //  2.a. PizzaCard
    // 3. Footer

    return (
        <div style={appStyle}>
            <div
                style={{
                    maxWidth: "70rem",
                    margin: "0 auto",
                    paddingTop: "4rem",
                    
                }}
            >
            <Header />
            <Menu />
            <Footer />
            </div>
        </div>
    );
}

export default App;
