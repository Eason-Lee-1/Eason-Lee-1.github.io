import { Card, Textarea, Button, Image } from "@nextui-org/react";

const goToGitHub = () => {
  const newWindow = window.open(
    "https://github.com/Eason-Lee-1",
    "_blank",
    "noopener,noreferrer"
  );
  if (newWindow) newWindow.opener = null;
};

const About = () => {
  return (
    <section id="#">
      <h2 className="flex justify-center font-Kode  text-3xl  sm:text-4xl md:text-5xl mt-8 mx-8 mb-3 underline underline-offset-8">
        Hi, i'm Eason
      </h2>
      <Card isBlurred className="max-w-[4rem] ml-auto mr-auto mb-2 p-2 h-auto">
        <Button isIconOnly className="m-auto" onPress={goToGitHub}>
          <Image
            alt="GitHub logo"
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          />
        </Button>
      </Card>
      <Card isBlurred className="sm:max-w-2xl m-auto p-3 h-auto">
        <Textarea
          isReadOnly
          variant="bordered"
          defaultValue="I graduated from Sheffield Hallam University in 2023 with a BSc in Computer Science, specializing in game development.  &#10; &#10;My academic background has provided me with a strong foundation in programming games, websites, software, coupled with using software methodologies to consistently deliver projects ahead of schedule. &#10; &#10;I aim to create modular, clean and readable code in every project as it eases debugging, improves maintainability and supports team collaboration.&#10; &#10;While free, I am usually gaming, doing code challenges or creating a new project to satisfy a curiosity."
          className=" font-Kode"
          maxRows={15}
        />
      </Card>
    </section>
  );
};

export default About;
