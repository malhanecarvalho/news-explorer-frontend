import { useContext } from "react";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";
import Navigation from "./Navigation";
import ResponseMenuNavigation from "./MenuMobile";

function Header() {
  const { isMobileOpen } = useContext(CurrentUserContext);

  return (
    <header className="header">
      {isMobileOpen ? <ResponseMenuNavigation /> : <Navigation />}
    </header>
  );
}

export default Header;
