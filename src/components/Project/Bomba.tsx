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

const Bomba = () => {
  return (
    <section>
      <Card className="bg-black">
        <Card.Header>
          <Image
            alt="BombaLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/bombtitle2.png"
            className="scale-100 xl:scale-90 -mb-1 lg:-mb-4 2xl:-mb-6 duration-200 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-[#512BD4]">
            <CircleFill width={6} />
            <Chip.Label>C#</Chip.Label>
          </Chip>
          <Chip className="bg-[#1986c8] ">
            <CircleFill width={6} />
            <Chip.Label>Razor</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-white overflow-clip rounded-lg  ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="Bomba1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/uno.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Bomba2l"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/dos.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Bomba3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/tres.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 text-white bg-black hover:bg-white hover:text-black" />
              <CarouselNext className="size-5 sm:size-7 text-white bg-black hover:bg-white hover:text-black" />
            </Carousel>
            <div className="personal">
              <YouTubeLite id="RlbdWNOqfYQ" title="BOMBA" borderColor="white" />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-black border-white outline-white m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className=" bg-linear-to-b bg-black">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    A bomb roulette game created in s&box, which uses the Source
                    2 engine, and Razor for UI.
                    <br /> <br />
                    A game I made due to my desire to develop on the Source 2
                    engine, which is only available using s&box currently.
                    <br />
                    <br />
                    Has singleplayer and multiplayer option, building up my
                    multiplayer knowledge, continuing from the Typewriter and
                    Junction Street projects.
                  </p>
                  <br />
                  <div className="text-center pb-2">Details:</div>
                  <Accordion className="stroke-white rounded-2xl text-white fill-white border-white border-2">
                    <Accordion.Item className="text-yellow-30">
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Game
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          A simple turn styled bomb roulette game like russian
                          roulette, but instead, we have a bomb and we reduce
                          time.
                          <br />
                          <br />
                          I have implemented a cards feature that applies
                          effects to keep things interesting which can range
                          from trickery, risk or outright benefits.
                          <br />
                          <br />
                          The engine uses C#, and Razor for UI, which is a new
                          one for me, but I preferred using this by the end of
                          the project due to its simplicity and power.
                          <br />
                          <br />I encountered some issues with this engine due
                          to it being unfinished and buggy, with lacking
                          documentation to add on to that. However, the
                          developer's target to replicate Unity's engine in
                          terms of design makes this bearable.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Multiplayer
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Networking was designed to be as easy as possible
                          according to the developers, saying that it wasn't
                          aimed to provide a "bullet proof server-authoritative
                          networking system".
                          <br />
                          <br />
                          Although that was the aim, it was in my opinion harder
                          to work with than my other multiplayer projects, as it
                          introduces unfamiliar concepts such as networked
                          objects, syncing, RPCs etc.
                          <br />
                          <br />
                          It also wasn't like ROBLOX, as lobbies are
                          peer-to-peer, not dedicated (which would require
                          manual hosting). This meant that I would have to
                          adjust my logic and assign the authority manually, and
                          sync/broadcast data to the clients if required.
                          <br />
                          <br />
                          So I decided to give authority to the host to make
                          things simple, and any important decision would go
                          through the host, and synced back to the client if
                          necessary.
                          <br /> <br />
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
                          S&box uses C# Razor to create UI's which is something
                          I have not used, and is something I liked the more I
                          got familiar with it.
                          <br />
                          <br />
                          It uses HTML/CSS, leveraging C# to integrate variables
                          and create methods, whilst using hash to determine
                          when to update/rerender the UI.
                          <br />
                          <br />
                          Once I got the hang of it, it is easy to create
                          animations, style via CSS and use HTML to create
                          elements.
                          <br />
                          <br />
                          From my experience with UI creation on engines like
                          Unreal, Unity and ROBLOX, I think I prefer this even
                          if they had drag & drop features.
                          <br />
                          <br />
                          It is also a great way to practice HTML/CSS along with
                          C#.
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

export default Bomba;
