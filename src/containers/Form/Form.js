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
import Progress from "../../components/Progress/Progress";


const Form = () => {
  const { uiStore, typeStore, countryStore, bookingStore} = useStores();
  const [ currentIndex, setCurrentIndex] = useState(0);
  const [ name1, setName1] = useState("");
  const [ name2, setName2] = useState("");
  const [ sex1, setSex1] = useState("");
  const [ sex2, setSex2] = useState("");
  const [ count, setCount] = useState("");
  const [ pants, setPants] = useState("");
  const [ type, setType] = useState("");
  const [ country, setCountry] = useState("");
  const [ img, setImg] = useState("");
  const [ firstName, setFirstName] = useState("");
  const history = useHistory();

  const handleLogOut = async e => {
    e.preventDefault();
      await uiStore.logoutUser();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const imgRef = await firebase.storage().ref('images/' + img.name);
    console.log(imgRef);
    const imgUrl = imgRef.name;
    await imgRef.put(img);
    if(name1 !== "" && name2 !== "" && sex1 !== "" && sex2 !== "" && count !== "" && pants !== "") {
      const booking = new Booking({user: uiStore.currentUser, sex1, sex2, name1, name2, count, pants, userId: uiStore.currentUser.id, typeId: type, countryId: country, img: imgUrl});
    try {
      console.log(booking);
      const newBooking = await bookingStore.createBooking(booking);
      console.log(newBooking);
      await bookingStore.createBookingForUser(booking);
      await bookingStore.getBookings();
      await history.push(ROUTES.booking);
    } catch(error) {
      console.log(error);
    }
  }
}

  return (
    <>
    <h1>Dit is het formulier </h1>
    <form onSubmit={handleLogOut}>
        <input type="submit" value="Logout"/>
    </form>
    <Progress currentIndex = {currentIndex}/>
    <form onSubmit = {handleSubmit}>
    {currentIndex === 0 &&
    <div>
      <Step1 name1 = {name1} name2 = {name2} sex1 = {sex1} sex2 = {sex2} setName1 = {setName1} setName2 = {setName2} setSex1 = {setSex1} setSex2 = {setSex2} setCurrentIndex = {setCurrentIndex}/>
    </div>
    }

    {currentIndex === 1 &&
    <div>
      <Step2 count = {count} setCount = {setCount} setCurrentIndex = {setCurrentIndex}/>
    </div>
    }

    {currentIndex === 2 &&
     <div>
      <Step3 type = {type} setType = {setType} setCurrentIndex = {setCurrentIndex}/>
    </div>
    }
    {currentIndex === 3 &&
    <div>
      <Step4 country = {country} setCountry = {setCountry} setCurrentIndex = {setCurrentIndex}/>
    </div>
    }
    {currentIndex === 4 &&
    <div>
      <Step5 pants = {pants} name1 = {name1} name2 = {name2} setPants = {setPants} setCurrentIndex = {setCurrentIndex}/>
    </div>
    }
    {currentIndex === 5 &&
    <div>
      <Step6 img = {img} setImg = {setImg} setCurrentIndex = {setCurrentIndex}/>
    </div>
    }
    {currentIndex === 6 &&
    <div>
      <Step7 firstName = {firstName} setFirstName = {setFirstName} setCurrentIndex = {setCurrentIndex}/>
    </div>
    }
    {currentIndex === 7 &&
    <div>
      <Step8 setCurrentIndex = {setCurrentIndex}/>
    </div>
    }

    </form>
    </>
  );
};

export default Form;
