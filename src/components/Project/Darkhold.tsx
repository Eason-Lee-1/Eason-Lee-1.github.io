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

const Darkhold = () => {
  return (
    <section>
      <Card className="bg-darkhold">
        <Card.Header>
          <Image
            alt="DarkholdLogo"
            src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/DARK%20HOLD%20LOGO.png"
            className="scale-70 xl:scale-60 duration-200 xl:-mb-8 ease-in-out "
            loading="eager"
          />
        </Card.Header>
        <div className="flex gap-1 justify-center">
          <Chip className="bg-black">
            <CircleFill width={6} />
            <Chip.Label>Unreal 5</Chip.Label>
          </Chip>
          <Chip className="bg-[#00599C]">
            <CircleFill width={6} />
            <Chip.Label>C++</Chip.Label>
          </Chip>
          <Chip className="bg-blue-700">
            <CircleFill width={6} />
            <Chip.Label>Blueprint</Chip.Label>
          </Chip>
        </div>
        <Card.Content className="mx-8">
          <div className="grid grid-rows-2 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:grid-rows-1">
            <Carousel className="w-full h-auto max-w-full border-2 border-white overflow-clip rounded-lg ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="Darkhold1"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/med%201.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Darkhold2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/med%202.png"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Darkhold2"
                    src="https://raw.githubusercontent.com/Eason-Lee-1/siteData/refs/heads/main/med%203.png"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-5 sm:size-7 text-white bg-black hover:bg-white hover:text-black" />
              <CarouselNext className="size-5 sm:size-7 text-white bg-black hover:bg-white hover:text-black" />
            </Carousel>
            <div className="personal">
              <YouTubeLite
                id="CWsMVt2BZMk"
                title="Darkhold"
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
              <Modal.Dialog className=" bg-linear-to-b bg-darkhold">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center">
                    Description
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-white ">
                  <p>
                    An Unreal engine created game made with blueprints and C++,
                    created to deepen and familarize myself with the engine.
                    <br />
                    <br />
                    This is medieval action game, with inspiration from Dark
                    Messiah of Might and Magic. Also based on my previous
                    project: EscapeGPT.
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
                          Procedural Dungeon
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          Each reload of the game generates a procedural
                          dungeon, with each room being random.
                          <br />
                          <br />
                          The implementation involves creating each room
                          individually on its own blueprint, and placing an
                          invisible object that records the location for the
                          next room to spawn onto.
                          <br />
                          <br />
                          I learnt that this makes this easy, however it comes
                          with the problem of needing to get the exact exit
                          location that allows seamless connection to every
                          room, which is extremely time consuming.
                          <br /> <br />
                          This has been expanded to provide loot/enemy/chest
                          spawn locations, along with spline patrol routes per
                          room for the AI to choose from.
                          <br />
                          <br />
                          The solution is for the exit point to have the same
                          end structure, so it can prevent model overlaps and
                          gaps.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Motion Matching
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          A way of providing a responsive animation system,
                          implemented into the project.
                          <br /> <br />
                          This requires a lot of animation data that needs to be
                          provided for the best results, which wouldn't be ideal
                          in a small project.
                          <br /> <br />
                          However, the data set was provided by the Unreal
                          motion matching demo project which allows me to use
                          this new animation system to create a more smooth
                          experience in the game.
                          <br /> <br />
                          This allows smooth transitions between any state from
                          any direction, making it look realistic to enhance the
                          gameplay.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Inventory
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          I decided on a grid styled inventory system due to the
                          visual appeal, interactivity and it doubles up as a
                          organization minigame.
                          <br /> <br />
                          It is a basic grid system, with the items being icons
                          with a specified dimensions to determine if it fits or
                          not. The items can be rotated and transferred to other
                          inventories if required.
                          <br /> <br />
                          The items to populate the inventory is created by
                          constructing and providing the icons, dimension size,
                          quantity and ID. This information is populated in a
                          data table and can be grabbed anywhere for consistency
                          and efficiency.
                          <br /> <br />I also added a dropdown menu when an item
                          is right clicked to be consumed or dropped if
                          applicable. This system is used for chests, NPCS and
                          the player itself.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Combo System
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The combo system applies to melee weapons, and allows
                          multiple melee attacks to be performed when the player
                          left clicks during the combo window.
                          <br /> <br />
                          This system is reliant on the animation itself, and
                          simply force stops the animation when a combo window
                          is reached and no input is detected.
                          <br /> <br />
                          We use animation notifies to notify if a left click is
                          required to continue the combo to make things easy.
                          <br /> <br />
                          This also means that the end of a combo is determined
                          by the animation's length, so you cannot infinitely
                          combo.
                          <br /> <br />I added this in to give players
                          flexibility to when to combo or not, to provide a risk
                          and a reward as you cannot move when attacking,
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Object Pooling
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          I implemented object pooling to optimize the game by
                          stopping object's spawning constantly for projectiles,
                          attached projectiles, blood particles etc.
                          <br /> <br />
                          The system has an auto despawn timer if needed and can
                          be set active/inactive, which will stop/start ticking
                          and hide/unhide the actors instead of destroying,
                          which would cause performance issues.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Enemy AI
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          The enemy AI is implemented to be more intelligent
                          using the built in perception/hearing system Unreal
                          provides. This allows enemies to see within a
                          specified half angle and/or hear within a certain
                          distance.
                          <br /> <br />
                          This is used to determine if the enemy has spotted the
                          player and will change its state if so.
                          <br />
                          <br />
                          The enemy AI has 4 states: passive, investigating,
                          seeking and attacking
                          <br /> <br />
                          Passive: Enemy AI's default behaviour. If assigned to
                          a patrol route, it will walk through the route.
                          <br />
                          <br />
                          Investigating: Goes to player's last known location
                          and stops if nothing is found
                          <br />
                          <br />
                          Seeking: Checks potential areas around the player's
                          last known location to attempt to find the player.
                          Uses EQS Query to do so.
                          <br />
                          <br />
                          Attacking: Sprint towards the player and start
                          attacking. Melee AI uses EQS query to circle around
                          enemy before attacking whilst the crossbow AI either
                          moves to a shooting range distance, or when on low
                          health, runs to a safe spot to heal.
                        </Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Heading>
                        <Accordion.Trigger>
                          Other Features
                          <Accordion.Indicator />
                        </Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body className="text-white">
                          <ul>
                            <li>
                              Audio system: Basic audio system with pitch and
                              transition features
                            </li>
                            <br />
                            <li>
                              Projectile impalement: Attaches the projectile to
                              the bone it hits
                            </li>
                            <br />
                            <li>
                              Parry system: Player's sword can parry other
                              swords if timed correctly, causing stagger
                            </li>
                            <br />
                            <li>
                              Interaction - UI tooltip interaction with
                              interactables with hold/tap/press types
                            </li>
                            <br />
                            <li>
                              Ragdoll - Ragdoll if kicked and stand back up if
                              velocity is nearly 0
                            </li>
                            <br />
                            <li>
                              Execution - Special execution animations that
                              occur if the enemy's health is low randomly, same
                              with decapitation
                            </li>
                            <br />
                            <li>
                              Hands & Legs IK: Hands are placed onto the wall if
                              near and legs will adjust its height depending on
                              floor angle/height
                            </li>
                            <br />
                            <li>
                              Player Statistics: Player health, stamina and
                              posture system. Posture is reduced if blocking a
                              sword and if 0 posture, player cannot block.
                            </li>
                            <br />
                            <li>
                              Ammo system: Basic ammo system used for weapons
                              that rely on ammo. Inventory is used to determine
                              if we have ammo for the weapon equipped
                            </li>
                            <br />
                            <li>
                              Token System: A system that allows me to specify
                              how many enemies can attack the target at a time
                              by assigning/unassigning tokens to the target. If
                              no tokens for the target, the enemy can't attack.
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

export default Darkhold;
