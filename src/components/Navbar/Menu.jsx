import { Link } from "react-router-dom";
import { navLinks } from "./navLinks";
import { useGlobalContext } from "../../Context";

const Menu = () => {
  const { toggleMenu } = useGlobalContext();

  return (
    <section id="menu">
      <section>
        <ul className="links">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>
                  <h3>{link.text}</h3>
                  <p>{link.desc}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <ul className="actions stacked">
          <li>
            <a className="button large fit" onClick={toggleMenu}>
              Close
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Menu;
