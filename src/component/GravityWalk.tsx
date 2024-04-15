import {
  Image,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GravityWalk = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section>
      <Card isFooterBlurred className="m-5">
        <CardHeader className="flex justify-center -my-5 sm:-my-8 lg:-my-10 xl:-my-12">
          <Image
            alt="Gravity Walk logo"
            src="https://github.com/Eason-Lee-1/siteData/blob/main/gravwalklogo.png?raw=true"
            className="scale-50"
            loading="lazy"
          />
        </CardHeader>
        <div className="flex justify-center font-Kode">
          <p className="text-[8px] sm:text-xs xl:text-lg">
            4 Programmers, 2 Designers, 1 Artist
          </p>
        </div>

        <CardBody>
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-1 border-gravwalkborder rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="Gravity Walk photo 1"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/gw1.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="Gravity Walk photo 2"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/gw2.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="Gravity Walk photo 3"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/gw3.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className=" ml-12 lg:ml-25" />
              <CarouselNext className="mr-12 lg:mr-25 scale-inherit" />
            </Carousel>
            <iframe
              className="w-full aspect-video rounded-lg border-1 border-gravwalkborder"
              src="https://www.youtube.com/embed/hSjEHXkkDRY?si=FMkXwuD1jS06RpGN"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </CardBody>

        <Button
          onPress={onOpen}
          className="m-2 font-Kode border-1 border-gravwalkborder"
        >
          Contribution
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className=" bg-gravwalkbg font-Kode text-white">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Description
                </ModalHeader>
                <ModalBody>
                  <p>
                    A Sci-Fi Game created in DX12 for my final year group
                    project.
                  </p>
                  <p>Contribution:</p>

                  <Accordion
                    variant="bordered"
                    itemClasses={{
                      title: "text-gravwalkborder underline underline-offset-4",
                    }}
                    className=" border-white"
                  >
                    <AccordionItem
                      key="1"
                      aria-label="Keyboard/Controller Support"
                      title="Keyboard/Controller Support"
                      className=" text-sm"
                    >
                      <p>
                        I have integrated controller and keyboard/mouse support
                        for the game using the DXTK12 library, which simplifies
                        the process. A key benefit of using a controller is the
                        ability to adjust walk speed based on joystick pressure.
                      </p>
                      <p></p>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Model Loader"
                      title="Model Loader"
                      className=" text-sm"
                    >
                      I have used TinyObj to add in a custom model loader into
                      the DX12 engine, allowing easy import of obj files along
                      with correct texture linkage.
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Camera"
                      title="Camera"
                      className=" text-sm"
                    >
                      FPS camera has also been added in by me. Gimbal lock issue
                      was solved by using quaternions and locking the Y axis to
                      a min/max value. Also a lerp rotation animation when
                      camera rotates.
                    </AccordionItem>
                    <AccordionItem
                      key="4"
                      aria-label="Audio System"
                      title="Audio System"
                      className=" text-sm"
                    >
                      I added in an audio system implemented via DirectXTK
                      library with usage of a "wavebank" for efficient loading
                      and memory management. I have also added 3D audio on the
                      platform.
                    </AccordionItem>
                    <AccordionItem
                      key="5"
                      aria-label="Trigger boxes"
                      title="Trigger boxes"
                      className=" text-sm"
                    >
                      Implemented trigger boxes with an ID link to an object,
                      specifically used for platform activation, doors and voice
                      lines, but can be done for anything.
                    </AccordionItem>
                    <AccordionItem
                      key="6"
                      aria-label="Player Mechanics"
                      title="Player Mechanics"
                      className=" text-sm"
                    >
                      I implemented all player-related movements, including
                      dash, gravity shift (perspective rotation), crouch slide
                      (with FOV change effect), jump, boost jump, and
                      velocity-based movement.
                    </AccordionItem>
                    <AccordionItem
                      key="7"
                      aria-label="Doors & Buttons"
                      title="Doors & Buttons"
                      className=" text-sm"
                    >
                      I implemented door opening and closing functionalities
                      using trigger boxes to determine state changes,
                      accompanied by simple lerp animations. Additionally,
                      buttons are made interactive, utilizing the trigger box
                      system to connect with doors and platforms.
                    </AccordionItem>
                    <AccordionItem
                      key="8"
                      aria-label="Platform System"
                      title="Platform System"
                      className=" text-sm"
                    >
                      I developed the entire platform system, enabling
                      customizable movement directions through a JSON file
                      (RapidJSON). The system ensures the player remains on the
                      platform without falling through frame-by-frame updates.
                    </AccordionItem>
                  </Accordion>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
    </section>
  );
};

export default GravityWalk;
