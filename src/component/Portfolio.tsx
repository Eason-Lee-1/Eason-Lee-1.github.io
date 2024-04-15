import RomanVoid from "./RomanVoid";
import AllThatIsLost from "./AllThatIsLost";
import GravityWalk from "./GravityWalk";
import { Card, Divider } from "@nextui-org/react";

const Portfolio = () => {
  return (
    <>
      <section>
        <header id="projects">
          <h1 className="flex justify-center font-Kode  text-2xl  sm:text-3xl md:text-4xl lg:text-5xl m-8 underline underline-offset-8">
            Projects
          </h1>
        </header>
      </section>

      <section className="font-Kode">
        <h2 className=" flex justify-center text-sm sm:text-lg md:text-xl lg:text-2xl  underline underline-offset-8">
          Personal Projects
        </h2>
        <Card isBlurred className="mx-5 mt-5 bg-inherit">
          <p className="m-auto"> TBD</p>
        </Card>
      </section>

      <section>
        <h2 className=" m-5 flex justify-center font-Kode text-sm sm:text-lg md:text-xl lg:text-2xl  underline underline-offset-8">
          Group Projects
        </h2>
        <Card isBlurred className="mx-5 mt-5 bg-inherit">
          <RomanVoid />
          <Divider />
          <AllThatIsLost />
          <Divider />
          <GravityWalk />
        </Card>
      </section>
    </>
  );
};

export default Portfolio;
