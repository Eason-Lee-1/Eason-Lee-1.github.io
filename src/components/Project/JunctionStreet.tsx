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

const JunctionStreet = () => {
  return (
    <section>
      <Card className="bg-js">
        <Card.Header>
          <Image
            alt="JSLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/logonobg.png"
            className="scale-100 xl:scale-90 -mb-3 lg:-mb-7 2xl:-mb-15 duration-200 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-[#000080]">
            <CircleFill width={6} />
            <Chip.Label>Lua</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-white overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="JS1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/js1.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="JS2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/js3.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="JS3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/js4.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 text-white bg-black hover:bg-white hover:text-black" />
              <CarouselNext className="size-5 sm:size-7 text-white bg-black hover:bg-white hover:text-black" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="BJPwc-1CZN8"
                title="Junction Street"
                borderColor="white"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-gray-700 border-white outline-white m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className=" bg-linear-to-b bg-gray-700">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    A ROBLOX adventure styled game, focused on a dialogue{" "}
                    {"=> "}
                    mission {"=> "} ending design.
                    <br /> <br />
                    I did this to maintain flexibility and creativity to create
                    any type of minigame I want, making the game essentially
                    themeless.
                    <br />
                    <br />
                    This design makes the game easily expandable via creating a
                    new NPC that gives a mission to a minigame that can be any
                    theme desired.
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
                          Game
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          To build upon my knowledge on creating multiplayer
                          games after TypeFighter, I decided go to the next step
                          and create a game on ROBLOX.
                          <br />
                          <br />
                          ROBLOX uses remotes to communicate between the client
                          and server, and I have learned the importance of
                          server authority and when to allow things to be ran on
                          the client such as animations.
                          <br />
                          <br />
                          Since this is game is designed to be single player,
                          anti-cheat is less important as cheating affects
                          nobody but themselves.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Structure
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          ROBLOX heavily relies on an event-based programming
                          design, which is esentially the observer pattern.
                          <br />
                          <br />
                          This pattern, along with using Lua with simple syntax,
                          makes it easy for me to program in despite the
                          unfamiliarity.
                          <br />
                          <br />
                          ROBLOX has helped me understand how to
                          structure/seperate logic between server and client, as
                          they require to have the related client/server scripts
                          stored in their own seperate containers for the game
                          to function properly.
                          <br />
                          <br />
                          They have also seperated script types that are:
                          <br />
                          - Reusable functions (module scripts) <br />
                          - Code that executes on game play (local/server
                          script)
                          <br /> <br />
                          This helped me reduce the number of auto running
                          scripts and rely on one for client and server, whilst
                          the rest being module scripts.
                          <br />
                          <br />
                          These seperation requirements will help me in the
                          future structure my code better regarding multiplayer
                          games and in general.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Connections
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The more I develop on this, the more I understand the
                          usage of the observer pattern, as each part has built
                          in connections which can detect:
                          <ul>
                            - A collision event that involves the part <br />
                            - When any property of the part has changed
                            <br />
                            - When a parent/ancestor has been added/removed
                            <br />
                            - When it's destroyed <br />
                          </ul>
                          <br />
                          This makes developing very convenient and easy to
                          manage, as if I wanted to do something when a
                          collision is detected, I just need to connect the
                          OnTouched event and it will call the event when
                          something touches it.
                          <br />
                          <br />
                          The obvious disadvantage learnt is that every
                          connection no longer in use requires disconnecting, or
                          memory leaks may occur.
                          <br />
                          <br />
                          This pattern exposure will help me decide when this
                          pattern is used future projects.
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

export default JunctionStreet;
