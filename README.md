# Mantle Signal Arena

Mantle Signal Arena is a lightweight interactive research workflow demo built for **Mantle Research Challenge 2026 — Track 2: The Research Agent**.

Users review Mantle ecosystem signal cards, vote on the ecosystem outlook, and inspect how different reputation badge groups voted.

The core workflow is:

```text
Signal Cards -> Vote -> Verify -> Reputation
```

## Concept

Onchain research is often fragmented, data-heavy, and difficult for everyday users.

Mantle Signal Arena turns ecosystem research into a simple interactive flow:

1. Review Mantle ecosystem signals
2. Vote Bullish / Neutral / Bearish
3. Compare community sentiment
4. Check reputation-weighted vote distribution
5. Understand how predictions can be verified later

The goal is to make research more visual, lightweight, and participatory.

## Why Mantle?

Mantle is building an ecosystem where liquidity, RWA, AI agents, and InfoFi can connect.

This app treats those ecosystem updates as research signals and converts them into an easy-to-understand voting workflow.

Example signal categories:

- Liquidity
- RWA
- AI / InfoFi
- Ecosystem activity
- Risk signals

## Features

- 3 Mantle ecosystem signal cards
- Bullish / Neutral / Bearish voting
- Reputation badge system
- Badge-based vote breakdown
- Resolved historical demo round
- Research summary section
- EN / JP language toggle
- Default Japanese UI
- localStorage-based guest profile
- Demo assistant character image
- Roadmap for live API integration

## Reputation Badge System

Prediction accuracy determines the user badge.

- No Badge: below 50%
- Bronze: 50%+
- Silver: 60%+
- Gold: 75%+
- Legend: 90%+

The goal is to show not only what the crowd thinks, but also where historically accurate users are voting.

## Demo Mode

This MVP currently runs in **Demo Mode**.

It uses:

- historical sample data
- sample vote data
- sample user history
- localStorage only

No live market API, wallet connection, Supabase, Firebase, or paid backend service is connected.

This prototype is designed to demonstrate the research workflow, not to provide financial advice.

## Research Workflow

Mantle Signal Arena is not a fully autonomous trading bot.

It is a human-centered research workflow tool.

The app helps users:

- collect signals
- interpret ecosystem activity
- form an outlook
- compare with the community
- build reputation through accuracy

## Roadmap

Future versions may include:

- Live MNT price API integration
- Nansen data integration
- Auto-generated Mantle signal cards
- Auto-resolved 7-day rounds
- Wallet-linked reputation badges
- Optional onchain badge system
- Ecosystem score using price, TVL, RWA activity, and AI activity

## Tech Stack

- HTML
- CSS
- JavaScript
- localStorage
- Static asset hosting
- Vercel-ready static deployment

## Architecture

Current MVP uses local demo data:

- `demoRounds`
- `demoVotes`
- `demoUserHistory`
- `priceProvider` placeholder
- `futureApiProvider` placeholder

This structure allows future live data providers to be added without redesigning the app.

## Local Development

Start a local static server:

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:5173/
```

For same-Wi-Fi mobile testing, open the host machine IP address with the same port, for example:

```text
http://192.168.x.x:5173/
```

## Deployment

This app is a static MVP and can be deployed easily on Vercel.

Recommended Vercel settings:

- Framework Preset: Other
- Build Command: leave empty
- Output Directory: `.`

## Disclaimer

This app is a research workflow demo.

It does not provide financial advice.

Current data is historical sample data only and should not be treated as live market information.

## Author

Built by a Mantle community member from Japan for **Mantle Research Challenge 2026 — Track 2**.
