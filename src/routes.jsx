import { Login, Home } from "./pages";
import { Project, ProjectDetail, PostProject, UpdateProject } from "./pages/Project";
import Register from "./pages/Register";
import Info from "./pages/Project/components/Info/Info";

const publicRoutes = [
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/info/:id", component: Info },
  { path: "/", component: Home },
  { path: "/community-leader", component: Project },
  { path: "/community-leader/:id", component: ProjectDetail },
  { path: "/community-leader/form", component: PostProject },
  { path: "/community-leader/:id/update", component: UpdateProject },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
