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

const AllThatIsLost = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section>
      <Card isFooterBlurred className="m-5 border-2 border-white bg-black">
        <CardHeader className="flex justify-center -my-5 sm:-my-8 lg:-my-10 xl:-my-12">
          <Image
            alt="All That Is Lost logo"
            src="https://github.com/Eason-Lee-1/siteData/blob/main/logoalis.png?raw=true"
            className="scale-50"
            loading="lazy"
          />
        </CardHeader>
        <div className="flex justify-center font-Kode">
          <p className="text-[8px] sm:text-xs xl:text-lg">
            2 Programmers, 2 Designers, 3 Artists
          </p>
        </div>

        <CardBody>
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-1 border-white rounded-lg">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="All That Is Lost Flower"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/flower.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="All That Is Lost Bear Trap"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/monstertrap.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="All That Is Lost Pallet Trap"
                    src="https://github.com/Eason-Lee-1/siteData/blob/main/trap2.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className=" ml-12 lg:ml-25" />
              <CarouselNext className="mr-12 lg:mr-25 scale-inherit" />
            </Carousel>

            <iframe
              src="https://www.youtube.com/embed/r2yjzrZwokY?si=ujGkOR-D0iSKLJ74"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="rounded-lg border-1 border-white h-full w-full aspect-video"
            ></iframe>
          </div>
        </CardBody>

        <Button
          onPress={onOpen}
          className="m-2 font-Kode border-1 border-white bg-black mx-12"
        >
          Contribution
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="bg-black font-Kode text-white">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Description
                </ModalHeader>
                <ModalBody>
                  <p>
                    Developed as a collaborative group project during my second
                    year, this 3D horror game leveraged Unity to offer an
                    immersive gaming experience. <br />
                    <br /> The project was initially nominated for the 2022 End
                    of Year Showcase. However, due to scheduling conflicts among
                    team members, the nomination was subsequently transferred to
                    another group.
                  </p>
                  <p>Contribution:</p>

                  <Accordion
                    variant="bordered"
                    itemClasses={{
                      title: "text-white-300 underline underline-offset-4",
                    }}
                    className=" border-white"
                  >
                    <AccordionItem
                      key="1"
                      aria-label="Monster NPC"
                      title="Monster NPC"
                      className=" text-sm"
                    >
                      <p>
                        I employed pathfinding for the monster, state machine
                        and used a raycast to prevent the monster detecting the
                        player through walls. <br />
                        <br /> Monster attacking, adding in animations from the
                        artist etc. All done by me. The monster can patrol to
                        random destination points I placed around the map.
                        <br />
                        <br />
                        Patrol mode: Go to a random waypoint declared via a
                        serializable field list in the editor.
                        <br />
                        <br />
                        Chase mode: Follow player position and attack when close
                        enough, and if the distance between is too far, back to
                        patrol.
                      </p>
                      <p></p>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Interactables"
                      title="Interactables"
                      className=" text-sm"
                    >
                      Anything that can be interacted with is done by me, such
                      as doors, pickups, trap placements etc.
                      <br />
                      <br />
                      The trap lacked versatility for placement on various
                      surfaces. I employed raycasting to measure the distance
                      from the floor to the trap's position, ensuring accurate
                      placement.
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Environment"
                      title="Environment"
                      className=" text-sm"
                    >
                      Lighting and flashlight has also been implemented in, with
                      me changing the rendering pipeline provided by Unity to
                      create a better gloomy atmosphere.
                    </AccordionItem>
                    <AccordionItem
                      key="4"
                      aria-label="Audio System"
                      title="Audio System"
                      className=" text-sm"
                    >
                      Same system as previous project Roman Void.
                    </AccordionItem>
                    <AccordionItem
                      key="5"
                      aria-label="Health System"
                      title="Health System"
                      className=" text-sm"
                    >
                      Simple system of dying when you are hit 4 times, with the
                      environment flashing red each hit.
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

export default AllThatIsLost;
