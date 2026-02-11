import { Separator } from "@heroui/react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import EscapeGPT from "./Project/EscapeGPT";
import JunctionStreet from "./Project/JunctionStreet";
import Bomba from "./Project/Bomba";
import RiskyBomb from "./Project/RiskyBomb";
import Darkhold from "./Project/Darkhold";
import Autosubber from "./Project/AutoSubber";
import TypeFighter from "./Project/TypeFighter";
import Mimic from "./Project/Mimic";
import PlayerWatch from "./Project/PlayerWatch";
import AIShooter from "./Project/AIShooter";
import Keychain from "./Project/Keychain";
import UnitySaveDeleter from "./Project/UnitySaveDeleter";
import ShoppingList from "./Project/ShoppingList";
import RomanVoid from "./GroupProject/RomanVoid";
import AllThatIsLost from "./GroupProject/AllThatIsLost";
import GravityWalk from "./GroupProject/GravityWalk";
import { forwardRef, useState, useEffect } from "react";

const pauseVideos = (className: string) => {
  const containers = document.querySelectorAll(className);
  if (!containers) return;

  containers.forEach((container) => {
    const iframes = container.querySelectorAll<HTMLIFrameElement>("iframe");

    iframes.forEach((iframe) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
        "*",
      );
    });
  });
};

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  const [apiPersonal, setApiPersonal] = useState<CarouselApi>();
  const [apiGroup, setApiGroup] = useState<CarouselApi>();

  useEffect(() => {
    if (!apiPersonal && !apiGroup) return;

    const onPersonalSelect = () => pauseVideos(".personal");
    const onGroupSelect = () => pauseVideos(".group");

    apiPersonal?.on("select", onPersonalSelect);
    apiGroup?.on("select", onGroupSelect);

    return () => {
      apiPersonal?.off("select", onPersonalSelect);
      apiGroup?.off("select", onGroupSelect);
    };
  }, [apiPersonal, apiGroup, pauseVideos]);

  return (
    <>
      <section ref={ref}>
        <div className="flex justify-center">
          <Separator className=" my-10 w-[60%] bg-white" variant="tertiary" />
        </div>
        <div className="flex justify-center">
          <h2 className="-mt-4 underline decoration-1 underline-offset-8 text-3xl sm:text-4xl md:text-5xl transition-all duration-500 ease-in-out">
            Projects
          </h2>
        </div>
        <div className="flex justify-center">
          <h3 className="mt-10 underline-offset-8 text-2xl sm:text-3xl md:text-4xl transition-all duration-500 ease-in-out">
            Personal Projects
          </h3>
        </div>
        <div className="flex justify-center">
          <Separator className=" my-1 w-[40%] bg-white" variant="tertiary" />
        </div>
      </section>

      <section>
        <div
          className="mt-5 mx-5 rounded-3xl border inset-shadow-sm overflow-hidden inset-shadow-current/15 backdrop-blur-sm duration-200 ease-in-out p-5"
          style={{
            color: "color-mix(in oklab, cyan 100%, transparent)",
          }}
        >
          <Carousel setApi={setApiPersonal}>
            <CarouselContent>
              <CarouselItem>
                <EscapeGPT />
              </CarouselItem>
              <CarouselItem>
                <JunctionStreet />
              </CarouselItem>
              <CarouselItem>
                <Bomba />
              </CarouselItem>
              <CarouselItem>
                <RiskyBomb />
              </CarouselItem>
              <CarouselItem>
                <Darkhold />
              </CarouselItem>
              <CarouselItem>
                <Autosubber />
              </CarouselItem>
              <CarouselItem>
                <TypeFighter />
              </CarouselItem>
              <CarouselItem>
                <Mimic />
              </CarouselItem>
              <CarouselItem>
                <PlayerWatch />
              </CarouselItem>
              <CarouselItem>
                <AIShooter />
              </CarouselItem>
              <CarouselItem>
                <Keychain />
              </CarouselItem>
              <CarouselItem>
                <UnitySaveDeleter />
              </CarouselItem>
              <CarouselItem>
                <ShoppingList />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <div className="flex justify-center">
        <Separator className=" my-5 w-[60%] bg-white" variant="tertiary" />
      </div>
      <div className="flex justify-center">
        <h3 className=" underline-offset-8 text-2xl sm:text-3xl md:text-4xl transition-all duration-500 ease-in-out">
          Group Projects
        </h3>
      </div>
      <div className="flex justify-center">
        <Separator className=" my-1 w-[40%] bg-white" variant="tertiary" />
      </div>
      <section>
        <div
          className="mt-5 mx-5 rounded-3xl border inset-shadow-sm overflow-hidden inset-shadow-current/15 backdrop-blur-sm duration-200 ease-in-out p-5"
          style={{
            color: "color-mix(in oklab, cyan 100%, transparent)",
          }}
        >
          <Carousel setApi={setApiGroup}>
            <CarouselContent>
              <CarouselItem>
                <RomanVoid />
              </CarouselItem>
              <CarouselItem>
                <AllThatIsLost />
              </CarouselItem>
              <CarouselItem>
                <GravityWalk />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
});
export default Projects;
