import Pizza from "./Pizza";

const menuBoxStyle = {
    display: "grid",
    gridTemplateColumns:"repeat(2, 1fr)",
}

const menuHeaderStyle = {
    textTransform: "uppercase",
    padding: "1rem 0",
    borderTop: "3px solid #27272a",
    borderBottom: "3px solid #27272a",
    display: "inline-block",
    margin:"0 auto",
    
}

function Menu() {
    return (
        <div>
            <h2 style={menuHeaderStyle}>Our Menu</h2>
            <p>
                Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
            </p>
            <div style={menuBoxStyle}>
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            </div>
            
        </div>
    );
}

export default Menu;