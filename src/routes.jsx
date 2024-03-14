import { Login, Home } from "./pages";
import { Project, ProjectDetail, FormProject} from "./pages/Project";

const publicRoutes = [
  { path: "/login", component: Login, layout: null },
  { path: "/", component: Home },
  { path: "/community-leader", component: Project },
  { path: "/community-leader/:id", component: ProjectDetail },
  { path: "/community-leader/form", component: FormProject },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
