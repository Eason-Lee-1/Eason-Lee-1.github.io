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
      <Card className="border-white bg-black ">
        <Card.Header>
          <Image
            alt="ATILLogo"
            src="https://github.com/Eason-Lee-1/siteData/blob/main/logoalis.png?raw=true"
            className="scale-100 sm:scale-80 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className=" justify-center grid grid-cols-2 grid-rows-2  gap-2 sm:flex">
          <Chip className="bg-black border-2 border-white">
            <CircleFill width={6} />
            <Chip.Label>2 Programmers</Chip.Label>
          </Chip>
          <Chip className="bg-green-950">
            <CircleFill width={6} />
            <Chip.Label>2 Designers</Chip.Label>
          </Chip>
          <Chip className="bg-pink-950">
            <CircleFill width={6} />
            <Chip.Label>3 Artists</Chip.Label>
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
                    alt="ATIL1"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/flower.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="ATIL2"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/monstertrap.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="ATIL3"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/trap2.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-black text-white hover:text-black hover:bg-white" />
              <CarouselNext className="size-5 sm:size-7  bg-black text-white hover:text-black hover:bg-white" />
            </Carousel>
            <div className="group">
              <YouTubeLite
                id="r2yjzrZwokY"
                title="All That Is Lost"
                borderColor="white"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-black rounded-xl m-auto w-[80%] border-white">
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
                    <a
                      href="https://bitbucket.org/elee123/project-2-game/src/master/"
                      className="text-cyan-400"
                    >
                      REPO
                    </a>
                    <br />
                    <br />
                    Developed as a collaborative group project during my second
                    year, this 3D horror game leveraged Unity to offer an
                    immersive gaming experience. <br />
                    <br /> The project was initially nominated for the 2022 End
                    of Year Showcase. However, due to scheduling conflicts among
                    team members, the nomination was subsequently transferred to
                    another group.
                  </p>
                  <br />
                  <div className="text-center pb-2">Details:</div>
                  <Accordion
                    hideSeparator
                    className="stroke-white rounded-2xl text-white fill-white border-white border-2"
                  >
                    <Accordion.Item className="text-yellow-30">
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Monster NPC
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <p>
                            I employed pathfinding for the monster, state
                            machine and used a raycast to prevent the monster
                            detecting the player through walls. <br />
                            <br /> Monster attacking, adding in animations from
                            the artist etc. All done by me. The monster can
                            patrol to random destination points I placed around
                            the map.
                            <br />
                            <br />
                            Patrol mode: Go to a random waypoint declared via a
                            serializable field list in the editor.
                            <br />
                            <br />
                            Chase mode: Follow player position and attack when
                            close enough, and if the distance between is too
                            far, back to patrol.
                          </p>
                          <p></p>
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Interactables
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Anything that can be interacted with is done by me,
                          such as doors, pickups, trap placements etc.
                          <br />
                          <br />
                          The trap lacked versatility for placement on various
                          surfaces. I employed raycasting to measure the
                          distance from the floor to the trap's position,
                          ensuring accurate placement.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Environment
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Lighting and flashlight has also been implemented in,
                          with me changing the rendering pipeline provided by
                          Unity to create a better gloomy atmosphere.
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
                          Same system as previous project Roman Void, a
                          singleton manager.
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
                          Simple system of dying when you are hit 4 times, with
                          the environment flashing red each hit.
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
