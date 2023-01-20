import {
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig,
} from "@tanstack/react-router";
import Index from "./Index";
import Form from "./Form";
import TransactionList from "./Transactions/TransactionList";

const rootRoute = createRouteConfig({
  component: Outlet,
});

const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Index,
});

const formRoute = rootRoute.createRoute({
  path: "/form",
  component: Form,
});

const listRoute = rootRoute.createRoute({
  path: "/list",
  component: TransactionList,
});

const routeConfig = rootRoute.addChildren([indexRoute, formRoute, listRoute]);

const router = createReactRouter({ routeConfig });

function App() {
  return <RouterProvider router={router} />;
}
export default App;

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}
