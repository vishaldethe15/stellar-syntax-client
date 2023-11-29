import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/src/assets/logo.gif" alt="logo" />
      </Link>
      <header>
        <h2>Stellar Syntax</h2>
        <p>From Code to Creation</p>
      </header>
    </section>
  );
};

export default Intro;
