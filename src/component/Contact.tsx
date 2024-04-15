import { Card, Textarea, Input, Button } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const currentForm = form.current;

    if (currentForm == null) {
      alert("No form detected.");
      return;
    }

    emailjs
      .sendForm("service_rpet35x", "template_rgfsag4", currentForm, {
        publicKey: "mjepo61iQUFvAqfFH",
      })
      .then(
        () => {
          alert("Email sent successfully.");
        },
        () => {
          alert("Failed to send email.");
        }
      );
  };

  return (
    <section id="contact">
      <h1 className="flex justify-center font-Kode  text-2xl  sm:text-3xl md:text-4xl lg:text-5xl m-8 underline underline-offset-8">
        Contact Me
      </h1>

      <Card isBlurred className="sm:max-w-2xl m-auto p-5">
        <form ref={form} onSubmit={sendEmail}>
          <Input label="Name" isRequired name="from_name" type="text" />
          <Textarea
            isRequired
            label="Message"
            labelPlacement="outside"
            placeholder="Enter your message"
            minRows={10}
            className="pt-2"
            name="message"
          />
          <Button
            color="secondary"
            className=" mt-5 ml-auto mr-auto font-Kode"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default Contact;
