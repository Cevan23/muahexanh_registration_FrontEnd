import { Login, Home } from "./pages";
import { Project, ProjectDetail} from "./pages/Project";

const publicRoutes = [
    { path: "/login", component: Login, layout: null },
    { path: "/", component: Home, },
    { path: "/community-leader", component: Project, },
    { path: "/community-leader/:id", component: ProjectDetail, },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
