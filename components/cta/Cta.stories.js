import React from "react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import Cta from "./Cta";

export default {
  component: Cta,
  title: "Components/Atoms/Cta",
  decorators: [withKnobs]
};

const label = "Test Object";
const defaultValue = {
  foo: "bar"
};

const value = object(label, defaultValue);

export const Ctas = () => {
  return (
    <div>
      <div>
        <h3>CTA</h3>
        <Cta href="#primary-cta" type="Primary">
          {text("Primary CTA Label", "Primary CTA")}
        </Cta>
      </div>
    </div>
  );
};
