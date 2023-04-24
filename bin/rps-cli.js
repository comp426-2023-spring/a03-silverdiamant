#!/usr/bin/env node 

import minimist from 'minimist';
import { rps } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2));

let shot = args._[0];

// if no argument supplied

if (args._.length = 0) {
        console.log(JSON.stringify(rps()));
        process.exit(0);
}

// if unlabeled argument supplied

if (rps(args._[0] == undefined)) {
        console.error('Out of range');
        console.log(
                `Usage: node-rps [SHOT]
                Play Rock Paper Scissors (RPS)

                -h, --help      display this help message and exit
                -r, --rules     display the rules and exit

                Examples:
                node-rps        Return JSON with single player RPS result.
                                e.g. {"player":"rock"}
                node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                                e.g {"player":"rock","opponent":"scissors","result":"win"}`);

        console.log(
                `Rules for Rock Paper Scissors:

                - Scissors CUTS Paper
                - Paper COVERS Rock
                - Rock CRUSHES Scissors`);
        process.exit(0);
} else {
        console.log(JSON.stringify(rps(args._[0])));
        process.exit(0);
}

// help message

if (args.h || args.help) {
        console.log(
                `Usage: node-rps [SHOT]
                Play Rock Paper Scissors (RPS)

                -h, --help      display this help message and exit
                -r, --rules     display the rules and exit

                Examples:
                        node-rps        Return JSON with single player RPS result.
                                        e.g. {"player":"rock"}
                        node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                                        e.g {"player":"rock","opponent":"scissors","result":"win"}`);
        process.exit(0);
}

// rules message

if (args.r || args.rules) {
        console.log(
                `Rules for Rock Paper Scissors:
                - Scissors CUTS Paper
                - Paper COVERS Rock
                - Rock CRUSHES Scissors`);
        process.exit(0);
}
