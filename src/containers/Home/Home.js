import React from "react";
import {NavLink} from "react-router-dom";
import { useStores } from "../../hooks/index";
import style from "./home.module.css";

const Landing = () => {

  const { uiStore} = useStores();

  const handleLogOut = async e => {
    e.preventDefault();
      await uiStore.logoutUser();
  };

  return (
    <div className={style.background}>
      <div className={style.background_elements}>
        <div className={style.content}>
          <form className={style.content_login} onSubmit={handleLogOut}>
                <input className={style.login_button} type="submit" value="Log uit"/>
          </form>
          <div className={style.content_info}>
            <h1 className={style.title}>Herbeleef jullie huwelijkreis</h1>
            <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at justo velit. Pellentesque ipsum magna, interdum sit amet tristique vel, posuere sit amet lorem.</p>
            <NavLink exact strict to="/form">
              <button className={style.button}>Wij zijn er klaar voor</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
