import React, { FC } from "react";
import ActionBar from "@native-ts/action-bar/ActionBar";
import Screen from "../components/Screen";

const ActionBarScreen: FC = () => {

  return (
    <Screen title="Action bar">
      <ActionBar />
    </Screen>
  );
}

export default ActionBarScreen;
