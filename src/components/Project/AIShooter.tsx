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

const AIShooter = () => {
  return (
    <section>
      <Card className="bg-black">
        <Card.Header>
          <Image
            alt="AIShooterLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/AI%20Shooter.png"
            className="scale-100 sm:scale-60 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-linear-to-r from-[#ffde57] to-[#4584b6]">
            <CircleFill width={6} />
            <Chip.Label>Python</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-red-600 overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="AIShooter1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/AIShooter1.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="AIShooter2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/AIshooter2.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="AIShooter3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/AIShooter3.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-black text-white hover:text-black hover:bg-white" />
              <CarouselNext className="size-5 sm:size-7  bg-black text-white hover:text-black hover:bg-white" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="JJpgkR80waU"
                title="AI Shooter"
                borderColor="red-600"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-black  border-red-600  m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-black border-2 border-red-600">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    An AI{" "}
                    <a
                      href="https://github.com/Precipitating/AIShooter"
                      className="text-cyan-400"
                    >
                      simulation
                    </a>{" "}
                    to demonstrate AI learning to beat the game with a few
                    inputs and outputs. Made in Python, using Pygame to build
                    the game and NEAT for the evolutionary algorithm.
                    <br />
                    <br />
                    To win, the player must shoot all the enemies in a clockwise
                    manner, else the enemy will kill the player.
                  </p>
                  <br />
                  <div className="text-center pb-2">Details:</div>
                  <Accordion
                    hideSeparator
                    className="stroke-white rounded-2xl text-white fill-white border-red-600 border-2"
                  >
                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Game
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          To expand upon the game, the enemies have a fixed shot
                          delay that increases by a set value the higher the
                          enemy index is, so you have to shoot the lowest enemy
                          index each time or the player dies.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          NEAT
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <p>
                            A evolutionary algorithm that creates artificial
                            neutral networks. This is the main thing used to
                            train the Player to shoot all 50 enemies. These
                            networks are used to determine the next best move by
                            performance evaluation via fitness. The best
                            performing network carries over to the next
                            generation and repeats until the objective is
                            reached.
                          </p>
                          <br />
                          <p>The fitness gain/loss is dependent on:</p>
                          <br />
                          <ul>
                            <li>
                              -The player shooting the correct enemy, else
                              negate index between the wrong enemy shot and
                              correct enemy
                            </li>
                            <br />
                            <li>-Shooting accuracy</li>
                            <br />
                            <li>-No enemies killed = negate fitness</li>
                            <br />
                            <li>-No rotation or shot = negate fitness</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Inputs
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The inputs include relevant information about the game
                          such as player movement and player rotation. The AI
                          uses this information to decide on what to do.
                          <br /> <br />
                          For example, if the fitness is largely increased if
                          the input rotation is at 30 degrees, it will keep
                          doing that more often.
                          <br />
                          <br />
                          The inputs I have provided are:
                          <ul>
                            <li>-Player position</li>
                            <br />
                            <li>-Correct enemy target position</li>
                            <br />
                            <li>-Remaining enemies count</li>
                            <br />
                            <li>-Bullets shot</li>
                            <br />
                            <li>-Current player angle</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Outputs
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The player actions. I provided to the AI:
                          <br />
                          <ul>
                            <li>-Rotate anti-clockwise</li>
                            <li>-Rotate anti-clockwise & shoot</li>
                            <li>-Rotate clockwise</li>
                            <li>-Rotate clockwise & shoot</li>
                            <li>-Shoot</li>
                          </ul>
                          <br />I needed to combine rotate and shoot, as the AI
                          was stagnating and would probably take hundreds of
                          hours to learn how to beat the game.
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

export default AIShooter;
