import { Sleeve } from "../Sleeve";
import { numeralWrapper } from "../../../ui/numeralFormat";
import { Money } from "../../../ui/React/Money";
import * as React from "react";
import { StatsTable } from "../../../ui/React/StatsTable";
import { Modal } from "../../../ui/React/Modal";

interface IProps {
  open: boolean;
  onClose: () => void;
  sleeve: Sleeve;
}

export function MoreEarningsModal(props: IProps): React.ReactElement {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <StatsTable
        rows={[
          ["Money ", <Money money={props.sleeve.earningsForTask.money} />],
          ["Hacking Exp ", numeralWrapper.formatExp(props.sleeve.earningsForTask.hack)],
          ["Strength Exp ", numeralWrapper.formatExp(props.sleeve.earningsForTask.str)],
          ["Defense Exp ", numeralWrapper.formatExp(props.sleeve.earningsForTask.def)],
          ["Dexterity Exp ", numeralWrapper.formatExp(props.sleeve.earningsForTask.dex)],
          ["Agility Exp ", numeralWrapper.formatExp(props.sleeve.earningsForTask.agi)],
          ["Charisma Exp ", numeralWrapper.formatExp(props.sleeve.earningsForTask.cha)],
        ]}
        title="Earnings for Current Task:"
      />
      <br />
      <StatsTable
        rows={[
          ["Money: ", <Money money={props.sleeve.earningsForPlayer.money} />],
          ["Hacking Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForPlayer.hack)],
          ["Strength Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForPlayer.str)],
          ["Defense Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForPlayer.def)],
          ["Dexterity Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForPlayer.dex)],
          ["Agility Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForPlayer.agi)],
          ["Charisma Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForPlayer.cha)],
        ]}
        title="Total Earnings for Host Consciousness:"
      />
      <br />
      <StatsTable
        rows={[
          ["Money: ", <Money money={props.sleeve.earningsForSleeves.money} />],
          ["Hacking Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForSleeves.hack)],
          ["Strength Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForSleeves.str)],
          ["Defense Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForSleeves.def)],
          ["Dexterity Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForSleeves.dex)],
          ["Agility Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForSleeves.agi)],
          ["Charisma Exp: ", numeralWrapper.formatExp(props.sleeve.earningsForSleeves.cha)],
        ]}
        title="Total Earnings for Other Sleeves:"
      />
      <br />
    </Modal>
  );
}
