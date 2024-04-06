import { Outlet } from "react-router-dom"
import NavBarTop from "../components/navbar/main"


export default function DashboardMain(){
    return <div>
        <NavBarTop>
            <Outlet/>
        </NavBarTop>
    </div>
}
