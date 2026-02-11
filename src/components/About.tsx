import { Label, Button, ScrollShadow, Separator } from "@heroui/react";
import { Image } from "@heroui/image";

const texts = ["Hi", "Hello", "Greetings", "Hey"];

const goToGitHub = () => {
  const newWindow = window.open(
    "https://github.com/Precipitating",
    "_blank",
    "noopener,noreferrer",
  );
  if (newWindow) newWindow.opener = null;
};

export function About() {
  const text = texts[Math.floor(Math.random() * texts.length)];
  return (
    <section>
      <div className="flex justify-center">
        <Label className="underline decoration-1 underline-offset-8 text-3xl sm:text-4xl md:text-5xl transition-all duration-500 ease-in-out mt-5 mx-8 mb-3 ">
          {text}, i'm Eason
        </Label>
      </div>
      <div className="flex items-center justify-center">
        <Button
          isIconOnly
          onClick={goToGitHub}
          variant="outline"
          className="flex justify-center"
        >
          <Image
            alt="GitHub logo"
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            className="rounded-xl "
          />
        </Button>
      </div>
      <div
        className="mt-3 m-auto w-[clamp(20rem,40vw,48rem)] rounded-3xl border inset-shadow-sm overflow-hidden inset-shadow-current/15 backdrop-blur-sm duration-200 ease-in-out "
        style={{
          background: "color-mix(in oklab, white 3%, transparent)",
          color: "color-mix(in oklab, cyan 50%, transparent)",
        }}
      >
        <ScrollShadow className="p-4 h-[clamp(19rem,34vh,30rem)]  backdrop-blur-sm duration-200 ease-in-out " hideScrollBar>
          <p className="text-white text-sm ">
            I graduated from Sheffield Hallam University in 2023 with a BSc in
            Computer Science specializing in game development, learning mainly C++ and C#,
            with exposure to to PS4 dev kits, DX12, SFML, Unity and Unreal.
            <br />
            <br />
            My academic background has provided me with a strong foundation in
            programming games, websites, software, coupled with using software
            methodologies to consistently deliver projects ahead of schedule.
            <br />
            <br />
            I aim to create modular, clean and readable code in every project as
            it eases debugging, improves maintainability and supports team
            collaboration.
            <br />
            <br />
            While free, i'm usually or creating a new project to satisfy a
            curiosity or to accumulate knowledge and experience, striving to become better every day.
          </p>
        </ScrollShadow>
      </div>

      <div className="flex justify-center">
        <Separator className=" my-10 w-[60%] bg-white" variant="tertiary" />
      </div>
    </section>
  );
}
export default About;
