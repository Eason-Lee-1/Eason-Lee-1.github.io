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

const ShoppingList = () => {
  return (
    <section>
      <Card className="bg-zinc-800 ">
        <Card.Header>
          <Image
            alt="ShoppingListLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/Shopping%20listr.png"
            className="scale-100 sm:scale-80 xl:scale-70 duration-200 xl:-mb-8 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-[#512BD4]">
            <CircleFill width={6} />
            <Chip.Label>C#</Chip.Label>
          </Chip>
          <Chip className="bg-red-600">
            <CircleFill width={6} />
            <Chip.Label>SQL Server</Chip.Label>
          </Chip>
          <Chip className="bg-[#1986c8]">
            <CircleFill width={6} />
            <Chip.Label>ASP.NET MVC</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-gray-400 overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="ShoppingList1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/shoping%20list%201.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="ShoppingList2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/shopping%20list%202%20excel.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="ShoppingList3"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/main/shopping%20list%203.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 bg-zinc-800 text-white hover:text-gray-400 hover:bg-zinc-900" />
              <CarouselNext className="size-5 sm:size-7  bg-zinc-800 text-white hover:text-gray-400 hover:bg-zinc-900" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="vUgYL283R1U"
                title="Shopping List"
                borderColor="gray-400"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-cyan-400/10" />
        <CarouselNext className="bg-cyan-400/10" />

        <Modal>
          <Button className=" border-2 bg-zinc-800 border-gray-400  m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-zinc-800">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    A CRUD shopping list{" "}
                    <a
                      href="https://github.com/Precipitating/Shopping-List"
                      className=" text-cyan-400"
                    >
                      tool
                    </a>{" "}
                    made in ASP.NET MVC C#, using SQL Server to store the data
                    <br />
                    <br />
                    Uses jQuery's data table for the built-in search
                    functionality & sort
                    <br />
                    <br />
                    Also uses XPath & HtmlAgilityPack to scrape Amazon data.
                  </p>
                  <br />
                  <div className="text-center pb-2">Details:</div>
                  <Accordion
                    hideSeparator
                    className="stroke-white rounded-2xl text-white fill-white border-gray-400 border-2"
                  >
                    <Accordion.Item className="text-yellow-30">
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Adding a product
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Adding a product requires a Name, Brand, Category,
                          Price and Image, using the 'New Product' button.
                          <br /> <br />
                          However, 'New Product via link' only requires an
                          Amazon link, a description and a category.
                          <br />
                          <br />
                          Using HTMLAgilityPack and XPATH, it will automatically
                          fill the name, price, brand and image.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Excel
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The 'To Excel file' button converts the database into
                          an Excel file, which displays all the data in a table
                          using XLWorksheet.
                          <br />
                          <br />
                          It uses ClosedXML for image insertion and auto width
                          adjustment.
                          <br />
                          <br />
                          It downloads the Excel file in browser instead of
                          files usually being saved in the project directory,
                          making it easy to access.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          SQLServer
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The SQL Database stores all the product data. The
                          properties that exist are as follows:
                          <br />
                          <br />
                          <ul>
                            <li>Id (primary key)</li>
                            <li>Name</li>
                            <li>Brand</li>
                            <li>Category</li>
                            <li>Price (decimal)</li>
                            <li>Description</li>
                            <li>ImageFileName</li>
                            <li>Link</li>
                            <li>Created (datetime) </li>
                            <li>PriceDifferenceSymbol</li>
                          </ul>
                          <br />
                          <br />
                          These are all nvarchar data types except the ones in
                          brackets.
                          <br />
                          <br />
                          The ImageFileName stores a unique datetime formatted
                          string
                          (year/month/day/hour/minute/second/millisecond), so it
                          can be accessed/deleted when required, ensuring no
                          conflicts.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Updating Price
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The update price button only appears for product made
                          via link, and it checks the site to see if the product
                          has changed price.
                          <br />
                          <br />
                          An arrow unicode symbol will show if the price has
                          gone up, or down, and stores the symbol in the SQL
                          database.
                          <br />
                          <br />
                          If there is no price change, a bullet point will show
                          instead, with no calls to modify the database for
                          efficiency.
                          <br />
                          <br />
                          This also applies to normal products, but you would
                          have to manually edit the price to see the symbol
                          change.
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

export default ShoppingList;
