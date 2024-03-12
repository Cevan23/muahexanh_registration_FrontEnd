import { Login, Home } from "./pages";

const publicRoutes = [
    { path: "/login", component: Login, layout: null },
    { path: "/", component: Home, }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
