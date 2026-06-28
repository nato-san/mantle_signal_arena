import {
  demoRounds,
  demoVotes,
  demoUserHistory,
  futureApiProvider,
  priceProvider,
} from "./dataProviders.js";

const STORAGE_KEYS = {
  guestId: "mantleSignalArena.guestId",
  vote: "mantleSignalArena.vote",
  lang: "mantleSignalArena.lang",
};

const translations = {
  ja: {
    appName: "Mantle Signal Arena",
    eyebrow: "Mantle Research Challenge Track 2",
    demoBadge: "DEMO MODE",
    demoNotice: "デモモード — このラウンドは過去データを使った仕組み確認用です。",
    heroTitle: "Mantleのシグナルを読み、見通しを投票する研究ワークフロー",
    heroCopy:
      "3つのエコシステムシグナルを確認し、強気・中立・弱気の見通しを選びます。投票後は、評判バッジ別の分布を確認できます。",
    guestLabel: "ゲストID",
    badgeLabel: "あなたのデモバッジ",
    accuracyLabel: "サンプル精度",
    dataMode: "履歴サンプルのみ",
    dataStorage: "localStorage",
    navLabel: "主要ナビゲーション",
    languageLabel: "言語切り替え",
    demoStatusLabel: "デモ状態",
    signalSection: "シグナルカード",
    signalLiquidityTitle: "流動性シグナル",
    signalLiquidityText:
      "流動性シグナル：この期間、Mantle上のAave預入が増加しました。",
    signalLiquidityMetric: "Aave預入サンプル",
    signalRwaTitle: "RWAシグナル",
    signalRwaText:
      "RWAシグナル：Mantle上のトークン化資産の活動に前向きな動きが見られました。",
    signalRwaMetric: "RWA活動サンプル",
    signalAiTitle: "AI / InfoFiシグナル",
    signalAiText:
      "AI / InfoFiシグナル：AIと予測市場のナラティブが注目を集めました。",
    signalAiMetric: "ナラティブ注目度",
    signalAiMetricValue: "高",
    voteQuestion: "これらのシグナルを見て、Mantleの見通しをどう判断しますか？",
    bullish: "強気",
    neutral: "中立",
    bearish: "弱気",
    selectedVote: "あなたの投票",
    changeVote: "投票を変更できます",
    resultsTitle: "投票結果",
    resultsSubtitle: "デモ用のサンプル投票に、あなたの投票を加えて表示しています。",
    totalVotes: "総投票数",
    badgeBreakdown: "バッジ別内訳",
    resolvedTitle: "解決済みデモラウンド",
    finalOutcome: "最終結果：強気",
    researchSummary: "研究サマリー",
    resolvedSummary:
      "強い流動性の成長とRWAの前向きな動きが、短期的な不確実性を上回りました。",
    catNote: "リサーチ要約を見守る小さなアシスタント",
    roadmapTitle: "今後のロードマップ",
    roadmapItems: [
      "MNT価格APIとの連携",
      "Nansenデータ連携",
      "Mantleシグナルカードの自動生成",
      "7日後ラウンドの自動判定",
      "ウォレット連携型の評判バッジ",
      "将来的なオンチェーンバッジ化",
      "価格・TVL・RWA活動・AI活動を組み合わせたエコシステムスコア判定",
    ],
    architectureTitle: "MVPアーキテクチャ",
    architectureCopy:
      "このMVPはlocalStorageのみを使います。Supabase、Firebase、ウォレット接続、有料バックエンドは不要です。",
    architectureItems: [
      "demoRounds",
      "demoVotes",
      "demoUserHistory",
      "priceProvider placeholder",
      "futureApiProvider placeholder",
    ],
    footer:
      "過去のサンプルデータのみを使用しています。このデモは金融助言ではなく、ライブ市場データも使用していません。",
    noBadge: "バッジなし",
    bronze: "ブロンズ",
    silver: "シルバー",
    gold: "ゴールド",
    legend: "レジェンド",
  },
  en: {
    appName: "Mantle Signal Arena",
    eyebrow: "Mantle Research Challenge Track 2",
    demoBadge: "DEMO MODE",
    demoNotice: "DEMO MODE — This round uses historical sample data.",
    heroTitle: "Review Mantle signals and vote on the ecosystem outlook",
    heroCopy:
      "Review 3 ecosystem signal cards, choose Bullish, Neutral, or Bearish, then inspect how reputation badge groups voted.",
    guestLabel: "Guest ID",
    badgeLabel: "Your demo badge",
    accuracyLabel: "Sample accuracy",
    dataMode: "Historical sample only",
    dataStorage: "localStorage",
    navLabel: "Primary navigation",
    languageLabel: "Language switch",
    demoStatusLabel: "Demo status",
    signalSection: "Signal Cards",
    signalLiquidityTitle: "Liquidity Signal",
    signalLiquidityText:
      "Liquidity Signal: Aave deposits on Mantle increased during this period.",
    signalLiquidityMetric: "Aave deposit sample",
    signalRwaTitle: "RWA Signal",
    signalRwaText:
      "RWA Signal: Tokenized asset activity on Mantle showed positive momentum.",
    signalRwaMetric: "RWA activity sample",
    signalAiTitle: "AI / InfoFi Signal",
    signalAiText:
      "AI / InfoFi Signal: AI and prediction market narratives gained attention.",
    signalAiMetric: "Narrative attention",
    signalAiMetricValue: "High",
    voteQuestion: "Based on these signals, what is your outlook on Mantle?",
    bullish: "Bullish",
    neutral: "Neutral",
    bearish: "Bearish",
    selectedVote: "Your vote",
    changeVote: "You can change your vote",
    resultsTitle: "Voting Results",
    resultsSubtitle: "Your vote is added to demo sample votes for this view.",
    totalVotes: "Total votes",
    badgeBreakdown: "Badge breakdown",
    resolvedTitle: "Resolved Demo Round",
    finalOutcome: "Final Outcome: Bullish",
    researchSummary: "Research summary",
    resolvedSummary:
      "Strong liquidity growth and positive RWA momentum outweighed short-term uncertainty.",
    catNote: "Small assistant cat supporting the research summary",
    roadmapTitle: "Roadmap",
    roadmapItems: [
      "Live MNT price API integration",
      "Nansen data integration",
      "Auto-generated Mantle signal cards",
      "Auto-resolve 7-day rounds",
      "Wallet-linked reputation badges",
      "Optional onchain badge system",
      "Future ecosystem score using price, TVL, RWA activity, and AI activity",
    ],
    architectureTitle: "MVP Architecture",
    architectureCopy:
      "This MVP uses localStorage only. No Supabase, Firebase, wallet connect, or paid backend service is required.",
    architectureItems: [
      "demoRounds",
      "demoVotes",
      "demoUserHistory",
      "priceProvider placeholder",
      "futureApiProvider placeholder",
    ],
    footer:
      "Historical sample data only. This demo is not financial advice and does not use live market data.",
    noBadge: "No Badge",
    bronze: "Bronze",
    silver: "Silver",
    gold: "Gold",
    legend: "Legend",
  },
};

