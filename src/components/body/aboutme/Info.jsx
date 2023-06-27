import React, { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

function Info() {
  const [text] = useTypewriter({
    words: [
      "Welcome to my website! I'm Rochak Dhakal, a passionate and aspiring frontend developer. While I'm still at the beginning of my professional journey, I have already dived into the exciting world of web development and embarked on several personal projects to hone my skills. My fascination with frontend development stems from my love for crafting visually appealing and user-friendly websites. I'm captivated by the art of transforming designs into interactive and dynamic digital experiences. Through my personal projects, I've gained hands-on experience in HTML, CSS, JavaScript, and React JS.",
    ],
    typeSpeed: 10,
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-2" data-aos="fade-up" data-aos-easing="ease-in-out">
      <span className="d-block display-3 fw-light text-warning">ABOUT ME</span>
      <span className="m-4 display-5 text-light">{text}</span>
    </div>
  );
}

export default Info;
