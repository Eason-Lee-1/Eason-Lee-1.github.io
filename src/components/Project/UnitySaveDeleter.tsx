import { Card, Button, Modal, Accordion, Chip } from "@heroui/react";
import { CircleFill } from "@gravity-ui/icons";
import { Image } from "@heroui/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import YouTubeLite from "../YoutubeLite";

const UnitySaveDeleter = () => {
  return (
    <section>
      <Card className="bg-black ">
        <Card.Header>
          <Image
            alt="UnitySaveDeleterLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/unity%20deleter%20logo.png"
            className="scale-100 sm:scale-80 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-[#00599C]">
            <CircleFill width={6} />
            <Chip.Label>C++</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-red-600 overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="UnitySaveDeleter1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/save%20main.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="UnitySaveDeleter2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/save%20selected.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="UnitySaveDeleter3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/save%20dletd.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-black text-white hover:text-black hover:bg-white" />
              <CarouselNext className="size-5 sm:size-7  bg-black text-white hover:text-black hover:bg-white" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="bNHMp8ddISQ"
                title="Unity Save Deleter"
                borderColor="red-600"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-transparent border-red-600  outline-white m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-black">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    A Unity{" "}
                    <a
                      href="https://github.com/Precipitating/Unity-Save-Deleter"
                      className="text-cyan-400"
                    >
                      tool
                    </a>{" "}
                    made because deleted Unity games leaves lingering save data,
                    which is useless as the game is gone.
                    <br />
                    <br />
                    Made in C++ with wxWidgets for the front end
                  </p>
                  <br />
                  <div className="text-center pb-2">Details:</div>
                  <Accordion
                    hideSeparator
                    className="stroke-white rounded-2xl text-white fill-white border-red-600 border-2"
                  >
                    <Accordion.Item className="text-yellow-30">
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Methods
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The detection of Unity game only applies to people
                          using the default Unity methods, such as storage in
                          the LocalLow folder or registry. It cannot detect
                          every instance.
                          <br /> <br />
                          It detects a Unity game folder if the folder has a
                          Player.log or output_log file.
                          <br />
                          <br />
                          It only detects if the game is in the system if it has
                          a Player.log file, which gives you the location of the
                          installed game path.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Registry
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          After it deletes the saved games, it also attempts to
                          find the corresponding key in the registry, which if
                          exists, deletes it.
                          <br />
                          <br />
                          These files store player preferences, located at the
                          path:
                          HKCU\Software\ExampleCompanyName\ExampleProductName
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Unknown Game Files
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          These folder paths are in another list, which are
                          elements that cannot be identified if they exist in
                          the system or not. They are still identified as a
                          Unity game as they may have a common Unity file such
                          as an output.log file.
                          <br />
                          <br />
                          It's unknown as it is missing Player.log file.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </Modal.Body>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </Card>
    </section>
  );
};

export default UnitySaveDeleter;
