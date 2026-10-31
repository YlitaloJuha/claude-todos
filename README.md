<h1 align="center">claude-todos</h1>

<p align="center"><b>Say "todo" the way you already do. It gets saved, stays on screen, and is there when you ask.</b></p>

<p align="center">
  <img alt="type: Claude Code mod" src="https://img.shields.io/badge/type-Claude%20Code%20mod-6f42c1?style=flat-square">
  <img alt="tested on: Claude Code 2.1.292" src="https://img.shields.io/badge/tested%20on-Claude%20Code%202.1.292-D97757?style=flat-square">
  <img alt="tests: 21 passing" src="https://img.shields.io/badge/tests-21%20passing-2ea44f?style=flat-square">
</p>

<p align="center"><img src="docs/usage.svg" alt="todos alone, with its list open, from a real terminal session" width="860"></p>

<p align="center"><sub>Only this mod enabled, in a real terminal session: two open items and one ticked off. The items are a demo list.</sub></p>

"also, todo add an archive chat". "As todo, not now". You say these mid-session, the session may remember, and you forget. This keeps them per project with the count on screen, without changing how you write.

## Install

In a terminal, inside Claude Code:

```
/plugin install todos --marketplace YlitaloJuha/claude-todos
```

Or from a shell:

```bash
claude plugin install todos --marketplace YlitaloJuha/claude-todos
```

In the desktop app, click + next to the prompt box, then Plugins, Add marketplace with `YlitaloJuha/claude-todos`, then Add plugin.

> [!NOTE]
> This repository is private for now. Installing needs read access and a GitHub credential on your machine, such as `gh auth login` then `gh auth setup-git`.

## What it does

- **No special syntax:** A fast model reads only the prompts that mention "todo" or "no action" and pulls out the item, even from "add as todo^^" where it has to look at the reply above.
- **Tick, then archive:** Done keeps an item on the list, ticked. Archive clears it from the screen.
- **Answers "anything left todo?":** When you mention todos, the session gets your real list.
- **Use:** Puts an item in the prompt box, ready to send.

## Commands

| Command | What it does |
|---|---|
| `/todos` | List this project's todos |
| `/todos show` | Open or close the list above the prompt |
| `/todos add <text>` | Add one by hand |
| `/todos done <n>` | Tick one off |
| `/todos undo` | Reopen the last ticked item |
| `/todos archive` | Clear everything ticked |
| `/todos all` | Open counts for every project |

## What it costs

One Haiku call for each prompt that mentions "todo" or "no action". Other prompts cost nothing.

## What it can reach

No network, no shell commands and no file access through the mod API. The prompt and the end of the last reply go to Haiku through Claude Code, the same provider as your session. Todos are saved as plain text in `~/.claude/plugins/store`, like your transcripts. Anything that looks like a password or token is dropped. Run `claude plugin validate .` in this repository to list every call it makes.

## Limits

- Items only close when you tick them, not when Claude finishes the work.
- Each project has its own list.
- The fast model can misread a prompt. If it cannot answer at all, your first line is saved so nothing is lost.
- It draws its own count. With [`claude-bars`](https://github.com/YlitaloJuha/claude-bars) installed, the count moves onto that line.

## Develop

```bash
claude plugin validate .
claude plugin test .
claude --plugin-dir .
```

## Credits

- The "untrusted reply" prompt pattern follows [reflect-mod](https://github.com/BayramAnnakov/claude-reflect) (MIT).

## License

Not chosen yet, so all rights are reserved for now.
