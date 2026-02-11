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

const EscapeGPT = () => {
  return (
    <section>
      <Card className="bg-black">
        <Card.Header>
          <Image
            alt="EscapeGPT Logo"
            src="https://github.com/Eason-Lee-1/siteData/blob/main/EscapeGPT.png?raw=true"
            className="scale-100 xl:scale-70 mb-1 xl:-mb-6 duration-200 ease-in-out"
            loading="eager"
          />
          <div className="flex gap-1 justify-center">
            <Chip className="bg-[#512BD4]">
              <CircleFill width={6} />
              <Chip.Label>C#</Chip.Label>
            </Chip>

            <Chip className="bg-black border-2 border-white">
              <CircleFill width={6} />
              <Chip.Label>Unity</Chip.Label>
            </Chip>
          </div>
        </Card.Header>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-yellow-300 overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="EscapeGPT starter cell"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/escape1.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="Guard attack"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/escape2.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="Dungeon Hallway"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/escape3.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 text-black bg-yellow-300 hover:bg-yellow-600 hover:text-black" />
              <CarouselNext className="size-5 sm:size-7 text-black bg-yellow-300 hover:bg-yellow-600 hover:text-black" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="NmK5wzXX27s"
                title="EscapeGPT"
                borderColor="yellow-300"
              />
            </div>
          </div>
        </Card.Content>

        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 border-yellow-300 bg-black text-white m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="border-2 border-yellow-300 bg-black">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white">
                  A small{" "}
                  <a
                    href="https://github.com/Precipitating/EscapeGPT"
                    className="text-cyan-400"
                  >
                    game
                  </a>
                  {", using AI "}
                  to demonstrate the usage of{" "}
                  <a
                    href="https://github.com/srcnalt/OpenAI-Unity"
                    className="text-cyan-400"
                  >
                    ChatGPT{" "}
                  </a>
                  to automate AI decision making and to generate unique
                  responses via prompting the AI to play a medieval guard role.
                  <br />
                  <br />
                  <a
                    href="https://github.com/nixon-voxell/UnityTTS"
                    className="text-cyan-400"
                  >
                    Text-To-Speech
                  </a>{" "}
                  and
                  <a
                    href="https://github.com/alphacep/vosk-unity-asr"
                    className="text-cyan-400"
                  >
                    {" "}
                    Speech-To-Text{" "}
                  </a>
                  was used for player voice input which leads to: <br />
                  <br /> Input Transcription {"=>"} ChatGPT {"=>"}{" "}
                  Text-To-Speech {"=>"} Output Audio To Player.
                  <br />
                  <br />
                  The ChatGPT API has a cost per request, so a full game is
                  unfeasible unless a free option exists {"(as of 2024)"}.
                  <br />
                  <br />
                  <div className="text-center pb-2">Details:</div>
                  <Accordion className="stroke-yellow-300 rounded-2xl text-yellow-300 w-full max-w-md fill-yellow-300 border-yellow-300 border-2">
                    <Accordion.Item className="text-yellow-30">
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Guard
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <p>
                            An enemy NPC handled by Chat GPT. It will only
                            attack the player if it is provoked more than 3
                            times. A role has been set to tell ChatGPT to
                            roleplay as a dungeon guard that is housing a
                            prisoner that has attempted to assassinate the king.
                          </p>
                          <br />
                          <p>
                            I told ChatGPT to add an | symbol when the AI deems
                            to be provoked, so we can track how many times it
                            has been angered. The AI itself determines if it is
                            angered, so it can be unpredictable sometimes, but
                            directed profanity is almost guaranteed to be
                            detected as procavation.
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
                          The attack system uses simple sword animations that
                          applies damage at a specific range of an animation
                          frame (animation events) The character can also parry
                          if both the guard and the character is at a specific
                          animation frame.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Vosk
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Vosk is a speech-to-text processor used to convert
                          voice into text.
                          <br />
                          <br />I have used this to feed player's input data to
                          the ChatGPT API, so an appropriate response would be
                          received. It is an offline, fast and free solution,
                          unlike using an online service such as Microsoft
                          Speech at the cost of accuracy.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Text-To-Speech
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The only library I found that produces a realistic
                          text-to-speech voice.
                          <br />
                          <br />
                          It simply generates an offline text-to-speech sound
                          from a set string. It however is very crash-prone if
                          multiple threads are created, so I have added checks
                          to only play one voiceline at a time.
                          <br />
                          <br />
                          The enforcement of the mic being disabled unless the
                          voice line has finished playing fixes this issue.
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

export default EscapeGPT;
