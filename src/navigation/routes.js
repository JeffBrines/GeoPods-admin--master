import { Admins, Analytics, Podcasts, Users } from "../dashboardSection";
import CommentsReports from "../dashboardSection/CommentsReports";
import PodcastsReports from "../dashboardSection/PodcastsReports";
import UsersReports from "../dashboardSection/UsersReports";
import { Home, SignIn } from "../pages";

export const routesPublic = [
  {
    path: "/signIn",
    exact: true,
    component: SignIn,
  },
];

export const routesPrivate = [
  {
    path: "/",
    exact: false,
    component: Home,
  },
];

export const routesDashboard = [
  {
    path: "/analytics",
    exact: true,
    component: Analytics,
  },
  {
    path: "/users",
    exact: true,
    component: Users,
  },
  // {
  //   path: "/usersReports",
  //   exact: true,
  //   component: UsersReports,
  // },
  {
    path: "/podcasts",
    exact: true,
    component: Podcasts,
  },
  {
    path: "/podcastsReports",
    exact: true,
    component: PodcastsReports,
  },
  {
    path: "/commentsReports",
    exact: true,
    component: CommentsReports,
  },
  {
    path: "/admins",
    exact: true,
    component: Admins,
  },
];
