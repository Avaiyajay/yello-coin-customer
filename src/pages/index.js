import Dashboard from "./Dashboard/Dashboard";
import Log from "./log/Log";
import Login from "./login/Login";
import Report from "./report/Report";

// trades pages

import Trades from "./trade/trades/Trades";
import WatchList from "./trade/watchlist/WatchList";
import BlockedScrips from "./trade/blockedscripts/BlockedScrips";
import PortfolioPosition from "./trade/porfolio-position/PortfolioPosition";

// forex pages
import { default as ForexTrades } from "./forex/trades/Trades";
import { default as ForexWatchList } from "./forex/watchlist/WatchList";
import { default as ForexPortfolioPosition } from "./forex/position_portfolio/PortfolioPosition";

export {
  Dashboard,
  Report,
  Log,
  Login,
  Trades,
  WatchList,
  BlockedScrips,
  PortfolioPosition,
  ForexTrades,
  ForexWatchList,
  ForexPortfolioPosition,
};
