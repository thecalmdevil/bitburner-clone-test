import React, { useState } from "react";
import { Intro } from "./Intro";
import { Game } from "./Game";
import { Location } from "../../Locations/Location";
import { use } from "../../ui/Context";
import { calculateDifficulty, calculateReward } from "../formulas/game";
interface IProps {
  location: Location;
}

export function InfiltrationRoot(props: IProps): React.ReactElement {
  const player = use.Player();
  const router = use.Router();
  const [start, setStart] = useState(false);

  if (props.location.infiltrationData === undefined) throw new Error("Trying to do infiltration on invalid location.");
  const startingSecurityLevel = props.location.infiltrationData.startingSecurityLevel;
  const difficulty = calculateDifficulty(player, startingSecurityLevel);
  const reward = calculateReward(player, startingSecurityLevel);

  function cancel(): void {
    router.toCity();
  }

  if (!start) {
    return (
      <Intro
        Location={props.location}
        Difficulty={difficulty}
        MaxLevel={props.location.infiltrationData.maxClearanceLevel}
        start={() => setStart(true)}
        cancel={cancel}
      />
    );
  }

  return (
    <Game
      StartingDifficulty={startingSecurityLevel}
      Difficulty={difficulty}
      Reward={reward}
      MaxLevel={props.location.infiltrationData.maxClearanceLevel}
    />
  );
}
