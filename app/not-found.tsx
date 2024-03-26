import { appTitle } from "@/_shared/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Ресурс не найден"),
};

const Home = () => {
  return (
    <section>
      <header>
        <h1>Ресурс не найден</h1>
      </header>
    </section>
  );
};

export default Home;
