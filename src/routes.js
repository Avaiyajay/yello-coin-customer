import { Dashboard, Forex, Report, Log, Trade } from "./pages/index";
const routes = [
  { path: "/", name: "Dashboard", element: Dashboard, exact: true },
  { path: "/trade", name: "Trade", element: Trade, exact: true },
  { path: "/forex", name: "Forex", element: Forex, exact: true },
  { path: "/report", name: "Report", element: Report, exact: true },
  { path: "/log", name: "Log", element: Log, exact: true },
];

export default routes;
