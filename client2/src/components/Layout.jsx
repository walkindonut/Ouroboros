import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout({ half }) {
    return (
        <>
            <Nav />
            <main class="min-vh-100 d-flex flex-column">
                <div class="row g-0 flex-grow-1">
                    {half ?
                        <>
                            <div class="col-6 bg-leaf">
                            </div>
                            <div class="col-6 bg-body-tertiary">
                                <div class="p-5">
                                    <Outlet />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div class="col-12 bg-body-tertiary">
                                <Outlet />
                            </div>
                        </>
                    }
                </div>
            </main>
        </>
    );
}

export default Layout;