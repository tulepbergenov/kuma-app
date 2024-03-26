import { Metadata } from "next";
import { _metadata } from "./_meta";

export const metadata: Metadata = _metadata;

const Home = () => {
  return (
    <section>
      <header>
        <h1 className="sr-only">Kuma - агрегатор курсов онлайн</h1>
        <p>Kuma</p>
      </header>
    </section>
  );
};

export default Home;
