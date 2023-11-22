import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="blurb">
      <h2>About</h2>
      <p>
        "Unraveling the mysteries of the universe, one line of code at a time:
        Join me on an awe-inspiring journey through my blog."
      </p>
      <ul className="actions">
        <li>
          <Link
            to="https://vishal-dethe.netlify.app/"
            className="button"
            target="blank"
          >
            About Me
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default About;
