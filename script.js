const player = {
    firstName: "Nathan",
    nickname: "Sky"
};

const allowedQuestionCounts = [10, 25, 50, 100];
const allowedJourneyQuestionCounts = [5, 10];

const operations = {
    multiplication: {
        label: "Multiplication"
    },
    division: {
        label: "Division"
    },
    mixed: {
        label: "Mixed"
    }
};

const sprintPaceBands = [
    { key: "very-easy", label: "Very Easy", secondsPerQuestion: 10 },
    { key: "easy", label: "Easy", secondsPerQuestion: 7 },
    { key: "medium", label: "Medium", secondsPerQuestion: 5 },
    { key: "hard", label: "Hard", secondsPerQuestion: 3 },
    { key: "extreme", label: "Extreme", secondsPerQuestion: 2 }
];

const eras = [
    {
        id: "jamestown",
        name: "Jamestown Era",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication"],
        maxFactor: 5,
        maxRight: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Chart_of_Virginia_1608_with_markers.png",
        description: "Build strong early multiplication facts while exploring wooden forts, maps, and river travel.",
        paceLabel: "Explorer pace",
        secondsPerQuestion: 10,
        facts: [
            "Jamestown was founded in 1607 and became the first permanent English settlement in America.",
            "Early settlers built wooden forts and relied on ships for supplies and trade.",
            "The James River helped people travel, trade, and move materials through the colony."
        ]
    },
    {
        id: "revolution",
        name: "American Revolution Era",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication"],
        maxFactor: 8,
        maxRight: 11,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg",
        description: "Push your multiplication range higher with maps, meeting halls, and bold ideas about a new nation.",
        paceLabel: "Liberty pace",
        secondsPerQuestion: 9,
        facts: [
            "Printed documents and town meetings helped people share ideas across the colonies.",
            "Flags, letters, and public readings helped communities stay informed and connected.",
            "Colonial towns often gathered in meeting halls where leaders debated important choices."
        ]
    },
    {
        id: "frontier",
        name: "Frontier / Westward Expansion Era",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication", "division"],
        maxFactor: 10,
        maxRight: 12,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Lewis_and_Clark_Expedition_Map.jpg",
        description: "Blend multiplication with simple division while following trails, wagons, and big map routes westward.",
        paceLabel: "Trail pace",
        secondsPerQuestion: 8,
        facts: [
            "Families used maps, wagons, and trail markers to move supplies across long distances.",
            "Rivers, roads, and trails shaped where towns and trading posts could grow.",
            "Surveyors measured land carefully so builders and travelers could plan their routes."
        ]
    },
    {
        id: "reconstruction",
        name: "Civil War & Reconstruction Era",
        passMark: 90,
        totalQuestions: 10,
        operations: ["division", "mixed"],
        maxFactor: 12,
        maxRight: 12,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/THE_ARMY_OF_THE_CUMBERLAND.-A_TROOP_TRAIN_PASSING_THROUGH_THE_BIG_CUT_ON_THE_LOUISVILLE_AND_NASHVILLE_RAILROAD.jpg",
        description: "Strengthen division and mixed facts while learning about rebuilding, railroads, telegraphs, and national transformation.",
        paceLabel: "Rebuild pace",
        secondsPerQuestion: 7,
        facts: [
            "Railroads and bridges helped reconnect cities and towns during Reconstruction.",
            "Telegraph lines carried messages quickly, helping people share plans over long distances.",
            "Engineers, doctors, and builders all played important roles in rebuilding communities."
        ]
    },
    {
        id: "industrial",
        name: "Industrial America Era",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication", "division", "mixed"],
        maxFactor: 12,
        maxRight: 14,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Brooklyn_Bridge_construction_1877-1883.jpg",
        description: "Work faster through factories, machines, gears, and steel as the math pace begins to rise.",
        paceLabel: "Factory pace",
        secondsPerQuestion: 6,
        facts: [
            "Factories used machines, belts, and gears to help workers make goods more quickly.",
            "Steel and new tools helped cities build taller bridges, buildings, and equipment.",
            "Inventors kept improving machines to save time, power, and effort."
        ]
    },
    {
        id: "railroad",
        name: "Railroad Expansion Era",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication", "division", "mixed"],
        maxFactor: 12,
        maxRight: 15,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Joining_of_the_rails_-_NARA_-_530898.jpg",
        description: "Handle larger mixed facts while trains, tracks, depots, and schedules demand stronger streaks.",
        paceLabel: "Express pace",
        secondsPerQuestion: 5,
        facts: [
            "Railroad depots helped sort supplies, mail, and passengers on busy routes.",
            "Track crews and engineers had to measure carefully to keep trains moving safely.",
            "Rail lines connected farms, towns, factories, and ports across long distances."
        ]
    },
    {
        id: "modern",
        name: "Modern America Era",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication", "division", "mixed"],
        maxFactor: 12,
        maxRight: 16,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/GRAND_COULEE_DAM_-_NARA_-_548020.jpg",
        description: "Move through cities, highways, lights, and power grids with quicker mixed-number challenges.",
        paceLabel: "City pace",
        secondsPerQuestion: 4,
        facts: [
            "Modern cities depend on roads, electricity, and communication systems working together.",
            "Traffic lights, power lines, and tall buildings all rely on careful planning and engineering.",
            "Technology helps people move information and energy faster than ever before."
        ]
    },
    {
        id: "space-race",
        name: "Space Race Era",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication", "division", "mixed"],
        maxFactor: 12,
        maxRight: 18,
        image: "https://images-assets.nasa.gov/image/as11-40-5875/as11-40-5875~large.jpg",
        description: "Finish the journey with the hardest mixed facts, fast timing, and a rocket-powered final challenge.",
        paceLabel: "Launch pace",
        secondsPerQuestion: 3,
        facts: [
            "Engineers used math to plan rockets, satellites, and safe launch paths into space.",
            "Control rooms tracked missions with screens, radios, and careful calculations.",
            "The Space Race inspired new technology, teamwork, and scientific discovery."
        ]
    }
];

const journeyDeckSource = typeof journeyCardDecks !== "undefined"
    ? journeyCardDecks
    : {};
const journeyImageCache = new Map();
const journeyImageRequests = new Map();

const modes = {
    normal: {
        label: "Normal",
        timed: false,
        timeLimit: null,
        tip: `${player.nickname}, multiplication normal mode gives you time to think and build your streak.`
    },
    sprint: {
        label: "Sprint",
        timed: true,
        timeLimit: null,
        tip: `Think fast, ${player.firstName}, but keep it accurate. Wrong answers slow down perfect scores.`
    },
    perfect: {
        label: "Perfect Run",
        timed: false,
        timeLimit: null,
        tip: `${player.nickname}, Perfect Run is the best mode for chasing 100%.`
    },
    flash: {
        label: "Flash Cards",
        timed: false,
        timeLimit: null,
        tip: `${player.nickname}, flip through one fact family and turn Answers On when you want the reveal.`
    },
    eras: {
        label: "American Eras Math Journey",
        timed: false,
        timeLimit: null,
        tip: `${player.nickname}, travel through American history by answering math questions and unlocking era facts.`
    }
};

const elements = {
    setupScreen: document.querySelector("#setup-screen"),
    gameScreen: document.querySelector("#game-screen"),
    backToSetup: document.querySelector("#back-to-setup"),
    resultDialog: document.querySelector("#result-dialog"),
    resultModal: document.querySelector("#result-modal"),
    closeResultDialog: document.querySelector("#close-result-dialog"),
    journeyImageModal: document.querySelector("#journey-image-modal"),
    closeJourneyImageModal: document.querySelector("#close-journey-image-modal"),
    journeyImageModalPhoto: document.querySelector("#journey-image-modal-photo"),
    journeyImageModalTitle: document.querySelector("#journey-image-modal-title"),
    journeyImageModalEra: document.querySelector("#journey-image-modal-era"),
    journeyImageModalFact: document.querySelector("#journey-image-modal-fact"),
    resultPlayAgain: document.querySelector("#result-play-again"),
    resultBackToSetup: document.querySelector("#result-back-setup"),
    resultCelebration: document.querySelector("#result-celebration"),
    resultRatingChip: document.querySelector("#result-rating-chip"),
    resultPraise: document.querySelector("#result-praise"),
    resultTitle: document.querySelector("#result-title"),
    resultMessage: document.querySelector("#result-message"),
    resultSummary: document.querySelector("#result-summary"),
    resultScoreSpotlight: document.querySelector("#result-score-spotlight"),
    resultScoreLabel: document.querySelector("#result-score-label"),
    resultScoreValue: document.querySelector("#result-score-value"),
    resultScoreNote: document.querySelector("#result-score-note"),
    resultAwardNote: document.querySelector("#result-award-note"),
    resultStatLabels: [
        document.querySelector("#result-stat-1-label"),
        document.querySelector("#result-stat-2-label")
    ],
    resultStatValues: [
        document.querySelector("#result-stat-1-value"),
        document.querySelector("#result-stat-2-value")
    ],
    operation: document.querySelector("#operation"),
    operationHelp: document.querySelector("#operation-help"),
    difficulty: document.querySelector("#difficulty"),
    difficultyHelp: document.querySelector("#difficulty-help"),
    focusTableGroup: document.querySelector("#focus-table-group"),
    focusTableLabel: document.querySelector("#focus-table-label"),
    focusTableHelp: document.querySelector("#focus-table-help"),
    focusTable: document.querySelector("#focus-table"),
    sprintLevelGroup: document.querySelector("#sprint-level-group"),
    sprintLevelHelp: document.querySelector("#sprint-level-help"),
    sprintLevel: document.querySelector("#sprint-level"),
    questionCountCard: document.querySelector("#question-count-card"),
    questionCount: document.querySelector("#question-count"),
    journeyQuestionCountCard: document.querySelector("#journey-question-count-card"),
    journeyQuestionCount: document.querySelector("#journey-question-count"),
    scopeLabel: document.querySelector("#scope-label"),
    currentDifficulty: document.querySelector("#current-difficulty"),
    scopeStatusPill: document.querySelector("#scope-label").closest(".status-pill"),
    currentMode: document.querySelector("#current-mode"),
    currentOperation: document.querySelector("#current-operation"),
    startGame: document.querySelector("#start-game"),
    answerForm: document.querySelector("#answer-form"),
    answerInput: document.querySelector("#answer-input"),
    submitAnswer: document.querySelector("#submit-answer"),
    flashControls: document.querySelector("#flash-controls"),
    showAnswer: document.querySelector("#show-answer"),
    nextCard: document.querySelector("#next-card"),
    answersOn: document.querySelector("#answers-on"),
    flashAnswer: document.querySelector("#flash-answer"),
    questionText: document.querySelector("#question-text"),
    questionTip: document.querySelector("#question-tip"),
    missionCard: document.querySelector("#mission-text").closest(".mission-card"),
    missionText: document.querySelector("#mission-text"),
    progressText: document.querySelector("#progress-text"),
    progressBar: document.querySelector("#progress-bar"),
    feedbackBanner: document.querySelector("#feedback-banner"),
    summaryText: document.querySelector("#summary-text"),
    scoreValue: document.querySelector("#score-value"),
    accuracyValue: document.querySelector("#accuracy-value"),
    streakValue: document.querySelector("#streak-value"),
    timerValue: document.querySelector("#timer-value"),
    timerPace: document.querySelector("#timer-pace"),
    timerProgress: document.querySelector("#timer-progress"),
    timerPill: document.querySelector(".timer-pill"),
    badgeStrip: document.querySelector("#badge-strip"),
    modeCards: document.querySelectorAll(".mode-card"),
    questionCard: document.querySelector(".question-card"),
    journeyCard: document.querySelector("#journey-card"),
    journeyImage: document.querySelector("#journey-image"),
    journeyImageLoader: document.querySelector("#journey-image-loader"),
    journeyEraPhoto: document.querySelector("#journey-era-photo"),
    journeyEraStamp: document.querySelector("#journey-era-stamp"),
    journeyFactOverlay: document.querySelector("#journey-fact-overlay"),
    journeyFactText: document.querySelector("#journey-fact-text"),
    journeyContinueHint: document.querySelector("#journey-continue-hint"),
    journeyEraName: document.querySelector("#journey-era-name"),
    journeyEraBadge: document.querySelector("#journey-era-badge"),
    journeyEraDescription: document.querySelector("#journey-era-description"),
    journeyEraProgressText: document.querySelector("#journey-era-progress-text"),
    journeyEraProgressBar: document.querySelector("#journey-era-progress-bar")
};

