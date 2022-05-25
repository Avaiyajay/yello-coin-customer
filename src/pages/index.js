import Dashboard from "./Dashboard/Dashboard";
import NewDashboard from "./New-Dashboard/NewDashboard";
import Log from "./log/Log";
import Login from "./login/Login";

// trades pages

// import Trades from "./trade/trades/Trades";
// import WatchList from "./trade/watchlist/WatchList";
import Trades from "./trade/Trades copy/Trades";
import Watchlist from "./trade/Watchlist copy/Watchlist";
import BlockedScrips from "./trade/blockedscripts/BlockedScrips";
import PortfolioPosition from "./trade/porfolio-position/PortfolioPosition";
import SpecificTrade from "./trade/specific-trade/SpecificTrade";

// forex pages
import { default as ForexTrades } from "./forex/trades/Trades";
import { default as ForexWatchList } from "./forex/watchlist/WatchList";
import { default as ForexPortfolioPosition } from "./forex/position_portfolio/PortfolioPosition";

// log pages
import EditDeleteLog from "./log/edit_delete_log/EditDeleteLog";
import RejectionLog from "./log/rejection_log/RejectionLog";

// report pages
import DepositReport from "./report/deposit/DepositReport";
import LedgeReport from "./report/ledge/LedgeReport";

export {
  Dashboard,
  Login,
  Trades,
  Watchlist,
  BlockedScrips,
  PortfolioPosition,
  ForexTrades,
  ForexWatchList,
  ForexPortfolioPosition,
  LedgeReport,
  DepositReport,
  EditDeleteLog,
  RejectionLog,
  NewDashboard,
  SpecificTrade,
};
