# Mantle Signal Arena

Mantle Signal Arena is a lightweight interactive research workflow demo built for **Mantle Research Challenge 2026 — Track 2: The Research Agent**.

It transforms complex Mantle ecosystem data into simple research signals, AI-ready structured summaries, and reputation-based voting results, making onchain research easier and more accessible.

Users review Mantle ecosystem signal cards, vote on the ecosystem outlook, and inspect how different reputation badge groups voted.

Core workflow:

**Signal Cards -> Vote -> Verify -> Reputation**

---

## Problem

Onchain research is difficult for most users.

Understanding Mantle often requires checking multiple sources such as:

- Price data
- TVL changes
- RWA activity
- AI / InfoFi narratives
- Social sentiment

This creates high research friction, especially for newer users.

Raw data alone does not always help users form a clear market outlook.

---

## Concept

Mantle Signal Arena turns ecosystem research into a simple interactive workflow:

1. Review Mantle ecosystem signals
2. Vote Bullish / Neutral / Bearish
3. Compare community sentiment
4. Check reputation-weighted vote distribution
5. Understand how predictions can be verified later

The goal is to make research more visual, lightweight, and participatory.

---

## Why Mantle?

Mantle is building an ecosystem where liquidity, RWA, AI agents, and InfoFi can connect.

This app treats those ecosystem updates as research signals and converts them into an easy-to-understand voting workflow.

Example signal categories:

- Liquidity
- RWA
- AI / InfoFi
- Ecosystem activity
- Risk signals

---

## Why It Fits Track 2

Mantle Signal Arena is designed as an **AI-assisted research workflow tool** for onchain finance.

Instead of replacing human decision-making, it helps users:

- collect ecosystem signals
- interpret them faster
- compare sentiment across reputation groups
- form better research-driven opinions

This aligns with Track 2 by demonstrating a reusable research workflow that others can build on.

---

## AI Role

AI is planned to play a supporting role by transforming raw ecosystem data into structured research signals.

Instead of forcing users to analyze large amounts of raw information, AI-assisted summarization can reduce research friction and improve accessibility.

In future versions, AI can automatically generate signal cards from live Mantle ecosystem data.

---

## Features

- 3 Mantle ecosystem signal cards
- Bullish / Neutral / Bearish voting
- Reputation badge system
- Badge-based vote breakdown
- Resolved historical demo round
- Research summary section
- EN / JP language toggle
- Default English UI for global submission
- Japanese language support for accessibility
- localStorage-based guest profile
- Demo assistant character image
- Roadmap for live API integration

---

## Reputation Badge System

Prediction accuracy determines the user badge.

- No Badge: below 50%
- Bronze: 50%+
- Silver: 60%+
- Gold: 75%+
- Legend: 90%+

The goal is to show not only what the crowd thinks, but also where historically accurate users are voting.

---

## Demo Mode

This MVP currently runs in **Demo Mode**.

It uses:

- historical sample data
- sample vote data
- sample user history
- localStorage only

No live market API, wallet connection, Supabase, Firebase, or paid backend service is connected.

This prototype is designed to demonstrate the research workflow, not to provide financial advice.

Current demo rounds simulate the future live round system using historical sample data.

---

## Round Rule

Each round follows a fixed prediction cycle.

- A new round starts every day at **00:00 UTC**
- Each round remains open for voting for **24 hours**
- Users can vote **once per round**
- Predictions are resolved **exactly 7 days later**
- Resolution uses the **MNT snapshot price at the same UTC time**

Example:

- Round start: 2026-07-01 00:00 UTC
- Voting closes: 2026-07-01 23:59 UTC
- Resolution snapshot: 2026-07-08 00:00 UTC

This design ensures fairness by giving all participants the same prediction window and evaluation timing.

Current planned resolution starts with MNT snapshot price, with future ecosystem score support.

---

## Research Workflow

Mantle Signal Arena is not a fully autonomous trading bot.

It is a human-centered research workflow tool.

The app helps users:

- collect signals
- interpret ecosystem activity
- form an outlook
- compare with the community
- build reputation through accuracy

---

## Roadmap

Future versions may include:

- Live MNT price API integration
- Nansen data integration
- Auto-generated Mantle signal cards
- 24-hour voting rounds resolved 7 days later using MNT snapshot price
- Wallet-linked reputation badges
- Optional onchain badge system
- Ecosystem score using price, TVL, RWA activity, and AI activity
- Mantle AI Agent Skills integration

---

## Tech Stack

- HTML
- CSS
- JavaScript
- localStorage
- Static asset hosting
- Vercel deployment

---

## Architecture

Current MVP uses local demo data:

- demoRounds
- demoVotes
- demoUserHistory
- Future price API provider
- Future ecosystem data provider

This structure allows live data providers to be added without redesigning the app.

---

## Usage Notice

This project was created for the Mantle Research Challenge submission.

Reproduction, redistribution, or commercial reuse of the original design and assets is not permitted without permission from the author.

---

## Disclaimer

This app is a research workflow demo.

It does not provide financial advice.

Current data is historical sample data only and should not be treated as live market information.

---

## Author

Built by nato-san, an independent creator from Japan, for **Mantle Research Challenge 2026 — Track 2**.
