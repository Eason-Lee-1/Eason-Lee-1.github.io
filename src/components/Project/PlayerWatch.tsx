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

const PlayerWatch = () => {
  return (
    <section>
      <Card className="bg-linear-to-b from-[#3a86ff] to-[#00cfff]">
        <Card.Header>
          <Image
            alt="PlayerWatchLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/playerwatch%20logo.png"
            className="scale-100 sm:scale-80 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
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
            <Carousel className="w-full h-auto max-w-full border-2 border-white overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="PlayerWatch1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/playerwatch%201.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="PlayerWatch2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/playerwatch%202.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="PlayerWatch3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/playerwatch%203.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-sky-300 bg-linear-to-b from-[#3a86ff] to-[#00cfff] text-white hover:text-blue-950 hover:bg-blue-800" />
              <CarouselNext className="size-5 sm:size-7  bg-sky-300 bg-linear-to-b from-[#3a86ff] to-[#00cfff] text-white hover:text-blue-950 hover:bg-blue-800" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="LYjNyvBe-FQ"
                title="PlayerWatch"
                borderColor="sky-300 bg-linear-to-b from-[#3a86ff] to-[#00cfff]"
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
              <Modal.Dialog className="bg-linear-to-b from-[#3a86ff] to-[#00cfff] border-2 border-sky-300">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p className="text-sm">
                    An AI-powered tool that identifies player ball possession
                    and extracts each action from a specified clip.
                    <br />
                    <br />
                    Utilizes YOLO, Florence 2 and Faster-Whisper, with a NiceGui
                    frontend.
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
                          Audio Crop Method
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The audio crop method utilizes faster-whisper to
                          transcribe videos quickly, using its transcription to
                          get the video start.
                          <br />
                          <br />
                          Once a supplied player name is found, the video end
                          needs to be found, there are two possible options I
                          have identified:
                          <br />
                          <br />
                          <ul>
                            <li>-Fixed duration from start</li>
                            <li>-Stop at the next name the commentator says</li>
                          </ul>
                          <br />
                          The problem is with option 2 is that I need to somehow
                          figure out name detection, the player names on the
                          pitch and the accuracy of foreign names.
                          <br /> <br />
                          Also, relying on commentators to mention player names
                          is unreliable, as it may be delayed or not occur at
                          all.
                          <br />
                          <br />
                          Hence I have decided to simply make it a fixed
                          duration from the start of the player's name, with
                          start time offsets for flexibility.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          YOLO Method
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          YOLO method relies on using a custom trained YOLO
                          model to track the ball and the players in the video.
                          <br />
                          <br />
                          Using their bbox data, I get the player in possession
                          if the distance between the ball and a player is under
                          a certain value for X frames which can be specified.
                          <br />
                          <br />
                          If a player is identified to be in possession, it sets
                          the start of the crop, and the next player to be
                          identified would be the end of the crop, hopefully
                          clipping the previous player's action.
                          <br />
                          <br />
                          Note that we use ByteTrack to assign tracker IDs to
                          players for unique identification, although the
                          tracker id may change if the player is out of frame
                          for a while. This is faster than SAM 2 significantly.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          YOLO + SAM 2 & Florence 2
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          This method uses YOLO for player tracking and SAM 2
                          for ball tracking.
                          <br />
                          <br />
                          SAM 2 requires the ball coordinates to be specified on
                          the first frame, and will attempt to track the ball
                          throughout. We use florence 2 to handle this.
                          <br />
                          <br />
                          The problem with this approach is that whilst it is
                          more accurate than using YOLO for ball detection, it
                          has trouble tracking fast moving objects. If it loses
                          track of the ball, it doesn't re-identify ever again
                          unlike YOLO.
                          <br />
                          <br />
                          This option is much slower than YOLO, and is just a
                          experimental feature due to how slow it is to process.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          NiceGui
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The program uses NiceGui as its frontend, which is web
                          based.
                          <br />
                          <br />
                          There were issues of losing connection when trying to
                          run a method, but it was solved by using
                          multi-processing, which offloads the heavy computation
                          to a new process whilst keeping the main GUI
                          functional.
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

export default PlayerWatch;
