import Pizza from "./Pizza";
import data from "../data/data.js";

const menuBoxStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    marginTop: "3rem",
}

const menuHeader = {
    textAlign: "center",
}

const menuHeaderStyle = {
    textTransform: "uppercase",
    padding: "0.6rem",
    fontWeight: "400",
    borderTop: "2px solid #27272a",
    borderBottom: "2px solid #27272a",
    display: "inline-block",
    marginBottom: "3rem",
}

const descStyle = {
    margin: "2rem 10rem",
}

function Menu() {
    return (
        <div>
            <div style={menuHeader}>
                <h2 style={menuHeaderStyle}>Our Menu</h2>

                <p style={descStyle}>
                    Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
                </p>
            </div>
            
            <div style={menuBoxStyle}>
                {data.map(function (pizzaData) {
                    return <Pizza pizzaData={pizzaData} key={pizzaData.name} />
                })}
            </div>
        </div>
    );
}

export default Menu;