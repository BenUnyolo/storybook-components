import React from "react";
import { action } from "@storybook/addon-actions";

import { HouseholdCard } from "./HouseholdCard";

export default {
  title: "Household Card",
  component: HouseholdCard,
};

export const Card = () => <HouseholdCard action={action} />;
