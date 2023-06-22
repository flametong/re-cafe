import { Outlet } from "react-router-dom"
import { Main } from "../../components/Main/Main"

export const Categories = () => {
    return (
        <Main>
            <Outlet />
        </Main>
    )
}