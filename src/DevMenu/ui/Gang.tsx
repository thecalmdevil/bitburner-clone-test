import React from "react";

import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Adjuster } from "./Adjuster";
import { IPlayer } from "../../PersonObjects/IPlayer";

const bigNumber = 1e27;

interface IProps {
  player: IPlayer;
}

export function Gang(props: IProps): React.ReactElement {
  function addTonsGangCycles(): void {
    if (props.player.gang) {
      props.player.gang.storedCycles = bigNumber;
    }
  }

  function modifyGangCycles(modify: number): (x: number) => void {
    return function (cycles: number): void {
      if (props.player.gang) {
        props.player.gang.storedCycles += cycles * modify;
      }
    };
  }

  function resetGangCycles(): void {
    if (props.player.gang) {
      props.player.gang.storedCycles = 0;
    }
  }

  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Gang</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <table>
          <tbody>
            <tr>
              <td>
                <Typography>Cycles:</Typography>
              </td>
              <td>
                <Adjuster
                  label="cycles"
                  placeholder="amt"
                  tons={addTonsGangCycles}
                  add={modifyGangCycles(1)}
                  subtract={modifyGangCycles(-1)}
                  reset={resetGangCycles}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  );
}
