import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return <nav className = "nav">
        {/* <a href = "/" className = "title">Site Name</a> */}
        <Link to = "/" className = "title">Site Name</Link>

        <ul>
            <CustomLink to ="/catalog">Catalog</CustomLink>
            <CustomLink to ="/about">About</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    // let path = window.location.pathname
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        // <li className = {path === to ? "active" : ""}>
        <li className = {isActive ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}