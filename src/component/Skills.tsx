import {
  Card,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Skills = () => {
  return (
    <section>
      <h1
        id="skills"
        className="flex justify-center font-Kode  text-2xl  sm:text-3xl md:text-4xl lg:text-5xl m-8 underline underline-offset-8"
      >
        Skills
      </h1>

      <Card isBlurred className="font-Kode sm:max-w-2xl m-auto">
        <Table aria-label="Skills" isCompact className="p-3 ">
          <TableHeader>
            <TableColumn className="text-[8px] sm:text-base">
              LANGUAGES
            </TableColumn>
            <TableColumn className="text-[8px] sm:text-base">
              SOFTWARE
            </TableColumn>
            <TableColumn className="text-[8px] sm:text-base">
              ENGINE
            </TableColumn>
            <TableColumn className="text-[8px] sm:text-base">
              PROJECT MANAGEMENT
            </TableColumn>
          </TableHeader>

          <TableBody>
            <TableRow key="1">
              <TableCell className="text-[12px] sm:text-base">C++</TableCell>
              <TableCell className="text-[12px] sm:text-base">
                Visual Studio
              </TableCell>
              <TableCell className="text-[12px] sm:text-base">Unity</TableCell>
              <TableCell className="text-[12px] sm:text-base">Trello</TableCell>
              {/*  <TableCell className="text-[12px]">SourceTree</TableCell> */}
            </TableRow>
            <TableRow key="2">
              <TableCell className="text-[12px] sm:text-base">C#</TableCell>
              <TableCell className="text-[12px] sm:text-base">
                Visual Studio Code
              </TableCell>
              <TableCell className="text-[12px] sm:text-base">
                Unreal 4
              </TableCell>
              <TableCell className="text-[12px] sm:text-base">Git</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell className="text-[12px] sm:text-base">Python</TableCell>
              <TableCell className="text-[12px] sm:text-base">Maya</TableCell>
              <TableCell>{[]}</TableCell>
              <TableCell>{[]}</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>{[]}</TableCell>
              <TableCell className="text-[12px] sm:text-base">
                3DS Max
              </TableCell>
              <TableCell>{[]}</TableCell>
              <TableCell>{[]}</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>{[]}</TableCell>
              <TableCell className="text-[12px] sm:text-base">
                Blender
              </TableCell>
              <TableCell>{[]}</TableCell>
              <TableCell>{[]}</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>{[]}</TableCell>
              <TableCell className="text-[12px] sm:text-base">
                Photoshop
              </TableCell>
              <TableCell>{[]}</TableCell>
              <TableCell>{[]}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </section>
  );
};

export default Skills;
