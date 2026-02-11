import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  Surface,
  TextField,
} from "@heroui/react";
import emailjs from "@emailjs/browser";
import { forwardRef, useRef, useState } from "react";

export const Contact = forwardRef<HTMLElement>((_, ref) => {
  const form = useRef(null);
  const [message, setMsg] = useState("");
  const [email, setEmail] = useState("");

  const cleanInputs = () => {
    setMsg("");
    setEmail("");
  };
  const sendEmail = (e: any) => {
    e.preventDefault();
    cleanInputs()

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
        },
      );
  };

  return (
    <section ref={ref} id="contact">
      <h1 className="flex justify-center text-2xl  sm:text-3xl md:text-4xl lg:text-5xl m-5 underline underline-offset-8 duration-200 ease-in-out">
        Contact Me
      </h1>

      <div className="flex justify-center">
        <div
          className="inline-flex rounded-3xl m-5 border inset-shadow-sm overflow-hidden inset-shadow-current/15 backdrop-blur-sm p-5"
          style={{
            background: "color-mix(in oklab, cyan 3%, transparent)",
            color: "color-mix(in oklab, cyan 100%, transparent)",
          }}
        >
          <Surface className="w-[clamp(20rem,25vw,25rem)] bg-transparent rounded-3xl  p-6">
            <Form ref={form} onSubmit={sendEmail}>
              <Fieldset className="w-full">
                <Fieldset.Legend>Contact</Fieldset.Legend>
                <Description>Send your email and message</Description>
                <Fieldset.Group>
                  <TextField
                    value={email}
                    isRequired
                    name="from_name"
                    type="email"
                    onChange={(txt) => setEmail(txt)}
                  >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" variant="secondary" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    name="message"
                    onChange={(txt) => setMsg(txt)}
                    validate={(value) => {
                      if (value.length < 10) {
                        return "Message must be at least 10 characters";
                      }

                      return null;
                    }}
                  >
                    <Label>Message</Label>
                    <TextArea
                      value={message}
                      placeholder="Send a message"
                      variant="secondary"
                    />
                    <Description>Minimum 10 characters</Description>
                    <FieldError />
                  </TextField>
                </Fieldset.Group>
                <Fieldset.Actions className="flex justify-center">
                  <Button
                    className="bg-transparent border-2 border-white"
                    type="submit"
                  >
                    Send
                  </Button>
                </Fieldset.Actions>
              </Fieldset>
            </Form>
          </Surface>
        </div>
      </div>
    </section>
  );
});

export default Contact;
