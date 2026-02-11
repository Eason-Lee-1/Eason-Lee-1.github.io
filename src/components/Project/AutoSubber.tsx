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

const AutoSubber = () => {
  return (
    <section>
      <Card className="bg-linear-to-b from-indigo-600 via-purple-600 to-purple-800">
        <Card.Header>
          <Image
            alt="AutosubberLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/AutoSubber.png"
            className="scale-100 lg:scale-80 duration-200 xl:-mb-8 ease-in-out "
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
                    alt="Autosubber1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/autosubber1.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Autosubber2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/autosubber%202.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Autosubber3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/autosubber%203.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 text-white bg-from-indigo-600 via-purple-600 to-purple-800 hover:bg-purple-950 hover:text-white" />
              <CarouselNext className="size-5 sm:size-7 text-white bg-from-indigo-600 via-purple-600 to-purple-800 hover:bg-purple-950 hover:text-white" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="z-by-UvKK7g"
                title="Autosubber"
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
              <Modal.Dialog className="bg-linear-to-b from-indigo-600 via-purple-600 to-purple-800">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    A video autosubber{" "}
                    <a
                      href="https://github.com/Precipitating/AutoSubber"
                      className=" text-cyan-400"
                    >
                      tool
                    </a>{" "}
                    made in Python, using stable-ts and customtkinter.
                    <br />
                    <br />
                    Minor usages of moviepy and tkinter for mp4 to mp3
                    conversion and colour picker.
                    <br />
                    <br />
                    Designed to hard code subtitles into videos using
                    OpenAI-Whisper, with built in translation to English.
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
                          StableTS & Faster-Whisperer
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <a
                            href="https://github.com/jianfch/stable-ts"
                            className=" text-cyan-400"
                          >
                            Stable-Ts
                          </a>{" "}
                          is a fork of OpenAI-Whisper which introduces more
                          functionality and more accurate timestamps. I used
                          this for easy customization of text.
                          <br /> <br />
                          It also allows the incorporation of faster-whisperer,
                          which is a OpenAI-Whisper reimplementation which
                          increases the speed of transcription by 4x.
                          <br />
                          <br />
                          I used this simply due to it being an obvious upgrade
                          to the original library without any noticeable
                          downsides.
                          <br />
                          <br />
                          Combinining both of these libraries introduces a
                          faster, feature rich implementation of OpenAI-Whisper
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          CustomTkinker
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Used to build the GUI which is a modernized version of
                          tkinter.
                          <br />
                          <br />I also installed a modernized{" "}
                          <a
                            href="https://github.com/Akascape/CTkScrollableDropdown"
                            className=" text-cyan-400"
                          >
                            scrolldown option menu
                          </a>{" "}
                          for font selection as customtkinter does not provide a
                          suitable scrolling version.
                          <br />
                          <br />
                          However, some parts of tkinter is used like the color
                          picker as customtkinter does not provide one.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Features
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <ul>
                            <li>
                              Clean audio: Use vad to isolate and clean audio
                              for better transcription quality
                            </li>
                            <br />
                            <li>
                              Word timestamp: Provide an exact timestamp range
                              for when a word is spoken
                            </li>
                            <br />
                            <li>
                              Segment timestamp: Provide an exact timestamp
                              range for when a segment is spoken
                            </li>
                            <br />
                            <li>
                              Karaoke highlights: Highlight words in tempo with
                              the audio, a karaoke effect.
                            </li>
                            <br />
                            <li>
                              Max words per segment: Minimize words per segment
                            </li>
                            <br />
                            <li>
                              Font & Size: Adjust font/size, using system
                              installed fonts
                            </li>
                            <br />
                            <li>
                              Highlight colour: Highlight colour, only shown
                              with word & segment timestamp checked.
                            </li>
                          </ul>
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

export default AutoSubber;
