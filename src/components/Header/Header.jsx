import style from "./Header.module.scss";
import BurgerHeader from "../../assets/img/burgerHeader.png";
import TextHeader from "../../assets/img/textHeader.png";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import Categories from "./Categories/Categories";
const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.content}>
        <img src={BurgerHeader} alt="burger" />
        <div className={style.items}>
          <img src={TextHeader} alt="text" />
          <span>Бесплатная доставка от 599₽</span>
        </div>
      </div>
      <Categories />
    </header>
  );
};

export default Header;
