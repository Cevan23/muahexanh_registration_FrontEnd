import { Login, Home } from "./pages";
import { Project, ProjectDetail, FormProject } from "./pages/Project";
import Register from "./pages/Register";
import Info from "./pages/Project/components/Info/Info";


const publicRoutes = [
    { path: "/register", component: Register, layout: null },
    { path: "/login", component: Login, layout: null },
    { path: "/info/:id", component: Info, },
    { path: "/", component: Home, },
    { path: "/community-leader", component: Project },
    { path: "/community-leader/:id", component: ProjectDetail },
    { path: "/community-leader/form", component: FormProject },
    { path: "/community-leader/:id/update", component: FormProject },]


const privateRoutes = [];

export { publicRoutes, privateRoutes };
