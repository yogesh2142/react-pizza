
const cardStyle = {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
};

const imgStyle = {
    height: "9rem",
};

const detailStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
};


function Pizza(props) {
    const { name, ingredients, price, photoName, soldOut } = props.pizzaData;
    return (
        <div style={
            !soldOut ? cardStyle : { ...cardStyle, filter: "grayscale(1)" }
                }
        >
            
            <div>
                <img style={imgStyle} src={`${photoName}`} alt={`${name}`} />
            </div>

            <div style={detailStyle}>
                <p >{name}</p>
                <p >{ingredients}</p>
                <p style={{ marginTop: "auto" }}>
                    {soldOut ? "soldOut" : `${price}`}</p>
            </div>
        </div>
    );
}

export default Pizza;