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
    <>
      <div className="background">
        <div className="background_elements">
          <div className={style.header}>
            <div className={style.header_nav}>
            {
              uiStore.currentBooking !== undefined &&
                <form className={style.header_login} onSubmit={handleBooking}>
                    <label htmlFor = "booking">
                      <input className={style.booking_button} id="booking" type="submit"/>
                      <svg className={style.booking_icon} width="30" height="30" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.2734 80.8473C32.1504 80.7659 23.4733 79.8083 15.0668 77.0358C11.5222 75.8663 8.12323 74.3769 5.09522 72.1475C3.43171 70.9211 1.95556 69.5131 0.956321 67.6698C-0.654198 64.6986 -0.21703 61.4492 2.16563 58.6483C4.44799 55.9666 7.40597 54.2444 10.557 52.8156C16.0869 50.3099 21.9442 48.9889 27.9245 48.16C28.3143 48.1051 28.8329 48.3455 29.166 48.6067C32.9093 51.5381 37.0463 53.3247 41.8968 53.0711C46.0546 52.8534 49.6012 51.1313 52.8298 48.6104C53.1648 48.3493 53.6795 48.1032 54.0694 48.1581C60.1443 49.0041 66.0906 50.3515 71.6962 52.9272C74.6352 54.2785 77.3907 55.9117 79.5841 58.3549C82.826 61.9677 82.8089 66.2277 79.5103 69.8121C76.6148 72.9594 72.8941 74.8027 68.9842 76.2977C62.7257 78.6899 56.1985 79.8821 49.5501 80.4461C46.6962 80.6902 43.8253 80.7659 42.2734 80.8473Z" fill="#D52F4F"/>
                        <path d="M62.8127 22.4392C62.0027 32.2348 58.3786 40.6204 50.5966 46.8203C44.5273 51.6537 37.6216 51.5894 31.4426 46.8884C26.5807 43.1905 23.4392 38.2226 21.3101 32.5773C19.8264 28.6447 19.0694 24.5909 19.393 20.3574C20.1141 10.9365 27.7806 2.53761 37.1087 1.00847C48.9974 -0.938912 59.6749 6.27909 62.2468 18.0486C62.561 19.485 62.631 20.9763 62.8127 22.4392Z" fill="#D52F4F"/>
                      </svg>
                    </label>
                </form>
            }
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
          </div>
            <div className={style.header_info}>
              <article className={style.header_text}>
                <h1 className={style.title}><span className={style.title_span}>Liefde</span>, zoals het vroeger was.</h1>
                <p className={`${style.text} ${style.text_intro}`}>Ga terug naar de <span className={style.text_bold}>roots</span> van jullie <span className={style.text_bold}>huwelijksreis</span> en vindt de liefde tussen jullie opnieuw! Bewonder en ontdek, maar bovenal <span className={style.text_bold}>geniet van elkaar</span> op deze <span className={style.text_bold}>jubileumreis</span> die speciaal voor jullie wordt gemaakt! </p>
                <NavLink exact strict to="/form">
                  <p className={style.button}>Wij zijn er klaar voor</p>
                </NavLink>
              </article>
              <div className={style.header_image}>
                <picture className={style.image_container}>
  	            <source className={style.image_pic} type="image/webp" srcset="/assets/images/splash_polaroid.webp"/>
                <img className={style.image_pic} src="/assets/images/splash_polaroid.png" alt="married couple"/>
              </picture>
              </div>
            </div>
            <div className={style.header_more}>
              <p className={style.more_text}>Meer info</p>
              <img className={style.more_icon} alt="pijltje" src="/assets/buttons/arrow_down.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
      <div className="background_about">
        <div className={style.about}>
            <div className={style.about_header}>
              <h1 className={`${style.title} ${style.title_center}`}><span className={style.title_span}>Halo! Honey!</span></h1>
              <h2 className={style.subtitle}>Zeg maar <span className={style.subtitle_red}>Halo!</span> tegen de <span className={style.subtitle_red}>liefde</span>, tegen jullie nieuwe <span className={style.subtitle_red}>avontuur</span> en tegen de prachtige <span className={style.subtitle_red}>locatie</span>.</h2>
            </div>
            <div className={style.about_parts}>
              <div className={`${style.about_part} ${style.part_left}`}>
                <h1 className={style.about_title}>Halo! <span className={style.title_span}>Avontuur!</span></h1>
                <div className={style.about_subtitle}>
                  <div className={style.subtitle_line}></div>
                  <p className={style.subtitle_text}>"Liefde is gemaakt om een avontuur te zijn."</p>
                </div>
                <p className={style.text}>Jullie bepalen dit avontuur. Een <span className={style.text_bold}>ontspannende</span> date? De <span className={style.text_bold}>cultuur</span> leren kennen?
                 Of juist een <span className={style.text_bold}>spannende</span> date? Wij zorgen dat het inorde komt.
                 <span className={style.text_bold}> Verleg jullie grenzen </span>en zorg ervoor dat dit een avontuur wordt dat jullie<span className={style.text_bold}> nooit meer zullen vergeten! </span></p>              </div>
              <div className={`${style.about_part} ${style.part_right}`}>
                <h1 className={style.about_title}>Halo! <span className={style.title_span}>Liefde!</span></h1>
                <div className={`${style.about_subtitle} ${style.subtitle_right}`}>
                  <div className={style.subtitle_line}></div>
                  <p className={`${style.subtitle_text} ${style.text_right}`}>“Liefde wordt beter met de tijd” </p>
                </div>
                 <p className={style.text}>Ga <span className={style.text_bold}>terug in de tijd </span> toen jullie elkaar net leerde kennen. De vonken spatten er vanaf en de  <span className={style.text_bold}>kriebels in de buik</span> waren enorm. Liefde gaat <span className={style.text_bold}>normaal voelen</span> naarmate de tijd. Het wordt dus tijd om dit te veranderen! Op deze reis wordt <span className={style.text_bold}>de vlam weer als toen! </span></p>
              </div>
              <div className={`${style.about_part} ${style.part_left}`}>
                <h1 className={style.about_title}>Halo! <span className={style.title_span}>Locatie!</span></h1>
                <div className={style.about_subtitle}>
                  <div className={style.subtitle_line}></div>
                  <p className={style.subtitle_text}>"Liefde wordt beter met de tijd"</p>
                </div>
                <p className={style.text}>Om jullie reis nog beter te maken, zullen jullie verblijven op onze  <span className={style.text_bold}>prachtige locatie </span> Deze locatie is <span className={style.text_bold}> speciaal gemaakt </span> naar jullie wensen. Jullie zullen je al <span className={style.text_bold}>snel welkom </span> voelen!</p>
              </div>
            </div>
            <div className={style.about_button}>
              <NavLink exact strict to="/form">
                <p className={`${style.button} ${style.button_center}`}>Boek jullie ervaring</p>
              </NavLink>
            </div>
          </div>
          <div className={style.about_div}></div>
        </div>
      </div>
    </>
  );
};

export default Landing;
