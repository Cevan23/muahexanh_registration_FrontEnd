import { Login, Home } from "./pages";
import { Project, ProjectDetail, FormProject } from "./pages/Project";

const publicRoutes = [
  { path: "/login", component: Login, layout: null },
  { path: "/", component: Home },
  { path: "/community-leader", component: Project },
  { path: "/community-leader/project-detail", component: ProjectDetail },
  { path: "/community-leader/form", component: FormProject },
  { path: "/community-leader/:id/update", component: FormProject },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
