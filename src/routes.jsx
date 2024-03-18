import { Login, Home } from "./pages";
import { Project, ProjectDetail, PostProject, UpdateProject } from "./pages/community-leader-pages";
import Register from "./pages/Register";
import Profile from "./pages/community-leader-pages/components/Profile/Profile";

const publicRoutes = [

  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/:id", component: Profile }, //Test route profile sau này sẽ làm component của 3 Role
  
  

  //University route


  
  
  //Student-route
  { path: "/student", component: Home },



  
  //Community leader route 
  { path: "/community-leader", component: Project },
  { path: "/community-leader/project-detail/:projectId", component: ProjectDetail },
  { path: "/community-leader/form", component: PostProject },
  { path: "/community-leader/:id/update", component: UpdateProject },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
