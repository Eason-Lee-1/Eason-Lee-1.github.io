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

const Mimic = () => {
  return (
    <section>
      <Card className="bg-mimic ">
        <Card.Header>
          <Image
            alt="MimicLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/mimic%20logo.png"
            className="scale-100 lg:scale-80 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
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
                    alt="Mimic1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/mimic%201.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Mimic2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/mimic%202.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Mimic3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/mimic%203.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-black text-white hover:text-black hover:bg-white" />
              <CarouselNext className="size-5 sm:size-7  bg-black text-white hover:text-black hover:bg-white" />
            </Carousel>
            <div className="personal">
              <YouTubeLite id="PYYfvps_rOc" title="Mimic" borderColor="white" />
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
              <Modal.Dialog className="bg-mimic">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p className="text-sm">
                    An AI-powered automation tool that simplifes animation
                    generation using a video source.
                    <br />
                    <br />
                    This was an idea I had in my head for a long time, and due
                    to AI, this process is now possible.
                    <br /> <br />
                    Due to difficulties creating animation creating 3D games, I
                    made this tool to convert the video movement into an fbx
                    file replicating that exact movement, with bone mappings to
                    correctly match each bone to each movement.
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
                          GVHMR
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The library that does the actual motion matching from
                          a video to a SMPL model (common model used for AI
                          based 3D motion)
                          <br /> <br />
                          This was built for Linux but I was able to build it on
                          Windows after a while. The AI first detects how many
                          people are in the video, and after that, uses an SMPL
                          model to motion match each bone to the person in the
                          video provided.
                          <br /> <br />
                          This uses gravity direction and camera-view direction,
                          reconstructing motion in the real-world coordinate
                          system—aligned with gravity.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          SMPL Conversion
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          I need to somehow convert this SMPL data into one that
                          is importable on Blender. Thankfully a solution was
                          posted that converts the SMPL parameters into one that
                          was readable on Blender. I used a Blender library on
                          Python to automate the application of the solution to
                          convert the SMPL animation data to a readable Blender
                          format.
                          <br /> <br />
                          After that, we need to retarget the SMPL bone mapping
                          into a suitable format. There is an existing solution,
                          using Rokoko's retarget plugin that retargets bones.
                          <br /> <br />
                          We read a text file with all the SMPL bone mappings
                          and the user is meant to map these bones into their
                          own rig's bones. We then use this text file as an
                          input for Rokoko's retarget plugin and it should
                          retarget correctly for your chosen rig.
                          <br /> <br />
                          After converting, we do some cleanup and then export
                          this as an FBX file. This is all automated using
                          Python's Blender plugin.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Flet
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          We use Flet as a frontend for this program which is a
                          simple framework based on Flutter by Google.
                          <br /> <br />
                          I used this as it can be run offline, preventing any
                          connection issues that i've experienced using NiceGui.
                          <br /> <br />
                          It also provides nice looking widgets which is a good
                          bonus alongside it being easy to use.
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

export default Mimic;