const state = {
    operation: "multiplication",
    selectedMode: "normal",
    difficulty: 1,
    sprintLevel: "very-easy",
    focusTable: 6,
    answersOn: false,
    questionCount: 10,
    journeyQuestionCount: 10,
    round: null,
    timerId: null,
    celebrationId: null,
    pendingSprintLevelUp: null,
    pendingJourneyAction: null,
    journeyFactId: null,
    journey: null,
    awaitingJourneyContinue: false,
    ignoreJourneyEmptySubmit: false,
    journeyPanelTransitioning: false,
    journeyImageLoadToken: 0
};

function showScreen(screenName) {
    const showSetup = screenName === "setup";
    elements.setupScreen.classList.toggle("hidden", !showSetup);
    elements.gameScreen.classList.toggle("hidden", showSetup);
}

function isDivisionMode() {
    return state.operation === "division";
}

function isMixedMode() {
    return state.operation === "mixed";
}

function isJourneyMode() {
    return state.selectedMode === "eras";
}

function getCurrentJourneyEra() {
    if (!state.journey) {
        return eras[0];
    }

    return eras[state.journey.currentEraIndex] || eras[0];
}

function getOperationMissionLabel() {
    if (isMixedMode()) {
        return "mixed-fact";
    }

    return operations[state.operation].label.toLowerCase();
}

function normalizeOperationList(operationList) {
    return Array.from(new Set(operationList.flatMap((operationKey) => {
        if (operationKey === "mixed") {
            return ["multiplication", "division"];
        }

        return [operationKey];
    })));
}

function getJourneyOperations(era) {
    const normalizedOperations = normalizeOperationList(era.operations);

    if (isMixedMode()) {
        return normalizedOperations;
    }

    if (normalizedOperations.includes(state.operation)) {
        return [state.operation];
    }

    return normalizedOperations;
}

function getOperationSetLabel(operationList) {
    if (operationList.length > 1) {
        return "mixed multiplication and division";
    }

    return operationList[0] === "division"
        ? "division"
        : "multiplication";
}

function getJourneyOperationLabel(era) {
    return getOperationSetLabel(getJourneyOperations(era));
}

function getJourneyMissionText(era) {
    return `${player.nickname}, clear ${era.name} with ${state.journeyQuestionCount} ${getJourneyOperationLabel(era)} questions and reach ${era.passMark}% to unlock the next stop in history.`;
}

function getJourneyTipText(era) {
    const paceText = era.secondsPerQuestion
        ? ` ${era.paceLabel} gives ${era.secondsPerQuestion} seconds per question.`
        : " Take your time and build accuracy before moving on.";
    return `${player.nickname}, every correct answer unlocks a history fact from ${era.name.toLowerCase()}.${paceText}`;
}

function getDifficultyHelpText() {
    if (isJourneyMode()) {
        return "American Eras Math Journey sets the math challenge for each era automatically.";
    }

    if (isDivisionMode()) {
        return "Difficulty 1 asks only exact division by 1. Difficulty 12 unlocks exact division facts using divisors 1 to 12.";
    }

    if (isMixedMode()) {
        return "Difficulty 1 mixes easy multiplication and exact division by 1. Difficulty 12 mixes multiplication and exact division facts from 1 to 12.";
    }

    return "Difficulty 1 asks only facts with 1. Difficulty 12 unlocks every table from 1 to 12.";
}

function getOperationHelpText() {
    if (isJourneyMode()) {
        return "Choose Sky's journey focus. When an era supports it, the challenge follows this operation choice.";
    }

    if (isDivisionMode()) {
        return "Sky will practice exact division facts only.";
    }

    if (isMixedMode()) {
        return "Sky will practice a mixed set of multiplication and exact division facts.";
    }

    return "Sky will practice multiplication facts only.";
}

function getFocusLabelText() {
    if (isDivisionMode()) {
        return "Focus Divisor";
    }

    if (isMixedMode()) {
        return "Focus Family";
    }

    return "Focus Table";
}

function getFocusHelpText() {
    if (isDivisionMode()) {
        return `Pick one divisor for Sky to practice as flash cards, like dividing by ${state.focusTable}.`;
    }

    if (isMixedMode()) {
        return `Pick one number family for Sky to practice with both multiplication and division facts, like the ${state.focusTable} family.`;
    }

    return `Pick one multiplication column for Sky to practice as flash cards, like the ${state.focusTable} times table.`;
}

function getFlashFamilyText() {
    if (isDivisionMode()) {
        return `dividing by ${state.focusTable}`;
    }

    if (isMixedMode()) {
        return `the ${state.focusTable} fact family`;
    }

    return `the ${state.focusTable} times table`;
}

function getMissionText(modeKey) {
    const count = state.questionCount;
    const operationLabel = getOperationMissionLabel();

    if (modeKey === "eras") {
        const era = getCurrentJourneyEra();
        return getJourneyMissionText(era);
    }

    if (modeKey === "sprint") {
        const pace = getSprintPaceProfile();
        return `${player.nickname}, answer ${count} ${operationLabel} questions before the timer hits zero. ${pace.secondsPerQuestion}s per question at ${pace.label.toLowerCase()} pace.`;
    }

    if (modeKey === "perfect") {
        return `${player.nickname}, get all ${count} ${operationLabel} answers right. One mistake ends the round.`;
    }

    if (modeKey === "flash") {
        return `${player.nickname}, review ${count} flash cards for ${getFlashFamilyText()}.`;
    }

    return `${player.nickname}, finish ${count} ${operationLabel} questions and collect as many stars as you can.`;
}

function getTipText(modeKey) {
    if (modeKey === "eras") {
        const era = getCurrentJourneyEra();
        return getJourneyTipText(era);
    }

    if (modeKey === "flash") {
        return `${player.nickname}, practice only ${getFlashFamilyText()} and flip answers on when you want help.`;
    }

    if (isMixedMode() && modeKey === "perfect") {
        return `${player.nickname}, Perfect Run is the best mode for mastering mixed multiplication and division facts.`;
    }

    if (isMixedMode() && modeKey === "sprint") {
        const pace = getSprintPaceProfile();
        return `Think fast, ${player.firstName}, and switch cleanly between multiplication and division. ${pace.label} pace gives ${pace.secondsPerQuestion} seconds per question.`;
    }

    if (isMixedMode() && modeKey === "normal") {
        return `${player.nickname}, mixed normal mode is a great way to practice both multiplication and division together.`;
    }

    if (modeKey === "perfect") {
        return isDivisionMode()
            ? `${player.nickname}, Perfect Run is the best mode for chasing 100% on exact division facts.`
            : modes[modeKey].tip;
    }

    if (modeKey === "sprint") {
        const pace = getSprintPaceProfile();
        return isDivisionMode()
            ? `Think fast, ${player.firstName}, but keep each division fact exact. ${pace.label} pace gives ${pace.secondsPerQuestion} seconds per question.`
            : `${modes[modeKey].tip} ${pace.label} pace gives ${pace.secondsPerQuestion} seconds per question.`;
    }

    if (modeKey === "normal") {
        return isDivisionMode()
            ? `${player.nickname}, division normal mode is a good place to warm up with exact facts.`
            : modes[modeKey].tip;
    }

    return modes[modeKey].tip;
}

function updateOperationUi() {
    elements.operation.value = state.operation;
    elements.currentOperation.textContent = isJourneyMode()
        ? getJourneyOperationLabel(getCurrentJourneyEra())
        : operations[state.operation].label;
    elements.operationHelp.textContent = getOperationHelpText();
    elements.difficultyHelp.textContent = getDifficultyHelpText();
    elements.focusTableLabel.textContent = getFocusLabelText();
    elements.focusTableHelp.textContent = getFocusHelpText();
}

