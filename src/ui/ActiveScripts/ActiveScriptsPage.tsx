/**
 * Root React Component for the "Active Scripts" UI page. This page displays
 * and provides information about all of the player's scripts that are currently running
 */
import React from "react";

import { ScriptProduction } from "./ScriptProduction";
import { ServerAccordions } from "./ServerAccordions";

import { WorkerScript } from "../../Netscript/WorkerScript";

import Typography from "@mui/material/Typography";

interface IProps {
  workerScripts: Map<number, WorkerScript>;
}

export function ActiveScriptsPage(props: IProps): React.ReactElement {
  return (
    <>
      <Typography>
        This page displays a list of all of your scripts that are currently running across every machine. It also
        provides information about each script's production. The scripts are categorized by the hostname of the servers
        on which they are running.
      </Typography>

      <ScriptProduction />
      <ServerAccordions {...props} />
    </>
  );
}
