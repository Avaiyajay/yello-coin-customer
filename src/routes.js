import {
  Dashboard,
  Trades,
  Watchlist,
  PortfolioPosition,
  BlockedScrips,
  ForexTrades,
  ForexWatchList,
  ForexPortfolioPosition,
  LedgeReport,
  DepositReport,
  EditDeleteLog,
  RejectionLog,
  NewDashboard,
  SpecificTrade,
  Transaction,
} from "./pages/index";

const routes = [
  { path: "/dashboard", name: "Dashboard", element: NewDashboard, exact: true },
  { path: "/trades/watchlist", name: "Trade", element: Watchlist, exact: true },
  { path: "/trades/trading", name: "Trade", element: Trades, exact: true },
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
    path: "/trades/specific-trade/:trade_identifier",
    name: "specific-trade",
    element: SpecificTrade,
    exact: true,
  },
  {
    path: "/trades/transaction",
    name: "trade-transaction",
    element: Transaction,
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
  {
    path: "/report/ledgeReport",
    name: "Report",
    element: LedgeReport,
    exact: true,
  },
  {
    path: "/report/depositReport",
    name: "Report",
    element: DepositReport,
    exact: true,
  },
  {
    path: "/log/editDeleteLog",
    name: "Log",
    element: EditDeleteLog,
    exact: true,
  },
  {
    path: "/log/rejectionLog",
    name: "Log",
    element: RejectionLog,
    exact: true,
  },
];

export default routes;
