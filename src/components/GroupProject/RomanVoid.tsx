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

const RomanVoid = () => {
  return (
    <section>
      <Card className="bg-linear-to-b from-[#4e5956] to-[#233740] ">
        <Card.Header>
          <Image
            alt="RomanVoidLogo"
            src="https://github.com/Eason-Lee-1/siteData/blob/main/roman.png?raw=true"
            className="scale-100 sm:scale-80 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className=" gap-2 grid grid-cols-2 grid-rows-2 justify-center sm:flex sm:gap-1 ">
          <Chip className="bg-black">
            <CircleFill width={6} />
            <Chip.Label>2 Programmers</Chip.Label>
          </Chip>
          <Chip className="bg-green-950">
            <CircleFill width={6} />
            <Chip.Label>2 Designers</Chip.Label>
          </Chip>
          <Chip className="bg-pink-950">
            <CircleFill width={6} />
            <Chip.Label>2 Artists</Chip.Label>
          </Chip>
          <Chip className="bg-gray-900">
            <CircleFill width={6} />
            <Chip.Label>Unity</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-white overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="RomanVoid1"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/roman%202.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="RomanVoid2"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/roman%203.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="RomanVoid3"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/roman%204.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-black text-white hover:text-black hover:bg-white" />
              <CarouselNext className="size-5 sm:size-7  bg-black text-white hover:text-black hover:bg-white" />
            </Carousel>
            <div className="group">
              <YouTubeLite
                id="yB7J6h6Dfgk"
                title="Roman Void"
                borderColor="white"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-[#4e5956] border-white m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-linear-to-b from-[#4e5956] to-[#233740]">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    A 2.5D RPG made in Unity for my first year group project.
                    Used SourceTree for version control.
                    <br />
                    <br />
                    Learnt that on-screen invisible buttons are easier and more
                    reliable than tracking mouse coordinates to determine attack
                    direction.
                  </p>
                  <br />
                  <div className="text-center pb-2">Details:</div>
                  <Accordion
                    hideSeparator
                    className="stroke-white rounded-2xl text-white fill-white border-romanvoid2 border-2"
                  >
                    <Accordion.Item className="text-yellow-30">
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          NPCs
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <p>
                            Enemy pathfinding, state machine and actions have
                            been programmed in by me.
                          </p>
                          <br />
                          <p>
                            When to play an animation, when to damage, when to
                            cooldown, everything.
                            <br />
                            <br />
                            This includes the boss attacks and negative debuffs
                            to the player.
                          </p>
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Attack System
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          There are 4 directions to attack, so I decided to use
                          invisible screen buttons to determine the player's
                          intent. Buttons scale with the resolution making it
                          flexible for any device.
                          <br />
                          <br />
                          At first I tracked mouse coordinates but it was
                          inflexible and took unnecesary amount of code compared
                          to using GUI buttons.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          GUI
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Menu screen, intro and general interactivity is
                          implemented by me, Unity provides a visual point, drag
                          and click option for GUI creation, making it easy.
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
                          Used a singleton to make it easy to use everywhere,
                          making it easy to play one shot/looping sounds.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Health System
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Implemented so the hearts will visually
                          decrease/increase automatically when adjusting the
                          health variable.
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

export default RomanVoid;
