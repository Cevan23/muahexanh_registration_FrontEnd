import { Login, StudentHome, UniversityHome } from "./pages";
import {
  Project,
  PostProject,
  UpdateProject,
} from "./pages/community-leader-pages";
import Register from "./pages/Register";
import { Profile, ProjectDetail } from "./components";

const publicRoutes = [
  { path: "/register", component: Register, layout: null },
  { path: "/", component: Login, layout: null },
  { path: "/login", component: Login, layout: null },
];

const privateRoutes = [
  { path: "profile/:id", component: Profile }, 
  { path: "profile/:id", component: Profile },
  //University route
  { path: "/university", component: UniversityHome },
  {
    path: "/university/project-detail/:projectId",
    component: ProjectDetail,
  },

  //Student-route
  { path: "/student", component: StudentHome },
  {
    path: "/student/project-detail/:projectId",
    component: ProjectDetail,
  },

  //Community leader route
  { path: "/community-leader", component: Project },
  {
    path: "/community-leader/project-detail/:projectId",
    component: ProjectDetail,
  },
  { path: "/community-leader/form", component: PostProject },
  { path: "/community-leader/:id/update", component: UpdateProject },
];

export { publicRoutes, privateRoutes };
