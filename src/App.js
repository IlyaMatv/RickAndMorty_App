import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import s from "./App.module.css";
import Content from "./ui/Content/Content";
import Header from "./ui/Header/Header";
import RickMenu from "./ui/RickMenu/RickMenu";
import Search from "./ui/Search/Search";
import MainLoader from './ui/Loader/MainLoader';

function App() {

  const [page, setPage] = useState(1)
  const pageChanger = (p) => {
    setPage(p)
  }

  const isSearchActive = useSelector((state) => state.isSearchActive);
  const isLoading = useSelector((state) => state.isLoading);

// console.log(isLoading)
  return (
    <div className={s.wrapper}>
      <div className={s.app}>
        <MainLoader isLoading={isLoading} />
        <Header />
        <RickMenu pageChanger={pageChanger} />
        {isSearchActive && <Search pageChanger={pageChanger} />}
        <Switch>
            <Route path="/characters" render={() => <Content link="ch" page={page} pageChanger={pageChanger} />} />
            <Route path="/locations" render={() => <Content link="lo" page={page} pageChanger={pageChanger} />} />
            <Route path="/episodes" render={() => <Content link="ep" page={page} pageChanger={pageChanger} />} />
            <Route path="/" />
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