function populateDifficultyOptions() {
    for (let value = 1; value <= 12; value += 1) {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = `Level ${value} - facts up to ${value}`;
        elements.difficulty.append(option);
    }
}

function populateFocusTableOptions() {
    for (let value = 1; value <= 12; value += 1) {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = `${value}`;
        elements.focusTable.append(option);
    }
}

function setMode(modeKey) {
    state.selectedMode = modeKey;
    const mode = modes[modeKey];

    elements.modeCards.forEach((card) => {
        card.classList.toggle("active", card.dataset.mode === modeKey);
    });

    elements.currentMode.textContent = mode.label;
    updateOperationUi();
    elements.missionText.textContent = getMissionText(modeKey);
    elements.questionTip.textContent = getTipText(modeKey);
    syncModeUi();
}

function setOperation(operationKey) {
    state.operation = operationKey;

    if (!isDivisionMode() && state.focusTable === 1) {
        setFocusTable(2);
    }

    updateOperationUi();
    elements.missionText.textContent = getMissionText(state.selectedMode);
    elements.questionTip.textContent = getTipText(state.selectedMode);
    syncModeUi();
}

function setDifficulty(value) {
    state.difficulty = value;
    elements.missionText.textContent = getMissionText(state.selectedMode);
    elements.questionTip.textContent = getTipText(state.selectedMode);
    elements.difficultyHelp.textContent = getDifficultyHelpText();
    updateScopeDisplay();
}

function setFocusTable(value) {
    const minimumValue = isDivisionMode() ? 1 : 2;
    const safeValue = Math.max(minimumValue, Math.min(12, value));
    state.focusTable = safeValue;
    elements.focusTable.value = String(safeValue);
    elements.missionText.textContent = getMissionText(state.selectedMode);
    elements.questionTip.textContent = getTipText(state.selectedMode);
    elements.focusTableHelp.textContent = getFocusHelpText();
    updateScopeDisplay();
}

function normalizeQuestionCount(value) {
    if (!Number.isFinite(value) || !allowedQuestionCounts.includes(value)) {
        return allowedQuestionCounts[0];
    }

    return value;
}

function setQuestionCount(value) {
    const safeValue = normalizeQuestionCount(value);
    state.questionCount = safeValue;
    elements.questionCount.value = String(safeValue);
    elements.missionText.textContent = getMissionText(state.selectedMode);
}

function setJourneyQuestionCount(value) {
    const safeValue = allowedJourneyQuestionCounts.includes(value)
        ? value
        : allowedJourneyQuestionCounts[allowedJourneyQuestionCounts.length - 1];
    state.journeyQuestionCount = safeValue;
    elements.journeyQuestionCount.value = String(safeValue);

    if (isJourneyMode()) {
        updateJourneyUi();
    }
}

function setSprintLevel(levelKey) {
    const sprintLevel = sprintPaceBands.find((band) => band.key === levelKey) || sprintPaceBands[0];
    state.sprintLevel = sprintLevel.key;
    elements.sprintLevel.value = sprintLevel.key;
    elements.sprintLevelHelp.textContent = `${sprintLevel.label} sprint gives ${sprintLevel.secondsPerQuestion} seconds per question.`;
    elements.missionText.textContent = getMissionText(state.selectedMode);
    elements.questionTip.textContent = getTipText(state.selectedMode);
}

function updateScopeDisplay() {
    if (isJourneyMode()) {
        const era = getCurrentJourneyEra();
        elements.scopeLabel.textContent = "Era";
        elements.currentDifficulty.textContent = era.name;
        return;
    }

    if (state.selectedMode === "flash") {
        elements.scopeLabel.textContent = isDivisionMode()
            ? "Divisor"
            : isMixedMode()
                ? "Family"
                : "Table";
        elements.currentDifficulty.textContent = isDivisionMode()
            ? `÷ ${state.focusTable}`
            : isMixedMode()
                ? `${state.focusTable} mix`
                : `${state.focusTable}s`;
        return;
    }

    elements.scopeLabel.textContent = "Level";
    elements.currentDifficulty.textContent = String(state.difficulty);
}

function getSprintPaceProfile() {
    return sprintPaceBands.find((band) => band.key === state.sprintLevel) || sprintPaceBands[0];
}

function getSprintTimeLimit() {
    const pace = getSprintPaceProfile();
    return pace.secondsPerQuestion * state.questionCount;
}

function getRoundAccuracy(round) {
    const denominator = round.modeKey === "sprint"
        ? round.targetQuestions
        : round.answered;

    return denominator === 0
        ? 0
        : Math.round((round.correct / denominator) * 100);
}

function getRoundCorrectDisplay(round) {
    const denominator = round.modeKey === "sprint"
        ? round.targetQuestions
        : round.answered;

    return `${round.correct} / ${denominator}`;
}

function createJourneyState() {
    return {
        currentEraIndex: 0,
        unlockedEraIndex: 0,
        completedEraIds: [],
        eraPlayCounts: {},
        totalScore: 0,
        totalCorrect: 0,
        totalAnswered: 0
    };
}

function getJourneyDeckForEra(era) {
    const cards = Array.isArray(journeyDeckSource[era.id])
        ? journeyDeckSource[era.id]
        : [];

    if (cards.length > 0) {
        return cards;
    }

    return [
        {
            title: era.name,
            pageTitle: "",
            fact: era.facts[0],
            imageUrl: era.image
        }
    ];
}

function shuffleItems(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = randomInt(0, index);
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled;
}

function buildJourneyCardQueue(era, targetQuestions, playCount = 0) {
    const sourceCards = getJourneyDeckForEra(era);
    const queueSize = Math.max(1, Math.min(targetQuestions, sourceCards.length));
    const randomizedCards = shuffleItems(sourceCards);

    return randomizedCards
        .slice(0, queueSize)
        .map((card) => ({ ...card }));
}

function getJourneyActiveCard(round) {
    if (!round || !Array.isArray(round.journeyCards) || round.journeyCards.length === 0) {
        return null;
    }

    const index = Math.min(round.journeyCardIndex || 0, round.journeyCards.length - 1);
    return round.journeyCards[index] || null;
}

function getJourneyPreviewCard(era) {
    const previewCards = getJourneyDeckForEra(era);
    return previewCards[0] || null;
}

function escapeJourneySvgText(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function getJourneyFallbackImage(card, era) {
    if (card.fallbackImage) {
        return card.fallbackImage;
    }

    const title = escapeJourneySvgText(card.title || era.name);
    const eraName = escapeJourneySvgText(era.name);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 780" role="img" aria-label="${title}"><defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#fbf2da"/><stop offset="100%" stop-color="#d6b06d"/></linearGradient></defs><rect width="1200" height="780" fill="url(#bg)"/><circle cx="1000" cy="130" r="150" fill="rgba(255,255,255,0.25)"/><rect x="72" y="72" width="1056" height="636" rx="28" fill="rgba(28,24,19,0.12)" stroke="rgba(28,24,19,0.25)" stroke-width="4"/><text x="96" y="148" fill="#5c2f16" font-family="Georgia, serif" font-size="34" letter-spacing="4">AMERICAN ERAS</text><text x="96" y="286" fill="#1c1813" font-family="Georgia, serif" font-size="84" font-weight="700">${title}</text><text x="96" y="374" fill="#563927" font-family="Georgia, serif" font-size="40">${eraName}</text><text x="96" y="636" fill="#5c2f16" font-family="Arial, sans-serif" font-size="28">Loading a live history image for this question...</text></svg>`;
    card.fallbackImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    return card.fallbackImage;
}

function setJourneyPreviewBackground(imageUrl) {
    if (!imageUrl) {
        elements.journeyImage.style.removeProperty("--journey-photo-preview");
        return;
    }

    const safeUrl = imageUrl.replace(/"/g, "\\\"");
    elements.journeyImage.style.setProperty("--journey-photo-preview", `url("${safeUrl}")`);
}

function setJourneyImageLoading(isLoading) {
    elements.journeyImage.classList.toggle("loading-image", isLoading);
    elements.journeyImageLoader.classList.toggle("hidden", !isLoading);
}

function preloadImageSource(imageUrl) {
    return new Promise((resolve) => {
        if (!imageUrl) {
            resolve(null);
            return;
        }

        const preloadImage = new Image();
        preloadImage.onload = () => resolve(imageUrl);
        preloadImage.onerror = () => resolve(null);
        preloadImage.src = imageUrl;

        if (preloadImage.complete && preloadImage.naturalWidth > 0) {
            resolve(imageUrl);
        }
    });
}

function applyJourneyPhoto(card, era) {
    const fallbackImage = getJourneyFallbackImage(card, era);
    const imageUrl = card.imageUrl || era.image || fallbackImage;
    elements.journeyEraPhoto.src = imageUrl;
    elements.journeyEraPhoto.alt = `${card.title || era.name} from ${era.name}`;
    setJourneyPreviewBackground(imageUrl);
}

function isCurrentJourneyCard(roundId, card) {
    return Boolean(
        state.round
        && state.round.modeKey === "eras"
        && state.round.roundId === roundId
        && getJourneyActiveCard(state.round) === card
    );
}

async function loadJourneyCardImage(card, era, roundId, loadToken) {
    if (!card || card.imageUrl) {
        if (loadToken === state.journeyImageLoadToken) {
            setJourneyImageLoading(false);
        }
        return;
    }

    const cacheKey = card.pageTitle || card.title;

    if (journeyImageCache.has(cacheKey)) {
        const cachedImageUrl = await preloadImageSource(journeyImageCache.get(cacheKey));
        if (!cachedImageUrl) {
            if (loadToken === state.journeyImageLoadToken) {
                setJourneyImageLoading(false);
            }
            return;
        }

        card.imageUrl = cachedImageUrl;
        if (loadToken === state.journeyImageLoadToken && (roundId == null || isCurrentJourneyCard(roundId, card))) {
            applyJourneyPhoto(card, era);
            setJourneyImageLoading(false);
        }
        return;
    }

    if (!card.pageTitle) {
        if (loadToken === state.journeyImageLoadToken) {
            setJourneyImageLoading(false);
        }
        return;
    }

    let request = journeyImageRequests.get(cacheKey);

    if (!request) {
        const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=thumbnail|original&pithumbsize=1200&format=json&origin=*&titles=${encodeURIComponent(card.pageTitle)}`;
        request = fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Journey image request failed.");
                }

                return response.json();
            })
            .then((payload) => {
                const pages = payload && payload.query && payload.query.pages
                    ? Object.values(payload.query.pages)
                    : [];
                const match = pages.find((page) => page && (page.original || page.thumbnail));
                return match
                    ? (match.original && match.original.source) || (match.thumbnail && match.thumbnail.source) || null
                    : null;
            })
            .catch(() => null)
            .finally(() => {
                journeyImageRequests.delete(cacheKey);
            });
        journeyImageRequests.set(cacheKey, request);
    }

    const imageUrl = await request;

    if (!imageUrl) {
        if (loadToken === state.journeyImageLoadToken) {
            setJourneyImageLoading(false);
        }
        return;
    }

    const readyImageUrl = await preloadImageSource(imageUrl);

    if (!readyImageUrl) {
        if (loadToken === state.journeyImageLoadToken) {
            setJourneyImageLoading(false);
        }
        return;
    }

    journeyImageCache.set(cacheKey, readyImageUrl);
    card.imageUrl = readyImageUrl;

    if (loadToken === state.journeyImageLoadToken && (roundId == null || isCurrentJourneyCard(roundId, card))) {
        applyJourneyPhoto(card, era);
        setJourneyImageLoading(false);
    }
}

