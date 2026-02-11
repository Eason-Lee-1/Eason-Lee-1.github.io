import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { forwardRef } from "react";

export const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <>
      <section ref={ref}>
        <div className="flex justify-center">
          <h2 className="-mt-4 underline decoration-1 underline-offset-8 text-3xl sm:text-4xl md:text-5xl transition-all duration-500 ease-in-out">
            Skills
          </h2>
        </div>
        <div
          className="mt-5 m-auto w-[clamp(21rem,70vw,40rem)] h-[clamp(12rem,10vh,30rem)]  rounded-3xl  border inset-shadow-sm inset-shadow-current/15 backdrop-blur-sm"
          style={{
            background: "color-mix(in oklab, cyan 3%, transparent)",
            color: "color-mix(in oklab, cyan 50%, transparent)",
          }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center text-[clamp(0.7rem,1vw,1rem)] text-cyan">
                  Languages
                </TableHead>
                <TableHead className="text-center text-cyan text-[clamp(0.7rem,1vw,1rem)]">
                  Software
                </TableHead>
                <TableHead className="text-center text-cyan text-[clamp(0.7rem,1vw,1rem)]">
                  Engines
                </TableHead>
                <TableHead className="text-center text-cyan text-[clamp(0.7rem,1vw,1rem)]">
                  Version Control
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-white text-center">
              <TableRow className="text-cyan text-[clamp(0.6rem,1vw,1rem)]">
                <TableCell className="w-[0.1%]">C++</TableCell>
                <TableCell>Visual Studio</TableCell>
                <TableCell>Unity</TableCell>
                <TableCell>Trello</TableCell>
              </TableRow>
              <TableRow className="text-cyan text-[clamp(0.6rem,1vw,1rem)]">
                <TableCell className="font-medium">C#</TableCell>
                <TableCell>Visual Code</TableCell>
                <TableCell>Unreal 5</TableCell>
                <TableCell>Git</TableCell>
              </TableRow>
              <TableRow className="text-cyan text-[clamp(0.6rem,1vw,1rem)]">
                <TableCell>Python</TableCell>
                <TableCell>PyCharm</TableCell>
                <TableCell>Roblox Studio</TableCell>
                <TableCell>SourceTree</TableCell>
              </TableRow>
              <TableRow className="text-cyan text-[clamp(0.6rem,1vw,1rem)]">
                <TableCell>Lua</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
});

export default Skills;
