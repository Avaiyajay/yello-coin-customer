import {
  Dashboard,
  Report,
  Log,
  Trades,
  WatchList,
  PortfolioPosition,
  BlockedScrips,
  ForexTrades,
  ForexWatchList,
  ForexPortfolioPosition,
} from "./pages/index";

const routes = [
  { path: "/", name: "Dashboard", element: Dashboard, exact: true },
  { path: "/trade/watchlist", name: "Trade", element: WatchList, exact: true },
  { path: "/trade/trades", name: "Trade", element: Trades, exact: true },
  {
    path: "/trade/portfolio_position",
    name: "Trade",
    element: PortfolioPosition,
    exact: true,
  },
  {
    path: "/trade/blocked_scripts",
    name: "Trade",
    element: BlockedScrips,
    exact: true,
  },
  {
    path: "/forex/watchlist",
    name: "Forex",
    element: ForexWatchList,
    exact: true,
  },
  { path: "/forex/trades", name: "Forex", element: ForexTrades, exact: true },
  {
    path: "/forex/portfolio_position",
    name: "Forex",
    element: ForexPortfolioPosition,
    exact: true,
  },
  { path: "/report", name: "Report", element: Report, exact: true },
  { path: "/log", name: "Log", element: Log, exact: true },
];

export default routes;