function updateJourneyPhoto(card, era, roundId = null) {
    const loadToken = state.journeyImageLoadToken + 1;
    state.journeyImageLoadToken = loadToken;

    if (!card) {
        elements.journeyEraPhoto.src = era.image;
        elements.journeyEraPhoto.alt = `${era.name} historical image`;
        setJourneyPreviewBackground(era.image);
        setJourneyImageLoading(false);
        return;
    }

    if (card.imageUrl) {
        applyJourneyPhoto(card, era);
        setJourneyImageLoading(false);
        return;
    }

    if (!elements.journeyEraPhoto.src) {
        const fallbackImage = getJourneyFallbackImage(card, era);
        elements.journeyEraPhoto.src = fallbackImage;
        elements.journeyEraPhoto.alt = `${card.title || era.name} from ${era.name}`;
        setJourneyPreviewBackground(fallbackImage);
    }

    setJourneyImageLoading(true);
    void loadJourneyCardImage(card, era, roundId, loadToken);
}

function isJourneyImageModalOpen() {
    return !elements.journeyImageModal.classList.contains("hidden");
}

function closeJourneyImageModal() {
    elements.journeyImageModal.classList.add("hidden");
    elements.journeyImageModalPhoto.src = "";
    elements.journeyImageModalPhoto.alt = "";
    if (elements.resultModal.classList.contains("hidden")) {
        document.body.classList.remove("modal-open");
    }
}

function openJourneyImageModal() {
    if (!isJourneyMode()) {
        return;
    }

    const era = state.round && state.round.modeKey === "eras"
        ? eras.find((entry) => entry.id === state.round.eraId) || getCurrentJourneyEra()
        : getCurrentJourneyEra();
    const card = state.round && state.round.modeKey === "eras"
        ? getJourneyActiveCard(state.round)
        : getJourneyPreviewCard(era);

    if (!card) {
        return;
    }

    const imageUrl = elements.journeyEraPhoto.currentSrc || elements.journeyEraPhoto.src || getJourneyFallbackImage(card, era);
    elements.journeyImageModalPhoto.src = imageUrl;
    elements.journeyImageModalPhoto.alt = `${card.title || era.name} from ${era.name}`;
    elements.journeyImageModalTitle.textContent = card.title || era.name;
    elements.journeyImageModalEra.textContent = era.name;
    elements.journeyImageModalFact.textContent = card.fact || getJourneyFact(era, state.round || { correct: 1 });
    elements.journeyImageModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
    elements.closeJourneyImageModal.focus();
}

function getJourneyTimeLimit(era) {
    const totalQuestions = state.journeyQuestionCount;
    return era.secondsPerQuestion
        ? era.secondsPerQuestion * totalQuestions
        : null;
}

function clearJourneyFact() {
    if (state.journeyFactId) {
        window.clearTimeout(state.journeyFactId);
        state.journeyFactId = null;
    }

    elements.journeyFactOverlay.classList.add("hidden");
    elements.journeyImage.classList.remove("fact-visible", "celebrate", "mistake");
    elements.journeyContinueHint.classList.add("hidden");
}

function showJourneyFact(text, isFinalQuestion) {
    clearJourneyFact();
    elements.journeyFactText.textContent = text;
    elements.journeyFactOverlay.classList.remove("hidden");
    elements.journeyContinueHint.textContent = isFinalQuestion
        ? "Press any key to finish the era."
        : "Press any key for the next challenge.";
    elements.journeyContinueHint.classList.remove("hidden");
    elements.journeyImage.classList.add("fact-visible", "celebrate");
}

function applyJourneyDisplay(era) {
    elements.scopeLabel.textContent = "Era";
    elements.currentDifficulty.textContent = era.name;
    elements.currentOperation.textContent = getJourneyOperationLabel(era);
    elements.missionText.textContent = getJourneyMissionText(era);
    elements.questionTip.textContent = getJourneyTipText(era);
}

function scheduleJourneyDisplayRefresh() {
    window.setTimeout(() => {
        if (!state.round || state.round.modeKey !== "eras") {
            return;
        }

        const era = eras.find((entry) => entry.id === state.round.eraId) || getCurrentJourneyEra();
        applyJourneyDisplay(era);
    }, 0);
}

function pulseJourneyImage(tone) {
    elements.journeyImage.classList.remove("celebrate", "mistake");

    if (tone !== "good" && tone !== "bad") {
        return;
    }

    void elements.journeyImage.offsetWidth;
    elements.journeyImage.classList.add(tone === "good" ? "celebrate" : "mistake");
    window.setTimeout(() => {
        elements.journeyImage.classList.remove("celebrate", "mistake");
    }, 700);
}

function animateJourneyPanelSwap(variant = "advance") {
    if (!state.round || state.round.modeKey !== "eras") {
        return Promise.resolve(false);
    }

    if (state.journeyPanelTransitioning) {
        return Promise.resolve(false);
    }

    const animationClass = variant === "skip"
        ? "journey-panel-flip-skip"
        : "journey-panel-flip-advance";
    const nodes = [elements.questionCard, elements.journeyCard].filter(Boolean);

    state.journeyPanelTransitioning = true;
    nodes.forEach((node) => {
        node.classList.remove("journey-panel-flip-advance", "journey-panel-flip-skip");
        void node.offsetWidth;
        node.classList.add(animationClass);
    });

    return new Promise((resolve) => {
        window.setTimeout(() => {
            nodes.forEach((node) => {
                node.classList.remove("journey-panel-flip-advance", "journey-panel-flip-skip");
            });
            state.journeyPanelTransitioning = false;
            resolve(true);
        }, 540);
    });
}

function updateJourneyUi() {
    const showJourneyCard = isJourneyMode();
    elements.journeyCard.classList.toggle("hidden", !showJourneyCard);

    if (!showJourneyCard) {
        delete document.body.dataset.journeyEra;
        return;
    }

    const era = state.round && state.round.modeKey === "eras"
        ? eras.find((entry) => entry.id === state.round.eraId) || getCurrentJourneyEra()
        : getCurrentJourneyEra();
    const eraIndex = eras.findIndex((entry) => entry.id === era.id);
    const answered = state.round && state.round.modeKey === "eras"
        ? state.round.answered
        : 0;
    const targetQuestions = state.round && state.round.modeKey === "eras"
        ? state.round.targetQuestions
        : state.journeyQuestionCount;
    const progressPercent = targetQuestions === 0
        ? 0
        : (answered / targetQuestions) * 100;
    const journeyCard = state.round && state.round.modeKey === "eras"
        ? getJourneyActiveCard(state.round)
        : getJourneyPreviewCard(era);

    document.body.dataset.journeyEra = era.id;
    elements.journeyImage.dataset.era = era.id;
    updateJourneyPhoto(
        journeyCard,
        era,
        state.round && state.round.modeKey === "eras" ? state.round.roundId : null
    );
    applyJourneyDisplay(era);
    elements.journeyEraStamp.textContent = journeyCard && journeyCard.title
        ? journeyCard.title
        : era.name;
    elements.journeyEraName.textContent = era.name;
    elements.journeyEraBadge.textContent = `Era ${eraIndex + 1} of ${eras.length}`;
    elements.journeyEraDescription.textContent = journeyCard && journeyCard.title
        ? `${era.description} Today's history card: ${journeyCard.title}.`
        : era.description;
    elements.journeyEraProgressText.textContent = `${answered} / ${targetQuestions}`;
    elements.journeyEraProgressBar.style.width = `${Math.min(progressPercent, 100)}%`;
}

function updateTimerUi() {
    if (!state.round || !state.round.totalTime) {
        elements.timerValue.textContent = "Free";
        elements.timerPace.textContent = "Free pace";
        elements.timerProgress.style.width = "0%";
        elements.timerPill.classList.remove("sprint-active", "warning", "critical");
        return;
    }

    const totalTime = state.round.totalTime || 1;
    const percentRemaining = Math.max(0, (state.round.remainingTime / totalTime) * 100);
    const pace = state.round.paceProfile || getSprintPaceProfile();
    const timerPaused = (state.round.modeKey === "eras" && state.awaitingJourneyContinue) || isJourneyImageModalOpen();

    elements.timerValue.textContent = `${state.round.remainingTime}s`;
    elements.timerPace.textContent = timerPaused
        ? "Paused for fact reading"
        : `${pace.label} · ${pace.secondsPerQuestion}s each`;
    elements.timerProgress.style.width = `${percentRemaining}%`;
    elements.timerPill.classList.add("sprint-active");
    elements.timerPill.classList.toggle("warning", percentRemaining <= 40 && percentRemaining > 20);
    elements.timerPill.classList.toggle("critical", percentRemaining <= 20);
}

