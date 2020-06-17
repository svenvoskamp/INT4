import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import Booking from "../../models/Booking";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts/index";
import * as firebase from "firebase/app";
import 'firebase/storage';
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import Step4 from "../../components/Step4/Step4";
import Step5 from "../../components/Step5/Step5";
import Step6 from "../../components/Step6/Step6";
import Step7 from "../../components/Step7/Step7";
import Step8 from "../../components/Step8/Step8";
import Back from "../../components/Back/Back";
import Progress from "../../components/Progress/Progress";
import UserData from "../../models/UserData";
import style from "./form.module.css";


const Form = () => {
  const { uiStore, bookingStore, userStore} = useStores();
  const [ currentIndex, setCurrentIndex] = useState(0);

  const [text, setText] = useState("");

  // Form css

  // Formulier : boeking
  const [ name1, setName1] = useState("");
  const [ name2, setName2] = useState("");
  const [ sex1, setSex1] = useState("male");
  const [ sex2, setSex2] = useState("female");
  const [ count, setCount] = useState(30);
  const [ pants, setPants] = useState(1);
  const [ type, setType] = useState("");
  const [ country, setCountry] = useState("");
  const [ img, setImg] = useState("");
  const [ video1, setVideo1] = useState("../../assets/video/male.webm");
  const [ video1_mp4, setVideo1MP4] = useState("../../assets/video/male.mp4");
  const [ video2, setVideo2] = useState("../../assets/video/female.webm");
  const [ video2_mp4, setVideo2MP4] = useState("../../assets/video/female.mp4");

  // Formulier : user gegevens
  const [ firstName, setFirstName] = useState("");
  const [ lastName, setLastName] = useState("");
  const [ city, setCity] = useState("");
  const [ zip, setZip] = useState("");
  const [ adress, setAdress] = useState("");
  const [ houseNumber, setHouseNumber] = useState("");
  const [ busNumber, setBusNumber] = useState("");
  const [ email, setEmail] = useState("");
  const [ telephone, setTelephone] = useState("");
  const [ terms, setTerms] = useState("");

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    setText("Uw reservatie wordt vastgelegd");
    const imgRef = await firebase.storage().ref('images/' + img.name);
    const imgUrl = imgRef.name;
    await imgRef.put(img);
    if(name1 !== "" && name2 !== "" && sex1 !== "" && sex2 !== "" && count !== "" && pants !== "" && firstName !== ""  && lastName !== "" && city !== "" && zip !== "" && adress !== "" && houseNumber !== "" && email !== "" && telephone !== "" && img !== "" && terms !== 0) {
      const booking = new Booking({user: uiStore.currentUser, sex1, sex2, name1, name2, count, pants, userId: uiStore.currentUser.id, typeId: type, countryId: country, img: imgUrl});
      const userData = new UserData({firstName, lastName, city, zip, adress, houseNumber, busNumber, email, telephone, terms, userId: uiStore.currentUser.id });
    try {
      await bookingStore.createBooking(booking);
      await userStore.createUserData(uiStore.currentUser, userData, uiStore.currentUser.email);
      await bookingStore.createBookingForUser(booking);
      await bookingStore.getBookings();
      await history.push(ROUTES.booking);
    } catch(error) {
    }
  }
}

  return (
    <>
     <div className = {`form${currentIndex}`}>
        <div className={style.form_header}>
          <Back className={style.back} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/>
          <Progress className={style.progressbar} currentIndex = {currentIndex}/>
        </div>
        <form className={style.form_input} onSubmit = {handleSubmit}>
          {currentIndex === 0 &&
            <Step1 name1 = {name1} name2 = {name2} sex1 = {sex1} sex2 = {sex2} setName1 = {setName1} setName2 = {setName2} setSex1 = {setSex1} setSex2 = {setSex2} video1 = {video1} video2 = {video2} setVideo1 = {setVideo1} setVideo2 = {setVideo2} video1_mp4 = {video1_mp4} video2_mp4 = {video2_mp4} setVideo1MP4 = {setVideo1MP4} setVideo2MP4 = {setVideo2MP4} setCurrentIndex = {setCurrentIndex}/>
          }
          {currentIndex === 1 &&
            <Step2 name1 = {name1} name2 = {name2} count = {count} setCount = {setCount} setCurrentIndex = {setCurrentIndex}/>
          }
          {currentIndex === 2 &&
            <Step3 country = {country} setCountry = {setCountry} setCurrentIndex = {setCurrentIndex}/>
          }
          {currentIndex === 3 &&
            <Step4 type = {type} setType = {setType} setCurrentIndex = {setCurrentIndex}/>
          }
          {currentIndex === 4 &&
            <Step5 pants = {pants} name1 = {name1} name2 = {name2} setPants = {setPants} setCurrentIndex = {setCurrentIndex} sex1 = {sex1} sex2 = {sex2} />
          }
          {currentIndex === 5 &&
            <Step6 img = {img} setImg = {setImg} setCurrentIndex = {setCurrentIndex}/>
          }
          {currentIndex === 6 &&
            <Step7 firstName = {firstName} setFirstName = {setFirstName} lastName = {lastName} setLastName = {setLastName} city = {city} setCity = {setCity} zip = {zip} setZip = {setZip} adress = {adress} setAdress = {setAdress} houseNumber = {houseNumber} setHouseNumber = {setHouseNumber} busNumber = {busNumber} setBusNumber = {setBusNumber} email = {email} setEmail = {setEmail} telephone = {telephone} setTelephone = {setTelephone} terms = {terms} setTerms = {setTerms} setCurrentIndex = {setCurrentIndex}/>
          }
          {currentIndex === 7 &&
            <Step8 setCurrentIndex = {setCurrentIndex} text = {text} name1 = {name1} name2 = {name2} email = {email} adress = {adress} zip = {zip} city = {city} telephone = {telephone} busNumber = {busNumber} houseNumber = {houseNumber} country = {country} type = {type}/>
          }
        </form>
      </div>
    </>
  );
};

export default Form;
