import { Card, Button, Modal, Chip } from "@heroui/react";
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

const Keychain = () => {
  return (
    <section>
      <Card className="bg-green-950">
        <Card.Header>
          <Image
            alt="KeychainLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/keychain.png"
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
            <Carousel className="w-full h-auto max-w-full border-2 border-white overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="KeychainCollage"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/collage.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Keychain2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/KEYCHAIN%20CMDS.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-green-950 text-white hover:text-black hover:bg-green-800" />
              <CarouselNext className="size-5 sm:size-7  bg-green-950 text-white hover:text-black hover:bg-green-800" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="Mjhh1LiNqIw"
                title="Keychain"
                borderColor="white"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 border-white bg-green-900  m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-green-950">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    A Discord{" "}
                    <a
                      href="https://github.com/Precipitating/Keychain"
                      className="text-cyan-400"
                    >
                      bot
                    </a>{" "}
                    filled with various features, using slash commands. <br />
                    <br />
                    Made in Python
                    <br />
                    <br />
                    Has 16 features currently, with them being explained via the
                    video above.
                    <br />
                    <br />
                    Uses many libraries such as ShazamIO, Pytesseract, MoviePy,
                    DiscordPy etc.
                  </p>
                </Modal.Body>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </Card>
    </section>
  );
};

export default Keychain;
