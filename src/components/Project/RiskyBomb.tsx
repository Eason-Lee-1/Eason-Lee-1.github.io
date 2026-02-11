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

const RiskyBomb = () => {
  return (
    <section>
      <Card className="bg-linear-to-b from-sky-500 to-green-500">
        <Card.Header>
          <Image
            alt="RiskyLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/riskylogo.png"
            className="scale-90 lg:scale-70  lg:-mb-4 2xl:-mb-6 duration-200 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-[#000080]">
            <CircleFill width={6} />
            <Chip.Label>Lua</Chip.Label>
          </Chip>
          <Chip className="bg-[#61DBFB]">
            <CircleFill width={6} />
            <Chip.Label>React</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-white overflow-clip rounded-lg  ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="Risky1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/risky1.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Risky2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/risky2.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Risky3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/risky3.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 text-white bg-linear-to-b from-sky-500 to-green-500  hover:bg-white hover:text-black" />
              <CarouselNext className="size-5 sm:size-7 text-white bg-linear-to-b from-sky-500 to-green-500 hover:bg-white hover:text-black" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="X0USsESKsjk"
                title="RiskyBomb"
                borderColor="white"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-linear-to-b from-sky-500 to-green-500 border-white outline-whitee m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-linear-to-b from-sky-500 to-green-500 ">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    A bomb roulette game created in ROBLOX, using a custom
                    package which allows React to be used for the front end.
                    <br /> <br />
                    Basically BOMBA, but transferred to ROBLOX, making it kid
                    friendly and with extra features such as skins.
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
                          Packages
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <p>
                            My first ROBLOX project 'Junction Street' purely
                            relied on no third party packages and everything was
                            reliant on the official ROBLOX tools.
                            <br />
                            <br />
                            This time, I have used a few packages that helps and
                            simplifies development, learning from the
                            difficulties and bloat acquired from Junction
                            Street.
                            <br />
                            <br />
                            Here are a few important ones used.
                            <br />
                            <br />
                          </p>
                          <span className="text-cyan-400">Signal:</span>
                          <br /> A bindable event wrapper that is improved upon.
                          <br />
                          No deep copies passed through, and data is stored in a
                          lightweight table, meaning better performance.
                          <br />
                          <br />
                          <span className="text-cyan-400">Networker:</span>
                          <br /> Remote event wrapper, storing remotes/remote
                          functions in a table and allowing direct calls to
                          server functions instead of creating instances of it,
                          making it more efficient.
                          <br />
                          <br />
                          We can also whitelist server functions that only the
                          client can call, which is good for security.
                          <span className="text-cyan-400">
                            <br />
                            <br />
                            Janitor:
                          </span>
                          <br /> Used to clean up connections, this makes
                          cleanup much easier, as we can store active
                          connections and objects into a janitor object, and
                          once we call its' cleanup method, it will
                          automatically destory/disconnect every
                          connection/object stored.
                          <br />
                          <br />
                          This was an issue on previous projects, as I had to
                          make my own connection table store, but this is more
                          convenient and has more features.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Latency
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          One problem I realized once the game was nearly
                          complete was server enforcement thanks to latency.
                          <br />
                          <br />
                          Simulating network lag and spamming every input
                          exposed a lot of issues due to lack of GUI
                          debounce/server cooldowns.
                          <br />
                          <br />A lot of time was then spent either applying
                          button cooldowns on the client, or checking if the
                          event on the server is already occuring before
                          executing it again, else duplicates and errors will
                          occur.
                          <br /> <br />
                          This was a learning experience that made me realize
                          the validation and enforcement needed on the server to
                          handle high-latency users, else the game will break
                          otherwise.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          UI
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Traditionally, we can make ROBLOX GUIs in the editor
                          directly, but there exists a package that allows the
                          usage of React to be used with built in hooks.
                          <br />
                          <br />
                          This gave me an opportunity to expand my knowledge on
                          React, hence why it was used, and to enforce
                          consistency, as the GUI is directly coded in, meaning
                          more control, easier animating, version control and
                          maintenance.
                          <br />
                          <br />
                          The main thing learnt is the usage of hooks such as
                          useState, useEffect, useRef and the importance of its
                          placement, call order, dependency requirements etc.
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

export default RiskyBomb;
