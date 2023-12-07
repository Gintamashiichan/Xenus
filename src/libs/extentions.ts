// Extentions
import markedKatex from "marked-katex-extension";
import { markedEmoji } from "marked-emoji";
import markedAdmonition from "marked-admonition-extension";

import { Octokit } from "@octokit/rest";

import "marked-admonition-extension/dist/index.css";
import { MarkedExtension } from "marked";

async function getEmojis(): Promise<MarkedExtension> {
    const octokit = new Octokit();
  // Get all the emojis available to use on GitHub.
    const resOctokit = await octokit.rest.emojis.get();
    const emojis = resOctokit.data;

    const octokitOptions = {
        emojis,
        unicode: false,
    };
    return markedEmoji(octokitOptions)
}

function getMarkedKatex(): MarkedExtension {
    const katexOptions = {}
    return markedKatex(katexOptions)
}

function getMarkedAdmonition(): MarkedExtension {
    return markedAdmonition as MarkedExtension 
}

export { getEmojis, getMarkedKatex, getMarkedAdmonition }