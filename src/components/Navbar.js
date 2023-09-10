import logo from "../assets/icons/profile.png";
import facebook from "../assets/icons/facebook.png";
import github from "../assets/icons/github.png";
import twitter from "../assets/icons/twitter.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="logo" width={50} className="cursor-pointer" />
      <ul className="hidden md:flex">
        <li className="px-2">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="facebook" width={30} />
          </a>
        </li>
        <li className="px-2">
          <a href="https://github.com/" target="_blank">
            <img src={github} alt="github" width={30} />
          </a>
        </li>
        <li className="px-2">
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="twitter" width={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
