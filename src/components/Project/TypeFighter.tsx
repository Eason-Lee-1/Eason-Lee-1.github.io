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

const TypeFighter = () => {
  return (
    <section>
      <Card className="bg-typefighter">
        <Card.Header>
          <Image
            alt="TypeFighterLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/typefighter%20logo.png"
            className="scale-100 lg:scale-80 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-[#007acc]">
            <CircleFill width={6} />
            <Chip.Label className="text-green">TypeScript</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-white overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="Typefighter1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/typefighter.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Typefighter2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/typefighter2.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Typefighter3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/typefighter3.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-typefighter text-white hover:text-green-400" />
              <CarouselNext className="size-5 sm:size-7 text-white bg-typefighter hover:text-green-400" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="kzKM8x65eGw"
                title="TypeFighter"
                borderColor="white"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-transparent border-white outline-white m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-typefighter">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p className="text-sm">
                    A 1v1 fighter game, using the power of words. This is
                    multiplayer and hosted on an AWS server.
                    <br /> <br />
                    The game aims to challenge how fast you type, as it is
                    reliant on you sending commands as fast as possible to
                    eliminate the other players.
                    <br />
                    <br />
                    Utilizes Colyseus for the multiplayer framework, Kaplay for
                    the game itself that uses TypeScript/JavaScript via React.
                    <br />
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
                          Multiplayer
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          This is my first time developing a multiplayer game,
                          so this helped me learn how it actually works using
                          Colyseus.
                          <br /> <br />
                          I decided to give server authority to the pickups,
                          platforms, health, character state and word
                          generation. This allows all clients to see the same
                          thing, ensuring consistency and also add some security
                          to the game.
                          <br /> <br />
                          Since this is a small game, I decided to allow client
                          authority on movement. It uses Kaplay's impulse
                          function to move, meaning physics will be involved,
                          making the process complicated.
                          <br /> <br />
                          This allows smooth client side movement due to not
                          relying on the server, but is vulnerable to cheating,
                          and unresponsive players if their browser isn't
                          focused. Would definitely be server-based if it was a
                          big game, but this is fine for now.
                          <br /> <br />
                          The positions are sent to the server for the other
                          clients to replicate, using time interopolation,
                          saving snapshots and attempting a similar solution to
                          Source's Entity Interpolation.
                          <br /> <br />
                          Overall, this is a good learning experience to help
                          understand how multiplayer games are created.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Random Words
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          I decided to rely on using an API to generate random
                          words as storing a large amount of words in a
                          container is unnecessary, inefficient and not random.
                          <br /> <br />
                          At the start of the game, it stores 100 words and pops
                          the container every time a word is used.
                          <br /> <br />
                          The container is refreshed if it goes under a certain
                          value and is repeated throughout. This is all done on
                          the server to ensure every client receives the same
                          word when the projectile is deployed.
                          <br /> <br />
                          There is a fallback API link incase the first link
                          fails to ensure the game can run properly, as i've
                          noticed that first API goes down often. These words
                          are also displayed using various fonts, and random
                          colours.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Hosting
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Also my first time hosting a server for my game, I
                          chose AWS due to their free plan for a year.
                          <br />
                          <br />
                          I chose the Ubuntu server option, and incorporated
                          nginx to prevent any unnecessary port exposure, and to
                          make https work easily.
                          <br />
                          <br />
                          After obtaining an SSL certificate, grabbing a free
                          domain and starting the server, it was ready to be
                          hosted online via itch.io.
                          <br />
                          <br />
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Hosting
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The game library used to create the game.
                          <br /> <br />
                          This is a very easy to use library that uses
                          components to build everything like lego blocks.
                          <br /> <br />
                          We can apply components such as area for collision,
                          sprite for sprite functionality (sprites render,
                          animations, auto cropping etc), text for rendering
                          text and many more to one game object, ultimately
                          building what I want.
                          <br /> <br />
                          I created pickups, platforms, the player itself and
                          the console to input commands using Kaplay, and used
                          their handy built in event handlers to handle on
                          collision, on anim end, on hurt etc.
                          <br /> <br />
                          In brief, the game simply allows you to throw a word
                          (functions like a bullet), throw a grenade and deploy
                          a mine. These are the 3 main methods used to hurt the
                          opposition.
                          <br /> <br />
                          All these methods spew out words as projectiles or
                          shrapnel and you have to dodge it or type it to
                          destroy the threat.
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

export default TypeFighter;