function formatQuestionBase(question) {
    if (question.operation === "division") {
        return `${question.dividend} ÷ ${question.divisor}`;
    }

    return `${question.left} × ${question.right}`;
}

function formatSolvedQuestion(question) {
    return `${formatQuestionBase(question)} = ${question.answer}`;
}

function clearCelebration() {
    if (state.celebrationId) {
        window.clearTimeout(state.celebrationId);
        state.celebrationId = null;
    }

    elements.resultCelebration.innerHTML = "";
    elements.resultCelebration.className = "result-celebration hidden";
}

function playCelebration(type) {
    clearCelebration();

    if (type !== "perfect" && type !== "excellent") {
        return;
    }

    const tokens = type === "perfect"
        ? [
            { label: "STAR", x: "-180%", y: "-150%", rotate: "-18deg", delay: "0ms" },
            { label: "STAR", x: "40%", y: "-190%", rotate: "16deg", delay: "80ms" },
            { label: "STAR", x: "-240%", y: "10%", rotate: "-26deg", delay: "160ms" },
            { label: "STAR", x: "140%", y: "-30%", rotate: "22deg", delay: "120ms" },
            { label: "STAR", x: "-100%", y: "120%", rotate: "-14deg", delay: "220ms" },
            { label: "STAR", x: "90%", y: "130%", rotate: "18deg", delay: "260ms" }
        ]
        : [
            { label: "YAY", x: "-120%", y: "-130%", rotate: "-10deg", delay: "0ms" },
            { label: "GO", x: "70%", y: "-140%", rotate: "12deg", delay: "90ms" },
            { label: "NICE", x: "-150%", y: "70%", rotate: "-18deg", delay: "160ms" },
            { label: "WOW", x: "110%", y: "80%", rotate: "15deg", delay: "220ms" }
        ];

    elements.resultCelebration.className = `result-celebration ${type} active`;
    tokens.forEach((token) => {
        const node = document.createElement("span");
        node.className = "burst-token";
        node.textContent = token.label;
        node.style.setProperty("--burst-x", token.x);
        node.style.setProperty("--burst-y", token.y);
        node.style.setProperty("--burst-rotate", token.rotate);
        node.style.animationDelay = token.delay;
        elements.resultCelebration.append(node);
    });
}

function closeResultDialog() {
    clearCelebration();
    state.pendingSprintLevelUp = null;
    state.pendingJourneyAction = null;
    elements.resultPlayAgain.textContent = "Play Again";
    elements.resultModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
}

function setResultStats(stats) {
    stats.forEach((stat, index) => {
        elements.resultStatLabels[index].textContent = stat.label;
        elements.resultStatValues[index].textContent = stat.value;
    });
}

function openResultDialog(result) {
    elements.resultDialog.className = `result-dialog ${result.tone}`;
    elements.resultRatingChip.textContent = result.badge;
    elements.resultRatingChip.className = `result-rating-chip ${result.tone}`;
    elements.resultPraise.textContent = result.praise;
    elements.resultTitle.textContent = result.heading;
    elements.resultMessage.textContent = result.message;
    elements.resultSummary.textContent = result.summary;
    elements.resultScoreLabel.textContent = result.scoreLabel;
    elements.resultScoreValue.textContent = result.scoreValue;
    elements.resultScoreNote.textContent = result.scoreNote;
    elements.resultAwardNote.textContent = result.awardNote;
    state.pendingSprintLevelUp = result.nextSprintLevel || null;
    state.pendingJourneyAction = result.journeyAction || null;
    elements.resultPlayAgain.textContent = result.primaryLabel || (result.nextSprintLevel ? "Level Up" : "Play Again");
    setResultStats(result.stats);
    elements.resultModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
    playCelebration(result.celebration);
    elements.resultPlayAgain.focus();
}

function getRoundSpeedText(round) {
    if (round.modeKey === "flash") {
        return "Review deck";
    }

    if (!modes[round.modeKey].timed) {
        return "Free pace";
    }

    const usedSeconds = modes[round.modeKey].timeLimit - round.remainingTime;
    return `${Math.max(0, usedSeconds)}s used`;
}

function getNextSprintLevel() {
    const currentIndex = sprintPaceBands.findIndex((band) => band.key === state.sprintLevel);

    if (currentIndex === -1 || currentIndex === sprintPaceBands.length - 1) {
        return null;
    }

    return sprintPaceBands[currentIndex + 1];
}

function getJourneyFact(era, round) {
    const activeCard = getJourneyActiveCard(round);

    if (activeCard && activeCard.fact) {
        return activeCard.fact;
    }

    const factIndex = Math.max(0, round.correct - 1) % era.facts.length;
    return era.facts[factIndex];
}

function getJourneyTotalAccuracy() {
    if (!state.journey || state.journey.totalAnswered === 0) {
        return 0;
    }

    return Math.round((state.journey.totalCorrect / state.journey.totalAnswered) * 100);
}

function getJourneyResultDialogData(round) {
    const era = eras.find((entry) => entry.id === round.eraId) || getCurrentJourneyEra();
    const accuracy = getRoundAccuracy(round);
    const passed = accuracy >= era.passMark;
    const isFinalEra = state.journey && state.journey.currentEraIndex === eras.length - 1;
    const nextEra = !isFinalEra ? eras[state.journey.currentEraIndex + 1] : null;

    if (!passed) {
        return {
            tone: "improve",
            badge: "Replay Era",
            praise: "Try the era again!",
            heading: `Replay ${era.name}`,
            message: `${player.nickname}, you need ${era.passMark}% to pass ${era.name}. This round finished at ${accuracy}%.`,
            summary: `Replay ${era.name} to strengthen the math and unlock the next stop in the journey.`,
            scoreLabel: "Journey Score",
            scoreValue: String(round.score),
            scoreNote: `${accuracy}% Era Accuracy`,
            awardNote: `Pass Mark: ${era.passMark}%`,
            primaryLabel: "Replay Era",
            journeyAction: "retry-era",
            celebration: null,
            stats: [
                { label: "Era", value: era.name },
                { label: "Best Streak", value: String(round.bestStreak) }
            ]
        };
    }

    if (isFinalEra) {
        return {
            tone: accuracy === 100 ? "perfect" : "excellent",
            badge: "History Master",
            praise: "Journey complete!",
            heading: `${player.nickname}'s American Eras Victory`,
            message: `${player.nickname}, you completed every era and finished the full history journey with ${accuracy}% in the final challenge.`,
            summary: `${player.firstName} cleared all ${eras.length} eras and proved mastery from Jamestown to the Space Race.`,
            scoreLabel: "Journey Score",
            scoreValue: String(round.score),
            scoreNote: `${getJourneyTotalAccuracy()}% Journey Accuracy`,
            awardNote: "All Eras Completed",
            primaryLabel: "Start Journey Again",
            journeyAction: "restart-journey",
            celebration: accuracy === 100 ? "perfect" : "excellent",
            stats: [
                { label: "Eras Cleared", value: `${eras.length} / ${eras.length}` },
                { label: "Final Era", value: era.name }
            ]
        };
    }

    return {
        tone: accuracy === 100 ? "perfect" : "excellent",
        badge: "Era Complete",
        praise: "Next era unlocked!",
        heading: `${era.name} Complete`,
        message: `${player.nickname}, you passed ${era.name} with ${accuracy}% and unlocked ${nextEra.name}.`,
        summary: `Era cleared. ${nextEra.name} is now ready for the next math journey challenge.`,
        scoreLabel: "Journey Score",
        scoreValue: String(round.score),
        scoreNote: `${accuracy}% Era Accuracy`,
        awardNote: `${nextEra.name} Unlocked`,
        primaryLabel: "Next Era",
        journeyAction: "next-era",
        celebration: accuracy === 100 ? "perfect" : "excellent",
        stats: [
            { label: "Era Accuracy", value: `${accuracy}%` },
            { label: "Unlocked", value: nextEra.name }
        ]
    };
}

function getResultDialogData(round, options = {}) {
    const note = options.message;

    if (round.modeKey === "eras") {
        return getJourneyResultDialogData(round);
    }

    if (round.modeKey === "flash") {
        return {
            tone: "good",
            badge: "Review Complete",
            praise: "Nice review!",
            heading: `${player.nickname}'s Flash Cards Complete`,
            message: note || `${player.nickname}, great job reviewing ${getFlashFamilyText()}.`,
            summary: `${player.firstName} reviewed ${round.answered} flash cards for ${getFlashFamilyText()}.`,
            scoreLabel: "Cards Reviewed",
            scoreValue: String(round.answered),
            scoreNote: getFlashFamilyText(),
            awardNote: state.answersOn ? "Answers were on" : "Answers were hidden",
            celebration: null,
            stats: [
                { label: "Deck", value: getFlashFamilyText() },
                { label: "Cards", value: `${round.answered} / ${round.targetQuestions}` }
            ]
        };
    }

    const accuracy = getRoundAccuracy(round);
    const rating = getRoundRating(accuracy);
    const nextSprintLevel = round.modeKey === "sprint" && accuracy >= 90
        ? getNextSprintLevel()
        : null;

    return {
        tone: rating.key,
        badge: rating.key === "perfect"
            ? "Perfect Star"
            : rating.key === "excellent"
                ? "Excellent"
                : rating.key === "good"
                    ? "Good"
                    : "Let's Improve",
        praise: rating.key === "perfect"
            ? "Perfect!"
            : rating.key === "excellent"
                ? "Excellent!"
                : rating.key === "good"
                    ? "Good job!"
                    : "Keep going!",
        heading: rating.heading,
        message: note || rating.message,
        summary: rating.summary,
        scoreLabel: "Final Score",
        scoreValue: String(round.score),
        scoreNote: `${accuracy}% Accuracy`,
        awardNote: rating.key === "perfect"
            ? "Perfect Star Unlocked"
            : rating.key === "excellent"
                ? "Excellent Finish"
                : rating.key === "good"
                    ? "Strong Round"
                    : "Next Goal: 85%+",
        nextSprintLevel: nextSprintLevel ? nextSprintLevel.key : null,
        celebration: rating.key === "perfect" || rating.key === "excellent" ? rating.key : null,
        stats: [
            { label: "Correct", value: getRoundCorrectDisplay(round) },
            { label: "Best Streak", value: String(round.bestStreak) }
        ]
    };
}

