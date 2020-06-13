import React, { useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import style from "./step1.module.css"

const Step1 = ({name1, name2, sex1, sex2, setName1, setName2, setSex1, setSex2, video1, video2, setVideo1, setVideo2, video1_mp4, video2_mp4, setVideo1MP4, setVideo2MP4, setCurrentIndex}) => {

  console.log(sex1);
  console.log(sex2);
  useEffect (() => {
  const geslacht1 = document.querySelector(".video1");
  if(sex1 === "male"){
      if(geslacht1.currentSrc.includes("woman")){
      geslacht1.src ="../../assets/video/male.webm";
      geslacht1.play();
      }
  }
  if(sex1 === "female"){
      if(geslacht1.currentSrc.includes("male")){
      geslacht1.src ="../../assets/video/woman.webm";
      geslacht1.play();
      }
  }

  const geslacht2 = document.querySelector(".video2");
  if(sex2 === "female"){
      if(geslacht2.currentSrc.includes("male")){
      geslacht2.src ="../../assets/video/woman.webm";
      geslacht2.play();
      }
  }
  if(sex2 === "male"){
      if(geslacht2.currentSrc.includes("woman")){
      geslacht2.src ="../../assets/video/male.webm";
      geslacht2.play();
      }
  }
  });

  const handleClick = () => {
    if(name1 !== "" && name2 !== "" && sex1 !== "" && sex2 !== "" ){
      setCurrentIndex(1);
    }
  }

  console.log(sex1, sex2);

  return useObserver (() => (
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Om te beginnen, wat zijn jullie <span>voornamen?</span></h1>
          <h2 className={style.subtitle}>Deze data zal niet worden gepubliceerd.</h2>
        </div>
        <div className={style.content_persons}>
          <div className={style.content_person}>
            <div className={style.person_container}>
              <div className={style.person_gender}>
                <label htmlFor = "male1">
                  <input className={style.checkbox_male} defaultChecked id = "male1" type = "radio" value = "male" name = "sex1" onClick={e => setSex1(e.currentTarget.value)} required/>
                  <svg className={style.gender_male} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className={style.male_circle} cx="14.8105" cy="14.8105" r="13.8105" strokeWidth="2"/>
                    <path className={style.male_icon} d="M20.6991 9.16846H16.8454C16.7949 9.16846 16.7536 9.20732 16.7536 9.25482V10.0608C16.7536 10.1083 16.7949 10.1472 16.8454 10.1472H19.2983L16.2505 13.0157C15.4859 12.4616 14.553 12.1622 13.5728 12.1622C12.3967 12.1622 11.2896 12.594 10.4592 13.377C9.62877 14.16 9.16846 15.2006 9.16846 16.3074C9.16846 17.4143 9.62724 18.4563 10.4592 19.2379C11.2896 20.0209 12.3967 20.4527 13.5728 20.4527C14.7488 20.4527 15.856 20.0209 16.6863 19.2379C17.5183 18.4563 17.977 17.4143 17.977 16.3074C17.977 15.3848 17.659 14.5097 17.0717 13.7901L20.118 10.923V13.2273C20.118 13.2748 20.1593 13.3137 20.2098 13.3137H21.0662C21.1166 13.3137 21.1579 13.2748 21.1579 13.2273V9.60025C21.1579 9.36276 20.9515 9.16846 20.6991 9.16846ZM13.5728 19.3588C11.785 19.3588 10.3307 17.99 10.3307 16.3074C10.3307 14.6249 11.785 13.2561 13.5728 13.2561C15.3605 13.2561 16.8148 14.6249 16.8148 16.3074C16.8148 17.99 15.3605 19.3588 13.5728 19.3588Z"/>
                  </svg>
                </label>
                <label htmlFor = "female1">
                  <input className={style.checkbox_female} id = "female1" type = "radio" value = "female" name = "sex1" onClick={e => setSex1(e.currentTarget.value)} required />
                  <svg className={style.gender_female} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className={style.female_circle} cx="14.8105" cy="14.8105" r="13.8105" strokeWidth="2"/>
                    <path className={style.female_icon} d="M17.8282 16.0339C18.5831 15.2562 19 14.2203 19 13.1205C19 12.0193 18.5845 10.9848 17.8282 10.2071C17.0732 9.42946 16.0676 9 15 9C13.9324 9 12.9268 9.42801 12.1718 10.2071C11.4169 10.9863 11 12.0193 11 13.1205C11 14.0462 11.2944 14.9254 11.8366 15.6436C11.9394 15.78 12.0507 15.9092 12.1704 16.0339C12.2901 16.1573 12.4169 16.2719 12.5479 16.3778C13.1056 16.8247 13.7634 17.109 14.4648 17.2048V18.75H12.8592C12.7972 18.75 12.7465 18.8022 12.7465 18.8661V19.7366C12.7465 19.8004 12.7972 19.8527 12.8592 19.8527H14.4648V21.8839C14.4648 21.9478 14.5155 22 14.5775 22H15.4225C15.4845 22 15.5352 21.9478 15.5352 21.8839V19.8527H17.1408C17.2028 19.8527 17.2535 19.8004 17.2535 19.7366V18.8661C17.2535 18.8022 17.2028 18.75 17.1408 18.75H15.5352V17.2048C16.4014 17.0858 17.2 16.681 17.8282 16.0339ZM15 16.1384C14.2169 16.1384 13.4831 15.825 12.9282 15.2548C12.3746 14.6846 12.0704 13.9272 12.0704 13.1205C12.0704 12.3138 12.3746 11.5579 12.9282 10.9863C13.4817 10.4146 14.2169 10.1027 15 10.1027C15.7831 10.1027 16.5169 10.4161 17.0718 10.9863C17.6254 11.5565 17.9296 12.3138 17.9296 13.1205C17.9296 13.9272 17.6254 14.6831 17.0718 15.2548C16.5169 15.825 15.7831 16.1384 15 16.1384Z"/>
                  </svg>
                </label>
              </div>
              <video className = "video1" width="400" height = "400"  loop autoPlay muted>
                <source src="../../assets/video/male.webm" type="video/webm"/>
                <source src="../../assets/video/male.mp4" type="video/mp4"/>
              </video>
            </div>
            <div className={style.person_name}>
              <p className={style.name_text}>Voornaam</p>
              <label htmlFor="name1">
                <input className={style.name_input} required id="name1" min="0" max="255" value={name1} type="text" placeholder="Alex" onChange={e => setName1(e.currentTarget.value)} />
              </label>
            </div>
          </div>
          <div className={style.content_person}>
            <div className={style.person_container}>
              <video className = "video2" width="400" height = "400" loop autoPlay muted>
                <source src="../../assets/video/woman.webm" type="video/webm"/>
                <source src="../../assets/video/woman.mp4" type="video/mp4"/>
              </video>
              <div className={style.person_gender}>
                <label htmlFor = "male2">
                <input className={style.checkbox_male} id = "male2" type = "radio" value = "male" name = "sex2" onClick={e => setSex2(e.currentTarget.value)} required/>
                  <svg className={style.gender_male} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className={style.male_circle} cx="14.8105" cy="14.8105" r="13.8105" strokeWidth="2"/>
                    <path className={style.male_icon} d="M20.6991 9.16846H16.8454C16.7949 9.16846 16.7536 9.20732 16.7536 9.25482V10.0608C16.7536 10.1083 16.7949 10.1472 16.8454 10.1472H19.2983L16.2505 13.0157C15.4859 12.4616 14.553 12.1622 13.5728 12.1622C12.3967 12.1622 11.2896 12.594 10.4592 13.377C9.62877 14.16 9.16846 15.2006 9.16846 16.3074C9.16846 17.4143 9.62724 18.4563 10.4592 19.2379C11.2896 20.0209 12.3967 20.4527 13.5728 20.4527C14.7488 20.4527 15.856 20.0209 16.6863 19.2379C17.5183 18.4563 17.977 17.4143 17.977 16.3074C17.977 15.3848 17.659 14.5097 17.0717 13.7901L20.118 10.923V13.2273C20.118 13.2748 20.1593 13.3137 20.2098 13.3137H21.0662C21.1166 13.3137 21.1579 13.2748 21.1579 13.2273V9.60025C21.1579 9.36276 20.9515 9.16846 20.6991 9.16846ZM13.5728 19.3588C11.785 19.3588 10.3307 17.99 10.3307 16.3074C10.3307 14.6249 11.785 13.2561 13.5728 13.2561C15.3605 13.2561 16.8148 14.6249 16.8148 16.3074C16.8148 17.99 15.3605 19.3588 13.5728 19.3588Z"/>
                  </svg>
                </label>
                <label htmlFor = "female2">
                  <input className={style.checkbox_female} defaultChecked id = "female2" type = "radio" value = "female" name = "sex2" onClick={e => setSex2(e.currentTarget.value)} required />
                  <svg className={style.gender_female} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className={style.female_circle} cx="14.8105" cy="14.8105" r="13.8105" strokeWidth="2"/>
                    <path className={style.female_icon} d="M17.8282 16.0339C18.5831 15.2562 19 14.2203 19 13.1205C19 12.0193 18.5845 10.9848 17.8282 10.2071C17.0732 9.42946 16.0676 9 15 9C13.9324 9 12.9268 9.42801 12.1718 10.2071C11.4169 10.9863 11 12.0193 11 13.1205C11 14.0462 11.2944 14.9254 11.8366 15.6436C11.9394 15.78 12.0507 15.9092 12.1704 16.0339C12.2901 16.1573 12.4169 16.2719 12.5479 16.3778C13.1056 16.8247 13.7634 17.109 14.4648 17.2048V18.75H12.8592C12.7972 18.75 12.7465 18.8022 12.7465 18.8661V19.7366C12.7465 19.8004 12.7972 19.8527 12.8592 19.8527H14.4648V21.8839C14.4648 21.9478 14.5155 22 14.5775 22H15.4225C15.4845 22 15.5352 21.9478 15.5352 21.8839V19.8527H17.1408C17.2028 19.8527 17.2535 19.8004 17.2535 19.7366V18.8661C17.2535 18.8022 17.2028 18.75 17.1408 18.75H15.5352V17.2048C16.4014 17.0858 17.2 16.681 17.8282 16.0339ZM15 16.1384C14.2169 16.1384 13.4831 15.825 12.9282 15.2548C12.3746 14.6846 12.0704 13.9272 12.0704 13.1205C12.0704 12.3138 12.3746 11.5579 12.9282 10.9863C13.4817 10.4146 14.2169 10.1027 15 10.1027C15.7831 10.1027 16.5169 10.4161 17.0718 10.9863C17.6254 11.5565 17.9296 12.3138 17.9296 13.1205C17.9296 13.9272 17.6254 14.6831 17.0718 15.2548C16.5169 15.825 15.7831 16.1384 15 16.1384Z"/>
                  </svg>
                </label>
              </div>
            </div>
            <div className={style.person_name}>
              <p className={style.name_text}>Voornaam</p>
              <label htmlFor="name2" >
                <input className={style.name_input} required id="name2" min="0" max="255" value={name2} type="text" placeholder="Celine" onChange={e => setName2(e.currentTarget.value)} />
              </label>
            </div>
        </div>
        </div>
        <div className={style.button_container}>
          <button className={style.confirm} onClick = {handleClick}>Ja, dit zijn wij!</button>
        </div>
      </div>
  )
  );
}

export default Step1;
