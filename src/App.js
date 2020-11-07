import { Route, Switch } from "react-router-dom";
import s from "./App.module.css";
import Content from "./ui/Content/Content";
import Header from "./ui/Header/Header";
import RickMenu from "./ui/RickMenu/RickMenu";
import Search from "./ui/Search/Search";

function App() {
  

  return (
    <div className={s.wrapper}>
      <div className={s.app}>
        <Header />
        <RickMenu />
        {/* <Search /> */}




        <Switch>

            <Route path="/characters" render={() => <Content link="ch" />} />
            <Route path="/locations" render={() => <Content link="lo" />} />
            <Route path="/episodes" render={() => <Content link="ep" />} />
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
