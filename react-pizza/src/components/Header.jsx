/* eslint-disable no-dupe-keys */

const headingStyle = {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "400",
    paddingBottom: "3rem",
    color: "#edc84b",
    fontSize: "50px",
    fontWeight: "200",
}

function Header() {
    return <div>
        <h1 style={headingStyle}> Fast React Pizza Co. </h1>
    </div>
}

export default Header;
