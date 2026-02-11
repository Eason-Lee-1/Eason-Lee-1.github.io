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

const GravityWalk = () => {
  return (
    <section>
      <Card className="border-white bg-[#2e2e2e]">
        <Card.Header>
          <Image
            alt="GravityWalkLogo"
            src="https://github.com/Eason-Lee-1/siteData/blob/main/gravwalklogo.png?raw=true"
            className="scale-100 sm:scale-80 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className=" gap-2 grid grid-cols-2 grid-rows-2 sm:flex sm:gap-1 justify-center">
          <Chip className="bg-black border-2 border-white">
            <CircleFill width={6} />
            <Chip.Label>4 Programmers</Chip.Label>
          </Chip>
          <Chip className="bg-green-950">
            <CircleFill width={6} />
            <Chip.Label>2 Designers</Chip.Label>
          </Chip>
          <Chip className="bg-pink-950">
            <CircleFill width={6} />
            <Chip.Label>1 Artists</Chip.Label>
          </Chip>
          <Chip className="bg[#b6cf87]">
            <CircleFill width={6} />
            <Chip.Label>DX12</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-[#71af4c] overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="GravityWalk1"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/gw1.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="GravityWalk2"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/gw2.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="GravityWalk3"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/gw3.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-[#2e2e2e] text-[#71af4c] hover:text-white hover:bg-gray-900" />
              <CarouselNext className="size-5 sm:size-7  bg-[#2e2e2e] text-[#71af4c] hover:text-white hover:bg-gray-900" />
            </Carousel>
            <div className="group">
              <YouTubeLite
                id="hSjEHXkkDRY"
                title="Gravity Walk"
                borderColor="[#71af4c]"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-[#2e2e2e] rounded-xl m-auto w-[80%] border-[#71af4c]">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-[#2e2e2e]">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    A Sci-Fi Game created in DX12 for my final year group
                    project.
                  </p>
                  <br />
                  <div className="text-center pb-2">Details:</div>
                  <Accordion
                    hideSeparator
                    className="stroke-[#71af4c] rounded-2xl text-[#71af4c] fill-white border-[#71af4c] border-2"
                  >
                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Keyboard/Controller Support
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <p>
                            I have integrated controller and keyboard/mouse
                            support for the game using the DXTK12 library, which
                            simplifies the process. A key benefit of using a
                            controller is the ability to adjust walk speed based
                            on joystick pressure.
                          </p>
                          <p></p>
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Model Loader
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          I have used TinyObj to add in a custom model loader
                          into the DX12 engine, allowing easy import of obj
                          files along with correct texture linkage.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Camera
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          FPS camera has also been added in by me. Gimbal lock
                          issue was solved by using quaternions and locking the
                          Y axis to a min/max value. Also a lerp rotation
                          animation when camera rotates.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Audio System
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          I added in an audio system implemented via DirectXTK
                          library with usage of a "wavebank" for efficient
                          loading and memory management. I have also added 3D
                          audio on the platform.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Trigger boxes
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Implemented trigger boxes with an ID link to an
                          object, specifically used for platform activation,
                          doors and voice lines, but can be done for anything.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Player Mechanics
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          I implemented all player-related movements, including
                          dash, gravity shift (perspective rotation), crouch
                          slide (with FOV change effect), jump, boost jump, and
                          velocity-based movement.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Doors & Buttons
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          I implemented door opening and closing functionalities
                          using trigger boxes to determine state changes,
                          accompanied by simple lerp animations. Additionally,
                          buttons are made interactive, utilizing the trigger
                          box system to connect with doors and platforms.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Platform System
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          I developed the entire platform system, enabling
                          customizable movement directions through a JSON file
                          (RapidJSON). The system ensures the player remains on
                          the platform without falling through frame-by-frame
                          updates.
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

export default GravityWalk;
