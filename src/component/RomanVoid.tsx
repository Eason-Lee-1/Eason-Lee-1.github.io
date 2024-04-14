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

const RomanVoid = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section>
      <Card
        isFooterBlurred
        className="m-5 bg-gradient-to-b from-romanvoidbg to-romanvoid2"
      >
        <CardHeader className="flex justify-center -my-5 sm:-my-8 lg:-my-10 xl:-my-12">
          <Image
            alt="Roman Void Logo"
            src="https://github.com/Eason-Lee-1/Eason-Lee-1.github.io/blob/main/roman.png?raw=true"
            className="scale-50"
            loading="lazy"
          />
        </CardHeader>
        <div className="flex justify-center font-Kode">
          <p className="text-[8px] sm:text-xs xl:text-lg">
            2 Programmers, 2 Designers, 2 Artists
          </p>
        </div>

        <CardBody>
          <div className="flex gap-2">
            <Carousel className="w-full h-auto max-w-full border-white ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="Roman Void Start Location"
                    src="https://github.com/Eason-Lee-1/Eason-Lee-1.github.io/blob/main/roman%202.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="Roman Void Fighting"
                    src="https://github.com/Eason-Lee-1/Eason-Lee-1.github.io/blob/main/roman%203.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    isZoomed
                    alt="Roman Void Boss Battle"
                    src="https://github.com/Eason-Lee-1/Eason-Lee-1.github.io/blob/main/roman%204.png?raw=true"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className=" ml-12 lg:ml-25" />
              <CarouselNext className="mr-12 lg:mr-25 scale-inherit" />
            </Carousel>
            <iframe
              className="w-full aspect-video rounded-lg "
              src="https://drive.google.com/file/d/12Gwte-_uFwiKdZhVlZw9rMrBg1KUFO8a/preview"
              allow="autoplay"
            ></iframe>
          </div>
        </CardBody>

        <Button
          onPress={onOpen}
          className="m-2 font-Kode mx-12 bg- bg-romanvoidbg border-2 border-romanvoid2"
        >
          Contribution
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="bg-gradient-to-b from-romanvoidbg to-romanvoid2 font-Kode text-white">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Description
                </ModalHeader>
                <ModalBody>
                  <p>
                    A 2.5D RPG made in Unity for my first year group project.
                    Used SourceTree for version control. Learnt that on-screen
                    invisible buttons are easier and more reliable than tracking
                    mouse coordinates to determine attack direction.
                  </p>
                  <p>Contribution:</p>

                  <Accordion
                    variant="bordered"
                    itemClasses={{
                      title: "text-white underline underline-offset-4",
                    }}
                    className=" border-white"
                  >
                    <AccordionItem
                      key="1"
                      aria-label="NPCs"
                      title="NPCs"
                      className=" text-sm"
                    >
                      <p>
                        Enemy pathfinding, state machine and actions have been
                        added in by me.
                      </p>
                      <br />
                      <p>
                        When to play an animation, when to damage, when to
                        cooldown, everything. This includes the boss attacks and
                        negative debuffs to the player.
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Attack System"
                      title="Attack System"
                      className=" text-sm"
                    >
                      There are 4 directions to attack, so I decided to use
                      invisible screen buttons to determine the player's intent.
                      Buttons scale with the resolution making it flexible for
                      any device.
                      <br />
                      <br />
                      At first I tracked mouse coordinates but it was inflexible
                      and took unnecesary amount of code compared to using GUI
                      buttons.
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Interactive GUI"
                      title="GUI"
                      className=" text-sm"
                    >
                      Menu screen, intro and general interactivity is
                      implemented by me.
                    </AccordionItem>
                    <AccordionItem
                      key="4"
                      aria-label="Audio System"
                      title="Audio System"
                      className=" text-sm"
                    >
                      Used a singleton to make it easy to use everywhere, making
                      it easy to play one shot / looping sounds.
                    </AccordionItem>
                    <AccordionItem
                      key="5"
                      aria-label="Health System"
                      title="Health System"
                      className=" text-sm"
                    >
                      Implemented so the hearts will visually decrease/increase
                      automatically when adjusting the health variable.
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

export default RomanVoid;
