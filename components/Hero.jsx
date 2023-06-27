import Image from "next/image";
//import Link from "next/link";
// import { BiLogoFacebookCircle } from "react-icons/bi";
// import { BiLogoTwitter } from "react-icons/bi";
// import { AiFillLinkedin } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="hero-wrape mx-auto mt-20 ">
      <div className="hero wrapper grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden ">
        <div class="hero-left  ">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683005077/109305530_mjokbs.jpg"
            alt="hero image"
            width={450}
            height={450}
            className="rounded-sm "
          />
        </div>
        <div class="hero-right">
          <div className="space-y-5">
            <p className="text-2xl  font-semibold">Hello there, my name is</p>
            <h1 className="text-7xl font-semibold text-orange-300 uppercase">
              Kajal Rekha,
            </h1>
            <p className="text-6xl text-gray-300 leading-none">
              a passionate{" "}
              <span className="text-orange-300 italic">MERN Stack</span>{" "}
              enthusiast and aspiring developer, proudly representing
              Bangladesh.
            </p>
          </div>
          {/* <div className="mt-10">
          {" "}
          <Link
            href="/about"
            className="font-semibold py-3 px-6 rounded-lg bg-orange-400 hover:bg-orange-300 duration-300"
          >
            Learn More
          </Link>
        </div> */}
          {/* <div className="social-links mt-32 flex gap-5 text-xl  ">
          <Link
            href="https://www.facebook.com/anowar.kajal"
            className="bg-orange-400 rounded-full py-1 px-1 "
          >
            <BiLogoFacebookCircle />
          </Link>
          <Link
            href="https://twitter.com/KajalRekha14"
            className="rounded-full py-1 px-1 bg-orange-400"
          >
            <BiLogoTwitter />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kajal-rekha-81262b264/"
            className="rounded-full py-1 px-1 bg-orange-400"
          >
            <AiFillLinkedin />
          </Link>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
