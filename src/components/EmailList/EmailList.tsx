import { Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

import SplashScreenButton from "./SplashScreenButton";

import React from "react";
import axios from "axios";

import "./EmailList.scss";

interface IEmailList {}

export const EmailList: React.FC<IEmailList> = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [status, setStatus] = React.useState("");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="email_list__container">
      <Modal.Root
        opened={opened}
        onClose={close}
        size="sm"
        zIndex={10000}
        centered
      >
        <Modal.Overlay />
        <Modal.Content className="email_modal__content">
          <Modal.Header>
            <Modal.Title className="email_modal__title">
              Mailing List
            </Modal.Title>
            <Modal.CloseButton className="email_modal__close" />
          </Modal.Header>
          <Modal.Body>
            <div className="email_form__container">
              <form
                onSubmit={form.onSubmit(values => {
                  setStatus("");
                  axios
                    .post("https://porygon.andrewli.org/wildcat/subscribe", {
                      first_name: values.firstName,
                      last_name: values.lastName,
                      email_address: values.email,
                    })
                    .then(_ => {
                      setStatus("Success!");
                    })
                    .catch(_ => {
                      setStatus(
                        "Failed! You might already be subscribed, or there was an internal server error.",
                      );
                    });
                })}
              >
                <span
                  style={{
                    color: status === "Success!" ? "green" : "red",
                    textAlign: "center",
                  }}
                >
                  {status}
                </span>
                <TextInput
                  withAsterisk
                  className="email_form__input"
                  label="First Name"
                  placeholder="Jane"
                  key={form.key("firstName")}
                  {...form.getInputProps("firstName")}
                />
                <TextInput
                  withAsterisk
                  className="email_form__input"
                  label="Last Name"
                  placeholder="Doe"
                  key={form.key("lastName")}
                  {...form.getInputProps("lastName")}
                />
                <TextInput
                  withAsterisk
                  className="email_form__input"
                  label="Email"
                  placeholder="wildcat@northwestern.edu"
                  key={form.key("email")}
                  type="email"
                  {...form.getInputProps("email")}
                />
                <button type="submit">Register</button>
              </form>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <div className="splash__button_container">
        <SplashScreenButton
          id="button__register_now"
          onClick={() => {
            window.location.href = "https://dashboard.wildhacks.net/";
          }}
        >
          Register now!
        </SplashScreenButton>
        <SplashScreenButton id="button__email_list" onClick={open}>
          Join the mailing list!
        </SplashScreenButton>
      </div>
    </div>
  );
};

export default EmailList;
