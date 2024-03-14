import "./styles.css";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header>
        <Image src="/logo.png" width={100} height={100} alt="logo" />
        <div>
          <p>Os melhores animes estão aqui </p>
        </div>
        <div></div>
      </header>
    </>
  );
};

export default Header;
