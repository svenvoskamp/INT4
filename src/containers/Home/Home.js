import React from "react";
import {NavLink} from "react-router-dom";
import { useStores } from "../../hooks/index";
import style from "./home.module.css";
import {ROUTES} from "../../consts/index";
import { useHistory } from "react-router-dom";

const Landing = () => {

  const { uiStore} = useStores();
  const history = useHistory();

  const handleLogOut = async e => {
    e.preventDefault();
      await uiStore.logoutUser();
  };

  const handleLogin = async e => {
    e.preventDefault();
    history.push(ROUTES.login);
  };

  const handleBooking = async e => {
    e.preventDefault();
    history.push(ROUTES.booking);
  };
  return (
    <div className={style.background}>
      <div className={style.background_elements}>
        <div className={style.content}>
        {uiStore.currentUser ? (
          <form className={style.content_login} onSubmit={handleLogOut}>
                <input className={style.login_button} type="submit" value="Log uit"/>
          </form>
        ):
        (
          <form className={style.content_login} onSubmit={handleLogin}>
                <input className={style.login_button} type="submit" value="Log in"/>
          </form>
        )
        }
        {
          uiStore.currentBooking !== undefined &&
          <div>
            <form className={style.content_login} onSubmit={handleBooking}>
              <input className={style.login_button} type="submit" value="Bekijk uw boeking"/>
            </form>
          </div>
        }
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
