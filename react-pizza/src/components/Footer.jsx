
const footerStyle = {
    margin:"2rem",
    textAlign: "center",
    
}

const btnStyle = {
    backgroundColor: "#edc84b",
    margin: "3rem 0",
    padding: "1rem 1.5rem",
    border: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "#27272a",
    letterSpacing: "0.1rem"
};

function Footer() {
    return <div style={footerStyle}>
        <p style={{fontSize:"13px", fontWeight:"500"}}>We&apos;r open until 20:00. Come visit us or order online</p>
        <button style={btnStyle}>Order Now</button>
    </div>
}

export default Footer;