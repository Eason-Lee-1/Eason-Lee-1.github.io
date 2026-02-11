import { ButtonGroup, Button } from "@heroui/react";


type Props = {
  onSkills: () => void;
  onProjects: () => void;
  onContact: () => void;
}


export function NavBar({ onSkills, onProjects, onContact }: Props) {
  return (
    <div
      className="m-2 sticky top-0 rounded-3xl border inset-shadow-sm inset-shadow-current/15 backdrop-blur-sm z-50"
      style={
        {
          color: "color-mix(in oklab, turquoise 100%, transparent)",
        } 
      }
    >
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 p-4">
        <div>
          <Button
            variant="ghost"
            className="text-xl hover:bg-cyan-600/20 min-w-0 "
            onPress={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Eason Lee
          </Button>
        </div>
        <div>
          <ButtonGroup variant="outline" className="min-w-0">
            <Button onClick={onSkills} className="hover:bg-cyan-600/20">Skills</Button>
            <Button onClick={onProjects}  className="hover:bg-cyan-600/20">Projects</Button>
            <Button onClick={onContact}  className="hover:bg-cyan-600/20">Contact</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
