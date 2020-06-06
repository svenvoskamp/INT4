import React from "react";
import 'mobx-react-lite/batchingForReactDom'
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { ROUTES } from "../../consts";
import RegisterForm from "./RegisterForm";
import Form from "../../containers/Form/Form";
import Home from "../../containers/Home/Home";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";

const Authentication = () => {
  const { uiStore } = useStores();
  return useObserver (() => (
    <>
      <Switch>
        <Route exact path={ROUTES.login}>
          {
            uiStore.currentUser ? (
              <Redirect to={ROUTES.form}/>
            ):
            (
             <RegisterForm/>
            )
          }
        </Route>
        <Route exact path={ROUTES.form}>
          {
            uiStore.currentUser ? (
              <>
              <Form/>
              </>
            ):
            (
              <Redirect to={ROUTES.login}/>
            )
          }
        </Route>
        <Route path={ROUTES.home}>
        <>
          <Home/>
        </>
        )
        </Route>
      </Switch>
    </>
    )
  );
};

export default Authentication;
