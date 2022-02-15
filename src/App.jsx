import useState from "react"
import { Routes, Route, Outlet, NavLink } from 'react-router-dom'

function Login(){
    return <p>Login</p>
}
function Contact(){
    return <p>Contact</p>
}
function Services(){
    return (
        <div>
            <p>Services</p>
        {/* <Outlet/> */}
        <nav>
            <NavLink to="web">Web</NavLink> - {"  "}
            <NavLink to="server">Server</NavLink>
            </nav>
            <p>we offer great services</p>
        </div>
    )
}
function ServiceWeb(){
    return <p>ServicesWeb</p>
}
function ServiceServer(){
    return <p>ServicesServer</p>}

export default function App(){
    return(
        <div className="App">
            <h1>Router</h1>
            <nav>
                {/* <NavLink to="/">Home</NavLink> - {"  "} */}
                <NavLink to="login">Login</NavLink> - {"  "}
                <NavLink to="contact">Contact</NavLink> - {"  "}
                <NavLink to="services">Services</NavLink> - {"  "}

            </nav>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="services">
                    <Route index element={<Services/>}/>
                    <Route path="web" element={<ServiceWeb/>}/>
                    <Route path="server" element={<ServiceServer/>}/>
                </Route>
            </Routes>
        </div>
    )
}