function getRoundRating(accuracy) {
    if (accuracy === 100) {
        return {
            key: "perfect",
            heading: `${player.nickname}'s Perfect Score!`,
            message: `${player.nickname}, 100% accuracy. You earned the Perfect Star.`,
            summary: `Rating: Perfect. ${player.firstName} got every answer right and unlocked the Perfect Star.`
        };
    }

    if (accuracy > 90) {
        return {
            key: "excellent",
            heading: `${player.nickname}'s Excellent Run`,
            message: `${player.nickname}, excellent work at ${accuracy}%. Mild celebration unlocked.`,
            summary: `Rating: Excellent. ${player.firstName} was above 90% and finished strong.`
        };
    }

    if (accuracy > 85) {
        return {
            key: "good",
            heading: `${player.nickname}'s Good Run`,
            message: `${player.firstName}, good job. You finished at ${accuracy}%.`,
            summary: `Rating: Good. ${player.firstName} is close to excellent with a few cleaner answers.`
        };
    }

    return {
        key: "improve",
        heading: `${player.nickname}'s Next Practice Round`,
        message: `${player.firstName}, let's improve. You finished at ${accuracy}%.`,
        summary: `Rating: Let's improve. Another round will help lock the facts in.`
    };
}

function shouldShowFlashAnswer() {
    return Boolean(
        state.selectedMode === "flash"
        && state.round
        && state.round.question
        && (state.answersOn || state.round.question.revealed)
    );
}

function handleJourneyAnswer(guess) {
    const era = eras.find((entry) => entry.id === state.round.eraId) || getCurrentJourneyEra();
    const isCorrect = guess === state.round.question.answer;

    if (isCorrect) {
        state.round.answered += 1;
        state.round.correct += 1;
        state.round.streak += 1;
        state.round.bestStreak = Math.max(state.round.bestStreak, state.round.streak);
        state.round.score += 120 + (state.round.streak - 1) * 25;
        state.journey.totalScore = state.round.score;
        state.journey.totalAnswered += 1;
        state.journey.totalCorrect += 1;

        showFeedback(`Correct, ${player.nickname}. ${formatSolvedQuestion(state.round.question)}. Press any key when you are ready to continue.`, "good");
        showJourneyFact(getJourneyFact(era, state.round), state.round.answered >= state.round.targetQuestions);
        pulseJourneyImage("good");
        updateScoreboard();
        updateProgress();
        updateBadges();
        updateJourneyUi();
        elements.answerInput.value = "";
        elements.answerInput.disabled = true;
        elements.submitAnswer.disabled = true;
        state.awaitingJourneyContinue = true;
        return;
    }

    if (state.round.questionAttempts === 0) {
        state.round.questionAttempts = 1;
        showFeedback(`Try once more, ${player.nickname}. You get one more chance on this question.`, "neutral");
        pulseJourneyImage("bad");
        elements.answerInput.value = "";
        elements.answerInput.focus();
        return;
    }

    state.round.answered += 1;
    state.round.streak = 0;
    state.round.score = Math.max(0, state.round.score - 30);
    state.journey.totalScore = state.round.score;
    state.journey.totalAnswered += 1;
    clearJourneyFact();
    pulseJourneyImage("bad");
    showFeedback(`Not quite, ${player.firstName}. ${formatSolvedQuestion(state.round.question)}.`, "bad");
    updateScoreboard();
    updateProgress();
    updateBadges();
    updateJourneyUi();
    elements.answerInput.value = "";
    elements.answerInput.disabled = true;
    elements.submitAnswer.disabled = true;

    window.setTimeout(async () => {
        if (!state.round || state.round.over || state.round.modeKey !== "eras") {
            return;
        }

        if (state.round.answered >= state.round.targetQuestions) {
            finishRound();
            return;
        }

        await animateJourneyPanelSwap("skip");
        if (!state.round || state.round.over || state.round.modeKey !== "eras") {
            return;
        }

        elements.answerInput.disabled = false;
        elements.submitAnswer.disabled = false;
        nextQuestion();
        elements.answerInput.focus();
    }, 1400);
}

async function continueJourneyAfterFact(event) {
    if (isJourneyImageModalOpen()) {
        return;
    }

    if (!state.round || state.round.over || state.round.modeKey !== "eras" || !state.awaitingJourneyContinue || state.journeyPanelTransitioning) {
        return;
    }

    if (event) {
        event.preventDefault();
        event.stopPropagation();
        state.ignoreJourneyEmptySubmit = event.key === "Enter";
    }

    state.awaitingJourneyContinue = false;
    clearJourneyFact();

    if (state.round.answered >= state.round.targetQuestions) {
        finishRound();
        return;
    }

    await animateJourneyPanelSwap("advance");
    if (!state.round || state.round.over || state.round.modeKey !== "eras") {
        return;
    }

    elements.answerInput.disabled = false;
    elements.submitAnswer.disabled = false;
    nextQuestion();
    elements.answerInput.focus();
}

function updateFlashAnswer() {
    if (shouldShowFlashAnswer()) {
        elements.flashAnswer.textContent = `Answer: ${formatSolvedQuestion(state.round.question)}`;
        elements.flashAnswer.classList.remove("hidden");
        return;
    }

    elements.flashAnswer.classList.add("hidden");
}

function syncModeUi() {
    const isFlashMode = state.selectedMode === "flash";
    const isSprintMode = state.selectedMode === "sprint";
    const isJourney = state.selectedMode === "eras";
    elements.focusTableGroup.classList.toggle("hidden", !isFlashMode);
    elements.focusTableHelp.classList.toggle("hidden", !isFlashMode);
    elements.sprintLevelGroup.classList.toggle("hidden", !isSprintMode);
    elements.sprintLevelHelp.classList.toggle("hidden", !isSprintMode);
    elements.questionCountCard.classList.toggle("hidden", isJourney);
    elements.journeyQuestionCountCard.classList.toggle("hidden", !isJourney);
    elements.answerForm.classList.toggle("hidden", isFlashMode);
    elements.flashControls.classList.toggle("hidden", !isFlashMode);
    elements.questionTip.classList.toggle("hidden", false);
    elements.missionCard.classList.toggle("hidden", false);
    elements.scopeStatusPill.classList.toggle("hidden", false);
    updateScopeDisplay();
    updateFlashAnswer();
    updateJourneyUi();
    setRoundControls(Boolean(state.round && !state.round.over));
}

function getQuestionHistory(round) {
    if (!round) {
        return [];
    }

    if (!Array.isArray(round.recentQuestionKeys)) {
        round.recentQuestionKeys = [];
    }

    return round.recentQuestionKeys;
}

function buildOperationBag(round, operationPool) {
    if (!round) {
        return shuffleItems(operationPool);
    }

    const uniqueOperations = Array.from(new Set(operationPool));
    round.operationBag = shuffleItems(uniqueOperations);
    return round.operationBag;
}

function getNextOperationKey(operationPool) {
    if (operationPool.length <= 1) {
        return operationPool[0];
    }

    const round = state.round;

    if (!round) {
        return shuffleItems(operationPool)[0];
    }

    if (!Array.isArray(round.operationBag) || round.operationBag.length === 0) {
        buildOperationBag(round, operationPool);
    }

    return round.operationBag.shift();
}

function pickQuestionOperand(maxValue, options = {}) {
    const { avoidOne = false, discourageTen = false } = options;
    const safeMax = Math.max(1, maxValue);
    const minValue = avoidOne && safeMax > 1 ? 2 : 1;
    const candidates = [];

    for (let value = minValue; value <= safeMax; value += 1) {
        let weight = 1;

        if (discourageTen && value === 10 && safeMax >= 10 && minValue < 10) {
            weight = 0.35;
        }

        if (avoidOne && value === 1) {
            weight = 0;
        }

        candidates.push({ value, weight });
    }

    const totalWeight = candidates.reduce((sum, candidate) => sum + candidate.weight, 0);

    if (totalWeight <= 0) {
        return safeMax;
    }

    let threshold = Math.random() * totalWeight;

    for (const candidate of candidates) {
        threshold -= candidate.weight;
        if (threshold <= 0) {
            return candidate.value;
        }
    }

    return candidates[candidates.length - 1].value;
}

function buildQuestionKey(question) {
    if (question.operation === "division") {
        return `division:${question.dividend}:${question.divisor}`;
    }

    return `multiplication:${question.left}:${question.right}`;
}

function generateQuestionCandidate(modeKey, operationKey, config = {}) {
    const maxFactor = config.maxFactor || state.difficulty;
    const maxRight = config.maxRight || 12;
    const multiplicationRightMax = Math.min(12, maxRight);

    if (operationKey === "division") {
        const divisor = modeKey === "flash"
            ? state.focusTable
            : pickQuestionOperand(maxFactor, { discourageTen: true });
        const divisionQuotientMax = Math.max(1, Math.min(12, maxRight, Math.floor(144 / divisor)));
        const quotient = pickQuestionOperand(divisionQuotientMax, { discourageTen: true });

        return {
            operation: "division",
            dividend: divisor * quotient,
            divisor,
            answer: quotient,
            revealed: state.answersOn
        };
    }

    const left = modeKey === "flash"
        ? Math.max(2, state.focusTable)
        : pickQuestionOperand(maxFactor, { avoidOne: true, discourageTen: true });
    const right = pickQuestionOperand(multiplicationRightMax, { avoidOne: true, discourageTen: true });

    return {
        operation: "multiplication",
        left,
        right,
        answer: left * right,
        revealed: state.answersOn
    };
}