const badgeOrder = ["Legend", "Gold", "Silver", "Bronze", "No Badge"];
const options = ["Bullish", "Neutral", "Bearish"];

const appState = {
  lang: localStorage.getItem(STORAGE_KEYS.lang) || "en",
  guestId: getOrCreateGuestId(),
  vote: localStorage.getItem(STORAGE_KEYS.vote) || "",
};

function getOrCreateGuestId() {
  const existing = localStorage.getItem(STORAGE_KEYS.guestId);
  if (existing) return existing;

  const id =
    "guest-" +
    Math.random().toString(36).slice(2, 6) +
    "-" +
    Date.now().toString(36).slice(-5);
  localStorage.setItem(STORAGE_KEYS.guestId, id);
  return id;
}

function getAccuracy(history) {
  const correct = history.filter((item) => item.prediction === item.outcome).length;
  return Math.round((correct / history.length) * 100);
}

function getBadge(accuracy) {
  if (accuracy >= 90) return "Legend";
  if (accuracy >= 75) return "Gold";
  if (accuracy >= 60) return "Silver";
  if (accuracy >= 50) return "Bronze";
  return "No Badge";
}

function getDisplayVotes() {
  const cloned = structuredClone(demoVotes);
  if (appState.vote) {
    const userBadge = getBadge(getAccuracy(demoUserHistory));
    cloned[appState.vote][userBadge] += 1;
  }
  return cloned;
}

function getVoteTotal(votes) {
  return Object.values(votes).reduce((total, group) => {
    return total + Object.values(group).reduce((sum, value) => sum + value, 0);
  }, 0);
}

function t(key) {
  return translations[appState.lang][key];
}

function badgeLabel(badge) {
  const key = {
    "No Badge": "noBadge",
    Bronze: "bronze",
    Silver: "silver",
    Gold: "gold",
    Legend: "legend",
  }[badge];
  return t(key);
}

function optionLabel(option) {
  const key = {
    Bullish: "bullish",
    Neutral: "neutral",
    Bearish: "bearish",
  }[option];
  return t(key);
}

