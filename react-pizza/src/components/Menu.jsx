import Pizza from "./Pizza";

// import focaccia from "./public/pizzas/focaccia.jpg";
// import funghi from "./pizzas/funghi.jpg";
// import margherita from "./pizzas/margherita.jpg";
// import prosciutto from "./pizzas/prosciutto.jpg";
// import salamino from "./pizzas/salamino.jpg";
// import spinaci from "./pizzas/spinaci.jpg";

const menuBoxStyle = {
    display: "grid",
    gridTemplateColumns:"repeat(2, 1fr)",
}

const menuHeader = {
    textAlign: "center",
}

const menuHeaderStyle = {
    
    textTransform: "uppercase",
    padding: "1rem 0",
    borderTop: "2px solid #27272a",
    borderBottom: "2px solid #27272a",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "15px", 
    fontWeight:"500",
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
                <Pizza  />
                <Pizza  />
                <Pizza  />
                <Pizza  />
                <Pizza  />
                <Pizza  />
            </div>
        
        </div>
    );
}

export default Menu;