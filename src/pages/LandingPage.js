import avatar from "../assets/icons/man.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handleToDetail = () => {
    navigate("/details");
  };

  return (
    <div className="text-center font-mono">
      <p className="text-2xl font-bold uppercase">About Me</p>
      <div className="flex justify-center">
        <img
          src={avatar}
          alt="avatar"
          className="w-[20%] my-3 bg-white rounded-full p-6"
        />
      </div>
      <p className="text-md mt-2 font-bold text-white mx-36">
        A portfolio’s meaning can be defined as a collection of financial assets
        and investment tools that are held by an individual, a financial
        institution or an investment firm. To develop a profitable portfolio, it
        is essential to become familiar with its fundamentals and the factors
        that influence it.{"\n"}
      </p>{" "}
      <br />
      <button
        className="text-xl text-[#f5f5dc] underline"
        onClick={() => handleToDetail()}
      >
        NEXT
      </button>
    </div>
  );
}

export default LandingPage;