function render() {
  const root = document.querySelector("#app");
  const openRound = demoRounds.find((round) => round.status === "open");
  const resolvedRound = demoRounds.find((round) => round.status === "resolved");
  const accuracy = getAccuracy(demoUserHistory);
  const badge = getBadge(accuracy);
  const votes = getDisplayVotes();
  const totalVotes = getVoteTotal(votes);

  root.innerHTML = `
    <main class="shell">
      <header class="hero">
        <nav class="topbar" aria-label="${t("navLabel")}">
          <div class="brand">
            <span class="brand-mark" aria-hidden="true"></span>
            <span>${t("appName")}</span>
          </div>
          <div class="top-actions">
            <span class="demo-pill">${t("demoBadge")}</span>
            <div class="language-toggle" aria-label="${t("languageLabel")}">
              <button class="${appState.lang === "en" ? "active" : ""}" data-lang="en">EN</button>
              <button class="${appState.lang === "ja" ? "active" : ""}" data-lang="ja">JP</button>
            </div>
          </div>
        </nav>

        <section class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${t("eyebrow")}</p>
            <h1>${t("heroTitle")}</h1>
            <p>${t("heroCopy")}</p>
          </div>
          <aside class="status-panel" aria-label="${t("demoStatusLabel")}">
            <div class="notice">
              <strong>${t("demoNotice")}</strong>
            </div>
            <dl>
              <div>
                <dt>${t("guestLabel")}</dt>
                <dd>${appState.guestId}</dd>
              </div>
              <div>
                <dt>${t("badgeLabel")}</dt>
                <dd><span class="badge badge-${badge.toLowerCase().replace(" ", "-")}">${badgeLabel(badge)}</span></dd>
              </div>
              <div>
                <dt>${t("accuracyLabel")}</dt>
                <dd>${accuracy}%</dd>
              </div>
              <div>
                <dt>${t("dataMode")}</dt>
                <dd>${t("dataStorage")}</dd>
              </div>
            </dl>
          </aside>
        </section>
      </header>

      <section class="section">
        <div class="section-heading">
          <h2>${t("signalSection")}</h2>
          <span>${openRound.id}</span>
        </div>
        <div class="signal-grid">
          ${openRound.cards
            .map(
              (card, index) => `
                <article class="signal-card">
                  <div class="card-topline">
                    <span>0${index + 1}</span>
                    <strong>${card.metricKey ? t(card.metricKey) : card.metric}</strong>
                  </div>
                  <h3>${t(card.titleKey)}</h3>
                  <p>${t(card.textKey)}</p>
                  <small>${t(card.metricLabelKey)}</small>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="vote-section">
        <div>
          <h2>${t("voteQuestion")}</h2>
        </div>
        <div class="vote-buttons">
          ${options
            .map(
              (option) => `
                <button class="vote-button ${appState.vote === option ? "selected" : ""}" data-vote="${option}">
                  ${optionLabel(option)}
                </button>
              `
            )
            .join("")}
        </div>
        ${
          appState.vote
            ? `<p class="vote-note">${t("selectedVote")}: <strong>${optionLabel(
                appState.vote
              )}</strong> / ${t("changeVote")}</p>`
            : ""
        }
      </section>

      ${appState.vote ? renderResults(votes, totalVotes) : ""}

      <section class="resolved-grid">
        <article class="resolved-panel">
          <div class="section-heading">
            <h2>${t("resolvedTitle")}</h2>
            <span>${resolvedRound.id}</span>
          </div>
          <div class="outcome">${t("finalOutcome")}</div>
          <h3>${t("researchSummary")}</h3>
          <p>${t(resolvedRound.summaryKey)}</p>
        </article>
        <aside class="cat-panel" aria-label="${t("catNote")}">
          <img
            class="assistant-image"
            src="./assets/research-assistant-cat.png"
            alt="${t("catNote")}"
            loading="lazy"
          />
          <p>${t("catNote")}</p>
        </aside>
      </section>

      <section class="lower-grid">
        <article class="plain-panel">
          <h2>${t("roadmapTitle")}</h2>
          <ul class="roadmap-list">
            ${t("roadmapItems")
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
        </article>
        <article class="plain-panel">
          <h2>${t("architectureTitle")}</h2>
          <p>${t("architectureCopy")}</p>
          <div class="architecture-tags">
            ${t("architectureItems")
              .map((item) => `<span>${item}</span>`)
              .join("")}
          </div>
        </article>
      </section>

      <footer>
        ${t("footer")}
      </footer>
    </main>
  `;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.lang = button.dataset.lang;
      localStorage.setItem(STORAGE_KEYS.lang, appState.lang);
      document.documentElement.lang = appState.lang;
      render();
    });
  });

  document.querySelectorAll("[data-vote]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.vote = button.dataset.vote;
      localStorage.setItem(STORAGE_KEYS.vote, appState.vote);
      render();
      document.querySelector(".results-panel")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderResults(votes, totalVotes) {
  return `
    <section class="results-panel">
      <div class="section-heading">
        <div>
          <h2>${t("resultsTitle")}</h2>
          <p>${t("resultsSubtitle")}</p>
        </div>
        <span>${t("totalVotes")}: ${totalVotes}</span>
      </div>
      <div class="results-grid">
        ${options
          .map((option) => {
            const optionTotal = Object.values(votes[option]).reduce((sum, value) => sum + value, 0);
            const percentage = Math.round((optionTotal / totalVotes) * 100);
            return `
              <article class="result-card">
                <div class="result-top">
                  <h3>${optionLabel(option)}</h3>
                  <strong>${percentage}%</strong>
                </div>
                <div class="bar" aria-hidden="true"><span style="width: ${percentage}%"></span></div>
                <p>${t("badgeBreakdown")}</p>
                <ul>
                  ${badgeOrder
                    .map(
                      (badge) => `
                        <li>
                          <span>${badgeLabel(badge)}</span>
                          <strong>${votes[option][badge]}</strong>
                        </li>
                      `
                    )
                    .join("")}
                </ul>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

void priceProvider.getMntPrice();
void futureApiProvider.getMantleSignals();

document.documentElement.lang = appState.lang;
render();