function generateQuestion(modeKey, config = {}) {
    const operationPool = config.operations || (isMixedMode()
        ? ["multiplication", "division"]
        : [state.operation]);
    const recentQuestionKeys = getQuestionHistory(state.round);
    let question = null;

    for (let attempt = 0; attempt < 10; attempt += 1) {
        const operationKey = getNextOperationKey(operationPool);
        const candidate = generateQuestionCandidate(modeKey, operationKey, config);
        const candidateKey = buildQuestionKey(candidate);

        question = candidate;

        if (!recentQuestionKeys.includes(candidateKey)) {
            recentQuestionKeys.push(candidateKey);
            if (recentQuestionKeys.length > 8) {
                recentQuestionKeys.shift();
            }
            return candidate;
        }
    }

    if (question) {
        recentQuestionKeys.push(buildQuestionKey(question));
        if (recentQuestionKeys.length > 8) {
            recentQuestionKeys.shift();
        }
    }

    return question;
}

function resetGameView() {
    stopTimer();
    state.round = null;
    state.journey = null;
    state.awaitingJourneyContinue = false;
    closeResultDialog();
    clearCelebration();
    clearJourneyFact();
    elements.questionText.textContent = "Press Start Sky's Game to begin.";
    elements.questionTip.textContent = getTipText(state.selectedMode);
    elements.summaryText.textContent = "No Sky round played yet.";
    elements.answerInput.value = "";
    elements.answerInput.disabled = true;
    elements.submitAnswer.disabled = true;
    elements.showAnswer.disabled = true;
    elements.nextCard.disabled = true;
    elements.flashAnswer.classList.add("hidden");
    elements.accuracyValue.textContent = "--";
    elements.timerValue.textContent = "--";
    elements.timerPace.textContent = "Free pace";
    elements.timerProgress.style.width = "0%";
    elements.timerPill.classList.remove("sprint-active", "warning", "critical");
    showFeedback("Sky, ready for your first badge?", "neutral");
    updateProgress();
    updateScoreboard();
    updateBadges();
    syncModeUi();
}

function returnToSetup() {
    resetGameView();
    showScreen("setup");
}

function startRound() {
    stopTimer();
    closeResultDialog();

    if (isJourneyMode()) {
        if (!state.journey) {
            state.journey = createJourneyState();
        }

        const era = getCurrentJourneyEra();
        const timeLimit = getJourneyTimeLimit(era);
        const playCount = state.journey.eraPlayCounts[era.id] || 0;
        const journeyCards = buildJourneyCardQueue(era, state.journeyQuestionCount, playCount);
        state.journey.eraPlayCounts[era.id] = playCount + 1;
        state.pendingJourneyAction = null;
        state.awaitingJourneyContinue = false;
        state.round = {
            modeKey: state.selectedMode,
            targetQuestions: state.journeyQuestionCount,
            answered: 0,
            correct: 0,
            streak: 0,
            bestStreak: 0,
            score: state.journey.totalScore,
            question: null,
            over: false,
            remainingTime: timeLimit,
            totalTime: timeLimit,
            paceProfile: era.secondsPerQuestion
                ? { label: era.paceLabel, secondsPerQuestion: era.secondsPerQuestion }
                : null,
            eraId: era.id,
            passMark: era.passMark,
            maxFactor: era.maxFactor,
            maxRight: era.maxRight,
            questionAttempts: 0,
            journeyCards,
            journeyCardIndex: 0,
            roundId: `${Date.now()}-${Math.random()}`
        };

        elements.currentMode.textContent = modes.eras.label;
        updateScoreboard();
        updateProgress();
        updateBadges();
        updateJourneyUi();
        setRoundControls(true);
        showScreen("game");
        elements.summaryText.textContent = `${era.name} is ready. Reach ${era.passMark}% to unlock the next era.`;
        elements.feedbackBanner.textContent = `${era.name} begins now, ${player.nickname}. Answer correctly to reveal history facts.`;
        elements.feedbackBanner.className = "feedback-banner neutral";
        elements.answerInput.disabled = false;
        elements.submitAnswer.disabled = false;
        elements.showAnswer.disabled = true;
        elements.nextCard.disabled = true;
        elements.answerInput.value = "";
        elements.answersOn.checked = false;
        clearJourneyFact();

        if (timeLimit) {
            updateTimerUi();
            startTimer();
        } else {
            updateTimerUi();
        }

        nextQuestion();
        document.querySelector("#scope-label").textContent = "Era";
        document.querySelector("#current-difficulty").textContent = era.name;
        document.querySelector("#current-operation").textContent = getJourneyOperationLabel(era);
        document.querySelector("#mission-text").textContent = `${player.nickname}, clear ${era.name} with ${state.journeyQuestionCount} ${getJourneyOperationLabel(era)} questions and reach ${era.passMark}% to unlock the next stop in history.`;
        document.querySelector("#question-tip").textContent = era.secondsPerQuestion
            ? `${player.nickname}, every correct answer unlocks a history fact from ${era.name.toLowerCase()}. ${era.paceLabel} gives ${era.secondsPerQuestion} seconds per question.`
            : `${player.nickname}, every correct answer unlocks a history fact from ${era.name.toLowerCase()}. Take your time and build accuracy before moving on.`;
        scheduleJourneyDisplayRefresh();
        elements.answerInput.focus();
        return;
    }

    const mode = modes[state.selectedMode];
    const sprintTimeLimit = mode.timed ? getSprintTimeLimit() : null;
    const sprintPaceProfile = mode.timed ? getSprintPaceProfile() : null;
    state.round = {
        modeKey: state.selectedMode,
        targetQuestions: state.questionCount,
        answered: 0,
        correct: 0,
        streak: 0,
        bestStreak: 0,
        score: 0,
        question: null,
        over: false,
        remainingTime: sprintTimeLimit,
        totalTime: sprintTimeLimit,
        paceProfile: sprintPaceProfile
    };

    updateScoreboard();
    updateProgress();
    updateBadges();
    setRoundControls(true);
    showScreen("game");
    elements.summaryText.textContent = state.selectedMode === "flash"
        ? `${player.nickname}'s flash cards are ready for ${getFlashFamilyText()}.`
        : `${player.nickname}'s round started. Chase the perfect score.`;
    elements.feedbackBanner.textContent = state.selectedMode === "flash"
        ? `Flash card deck ready, ${player.nickname}. Flip the card when you want the answer.`
        : `Let’s go, ${player.nickname}. First question coming up.`;
    elements.feedbackBanner.className = "feedback-banner neutral";
    elements.answerInput.disabled = state.selectedMode === "flash";
    elements.submitAnswer.disabled = state.selectedMode === "flash";
    elements.showAnswer.disabled = state.selectedMode !== "flash";
    elements.nextCard.disabled = state.selectedMode !== "flash";
    elements.answerInput.value = "";
    elements.answersOn.checked = state.answersOn;

    if (mode.timed) {
        updateTimerUi();
        startTimer();
    } else {
        updateTimerUi();
    }

    nextQuestion();

    if (state.selectedMode !== "flash") {
        elements.answerInput.focus();
    }
}

function nextQuestion() {
    if (!state.round || state.round.over) {
        return;
    }

    if (state.round.answered >= state.round.targetQuestions) {
        finishRound();
        return;
    }

    state.round.questionAttempts = 0;
    if (state.round.modeKey === "eras") {
        state.round.journeyCardIndex = state.round.answered;
    }
    state.round.question = state.round.modeKey === "eras"
        ? generateQuestion(state.round.modeKey, {
            operations: getJourneyOperations(getCurrentJourneyEra()),
            maxFactor: state.round.maxFactor,
            maxRight: state.round.maxRight
        })
        : generateQuestion(state.round.modeKey);
    elements.questionText.textContent = state.round.modeKey === "flash"
        ? formatQuestionBase(state.round.question)
        : `${formatQuestionBase(state.round.question)} = ?`;
    updateProgress();
    updateJourneyUi();
    updateFlashAnswer();
}

function submitAnswer(event) {
    event.preventDefault();

    if (!state.round || state.round.over) {
        return;
    }

    const trimmedValue = elements.answerInput.value.trim();
    const guess = Number(trimmedValue);

    if (trimmedValue === "" && state.round.modeKey === "eras" && state.ignoreJourneyEmptySubmit) {
        state.ignoreJourneyEmptySubmit = false;
        return;
    }

    state.ignoreJourneyEmptySubmit = false;

    if (trimmedValue === "" || Number.isNaN(guess)) {
        showFeedback(`${player.nickname}, type a number before you check your answer.`, "bad");
        return;
    }

    if (state.round.modeKey === "eras") {
        handleJourneyAnswer(guess);
        return;
    }

    const isCorrect = guess === state.round.question.answer;
    state.round.answered += 1;

    if (isCorrect) {
        state.round.correct += 1;
        state.round.streak += 1;
        state.round.bestStreak = Math.max(state.round.bestStreak, state.round.streak);
        state.round.score += 100 + (state.round.streak - 1) * 20;
        showFeedback(`Nice job, ${player.nickname}. ${formatSolvedQuestion(state.round.question)}.`, "good");
    } else {
        state.round.streak = 0;
        state.round.score = Math.max(0, state.round.score - 30);
        showFeedback(`Good try, ${player.firstName}. ${formatSolvedQuestion(state.round.question)}.`, "bad");
    }

    updateScoreboard();
    updateProgress();
    updateBadges();
    elements.answerInput.value = "";

    if (state.round.modeKey === "perfect" && !isCorrect) {
        finishRound(`${player.nickname}'s Perfect Run ended after one mistake.`);
        return;
    }

    nextQuestion();
}

function showFlashAnswer() {
    if (!state.round || state.round.over || state.round.modeKey !== "flash") {
        return;
    }

    state.round.question.revealed = true;
    updateFlashAnswer();
    showFeedback(`Here it is, ${player.nickname}. ${formatSolvedQuestion(state.round.question)}.`, "good");
}

