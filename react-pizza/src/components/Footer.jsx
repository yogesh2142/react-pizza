
const footerStyle = {
    margin:"2rem",
    textAlign: "center",
    marginBottom:"8rem",
    
}

const btnStyle = {
    backgroundColor: "#edc84b",
    color: "black",
    fontSize: "14px",
    padding: "10px 0.6rem",
    marginTop: "1.3rem",
    border: "none",
    
}

function Footer() {
    return <div style={footerStyle}>
        <p style={{fontSize:"13px", fontWeight:"500"}}>We&apos;r open until 20:00. Come visit us or order online</p>
        <button style={btnStyle}>Order Now</button>
    </div>
}

export default Footer;