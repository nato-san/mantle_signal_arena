export const demoRounds = [
  {
    id: "mantle-track2-demo-001",
    status: "open",
    cards: [
      {
        id: "liquidity",
        titleKey: "signalLiquidityTitle",
        textKey: "signalLiquidityText",
        metric: "+18.4%",
        metricLabelKey: "signalLiquidityMetric",
      },
      {
        id: "rwa",
        titleKey: "signalRwaTitle",
        textKey: "signalRwaText",
        metric: "+12.7%",
        metricLabelKey: "signalRwaMetric",
      },
      {
        id: "ai-infofi",
        titleKey: "signalAiTitle",
        textKey: "signalAiText",
        metricKey: "signalAiMetricValue",
        metricLabelKey: "signalAiMetric",
      },
    ],
  },
  {
    id: "mantle-track2-resolved-001",
    status: "resolved",
    outcome: "Bullish",
    summaryKey: "resolvedSummary",
  },
];

export const demoVotes = {
  Bullish: {
    Legend: 2,
    Gold: 8,
    Silver: 15,
    Bronze: 22,
    "No Badge": 10,
  },
  Neutral: {
    Legend: 0,
    Gold: 3,
    Silver: 9,
    Bronze: 18,
    "No Badge": 12,
  },
  Bearish: {
    Legend: 0,
    Gold: 1,
    Silver: 4,
    Bronze: 9,
    "No Badge": 8,
  },
};

export const demoUserHistory = [
  { roundId: "demo-history-001", prediction: "Bullish", outcome: "Bullish" },
  { roundId: "demo-history-002", prediction: "Neutral", outcome: "Bullish" },
  { roundId: "demo-history-003", prediction: "Bullish", outcome: "Bullish" },
  { roundId: "demo-history-004", prediction: "Bearish", outcome: "Bearish" },
  { roundId: "demo-history-005", prediction: "Bullish", outcome: "Bullish" },
  { roundId: "demo-history-006", prediction: "Neutral", outcome: "Neutral" },
  { roundId: "demo-history-007", prediction: "Bullish", outcome: "Neutral" },
  { roundId: "demo-history-008", prediction: "Bullish", outcome: "Bullish" },
  { roundId: "demo-history-009", prediction: "Bullish", outcome: "Bullish" },
  { roundId: "demo-history-010", prediction: "Bearish", outcome: "Bullish" },
];

export const priceProvider = {
  name: "priceProvider",
  mode: "placeholder",
  async getMntPrice() {
    return {
      source: "demo-placeholder",
      value: null,
      note: "Future live MNT price API integration point.",
    };
  },
};

export const futureApiProvider = {
  name: "futureApiProvider",
  mode: "placeholder",
  async getMantleSignals() {
    return {
      source: "demo-placeholder",
      signals: [],
      note: "Future Nansen, TVL, RWA, AI, and ecosystem activity integration point.",
    };
  },
};
