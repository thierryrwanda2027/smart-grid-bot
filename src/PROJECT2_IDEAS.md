# Project 2: Personal Choice Frontend Project Ideas

Here are 3 unique project ideas designed specifically for you, Niyonkuru Thierry, bridging your background in Mechanical Engineering with your interests in Tech, Cybersecurity, German, and Financial Markets.

Each project is designed to be built using pure HTML, CSS, and Vanilla JavaScript, utilizing free public REST APIs to practice fetching and displaying dynamic data without needing a backend server.

---

## Idea 1: The "Cyber-Secured" Industrial IoT Dashboard
**Theme:** Mechanical Engineering + Cybersecurity
**Focus:** Data Visualization & DOM Manipulation

**Concept:**
Imagine you are monitoring a fleet of heavy machinery (like the clay processing equipment at your internship). You need a dashboard that displays live "sensor data" (temperature, RPM, pressure) but also flags potential cybersecurity anomalies (e.g., "Unauthorized login attempt on Pump Station Alpha").

**How it works (Frontend):**
1.  **UI Design:** A dark-mode, terminal-inspired dashboard using CSS Grid for widgets.
2.  **API Integration:** You will use a free mock-data API (like `Mockaroo` or `JSONPlaceholder`) to simulate incoming sensor data and security logs every few seconds using JavaScript `setInterval()`.
3.  **Core Feature:** Write JavaScript logic to analyze the incoming data. If a temperature reading spikes above a certain threshold, or a mock security log indicates an anomaly, the UI widget turns red and triggers an alert sound/notification.

**Why this is great for you:** It directly combines your mechanical maintenance experience with your ethical hacking interest, teaching you how to build real-time monitoring interfaces.

---

## Idea 2: Bilingual (English/German) Crypto Market Tracker
**Theme:** Financial Markets (Crypto/Forex) + German Language
**Focus:** API Fetching & State Management

**Concept:**
A sleek, modern cryptocurrency tracking application that not only shows live prices and 24h changes but allows the user to toggle the entire application's UI language between English and German.

**How it works (Frontend):**
1.  **UI Design:** Clean, minimalist cards displaying coin logos, current prices, and mini trendline charts (using a simple charting library or CSS graphs).
2.  **API Integration:** Fetch live market data using the free **CoinGecko API** (`api.coingecko.com/api/v3/coins/markets`).
3.  **Core Feature:** Implement a language toggle. You will store a JavaScript object dictionary with English and German translations for all UI text (e.g., "Market Cap" -> "Marktkapitalisierung"). When the user clicks the German flag, a JS function iterates through the DOM and updates the `textContent` of relevant elements.

**Why this is great for you:** It leverages your financial market interest while providing practical experience in building multi-lingual applications (i18n), reinforcing your German (B1) vocabulary.

---

## Idea 3: The "Engineering Translator" Flashcard App
**Theme:** Mechanical Engineering + German
**Focus:** Local Storage & Interactive UI Arrays

**Concept:**
A study tool application specifically designed to help engineering students learn technical mechanical terms in German (e.g., "Gearbox" -> "Getriebe", "Thermodynamics" -> "Thermodynamik").

**How it works (Frontend):**
1.  **UI Design:** A central, interactive "Flashcard" built with CSS 3D transforms. Clicking the card flips it over smoothly to reveal the translation.
2.  **API Integration:** You can start with a hardcoded JSON array of terms. For the API challenge, integrate the free **DictionaryAPI.dev** or a similar public dictionary API to pull example sentences or definitions for the English term dynamically when a card is shown.
3.  **Core Feature:** A "Known" vs "Still Learning" sorting system. As you flip cards, you click a button to categorize them. The app uses the browser's `localStorage` to save your progress, so when you refresh the page, it remembers which mechanical terms you have mastered and which you need to review.

**Why this is great for you:** It’s a highly interactive DOM manipulation project that directly aids your personal goal of learning technical German related to your field of study.

---

### Next Steps:
Review these options and let me know which one excites you the most! Once you decide, I will guide you through the step-by-step implementation process, providing the HTML structure, CSS layout, and JavaScript logic to build it.