function advanceFlashCard() {
    if (!state.round || state.round.over || state.round.modeKey !== "flash") {
        return;
    }

    state.round.answered += 1;
    updateProgress();
    updateBadges();

    if (state.round.answered >= state.round.targetQuestions) {
        finishRound(`${player.nickname}, you finished the flash cards for ${getFlashFamilyText()}.`);
        return;
    }

    nextQuestion();
    showFeedback(`Next card ready, ${player.nickname}.`, "neutral");
}

function finishRound(message) {
    if (!state.round) {
        return;
    }

    stopTimer();
    state.round.over = true;
    setRoundControls(false);
    elements.answerInput.disabled = true;
    elements.submitAnswer.disabled = true;
    elements.showAnswer.disabled = true;
    elements.nextCard.disabled = true;

    const result = getResultDialogData(state.round, { message });

    if (state.round.modeKey === "eras") {
        const era = eras.find((entry) => entry.id === state.round.eraId) || getCurrentJourneyEra();
        const accuracy = getRoundAccuracy(state.round);

        if (accuracy >= era.passMark) {
            if (!state.journey.completedEraIds.includes(era.id)) {
                state.journey.completedEraIds.push(era.id);
            }

            state.journey.unlockedEraIndex = Math.max(
                state.journey.unlockedEraIndex,
                Math.min(state.journey.currentEraIndex + 1, eras.length - 1)
            );
        }

        elements.questionText.textContent = result.heading;
        elements.summaryText.textContent = result.summary;
        showFeedback(result.message, result.tone);
        updateBadges();
        updateJourneyUi();
        openResultDialog(result);
        return;
    }

    if (state.round.modeKey === "flash") {
        elements.questionText.textContent = `${player.nickname}'s Flash Cards Complete`;
        elements.summaryText.textContent = `${player.firstName} reviewed ${state.round.answered} cards for ${getFlashFamilyText()}.`;
        showFeedback(message || `${player.nickname}, great job reviewing ${getFlashFamilyText()}.`, "good");
        updateScoreboard();
        updateBadges();
        updateFlashAnswer();
        openResultDialog(result);
        return;
    }

    elements.questionText.textContent = result.heading;
    elements.summaryText.textContent = result.summary;
    showFeedback(result.message, result.tone);
    updateBadges();
    openResultDialog(result);
}

function setRoundControls(roundActive) {
    const isFlashMode = state.selectedMode === "flash";

    elements.operation.disabled = roundActive;
    elements.difficulty.disabled = roundActive || isFlashMode || isJourneyMode();
    elements.focusTable.disabled = roundActive || !isFlashMode;
    elements.sprintLevel.disabled = roundActive || state.selectedMode !== "sprint";
    elements.questionCount.disabled = roundActive || isJourneyMode();
    elements.journeyQuestionCount.disabled = roundActive || !isJourneyMode();
    elements.modeCards.forEach((card) => {
        card.disabled = roundActive;
    });
    elements.startGame.textContent = roundActive ? `${player.nickname}'s Round In Progress` : "Start Sky's Game";
}

function startTimer() {
    stopTimer();
    state.timerId = window.setInterval(() => {
        if (!state.round || state.round.over) {
            stopTimer();
            return;
        }

        if ((state.round.modeKey === "eras" && state.awaitingJourneyContinue) || isJourneyImageModalOpen()) {
            updateTimerUi();
            return;
        }

        state.round.remainingTime -= 1;
        updateTimerUi();

        if (state.round.remainingTime <= 0) {
            finishRound(`Time is up, ${player.nickname}. Try again and keep your answers sharp.`);
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerId) {
        window.clearInterval(state.timerId);
        state.timerId = null;
    }

    if (!state.round || state.round.modeKey !== "sprint") {
        updateTimerUi();
    }
}

function updateScoreboard() {
    const round = state.round;

    if (round && round.modeKey === "flash") {
        elements.scoreValue.textContent = "--";
        elements.accuracyValue.textContent = "--";
        elements.streakValue.textContent = "--";
        return;
    }

    elements.scoreValue.textContent = round ? String(round.score) : "0";
    elements.accuracyValue.textContent = round && round.answered > 0
        ? `${getRoundAccuracy(round)}%`
        : "--";
    elements.streakValue.textContent = round ? String(round.streak) : "0";
}

function updateProgress() {
    const round = state.round;
    const idleNoun = state.selectedMode === "flash" ? "cards" : "questions";

    if (!round) {
        elements.progressText.textContent = `0 / 0 ${idleNoun}`;
        elements.progressBar.style.width = "0%";
        return;
    }

    const percent = round.targetQuestions === 0
        ? 0
        : (round.answered / round.targetQuestions) * 100;
    const noun = round.modeKey === "flash" ? "cards" : "questions";

    elements.progressText.textContent = `${round.answered} / ${round.targetQuestions} ${noun}`;
    elements.progressBar.style.width = `${Math.min(percent, 100)}%`;
}

function updateBadges() {
    const round = state.round;
    const badges = [
        {
            label: "Sky Starter",
            unlocked: Boolean(round && round.answered >= 1)
        },
        {
            label: "Cloud Streak",
            unlocked: Boolean(round && (
                round.modeKey === "flash"
                    ? round.answered >= 3
                    : round.bestStreak >= 3
            ))
        },
        {
            label: "Perfect Star",
            unlocked: Boolean(round && round.over && (
                round.modeKey === "flash"
                    ? round.answered >= round.targetQuestions
                    : round.answered > 0 && round.correct === round.answered
            ))
        }
    ];

    elements.badgeStrip.innerHTML = "";
    badges.forEach((badge) => {
        const node = document.createElement("span");
        node.className = `badge ${badge.unlocked ? "unlocked" : "ghost"}`;
        node.textContent = badge.label;
        elements.badgeStrip.append(node);
    });
}

function showFeedback(message, tone) {
    elements.feedbackBanner.textContent = message;
    elements.feedbackBanner.className = `feedback-banner ${tone}`;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

elements.modeCards.forEach((card) => {
    card.addEventListener("click", () => {
        setMode(card.dataset.mode);
    });
});

elements.operation.addEventListener("change", (event) => {
    setOperation(event.target.value);
});

elements.difficulty.addEventListener("change", (event) => {
    setDifficulty(Number(event.target.value));
});

elements.focusTable.addEventListener("change", (event) => {
    setFocusTable(Number(event.target.value));
});

elements.sprintLevel.addEventListener("change", (event) => {
    setSprintLevel(event.target.value);
});

elements.questionCount.addEventListener("change", (event) => {
    setQuestionCount(Number(event.target.value));
});

elements.journeyQuestionCount.addEventListener("change", (event) => {
    setJourneyQuestionCount(Number(event.target.value));
});

elements.showAnswer.addEventListener("click", showFlashAnswer);
elements.nextCard.addEventListener("click", advanceFlashCard);
elements.answersOn.addEventListener("change", (event) => {
    state.answersOn = event.target.checked;

    if (state.round && state.round.modeKey === "flash" && state.round.question) {
        state.round.question.revealed = state.answersOn;
        updateFlashAnswer();
    }
});

elements.startGame.addEventListener("click", () => {
    if (state.round && !state.round.over) {
        return;
    }

    startRound();
});

elements.backToSetup.addEventListener("click", () => {
    returnToSetup();
});

elements.closeResultDialog.addEventListener("click", () => {
    closeResultDialog();
});

elements.resultPlayAgain.addEventListener("click", () => {
    if (!state.round || !state.round.over) {
        closeResultDialog();
        return;
    }

    const refreshJourneyActionUi = () => {
        const era = getCurrentJourneyEra();
        document.querySelector("#scope-label").textContent = "Era";
        document.querySelector("#current-difficulty").textContent = era.name;
        document.querySelector("#current-operation").textContent = getJourneyOperationLabel(era);
        document.querySelector("#mission-text").textContent = `${player.nickname}, clear ${era.name} with ${state.journeyQuestionCount} ${getJourneyOperationLabel(era)} questions and reach ${era.passMark}% to unlock the next stop in history.`;
        document.querySelector("#question-tip").textContent = era.secondsPerQuestion
            ? `${player.nickname}, every correct answer unlocks a history fact from ${era.name.toLowerCase()}. ${era.paceLabel} gives ${era.secondsPerQuestion} seconds per question.`
            : `${player.nickname}, every correct answer unlocks a history fact from ${era.name.toLowerCase()}. Take your time and build accuracy before moving on.`;
    };

    if (state.pendingJourneyAction === "next-era") {
        state.journey.currentEraIndex = Math.min(state.journey.currentEraIndex + 1, eras.length - 1);
        startRound();
        setMode("eras");
        return;
    }

    if (state.pendingJourneyAction === "retry-era") {
        startRound();
        setMode("eras");
        return;
    }

    if (state.pendingJourneyAction === "restart-journey") {
        state.journey = createJourneyState();
        startRound();
        setMode("eras");
        return;
    }

    if (state.pendingSprintLevelUp) {
        setSprintLevel(state.pendingSprintLevelUp);
    }

    startRound();
});

elements.resultBackToSetup.addEventListener("click", () => {
    returnToSetup();
});

elements.resultModal.addEventListener("click", (event) => {
    if (event.target === elements.resultModal) {
        closeResultDialog();
    }
});

elements.journeyImage.addEventListener("click", () => {
    openJourneyImageModal();
});

elements.journeyImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openJourneyImageModal();
    }
});

elements.closeJourneyImageModal.addEventListener("click", () => {
    closeJourneyImageModal();
});

elements.journeyImageModal.addEventListener("click", (event) => {
    if (event.target === elements.journeyImageModal) {
        closeJourneyImageModal();
    }
});

elements.answerForm.addEventListener("submit", submitAnswer);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isJourneyImageModalOpen()) {
        closeJourneyImageModal();
        return;
    }

    continueJourneyAfterFact(event);
});

populateDifficultyOptions();
populateFocusTableOptions();
setOperation("multiplication");
setDifficulty(1);
setSprintLevel("very-easy");
setFocusTable(6);
setQuestionCount(10);
setJourneyQuestionCount(10);
setMode("normal");
resetGameView();
showScreen("setup");
elements.answersOn.checked = state.answersOn;