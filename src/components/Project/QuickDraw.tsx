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

const QuickDraw = () => {
  return (
    <section>
      <Card className="bg-linear-to-b from-yellow-300 to-yellow-600">
        <Card.Header>
          <Image
            alt="QDLogo"
            src="https://cdn.jsdelivr.net/gh/Eason-Lee-1/siteData@main/qdlogo.png"
            className="scale-90 lg:scale-70  lg:-mb-4 2xl:-mb-6 duration-200 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-[#000080]">
            <CircleFill width={6} />
            <Chip.Label>Lua</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-yellow-700 overflow-clip rounded-lg  ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="Risky1"
                    src="https://cdn.jsdelivr.net/gh/Eason-Lee-1/siteData@main/qd1.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Risky2"
                    src="https://cdn.jsdelivr.net/gh/Eason-Lee-1/siteData@main/qd2.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Risky3"
                    src="https://cdn.jsdelivr.net/gh/Eason-Lee-1/siteData@main/qd3.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 text-white bg-linear-to-b from-yellow-300 to-yellow-600  hover:bg-white hover:text-yellow-700" />
              <CarouselNext className="size-5 sm:size-7 text-white bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-white hover:text-yellow-700" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="JASAl-TV-BE"
                title="QuickDraw"
                borderColor="yellow-700"
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer />
        <CarouselPrevious className="bg-yellow-500" />
        <CarouselNext className="bg-yellow-500" />

        <Modal>
          <Button className=" border-2 bg-linear-to-b from-yellow-300 to-yellow-600 border-yellow-700 text-yellow-950  m-auto w-[80%] rounded-xl">
            Details
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="bg-linear-to-b from-yellow-300 to-yellow-600">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center text-yellow-950">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-yellow-950 ">
                  <p>
                    A PVP/PVE Wild West shooter game created on ROBLOX, with
                    open world features added.
                    <br /> <br />
                    My first time creating a PvPvE game, with quest features,
                    shop, transportation etc.
                    <br /> <br />
                    This is the biggest game I have created, with previous being
                    simple, short game loops and minigames.
                  </p>
                  <br />
                  <div className="text-center pb-2">Details:</div>
                  <Accordion
                    hideSeparator
                    className="stroke-black rounded-2xl text-yellow-950 fill-yellow-950 border-yellow-950 border-2"
                  >
                    <Accordion.Item className="text-yellow-30">
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          NPC Optimization
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-yellow-950">
                          <p>
                            The development of NPCs at first relied on a class
                            system, instanitating each class per NPC spawn and
                            storing them into a table, using humanoids and
                            replicating everything back to client.
                            <br /> <br />
                            However, many instances of this caused major lag and
                            another solution was needed, as the map needed many
                            NPCs.
                            <br /> <br />
                            This led to discovering and using major optimization
                            techniques to allow for many NPCs to spawn.
                            <br /> <br />
  
                            <li className="text-green-600">Lower updates rates: Updating the NPC's logic at a lower rate, self explanatory</li> <br/>
                            <li className="text-green-600">Handling animations on client: Server does not animate at all, client handles any animation</li><br/>
                            <li className="text-green-600">Bare bones NPC: NPC has no accessories, nothing, only important server data for it its position so only the torso is required. However, I needed all limbs due to the health system.</li><br/>
                            <li className="text-green-600">Culling: Any NPCS not in view are hidden/culled</li><br/>
                            <li className="text-green-600">Network size reduction: Reduction in network replication data sizes via smaller data types, reducing load + lag</li><br/>
                            <li className="text-green-600">Removal of humanoid: Not needed on server, a major lag contributor</li><br/>

                            <br/>
                            The main objective was to reduce the network load sending to client every second, which was extremely high when using NPCs before, now it is greatly improved, 
                            allowing plenty more NPCs to spawn. This can be further optimized by replacing humanoids with AnimationController, but I require its physic and humanoid states for ragdolling.
                            <br/><br/>
                            This learning period taught me that only the bare minimum is only required by NPCs, only its position & state is important whilst the client handles the rest.
                          </p>
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Animations
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-yellow-950">
                          Animation creation is a tedious task which usually results into me using free packs. <br/> But with me discovering a Blender rig that can create tween animations alongside a plugin that can convert 
                          Blender keyframes to ROBLOX, it became an easy task and created by me. 
                          <br/><br/>
                          Most animations were created on Blender and its keyframe data was transferred onto ROBLOX, allowing me to enforce my Blender knowledge whilst also familiarizing myself
                          on how ROBLOX animations operate.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Health System
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-yellow-950">
                          The health system is a limb based health system that takes inspiration from Escape From Tarkov.
                          <br/><br/> 
                          Each limb has its own health, and lose enough health on crucial limbs like head or torso, they die, whilst arms and legs do another thing.
                          <br/><br/>
                          Each limb at 0 health will be broken and flop around, whilst if further damaged, would result in complete decapitation and blood spurting out of the limb sockets.
                          <br/><br/>
                          This creates a more exciting health system than the traditional health based system when combined with ragdolling, making damage more brutal and unforgiving.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Quests
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-yellow-950">
                          I created a quest system as well, giving the users objectives to complete with rewards going up each time finished, relying on the DataService system ROBLOX has on their system.
                          <br/><br/>
                          The way it was created is that the data store (which is persistent data saved permanently per player) will store active or completed quests with their progress, allowing us to easily track quest data through sessions.
                          <br/><br/>
                          Specific NPCs will then give quests out when a dialogue reply is pressed, updating the datastore, and when complete, would move the quest to a different table in the datastore and reward the player.
                          <br/><br/>
                          I've synced quest information to a quest GUI that the player can access, which updates when the datastore updates.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Other notable mechanics and features
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-yellow-950">
                          There are many other things I have coded in, but few notable ones include:
                          <li><span className="text-green-600">Barge:</span> Player can charge into other NPCs and initiate a ragdoll impulse on hit</li>
                          <li><span className="text-green-600">Shops:</span> Player can browse weapons and buy items through a GUI</li>
                          <li><span className="text-green-600">QuickZone:</span> A useful library used that allowed me to play different music when a player enters a specified tagged zone and do many other things. </li>
                          <li><span className="text-green-600">Transport:</span> Player can travel on steam trains and horses to other towns</li>
                          <li><span className="text-green-600">Weather:</span> Sandstorms and rain, occuring randomly</li>
                          <li><span className="text-green-600">Gunplay:</span> Many weapons using a projectile library that has advanced projectile physics</li>
                          <li><span className="text-green-600">NPCs:</span> Moving NPCs with state behaviour, behaving differently per faction. Or simple dialogue NPCs</li>
                          <li><span className="text-green-600">Looting:</span> Mining which gives ores to sell and grave robbing/tumbleweed looting which both give specific weapons via a custom lootpool</li>
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

export default QuickDraw;
