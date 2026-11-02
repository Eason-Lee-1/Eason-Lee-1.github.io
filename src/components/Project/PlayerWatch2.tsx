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

const PlayerWatch2 = () => {
  return (
    <section>
      <Card className="bg-linear-to-b from-[#0c2442] to-[#3f627f]">
        <Card.Header>
          <Image
            alt="PlayerWatch2Logo"
            src="https://cdn.jsdelivr.net/gh/Eason-Lee-1/siteData@main/pw2.png"
            className="scale-100 sm:scale-80 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-linear-to-r from-[#ffde57] to-[#4584b6]">
            <CircleFill width={6} />
            <Chip.Label>Python</Chip.Label>
          </Chip>
          <Chip className="bg-linear-to-r from-[#2a91d4] to-[#98d3f4]">
            <CircleFill width={6} />
            <Chip.Label>SQLite</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-white overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="PlayerWatch21"
                    src="https://cdn.jsdelivr.net/gh/Eason-Lee-1/siteData@main/pw2%203.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="PlayerWatch22"
                    src="https://cdn.jsdelivr.net/gh/Eason-Lee-1/siteData@main/pw2%201.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="PlayerWatch23"
                    src="https://cdn.jsdelivr.net/gh/Eason-Lee-1/siteData@main/pw3.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-sky-300 bg-linear-to-b from-[#0c2442] to-[#3f627f] text-white hover:text-blue-950 hover:bg-blue-800" />
              <CarouselNext className="size-5 sm:size-7  bg-sky-300 bg-linear-to-b from-[#0c2442] to-[#3f627f] text-white hover:text-blue-950 hover:bg-blue-800" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="yhQmo2XEwAc"
                title="PlayerWatch2"
                borderColor="sky-300 bg-linear-to-b from-[#0c2442] to-[#3f627f]"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/30" />
        <CarouselNext className="bg-cyan-400/30" />

        <Modal>
          <Button className=" border-2 bg-transparent border-white outline-white m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-linear-to-b from-[#0c2442] to-[#3f627f] border-2 border-sky-300">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p className="text-sm">
                    The second version of PlayerWatch which relies on existing
                    events data to create compilations.
                    <br />
                    <br />
                    Utilizes Ffmpeg for clipping, WhoScored events data for
                    timestamp clip reference and a CLI frontend.
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
                          Differences from PlayerWatch 1
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          PlayerWatch 1 is entirely AI based, using AI to track
                          each individual player and ball.
                          <br />
                          <br />
                          The method was cropping when the ball leaves the
                          players' foot after x frames and amassing a list of
                          clips.
                          <br />
                          <br />
                          This was power heavy, especially for a 90 minute
                          match. We also could not figure out which player is
                          which, due to limited AI capabilities and lack of
                          efficiency.
                          <br />
                          <br />
                          The other method that was included in PlayerWatch 1
                          was an audio based method, clipping when a player's
                          name is heard. Also unreliable, as the commentators do
                          not say their name all the time when they're on the
                          ball.
                          <br />
                          <br />
                          After realizing that data exists that exactly
                          timestamps each player's actions, the solution was
                          solved, and this tool was created.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Events data
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          WhoScored provides events data which provides helpful
                          information to create this tool.
                          <br />
                          <br />
                          Each player's actions are mapped to each timestamp,
                          giving me exactly the information required for me to
                          efficiently crop videos based on this data. This leads
                          to quick compilation creation for all selected
                          players.
                          <br />
                          <br />
                          The data expands upon this and includes the players'
                          action type, if it succeeded, qualifiers, etc. <br />
                          <br />
                          Some of the extra information is incorporated into the
                          tool as a filter on specific actions.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Clipping
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          There was a few hurdles encountered when implementing
                          the timeframe clipping per action:
                          <br />
                          <br />
                          <ol style={{ color: "#08cee5" }}>
                            <li>
                              1. Each action that occurs happens exactly on that
                              time listed
                            </li>{" "}
                            <br />
                            <li>
                              2. How do know if the player's action is finished?
                            </li>{" "}
                            <br />
                            <li>3. How do we sync match time?</li>
                          </ol>
                          <br />
                          <br />
                          1. The solution is to simply apply a negative offset
                          the timestamp, and make that the 'start' timestamp
                          <br />
                          <br />
                          2. The current solution is to continue if the same
                          player consecutively performs actions, else stop when
                          not. Unfortunately, the event data does not display a
                          'receive' event when another player receives the
                          target's ball, so the end is marked AFTER the new
                          player performs an action.
                          <br />
                          <br />
                          3. I have already experimented on using OCR to detect
                          the match time, but it is unreliable, so I have
                          decided to rely on the user. The solution is to go 20
                          minutes into the video, show a frame and ask for the
                          match time. The player then inputs a match time and
                          finally, use the difference between the input and 20
                          minutes to sync the video perfectly by applying the
                          offset on each action timestamp.
                          <br />
                          <br />
                          The process can be skipped if the video is already
                          synced perfectly.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Workflow
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <ol>
                            <li>1. Input WhoScored link</li>
                            <li>2. Input first half video </li>
                            <li>3. Input second half video </li>
                            <li>4. Sync each video if necessary </li>
                            <li>
                              5. if not in database, parse WhoScored data, save
                              to SQLite database and return its data{" "}
                            </li>
                            <li>6. Choose players to create compilation of </li>
                            <li>
                              7. Get match events for chosen players and store
                              in their own Player class
                            </li>
                            <li>
                              8. For each Player, crop and combine first &
                              second half using its processed events data
                            </li>
                            <li>
                              9. Combine both halves of the video and save it
                            </li>
                          </ol>
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

export default PlayerWatch2;
