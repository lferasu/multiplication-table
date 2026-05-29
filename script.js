const player = {
    firstName: "Nathan",
    nickname: "Sky"
};

const allowedQuestionCounts = [10, 25, 50, 100];
const allowedJourneyQuestionCounts = [5, 10];

const operations = {
    addition: {
        label: "Addition"
    },
    subtraction: {
        label: "Subtraction"
    },
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

const americanJourneyEras = [
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

const europeanEmpireEras = [
    {
        id: "british",
        name: "British Empire",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication"],
        maxFactor: 6,
        maxRight: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/British_Empire_1921.png",
        description: "Open the European empires journey with strong multiplication practice across ships, trade routes, and global maps.",
        paceLabel: "Harbor pace",
        secondsPerQuestion: 8,
        facts: [
            "British ships, ports, and trade routes connected lands across several continents.",
            "Maps, compasses, and sea travel were key tools for building long-distance empires.",
            "Merchants and sailors depended on careful counting, measuring, and timing."
        ]
    },
    {
        id: "spanish",
        name: "Spanish Empire",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication"],
        maxFactor: 8,
        maxRight: 11,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Spanish_Empire_Anachronous_en.svg",
        description: "Raise the multiplication challenge while exploring treasure fleets, fortified cities, and global exploration routes.",
        paceLabel: "Fleet pace",
        secondsPerQuestion: 7,
        facts: [
            "Spanish treasure fleets crossed the Atlantic carrying silver, supplies, and soldiers.",
            "Stone forts and walled cities helped protect important ports and trade centers.",
            "Explorers used charts, stars, and wind patterns to guide long voyages."
        ]
    },
    {
        id: "german",
        name: "German Empire",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication", "division"],
        maxFactor: 10,
        maxRight: 12,
        image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Deutsches_Kaiserreich%2C_mit_Kolonien.png",
        description: "Blend multiplication and division while tracking railways, factories, and industrial planning across the empire.",
        paceLabel: "Rail pace",
        secondsPerQuestion: 5,
        facts: [
            "Railroads, factories, and steel production helped power rapid industrial growth.",
            "Engineers relied on exact measurements to build bridges, tracks, and machines.",
            "Ports and telegraph lines helped move goods and information faster."
        ]
    },
    {
        id: "dutch",
        name: "Dutch Empire",
        passMark: 90,
        totalQuestions: 10,
        operations: ["division", "mixed"],
        maxFactor: 12,
        maxRight: 14,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Dutch_Empire35.PNG",
        description: "Shift into division and mixed facts while navigating merchants, canals, ports, and worldwide trading posts.",
        paceLabel: "Merchant pace",
        secondsPerQuestion: 4,
        facts: [
            "Dutch merchants built trade networks that linked Europe, Asia, Africa, and the Americas.",
            "Canals and warehouses helped cities store goods and move them efficiently.",
            "Trading companies used records, prices, and cargo lists to plan each voyage."
        ]
    },
    {
        id: "russia",
        name: "Russian Empire",
        passMark: 90,
        totalQuestions: 10,
        operations: ["multiplication", "division", "mixed"],
        maxFactor: 12,
        maxRight: 18,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Russian_Empire_%281863%29.jpg",
        description: "Finish the European empires journey with the hardest mixed facts, long-distance routes, and the fastest final timing.",
        paceLabel: "Imperial pace",
        secondsPerQuestion: 2.5,
        facts: [
            "The Russian Empire stretched across huge distances, so transport and communication were major challenges.",
            "Rail lines and river routes helped connect faraway cities, farms, and military posts.",
            "Large-scale planning needed accurate numbers for distance, supplies, and travel time."
        ]
    }
];

const journeyGameConfigs = {
    eras: {
        label: "American Eras Math Journey",
        tip: `${player.nickname}, travel through American history by answering math questions and unlocking era facts.`,
        unitLabel: "era",
        unitLabelTitle: "Era",
        unitLabelPlural: "eras",
        collectionLabel: "American history",
        questionCountLabel: "Era Questions",
        questionCountHelp: "American Eras Math Journey uses shorter era rounds: choose 5 or 10 questions for each era.",
        victoryLabel: "American Eras Victory",
        modeDescription: "Travel through American history by mastering math era by era.",
        eras: americanJourneyEras
    },
    empires: {
        label: "European Empires Math Journey",
        tip: `${player.nickname}, travel across European empires by answering math questions and unlocking empire facts.`,
        unitLabel: "empire",
        unitLabelTitle: "Empire",
        unitLabelPlural: "empires",
        collectionLabel: "European empires",
        questionCountLabel: "Empire Questions",
        questionCountHelp: "European Empires Math Journey uses shorter empire rounds: choose 5 or 10 questions for each empire.",
        victoryLabel: "European Empires Victory",
        modeDescription: "Travel across European empires by mastering math one empire at a time.",
        eras: europeanEmpireEras
    }
};

const journeyModeKeys = Object.keys(journeyGameConfigs);

const journeyDeckSource = typeof journeyCardDecks !== "undefined"
    ? journeyCardDecks
    : {};
const journeyImageCache = new Map();
const journeyImageRequests = new Map();
const additionPlaceNames = ["ones", "tens", "hundreds", "thousands", "ten-thousands", "hundred-thousands"];

const modes = {
    normal: {
        label: "Normal",
        timed: false,
        timeLimit: null,
        tip: `${player.nickname}, multiplication normal mode gives you time to think and build your streak.`
    },
    trifecta: {
        label: "Trifecta",
        timed: false,
        timeLimit: null,
        tip: `${player.nickname}, line up three rows and solve the whole stack cleanly.`
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
    },
    empires: {
        label: "European Empires Math Journey",
        timed: false,
        timeLimit: null,
        tip: `${player.nickname}, travel across European empires by answering math questions and unlocking empire facts.`
    }
};

const elements = {
    operationScreen: document.querySelector("#operation-screen"),
    configScreen: document.querySelector("#config-screen"),
    gameScreen: document.querySelector("#game-screen"),
    backToOperation: document.querySelector("#back-to-operation"),
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
    resultBackToMain: document.querySelector("#result-back-main"),
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
    operationChoiceCards: document.querySelectorAll("[data-operation-choice]"),
    operation: document.querySelector("#operation"),
    operationHelp: document.querySelector("#operation-help"),
    selectedOperationLabel: document.querySelector("#selected-operation-label"),
    difficulty: document.querySelector("#difficulty"),
    difficultyHelp: document.querySelector("#difficulty-help"),
    focusTableCard: document.querySelector(".focus-field-card"),
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
    journeyQuestionCountLabel: document.querySelector("#journey-question-count-label"),
    journeyQuestionCountHelp: document.querySelector("#journey-question-count-help"),
    scopeLabel: document.querySelector("#scope-label"),
    currentDifficulty: document.querySelector("#current-difficulty"),
    scopeStatusPill: document.querySelector("#scope-label").closest(".status-pill"),
    currentMode: document.querySelector("#current-mode"),
    currentOperation: document.querySelector("#current-operation"),
    startGame: document.querySelector("#start-game"),
    answerForm: document.querySelector("#answer-form"),
    additionBoard: document.querySelector("#addition-board"),
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
    difficulty: 12,
    sprintLevel: "very-easy",
    focusTable: 6,
    answersOn: false,
    questionCount: 10,
    journeyQuestionCount: 10,
    round: null,
    timerId: null,
    celebrationId: null,
    additionAdvanceId: null,
    pendingSprintLevelUp: null,
    pendingJourneyAction: null,
    journeyFactId: null,
    journeyStates: {},
    journey: null,
    awaitingJourneyContinue: false,
    ignoreJourneyEmptySubmit: false,
    journeyPanelTransitioning: false,
    journeyImageLoadToken: 0
};

function showScreen(screenName) {
    elements.operationScreen.classList.toggle("hidden", screenName !== "operation");
    elements.configScreen.classList.toggle("hidden", screenName !== "config");
    elements.gameScreen.classList.toggle("hidden", screenName !== "game");
}

function isDivisionMode() {
    return state.operation === "division";
}

function isAdditionMode() {
    return state.operation === "addition";
}

function isSubtractionMode() {
    return state.operation === "subtraction";
}

function isBoardOperationKey(operationKey) {
    return operationKey === "addition" || operationKey === "subtraction";
}

function isMixedMode() {
    return state.operation === "mixed";
}

function isTrifectaMode(modeKey = state.selectedMode) {
    return modeKey === "trifecta";
}

function isBoardQuestion(question = state.round && state.round.question) {
    return Boolean(question && isBoardOperationKey(question.operation));
}

function getBoardOperandCountForMode(modeKey = state.selectedMode) {
    return isTrifectaMode(modeKey) ? 3 : 2;
}

function isJourneyMode(modeKey = state.selectedMode) {
    return journeyModeKeys.includes(modeKey);
}

function getJourneyConfig(modeKey = state.selectedMode) {
    return journeyGameConfigs[modeKey] || journeyGameConfigs.eras;
}

function getJourneyEras(modeKey = state.selectedMode) {
    return getJourneyConfig(modeKey).eras;
}

function getJourneyEraById(eraId, modeKey = state.selectedMode) {
    return getJourneyEras(modeKey).find((entry) => entry.id === eraId) || null;
}

function getJourneyStateForMode(modeKey = state.selectedMode) {
    if (!isJourneyMode(modeKey)) {
        return null;
    }

    if (!state.journeyStates[modeKey]) {
        state.journeyStates[modeKey] = createJourneyState();
    }

    return state.journeyStates[modeKey];
}

function syncJourneyState(modeKey = state.selectedMode) {
    state.journey = getJourneyStateForMode(modeKey);
    return state.journey;
}

function getCurrentJourneyEra() {
    const currentEras = getJourneyEras();
    const journeyState = state.journey || getJourneyStateForMode();

    if (!journeyState) {
        return currentEras[0];
    }

    return currentEras[journeyState.currentEraIndex] || currentEras[0];
}

function getAdditionMaxDigitsForLevel(level = state.difficulty) {
    const safeLevel = Math.max(1, Math.min(12, level));
    return Math.min(5, 2 + Math.floor((safeLevel - 1) / 3));
}

function getAdditionDigitRangeText(level = state.difficulty) {
    const maxDigits = getAdditionMaxDigitsForLevel(level);
    return maxDigits === 2
        ? "2-digit numbers"
        : `2- to ${maxDigits}-digit numbers`;
}

function getDifficultyOptionLabel(value) {
    if (isBoardOperationKey(state.operation)) {
        return `Level ${value} - up to ${getAdditionMaxDigitsForLevel(value)} digits`;
    }

    return `Level ${value} - facts up to ${Math.max(2, value)}`;
}

function updateDifficultyOptionLabels() {
    Array.from(elements.difficulty.options).forEach((option) => {
        const value = Number(option.value);
        option.textContent = getDifficultyOptionLabel(value);
    });
}

function modeSupportsOperation(modeKey, operationKey = state.operation) {
    if (isBoardOperationKey(operationKey)) {
        return ["normal", "trifecta", "sprint", "perfect"].includes(modeKey);
    }

    return true;
}

function updateModeCardAvailability(roundActive = Boolean(state.round && !state.round.over)) {
    elements.modeCards.forEach((card) => {
        card.disabled = roundActive || !modeSupportsOperation(card.dataset.mode);
    });
}

function getOperationMissionLabel() {
    if (isMixedMode()) {
        return "mixed-operation";
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
    const labels = operationList
        .map((operationKey) => operations[operationKey]?.label.toLowerCase() || operationKey)
        .filter(Boolean);

    if (labels.length > 1) {
        const summary = labels.length === 2
            ? `${labels[0]} and ${labels[1]}`
            : `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;

        return `mixed ${summary}`;
    }

    return labels[0] || "math";
}

function getJourneyOperationLabel(era) {
    return getOperationSetLabel(getJourneyOperations(era));
}

function getJourneyMissionText(era) {
    const journeyConfig = getJourneyConfig();
    return `${player.nickname}, clear ${era.name} with ${state.journeyQuestionCount} ${getJourneyOperationLabel(era)} questions and reach ${era.passMark}% to unlock the next ${journeyConfig.unitLabel} in the journey.`;
}

function getJourneyTipText(era) {
    const journeyConfig = getJourneyConfig();
    const paceText = era.secondsPerQuestion
        ? ` ${era.paceLabel} gives ${era.secondsPerQuestion} seconds per question.`
        : " Take your time and build accuracy before moving on.";
    return `${player.nickname}, every correct answer unlocks a history fact from ${era.name.toLowerCase()} in the ${journeyConfig.collectionLabel} journey.${paceText}`;
}

function getDifficultyHelpText() {
    if (isJourneyMode()) {
        const journeyConfig = getJourneyConfig();
        return `${journeyConfig.label} sets the math challenge for each ${journeyConfig.unitLabel} automatically.`;
    }

    if (isAdditionMode()) {
        return `Addition uses a column board with carry boxes and ${getAdditionDigitRangeText()}. Higher levels unlock larger numbers up to 5 digits.`;
    }

    if (isSubtractionMode()) {
        return `Subtraction uses a column board with borrow boxes and ${getAdditionDigitRangeText()}. Higher levels unlock larger numbers up to 5 digits.`;
    }

    if (isDivisionMode()) {
        return "Difficulty 1 starts with exact division facts built from 2. Difficulty 12 unlocks exact division facts through 12, while 2, 10, and 11 stay rare.";
    }

    if (isMixedMode()) {
        return "Difficulty 1 starts with 2-digit addition and subtraction, 2-based multiplication, and exact division. Higher levels unlock larger column math numbers and harder fact families.";
    }

    return "Difficulty 1 starts with the 2s. Difficulty 12 unlocks every table from 2 to 12, while 2, 10, and 11 stay rare.";
}

function getOperationHelpText() {
    if (isJourneyMode()) {
        const journeyConfig = getJourneyConfig();
        return `Choose Sky's journey focus. When a ${journeyConfig.unitLabel} supports it, the challenge follows this operation choice.`;
    }

    if (isAdditionMode()) {
        return "Sky will practice stacked addition with carry boxes in Normal, Trifecta, Sprint, and Perfect Run.";
    }

    if (isSubtractionMode()) {
        return "Sky will practice stacked subtraction with borrow boxes in Normal, Trifecta, Sprint, and Perfect Run.";
    }

    if (isDivisionMode()) {
        return "Sky will practice exact division facts only.";
    }

    if (isMixedMode()) {
        return "Sky will practice a mixed set of all operations available for the selected game type.";
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

function getSprintPaceDescription(operationKey = state.operation, level = state.difficulty) {
    const pace = getSprintPaceProfile();

    if (isBoardOperationKey(operationKey)) {
        return `${pace.secondsPerQuestion}s per digit for up to ${getAdditionMaxDigitsForLevel(level)} digits`;
    }

    return `${pace.secondsPerQuestion}s per question`;
}

function getSprintLevelHelpText(levelKey = state.sprintLevel, operationKey = state.operation, level = state.difficulty) {
    const sprintLevel = sprintPaceBands.find((band) => band.key === levelKey) || sprintPaceBands[0];

    if (isBoardOperationKey(operationKey)) {
        return `${sprintLevel.label} sprint gives ${sprintLevel.secondsPerQuestion} seconds per digit, up to ${getAdditionMaxDigitsForLevel(level)} digits per ${operationKey} problem.`;
    }

    return `${sprintLevel.label} sprint gives ${sprintLevel.secondsPerQuestion} seconds per question.`;
}

function getMissionText(modeKey) {
    const count = state.questionCount;
    const operationLabel = getOperationMissionLabel();

    if (isJourneyMode(modeKey)) {
        const era = getCurrentJourneyEra();
        return getJourneyMissionText(era);
    }

    if (modeKey === "trifecta") {
        return `${player.nickname}, finish ${count} trifecta ${operationLabel} questions and collect as many stars as you can.`;
    }

    if (modeKey === "sprint") {
        const pace = getSprintPaceProfile();
        return `${player.nickname}, answer ${count} ${operationLabel} questions before the timer hits zero. ${getSprintPaceDescription()} at ${pace.label.toLowerCase()} pace.`;
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
    if (isJourneyMode(modeKey)) {
        const era = getCurrentJourneyEra();
        return getJourneyTipText(era);
    }

    if (isAdditionMode()) {
        if (modeKey === "trifecta") {
            return `${player.nickname}, stack three ${getAdditionDigitRangeText()} and add all three rows from right to left.`;
        }

        if (modeKey === "sprint") {
            const pace = getSprintPaceProfile();
            return `Think fast, ${player.firstName}, and add ${getAdditionDigitRangeText()} one column at a time. ${pace.label} pace gives ${getSprintPaceDescription("addition")}.`;
        }

        if (modeKey === "perfect") {
            return `${player.nickname}, line up ${getAdditionDigitRangeText()} and use the carry boxes carefully. One mistake ends the run.`;
        }

        return `${player.nickname}, stack ${getAdditionDigitRangeText()} and use the carry boxes to add from right to left.`;
    }

    if (isSubtractionMode()) {
        if (modeKey === "trifecta") {
            return `${player.nickname}, stack three ${getAdditionDigitRangeText()} and subtract both lower rows from right to left.`;
        }

        if (modeKey === "sprint") {
            const pace = getSprintPaceProfile();
            return `Think fast, ${player.firstName}, and subtract ${getAdditionDigitRangeText()} one column at a time. ${pace.label} pace gives ${getSprintPaceDescription("subtraction")}.`;
        }

        if (modeKey === "perfect") {
            return `${player.nickname}, line up ${getAdditionDigitRangeText()} and use the borrow boxes carefully. One mistake ends the run.`;
        }

        return `${player.nickname}, stack ${getAdditionDigitRangeText()} and use the borrow boxes to subtract from right to left.`;
    }

    if (modeKey === "flash") {
        return `${player.nickname}, practice only ${getFlashFamilyText()} and flip answers on when you want help.`;
    }

    if (isMixedMode() && modeKey === "perfect") {
        return `${player.nickname}, Perfect Run is the best mode for mastering a full mixed set of operations.`;
    }

    if (isMixedMode() && modeKey === "sprint") {
        const pace = getSprintPaceProfile();
        return `Think fast, ${player.firstName}, and switch cleanly between every operation this mode allows. ${pace.label} pace gives ${pace.secondsPerQuestion} seconds per question.`;
    }

    if (isMixedMode() && modeKey === "normal") {
        return `${player.nickname}, mixed normal mode is a great way to practice every operation this mode allows together.`;
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
    if (elements.selectedOperationLabel) {
        elements.selectedOperationLabel.textContent = operations[state.operation].label;
    }
    elements.currentOperation.textContent = isJourneyMode()
        ? getJourneyOperationLabel(getCurrentJourneyEra())
        : operations[state.operation].label;
    updateDifficultyOptionLabels();
    elements.operationHelp.textContent = getOperationHelpText();
    elements.difficultyHelp.textContent = getDifficultyHelpText();
    elements.focusTableLabel.textContent = getFocusLabelText();
    elements.focusTableHelp.textContent = getFocusHelpText();
}

function populateDifficultyOptions() {
    for (let value = 1; value <= 12; value += 1) {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = getDifficultyOptionLabel(value);
        elements.difficulty.append(option);
    }
}

function populateFocusTableOptions() {
    for (let value = 2; value <= 12; value += 1) {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = `${value}`;
        elements.focusTable.append(option);
    }
}

function setMode(modeKey) {
    if (!modeSupportsOperation(modeKey)) {
        return;
    }

    state.selectedMode = modeKey;
    state.journey = isJourneyMode(modeKey) ? syncJourneyState(modeKey) : null;
    const mode = modes[modeKey];

    elements.modeCards.forEach((card) => {
        card.classList.toggle("active", card.dataset.mode === modeKey);
    });

    elements.currentMode.textContent = mode.label;
    updateJourneyQuestionCountUi();
    updateOperationUi();
    elements.missionText.textContent = getMissionText(modeKey);
    elements.questionTip.textContent = getTipText(modeKey);
    syncModeUi();
}

function setOperation(operationKey) {
    state.operation = operationKey;

    if (state.focusTable < 2) {
        setFocusTable(2);
    }

    updateDifficultyOptionLabels();

    if (!modeSupportsOperation(state.selectedMode, operationKey)) {
        setMode("normal");
        return;
    }

    updateOperationUi();
    elements.sprintLevelHelp.textContent = getSprintLevelHelpText();
    elements.missionText.textContent = getMissionText(state.selectedMode);
    elements.questionTip.textContent = getTipText(state.selectedMode);
    syncModeUi();
}

function openConfigForOperation(operationKey) {
    setOperation(operationKey);
    showScreen("config");
}

function setDifficulty(value) {
    state.difficulty = value;
    elements.sprintLevelHelp.textContent = getSprintLevelHelpText();
    elements.missionText.textContent = getMissionText(state.selectedMode);
    elements.questionTip.textContent = getTipText(state.selectedMode);
    elements.difficultyHelp.textContent = getDifficultyHelpText();
    updateScopeDisplay();
}

function setFocusTable(value) {
    const minimumValue = 2;
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

function updateJourneyQuestionCountUi() {
    if (!elements.journeyQuestionCountLabel || !elements.journeyQuestionCountHelp) {
        return;
    }

    const journeyConfig = getJourneyConfig();
    elements.journeyQuestionCountLabel.textContent = journeyConfig.questionCountLabel;
    elements.journeyQuestionCountHelp.textContent = journeyConfig.questionCountHelp;

    Array.from(elements.journeyQuestionCount.options).forEach((option) => {
        const count = Number(option.value);
        option.textContent = `${count} questions per ${journeyConfig.unitLabel}`;
    });
}

function setSprintLevel(levelKey) {
    const sprintLevel = sprintPaceBands.find((band) => band.key === levelKey) || sprintPaceBands[0];
    state.sprintLevel = sprintLevel.key;
    elements.sprintLevel.value = sprintLevel.key;
    elements.sprintLevelHelp.textContent = getSprintLevelHelpText(sprintLevel.key);
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

    if (isBoardOperationKey(state.operation)) {
        return pace.secondsPerQuestion * getAdditionMaxDigitsForLevel() * state.questionCount;
    }

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
    const journeyLabel = escapeJourneySvgText(getJourneyConfig().label.toUpperCase());
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 780" role="img" aria-label="${title}"><defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#fbf2da"/><stop offset="100%" stop-color="#d6b06d"/></linearGradient></defs><rect width="1200" height="780" fill="url(#bg)"/><circle cx="1000" cy="130" r="150" fill="rgba(255,255,255,0.25)"/><rect x="72" y="72" width="1056" height="636" rx="28" fill="rgba(28,24,19,0.12)" stroke="rgba(28,24,19,0.25)" stroke-width="4"/><text x="96" y="148" fill="#5c2f16" font-family="Georgia, serif" font-size="34" letter-spacing="4">${journeyLabel}</text><text x="96" y="286" fill="#1c1813" font-family="Georgia, serif" font-size="84" font-weight="700">${title}</text><text x="96" y="374" fill="#563927" font-family="Georgia, serif" font-size="40">${eraName}</text><text x="96" y="636" fill="#5c2f16" font-family="Arial, sans-serif" font-size="28">Loading a live history image for this question...</text></svg>`;
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
        && isJourneyMode(state.round.modeKey)
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

    const era = state.round && isJourneyMode(state.round.modeKey)
        ? getJourneyEraById(state.round.eraId, state.round.modeKey) || getCurrentJourneyEra()
        : getCurrentJourneyEra();
    const card = state.round && isJourneyMode(state.round.modeKey)
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
        if (!state.round || !isJourneyMode(state.round.modeKey)) {
            return;
        }

        const era = getJourneyEraById(state.round.eraId, state.round.modeKey) || getCurrentJourneyEra();
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
    if (!state.round || !isJourneyMode(state.round.modeKey)) {
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

    const activeJourneyMode = state.round && isJourneyMode(state.round.modeKey)
        ? state.round.modeKey
        : state.selectedMode;
    const currentEras = getJourneyEras(activeJourneyMode);
    const journeyConfig = getJourneyConfig(activeJourneyMode);
    const era = state.round && isJourneyMode(state.round.modeKey)
        ? getJourneyEraById(state.round.eraId, state.round.modeKey) || getCurrentJourneyEra()
        : getCurrentJourneyEra();
    const eraIndex = currentEras.findIndex((entry) => entry.id === era.id);
    const answered = state.round && isJourneyMode(state.round.modeKey)
        ? state.round.answered
        : 0;
    const targetQuestions = state.round && isJourneyMode(state.round.modeKey)
        ? state.round.targetQuestions
        : state.journeyQuestionCount;
    const progressPercent = targetQuestions === 0
        ? 0
        : (answered / targetQuestions) * 100;
    const journeyCard = state.round && isJourneyMode(state.round.modeKey)
        ? getJourneyActiveCard(state.round)
        : getJourneyPreviewCard(era);

    document.body.dataset.journeyEra = era.id;
    elements.journeyImage.dataset.era = era.id;
    updateJourneyPhoto(
        journeyCard,
        era,
        state.round && isJourneyMode(state.round.modeKey) ? state.round.roundId : null
    );
    applyJourneyDisplay(era);
    elements.journeyEraStamp.textContent = journeyCard && journeyCard.title
        ? journeyCard.title
        : era.name;
    elements.journeyEraName.textContent = era.name;
    elements.journeyEraBadge.textContent = `${journeyConfig.unitLabelTitle} ${eraIndex + 1} of ${currentEras.length}`;
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
    const timerPaused = (isJourneyMode(state.round.modeKey) && state.awaitingJourneyContinue) || isJourneyImageModalOpen();
    const timerOperation = state.round.question?.operation || state.operation;
    const timerPaceText = isBoardOperationKey(timerOperation)
        ? `${pace.label} · ${pace.secondsPerQuestion}s per digit`
        : `${pace.label} · ${pace.secondsPerQuestion}s each`;

    elements.timerValue.textContent = `${state.round.remainingTime}s`;
    elements.timerPace.textContent = timerPaused
        ? "Paused for fact reading"
        : timerPaceText;
    elements.timerProgress.style.width = `${percentRemaining}%`;
    elements.timerPill.classList.add("sprint-active");
    elements.timerPill.classList.toggle("warning", percentRemaining <= 40 && percentRemaining > 20);
    elements.timerPill.classList.toggle("critical", percentRemaining <= 20);
}

function formatQuestionBase(question) {
    if (question.operation === "addition") {
        return getBoardOperands(question).join(" + ");
    }

    if (question.operation === "subtraction") {
        return getBoardOperands(question).join(" - ");
    }

    if (question.operation === "division") {
        return `${question.dividend} ÷ ${question.divisor}`;
    }

    return `${question.left} × ${question.right}`;
}

function formatSolvedQuestion(question) {
    return `${formatQuestionBase(question)} = ${question.answer}`;
}

function getAdditionPlaceLabel(columnCount, columnIndex) {
    const placeIndex = columnCount - columnIndex - 1;
    return additionPlaceNames[placeIndex] || `column ${columnIndex + 1}`;
}

function getBoardOperands(question) {
    if (!question) {
        return [];
    }

    if (Array.isArray(question.operands) && question.operands.length > 0) {
        return question.operands;
    }

    const operands = [question.left, question.right].filter((value) => Number.isFinite(value));
    return operands;
}

function getAlignedDigits(value, columnCount) {
    const digits = String(value).split("");

    return Array.from({ length: columnCount }, (_, index) => {
        const digitIndex = digits.length - columnCount + index;
        return digitIndex >= 0 ? digits[digitIndex] : "";
    });
}

function buildAdditionDigitCellMarkup(digit) {
    return `<span class="addition-digit-cell${digit ? "" : " blank"}">${digit || "&nbsp;"}</span>`;
}

function buildAdditionInputMarkup(inputClassName, rowName, columnCount, columnIndex) {
    const question = state.round && state.round.question;
    const placeLabel = getAdditionPlaceLabel(columnCount, columnIndex);
    const inputLabel = rowName === "carry"
        ? `${question?.operation === "subtraction" ? "Borrow" : "Carry"} for ${placeLabel}`
        : `Answer digit for ${placeLabel}`;

    return `<input class="${inputClassName}" data-row="${rowName}" data-column="${columnIndex}" inputmode="numeric" pattern="[0-9]*" maxlength="1" type="text" aria-label="${inputLabel}">`;
}

function getBoardOperationCopy(question = state.round && state.round.question) {
    const isSubtractionQuestion = question?.operation === "subtraction";
    const operandCount = getBoardOperands(question).length;
    const trifectaLabel = operandCount === 3 ? "Trifecta " : "";

    return {
        name: isSubtractionQuestion ? "subtraction" : "addition",
        sign: isSubtractionQuestion ? "-" : "+",
        carryPlural: isSubtractionQuestion ? "borrows" : "carries",
        resultLabel: isSubtractionQuestion ? "difference" : "sum",
        prompt: isSubtractionQuestion
            ? `Solve the stacked ${trifectaLabel.toLowerCase()}subtraction.`
            : `Solve the stacked ${trifectaLabel.toLowerCase()}addition.`,
        help: isSubtractionQuestion
            ? operandCount === 3
                ? "Use the top boxes for borrows and subtract both lower rows one digit at a time."
                : "Use the top boxes for borrows and type the answer one digit at a time."
            : operandCount === 3
                ? "Use the top boxes for carries and add all three rows one digit at a time."
                : "Use the top boxes for carries and type the answer one digit at a time."
    };
}

function clearAdditionAdvance() {
    if (state.additionAdvanceId) {
        window.clearTimeout(state.additionAdvanceId);
        state.additionAdvanceId = null;
    }
}

function getAdditionRewardElement() {
    return elements.additionBoard.querySelector(".addition-reward");
}

function clearAdditionFeedbackState() {
    const reward = getAdditionRewardElement();

    getAdditionInputs(".addition-answer-input, .addition-carry-input").forEach((input) => {
        input.classList.remove("is-correct", "is-wrong");
    });

    elements.additionBoard.classList.remove("success", "mistake");

    if (reward) {
        reward.textContent = "";
        reward.classList.add("hidden");
    }
}

function setAdditionReward(message) {
    const reward = getAdditionRewardElement();

    if (!reward) {
        return;
    }

    reward.textContent = message;
    reward.classList.remove("hidden");
}

function setAdditionInputsDisabled(disabled) {
    getAdditionInputs(".addition-answer-input, .addition-carry-input").forEach((input) => {
        input.disabled = disabled;
    });
}

function clearAdditionBoard() {
    clearAdditionAdvance();
    elements.additionBoard.innerHTML = "";
    elements.additionBoard.classList.add("hidden");
    elements.answerForm.classList.remove("addition-answer-form");
    elements.questionCard.classList.remove("addition-mode");
    elements.answerInput.classList.remove("hidden");
}

function renderAdditionBoard(question) {
    const boardCopy = getBoardOperationCopy(question);
    const operands = getBoardOperands(question);
    const columnCount = Math.max(
        ...operands.map((operand) => String(operand).length),
        String(question.answer).length
    );
    const carryInputs = Array.from({ length: columnCount }, (_, index) => buildAdditionInputMarkup(
        "addition-carry-input",
        "carry",
        columnCount,
        index
    )).join("");
    const answerInputs = Array.from({ length: columnCount }, (_, index) => buildAdditionInputMarkup(
        "addition-answer-input",
        "answer",
        columnCount,
        index
    )).join("");
    const operandRows = operands.map((operand, index) => {
        const digits = getAlignedDigits(operand, columnCount);
        const signMarkup = index === 0
            ? '<span class="addition-sign-spacer" aria-hidden="true"></span>'
            : `<span class="addition-sign" aria-hidden="true">${boardCopy.sign}</span>`;

        return `
            <div class="addition-grid-row addition-problem-row">
                ${signMarkup}
                ${digits.map((digit) => buildAdditionDigitCellMarkup(digit)).join("")}
            </div>
        `;
    }).join("");

    elements.additionBoard.style.setProperty("--addition-columns", String(columnCount));
    elements.additionBoard.innerHTML = `
        <div class="addition-stack" role="group" aria-label="Column ${boardCopy.name} board">
            <div class="addition-grid-row addition-carry-row">
                <span class="addition-sign-spacer" aria-hidden="true"></span>
                ${carryInputs}
            </div>
            ${operandRows}
            <div class="addition-divider" aria-hidden="true"></div>
            <div class="addition-grid-row addition-answer-grid">
                <span class="addition-sign-spacer" aria-hidden="true"></span>
                ${answerInputs}
            </div>
        </div>
        <div class="addition-reward hidden" aria-live="polite"></div>
        <p class="addition-board-help">${boardCopy.help}</p>
    `;
    elements.additionBoard.classList.remove("hidden");
    elements.answerForm.classList.add("addition-answer-form");
    elements.questionCard.classList.add("addition-mode");
    elements.answerInput.classList.add("hidden");
}

function renderQuestionPrompt() {
    if (!state.round || !state.round.question) {
        clearAdditionBoard();
        return;
    }

    if (isBoardQuestion(state.round.question)) {
        elements.questionText.textContent = getBoardOperationCopy(state.round.question).prompt;
        renderAdditionBoard(state.round.question);
        return;
    }

    clearAdditionBoard();
    elements.questionText.textContent = state.round.modeKey === "flash"
        ? formatQuestionBase(state.round.question)
        : `${formatQuestionBase(state.round.question)} = ?`;
}

function getAdditionInputs(selector) {
    return Array.from(elements.additionBoard.querySelectorAll(selector));
}

function focusAdditionAnswerEntry() {
    const answerInputs = getAdditionInputs(".addition-answer-input");
    const target = [...answerInputs].reverse().find((input) => input.value === "")
        || answerInputs[answerInputs.length - 1];

    if (target) {
        target.focus();
        target.select();
    }
}

function focusActiveAnswerEntry() {
    if (isBoardQuestion() && state.round.modeKey !== "flash") {
        focusAdditionAnswerEntry();
        return;
    }

    elements.answerInput.focus();
}

function moveAdditionRowFocus(currentInput, selector, step) {
    const rowInputs = getAdditionInputs(selector);
    const currentIndex = rowInputs.indexOf(currentInput);
    const target = rowInputs[currentIndex + step];

    if (target) {
        target.focus();
        target.select();
    }
}

function moveAdditionVerticalFocus(currentInput, selector) {
    const target = elements.additionBoard.querySelector(`${selector}[data-column="${currentInput.dataset.column}"]`);

    if (target) {
        target.focus();
        target.select();
    }
}

function handleAdditionBoardInput(event) {
    const input = event.target;

    if (!(input instanceof HTMLInputElement) || !input.matches(".addition-carry-input, .addition-answer-input")) {
        return;
    }

    const sanitizedValue = input.value.replace(/\D/g, "");
    input.value = sanitizedValue ? sanitizedValue.slice(-1) : "";
    input.classList.remove("is-correct", "is-wrong");
    elements.additionBoard.classList.remove("mistake", "success");

    const reward = getAdditionRewardElement();
    if (reward) {
        reward.textContent = "";
        reward.classList.add("hidden");
    }

    if (!input.value) {
        return;
    }

    if (input.matches(".addition-answer-input")) {
        moveAdditionRowFocus(input, ".addition-answer-input", -1);
        return;
    }

    moveAdditionRowFocus(input, ".addition-carry-input", -1);
}

function handleAdditionBoardKeydown(event) {
    const input = event.target;

    if (!(input instanceof HTMLInputElement) || !input.matches(".addition-carry-input, .addition-answer-input")) {
        return;
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveAdditionRowFocus(
            input,
            input.matches(".addition-answer-input") ? ".addition-answer-input" : ".addition-carry-input",
            -1
        );
        return;
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        moveAdditionRowFocus(
            input,
            input.matches(".addition-answer-input") ? ".addition-answer-input" : ".addition-carry-input",
            1
        );
        return;
    }

    if (event.key === "ArrowUp" && input.matches(".addition-answer-input")) {
        event.preventDefault();
        moveAdditionVerticalFocus(input, ".addition-carry-input");
        return;
    }

    if (event.key === "ArrowDown" && input.matches(".addition-carry-input")) {
        event.preventDefault();
        moveAdditionVerticalFocus(input, ".addition-answer-input");
        return;
    }

    if (event.key === "Backspace" && input.value === "") {
        moveAdditionRowFocus(
            input,
            input.matches(".addition-answer-input") ? ".addition-answer-input" : ".addition-carry-input",
            1
        );
    }
}

function getSubmittedAnswerState() {
    if (isBoardQuestion()) {
        const digits = getAdditionInputs(".addition-answer-input").map((input) => input.value.trim());
        const firstFilledIndex = digits.findIndex(Boolean);

        if (firstFilledIndex === -1) {
            return { trimmedValue: "", guess: Number.NaN, incomplete: false };
        }

        const enteredDigits = digits.slice(firstFilledIndex);

        if (enteredDigits.some((digit) => digit === "")) {
            return { trimmedValue: "", guess: Number.NaN, incomplete: true };
        }

        const trimmedValue = enteredDigits.join("");
        return {
            trimmedValue,
            guess: Number(trimmedValue),
            incomplete: false
        };
    }

    const trimmedValue = elements.answerInput.value.trim();
    return {
        trimmedValue,
        guess: Number(trimmedValue),
        incomplete: false
    };
}

function getAdditionExpectedDigits(question = state.round && state.round.question) {
    if (!question) {
        return [];
    }

    return getAlignedDigits(question.answer, getAdditionInputs(".addition-answer-input").length);
}

function getAdditionExpectedCarries(question = state.round && state.round.question) {
    if (!question) {
        return [];
    }

    const columnCount = getAdditionInputs(".addition-carry-input").length;
    const operandDigits = getBoardOperands(question)
        .map((operand) => getAlignedDigits(operand, columnCount).map((digit) => Number(digit || 0)));
    const carries = Array.from({ length: columnCount }, () => "");

    if (question.operation === "subtraction") {
        let borrowIn = 0;

        for (let index = columnCount - 1; index >= 0; index -= 1) {
            const minuendDigit = operandDigits[0][index] || 0;
            const subtrahendTotal = operandDigits
                .slice(1)
                .reduce((sum, digits) => sum + (digits[index] || 0), borrowIn);
            const deficit = subtrahendTotal - minuendDigit;
            const borrowValue = deficit > 0 ? Math.ceil(deficit / 10) : 0;

            if (borrowValue > 0 && index > 0) {
                carries[index - 1] = String(borrowValue);
            }

            borrowIn = borrowValue;
        }

        return carries;
    }

    let carryIn = 0;

    for (let index = columnCount - 1; index >= 0; index -= 1) {
        carries[index] = carryIn > 0 ? String(carryIn) : "";
        const columnTotal = operandDigits
            .reduce((sum, digits) => sum + (digits[index] || 0), carryIn);
        carryIn = Math.floor(columnTotal / 10);
    }

    return carries;
}

function focusFirstAdditionMismatch() {
    const target = getAdditionInputs(".addition-carry-input, .addition-answer-input")
        .find((input) => input.classList.contains("is-wrong"));

    if (target) {
        target.focus();
        target.select();
    }
}

function markAdditionInputs(expectedValues, inputs, options = {}) {
    const {
        allowEmptyCorrect = false,
        tolerateBlankIndexes = []
    } = options;
    let allCorrect = true;

    inputs.forEach((input, index) => {
        const expectedValue = expectedValues[index] || "";
        const actualValue = input.value.trim();
        const toleratedBlank = tolerateBlankIndexes.includes(index)
            && actualValue === ""
            && expectedValue !== "";
        const isCorrect = actualValue === expectedValue || toleratedBlank;
        const shouldMarkCorrect = actualValue === expectedValue && (actualValue !== "" || allowEmptyCorrect);
        const shouldMarkWrong = !isCorrect && (actualValue !== "" || expectedValue !== "");

        input.classList.remove("is-correct", "is-wrong");

        if (shouldMarkCorrect) {
            input.classList.add("is-correct");
        }

        if (shouldMarkWrong) {
            input.classList.add("is-wrong");
            allCorrect = false;
        }
    });

    return allCorrect;
}

function markAdditionAnswerDigits(isCorrect) {
    const expectedDigits = getAdditionExpectedDigits();
    const expectedCarries = getAdditionExpectedCarries();
    const answerInputs = getAdditionInputs(".addition-answer-input");
    const carryInputs = getAdditionInputs(".addition-carry-input");
    const tolerateBlankIndexes = state.round.question.operation === "addition"
        ? [0]
        : [];
    const carriesCorrect = markAdditionInputs(expectedCarries, carryInputs, {
        tolerateBlankIndexes
    });
    const digitsCorrect = markAdditionInputs(expectedDigits, answerInputs);
    const boardCorrect = isCorrect && carriesCorrect && digitsCorrect;

    elements.additionBoard.classList.toggle("success", boardCorrect);
    elements.additionBoard.classList.toggle("mistake", !boardCorrect);

    return boardCorrect;
}

function queueAdditionAdvance() {
    clearAdditionAdvance();
    state.additionAdvanceId = window.setTimeout(() => {
        state.additionAdvanceId = null;

        if (!state.round || state.round.over || !isBoardQuestion(state.round.question)) {
            return;
        }

        elements.submitAnswer.disabled = false;
        setAdditionInputsDisabled(false);
        nextQuestion();
    }, 1100);
}

function handleAdditionAnswer(guess) {
    const earnedPoints = 100 + (state.round.streak * 20);
    const isCorrect = guess === state.round.question.answer;
    const boardCorrect = markAdditionAnswerDigits(isCorrect);
    const boardCopy = getBoardOperationCopy();

    if (!boardCorrect) {
        state.round.questionAttempts += 1;

        if (state.round.questionAttempts < 2) {
            showFeedback(`The green digits and ${boardCopy.carryPlural} are right, ${player.nickname}. Fix the red ones. You get one more chance on this question.`, "neutral");
            focusFirstAdditionMismatch();
            return;
        }

        state.round.answered += 1;
        state.round.streak = 0;
        state.round.score = Math.max(0, state.round.score - 30);
        setAdditionInputsDisabled(true);
        elements.submitAnswer.disabled = true;
        showFeedback(`Good try, ${player.firstName}. ${formatSolvedQuestion(state.round.question)}.`, "bad");
        updateScoreboard();
        updateProgress();
        updateBadges();

        if (state.round.modeKey === "perfect") {
            finishRound(`${player.nickname}'s Perfect Run ended after one mistake.`);
            return;
        }

        queueAdditionAdvance();
        return;
    }

    state.round.answered += 1;
    state.round.correct += 1;
    state.round.streak += 1;
    state.round.bestStreak = Math.max(state.round.bestStreak, state.round.streak);
    state.round.score += earnedPoints;
    setAdditionReward(`Star earned! +${earnedPoints}`);
    setAdditionInputsDisabled(true);
    elements.submitAnswer.disabled = true;
    showFeedback(`Nice job, ${player.nickname}. ${formatSolvedQuestion(state.round.question)}.`, "good");
    updateScoreboard();
    updateProgress();
    updateBadges();
    queueAdditionAdvance();
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

function getJourneyTotalAccuracy(modeKey = state.selectedMode) {
    const journeyState = getJourneyStateForMode(modeKey);

    if (!journeyState || journeyState.totalAnswered === 0) {
        return 0;
    }

    return Math.round((journeyState.totalCorrect / journeyState.totalAnswered) * 100);
}

function getJourneyResultDialogData(round) {
    const currentEras = getJourneyEras(round.modeKey);
    const journeyConfig = getJourneyConfig(round.modeKey);
    const journeyState = getJourneyStateForMode(round.modeKey);
    const era = getJourneyEraById(round.eraId, round.modeKey) || getCurrentJourneyEra();
    const accuracy = getRoundAccuracy(round);
    const passed = accuracy >= era.passMark;
    const isFinalEra = journeyState && journeyState.currentEraIndex === currentEras.length - 1;
    const nextEra = !isFinalEra ? currentEras[journeyState.currentEraIndex + 1] : null;

    if (!passed) {
        return {
            tone: "improve",
            badge: `Replay ${journeyConfig.unitLabelTitle}`,
            praise: `Try the ${journeyConfig.unitLabel} again!`,
            heading: `Replay ${era.name}`,
            message: `${player.nickname}, you need ${era.passMark}% to pass ${era.name}. This round finished at ${accuracy}%.`,
            summary: `Replay ${era.name} to strengthen the math and unlock the next ${journeyConfig.unitLabel} in the journey.`,
            scoreLabel: "Journey Score",
            scoreValue: String(round.score),
            scoreNote: `${accuracy}% ${journeyConfig.unitLabelTitle} Accuracy`,
            awardNote: `Pass Mark: ${era.passMark}%`,
            primaryLabel: `Replay ${journeyConfig.unitLabelTitle}`,
            journeyAction: "retry-era",
            celebration: null,
            stats: [
                { label: journeyConfig.unitLabelTitle, value: era.name },
                { label: "Best Streak", value: String(round.bestStreak) }
            ]
        };
    }

    if (isFinalEra) {
        return {
            tone: accuracy === 100 ? "perfect" : "excellent",
            badge: "History Master",
            praise: "Journey complete!",
            heading: `${player.nickname}'s ${journeyConfig.victoryLabel}`,
            message: `${player.nickname}, you completed every ${journeyConfig.unitLabel} and finished the full ${journeyConfig.collectionLabel} journey with ${accuracy}% in the final challenge.`,
            summary: `${player.firstName} cleared all ${currentEras.length} ${journeyConfig.unitLabelPlural} and proved mastery across ${journeyConfig.collectionLabel}.`,
            scoreLabel: "Journey Score",
            scoreValue: String(round.score),
            scoreNote: `${getJourneyTotalAccuracy(round.modeKey)}% Journey Accuracy`,
            awardNote: `All ${journeyConfig.unitLabelTitle}s Completed`,
            primaryLabel: "Start Journey Again",
            journeyAction: "restart-journey",
            celebration: accuracy === 100 ? "perfect" : "excellent",
            stats: [
                { label: `${journeyConfig.unitLabelTitle}s Cleared`, value: `${currentEras.length} / ${currentEras.length}` },
                { label: `Final ${journeyConfig.unitLabelTitle}`, value: era.name }
            ]
        };
    }

    return {
        tone: accuracy === 100 ? "perfect" : "excellent",
        badge: `${journeyConfig.unitLabelTitle} Complete`,
        praise: `Next ${journeyConfig.unitLabel} unlocked!`,
        heading: `${era.name} Complete`,
        message: `${player.nickname}, you passed ${era.name} with ${accuracy}% and unlocked ${nextEra.name}.`,
        summary: `${journeyConfig.unitLabelTitle} cleared. ${nextEra.name} is now ready for the next math journey challenge.`,
        scoreLabel: "Journey Score",
        scoreValue: String(round.score),
        scoreNote: `${accuracy}% ${journeyConfig.unitLabelTitle} Accuracy`,
        awardNote: `${nextEra.name} Unlocked`,
        primaryLabel: `Next ${journeyConfig.unitLabelTitle}`,
        journeyAction: "next-era",
        celebration: accuracy === 100 ? "perfect" : "excellent",
        stats: [
            { label: `${journeyConfig.unitLabelTitle} Accuracy`, value: `${accuracy}%` },
            { label: "Unlocked", value: nextEra.name }
        ]
    };
}

function getResultDialogData(round, options = {}) {
    const note = options.message;

    if (isJourneyMode(round.modeKey)) {
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
    const era = getJourneyEraById(state.round.eraId, state.round.modeKey) || getCurrentJourneyEra();
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
        if (!state.round || state.round.over || !isJourneyMode(state.round.modeKey)) {
            return;
        }

        if (state.round.answered >= state.round.targetQuestions) {
            finishRound();
            return;
        }

        await animateJourneyPanelSwap("skip");
        if (!state.round || state.round.over || !isJourneyMode(state.round.modeKey)) {
            return;
        }

        elements.answerInput.disabled = false;
        elements.submitAnswer.disabled = false;
        nextQuestion();
    }, 1400);
}

async function continueJourneyAfterFact(event) {
    if (isJourneyImageModalOpen()) {
        return;
    }

    if (!state.round || state.round.over || !isJourneyMode(state.round.modeKey) || !state.awaitingJourneyContinue || state.journeyPanelTransitioning) {
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
    if (!state.round || state.round.over || !isJourneyMode(state.round.modeKey)) {
        return;
    }

    elements.answerInput.disabled = false;
    elements.submitAnswer.disabled = false;
    nextQuestion();
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
    const isJourney = isJourneyMode();
    elements.focusTableCard.classList.toggle("hidden", !isFlashMode);
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
    updateModeCardAvailability();
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

function getSelectedOperationPool(modeKey = state.selectedMode) {
    if (!isMixedMode()) {
        return [state.operation];
    }

    if (modeKey === "flash" || isJourneyMode(modeKey)) {
        return ["multiplication", "division"];
    }

    return ["addition", "subtraction", "multiplication", "division"];
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
    const {
        avoidOne = false,
        minimumValue = 1,
        discouragedValues = []
    } = options;
    const minValue = Math.max(1, avoidOne ? 2 : minimumValue);
    const safeMax = Math.max(minValue, maxValue);
    const candidates = [];

    for (let value = minValue; value <= safeMax; value += 1) {
        let weight = 1;

        if (avoidOne && value === 1) {
            weight = 0;
        }

        weight *= getOperandWeightAdjustment(value, discouragedValues);

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

function getRandomNumberWithDigits(digitCount) {
    const safeDigitCount = Math.max(2, Math.min(5, digitCount));
    const minValue = 10 ** (safeDigitCount - 1);
    const maxValue = (10 ** safeDigitCount) - 1;
    return randomInt(minValue, maxValue);
}

function hasAdditionCarry(operands) {
    const columnCount = Math.max(...operands.map((operand) => String(operand).length));
    const operandDigits = operands.map((operand) => String(operand).padStart(columnCount, "0").split("").map(Number));
    let carryIn = 0;

    for (let index = columnCount - 1; index >= 0; index -= 1) {
        const columnTotal = operandDigits.reduce((sum, digits) => sum + digits[index], carryIn);

        if (columnTotal >= 10) {
            return true;
        }

        carryIn = Math.floor(columnTotal / 10);
    }

    return false;
}

function getMaximumBorrowMarker(operands) {
    const columnCount = Math.max(...operands.map((operand) => String(operand).length));
    const operandDigits = operands.map((operand) => String(operand).padStart(columnCount, "0").split("").map(Number));
    let borrowIn = 0;
    let maximumBorrow = 0;

    for (let index = columnCount - 1; index >= 0; index -= 1) {
        const minuendDigit = operandDigits[0][index] || 0;
        const subtrahendTotal = operandDigits
            .slice(1)
            .reduce((sum, digits) => sum + (digits[index] || 0), borrowIn);
        const deficit = subtrahendTotal - minuendDigit;
        const borrowValue = deficit > 0 ? Math.ceil(deficit / 10) : 0;

        maximumBorrow = Math.max(maximumBorrow, borrowValue);
        borrowIn = borrowValue;
    }

    return maximumBorrow;
}

function hasSubtractionBorrow(operands) {
    return getMaximumBorrowMarker(operands) > 0;
}

function generateAdditionQuestionCandidate(operandCount = getBoardOperandCountForMode()) {
    const maxDigits = getAdditionMaxDigitsForLevel();
    const leadDigitCount = randomInt(2, maxDigits);
    let operands = [];

    const buildOperands = () => Array.from({ length: operandCount }, () => {
        const digitFloor = Math.max(2, leadDigitCount - 1);
        const digitCount = Math.random() < 0.35
            ? randomInt(digitFloor, leadDigitCount)
            : leadDigitCount;
        return getRandomNumberWithDigits(digitCount);
    });

    operands = buildOperands();

    for (let attempt = 0; attempt < 8 && !hasAdditionCarry(operands); attempt += 1) {
        operands = buildOperands();
    }

    const answer = operands.reduce((sum, operand) => sum + operand, 0);

    return {
        operation: "addition",
        operands,
        left: operands[0],
        right: operands[1],
        answer,
        revealed: state.answersOn
    };
}

function generateSubtractionQuestionCandidate(operandCount = getBoardOperandCountForMode()) {
    const maxDigits = getAdditionMaxDigitsForLevel();

    if (operandCount === 2) {
        const leftDigitCount = randomInt(2, maxDigits);
        const rightDigitFloor = Math.max(2, leftDigitCount - 1);
        const rightDigitCount = Math.random() < 0.35
            ? randomInt(rightDigitFloor, leftDigitCount)
            : leftDigitCount;
        let left = getRandomNumberWithDigits(leftDigitCount);
        let right = getRandomNumberWithDigits(rightDigitCount);

        if (right > left) {
            [left, right] = [right, left];
        }

        for (let attempt = 0; attempt < 8 && (!hasSubtractionBorrow([left, right]) || left === right); attempt += 1) {
            left = getRandomNumberWithDigits(leftDigitCount);
            right = getRandomNumberWithDigits(rightDigitCount);

            if (right > left) {
                [left, right] = [right, left];
            }
        }

        if (left === right) {
            if (left < (10 ** leftDigitCount) - 1) {
                left += 1;
            } else {
                right = Math.max(1, right - 1);
            }
        }

        return {
            operation: "subtraction",
            operands: [left, right],
            left,
            right,
            answer: left - right,
            revealed: state.answersOn
        };
    }

    let operands = null;

    for (let attempt = 0; attempt < 24; attempt += 1) {
        const topDigitCount = randomInt(2, maxDigits);
        const minuend = getRandomNumberWithDigits(topDigitCount);

        if (minuend <= 20) {
            continue;
        }

        const totalSubtrahend = randomInt(20, minuend - 1);
        const firstSubtrahend = randomInt(10, totalSubtrahend - 10);
        const secondSubtrahend = totalSubtrahend - firstSubtrahend;
        const candidateOperands = [minuend, firstSubtrahend, secondSubtrahend];
        const maximumBorrow = getMaximumBorrowMarker(candidateOperands);

        if (hasSubtractionBorrow(candidateOperands) && maximumBorrow <= 1) {
            operands = candidateOperands;
            break;
        }
    }

    if (!operands) {
        let minuend = getRandomNumberWithDigits(randomInt(2, maxDigits));

        while (minuend <= 20) {
            minuend = getRandomNumberWithDigits(randomInt(2, maxDigits));
        }

        const totalSubtrahend = randomInt(20, minuend - 1);
        const firstSubtrahend = randomInt(10, totalSubtrahend - 10);
        operands = [minuend, firstSubtrahend, totalSubtrahend - firstSubtrahend];
    }

    return {
        operation: "subtraction",
        operands,
        left: operands[0],
        right: operands[1],
        answer: operands[0] - operands[1] - operands[2],
        revealed: state.answersOn
    };
}

function getOperandWeightAdjustment(value, discouragedValues) {
    if (!discouragedValues.includes(value)) {
        return 1;
    }

    if (value === 2) {
        return 0.12;
    }

    if (value === 10 || value === 11) {
        return 0.04;
    }

    return 0.35;
}

function buildQuestionKey(question) {
    if (isBoardOperationKey(question.operation)) {
        return `${question.operation}:${getBoardOperands(question).join(":")}`;
    }

    if (question.operation === "division") {
        return `division:${question.dividend}:${question.divisor}`;
    }

    return `multiplication:${question.left}:${question.right}`;
}

function generateQuestionCandidate(modeKey, operationKey, config = {}) {
    const maxFactor = config.maxFactor || state.difficulty;
    const maxRight = config.maxRight || 12;
    const multiplicationRightMax = Math.min(12, maxRight);
    const discouragedValues = [2, 10, 11];

    if (operationKey === "addition") {
        return generateAdditionQuestionCandidate(getBoardOperandCountForMode(modeKey));
    }

    if (operationKey === "subtraction") {
        return generateSubtractionQuestionCandidate(getBoardOperandCountForMode(modeKey));
    }

    if (operationKey === "division") {
        const divisor = modeKey === "flash"
            ? state.focusTable
            : pickQuestionOperand(maxFactor, {
                minimumValue: 2,
                discouragedValues
            });
        const divisionQuotientMax = Math.max(1, Math.min(12, maxRight, Math.floor(144 / divisor)));
        const quotient = pickQuestionOperand(divisionQuotientMax, {
            minimumValue: 2,
            discouragedValues
        });

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
        : pickQuestionOperand(maxFactor, {
            avoidOne: true,
            minimumValue: 2,
            discouragedValues
        });
    const right = pickQuestionOperand(multiplicationRightMax, {
        avoidOne: true,
        minimumValue: 2,
        discouragedValues
    });

    return {
        operation: "multiplication",
        left,
        right,
        answer: left * right,
        revealed: state.answersOn
    };
}

function generateQuestion(modeKey, config = {}) {
    const operationPool = config.operations || getSelectedOperationPool(modeKey);
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
    clearAdditionBoard();
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

function returnToConfig() {
    resetGameView();
    showScreen("config");
}

function returnToMainScreen() {
    resetGameView();
    closeResultDialog();
    showScreen("operation");
}

function startRound() {
    stopTimer();
    closeResultDialog();

    if (isJourneyMode()) {
        const journeyState = syncJourneyState();

        const era = getCurrentJourneyEra();
        const timeLimit = getJourneyTimeLimit(era);
        const playCount = journeyState.eraPlayCounts[era.id] || 0;
        const journeyCards = buildJourneyCardQueue(era, state.journeyQuestionCount, playCount);
        journeyState.eraPlayCounts[era.id] = playCount + 1;
        state.pendingJourneyAction = null;
        state.awaitingJourneyContinue = false;
        state.round = {
            modeKey: state.selectedMode,
            targetQuestions: state.journeyQuestionCount,
            answered: 0,
            correct: 0,
            streak: 0,
            bestStreak: 0,
            score: journeyState.totalScore,
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

        elements.currentMode.textContent = modes[state.selectedMode].label;
        updateScoreboard();
        updateProgress();
        updateBadges();
        updateJourneyUi();
        setRoundControls(true);
        showScreen("game");
        elements.summaryText.textContent = `${era.name} is ready. Reach ${era.passMark}% to unlock the next ${getJourneyConfig().unitLabel}.`;
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
        document.querySelector("#mission-text").textContent = getJourneyMissionText(era);
        document.querySelector("#question-tip").textContent = getJourneyTipText(era);
        scheduleJourneyDisplayRefresh();
        focusActiveAnswerEntry();
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
        focusActiveAnswerEntry();
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
    if (isJourneyMode(state.round.modeKey)) {
        state.round.journeyCardIndex = state.round.answered;
    }
    state.round.question = isJourneyMode(state.round.modeKey)
        ? generateQuestion(state.round.modeKey, {
            operations: getJourneyOperations(getCurrentJourneyEra()),
            maxFactor: state.round.maxFactor,
            maxRight: state.round.maxRight
        })
        : generateQuestion(state.round.modeKey);
    renderQuestionPrompt();
    updateProgress();
    updateJourneyUi();
    updateFlashAnswer();

    if (state.round.modeKey !== "flash") {
        focusActiveAnswerEntry();
    }
}

function submitAnswer(event) {
    event.preventDefault();

    if (!state.round || state.round.over) {
        return;
    }

    const { trimmedValue, guess, incomplete } = getSubmittedAnswerState();

    if (trimmedValue === "" && isJourneyMode(state.round.modeKey) && state.ignoreJourneyEmptySubmit) {
        state.ignoreJourneyEmptySubmit = false;
        return;
    }

    state.ignoreJourneyEmptySubmit = false;

    if (trimmedValue === "" || incomplete || Number.isNaN(guess)) {
        const boardCopy = getBoardOperationCopy();
        showFeedback(
            incomplete && isBoardQuestion(state.round.question)
                ? `${player.nickname}, fill each answer box before you check the ${boardCopy.resultLabel}.`
                : `${player.nickname}, type a number before you check your answer.`,
            "bad"
        );
        return;
    }

    if (isJourneyMode(state.round.modeKey)) {
        handleJourneyAnswer(guess);
        return;
    }

    if (isBoardQuestion(state.round.question)) {
        handleAdditionAnswer(guess);
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
    clearAdditionBoard();
    elements.answerInput.disabled = true;
    elements.submitAnswer.disabled = true;
    elements.showAnswer.disabled = true;
    elements.nextCard.disabled = true;

    const result = getResultDialogData(state.round, { message });

    if (isJourneyMode(state.round.modeKey)) {
        const currentEras = getJourneyEras(state.round.modeKey);
        const journeyState = getJourneyStateForMode(state.round.modeKey);
        const era = getJourneyEraById(state.round.eraId, state.round.modeKey) || getCurrentJourneyEra();
        const accuracy = getRoundAccuracy(state.round);

        if (accuracy >= era.passMark) {
            if (!journeyState.completedEraIds.includes(era.id)) {
                journeyState.completedEraIds.push(era.id);
            }

            journeyState.unlockedEraIndex = Math.max(
                journeyState.unlockedEraIndex,
                Math.min(journeyState.currentEraIndex + 1, currentEras.length - 1)
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
    updateModeCardAvailability(roundActive);
    elements.startGame.textContent = roundActive ? `${player.nickname}'s Round In Progress` : "Start Sky's Game";
}

function startTimer() {
    stopTimer();
    state.timerId = window.setInterval(() => {
        if (!state.round || state.round.over) {
            stopTimer();
            return;
        }

        if ((isJourneyMode(state.round.modeKey) && state.awaitingJourneyContinue) || isJourneyImageModalOpen()) {
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

elements.operationChoiceCards.forEach((card) => {
    card.addEventListener("click", () => {
        openConfigForOperation(card.dataset.operationChoice);
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

elements.backToOperation.addEventListener("click", () => {
    showScreen("operation");
});

elements.backToSetup.addEventListener("click", () => {
    returnToConfig();
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
        document.querySelector("#mission-text").textContent = getJourneyMissionText(era);
        document.querySelector("#question-tip").textContent = getJourneyTipText(era);
    };

    if (state.pendingJourneyAction === "next-era") {
        const journeyModeKey = state.round.modeKey;
        const currentEras = getJourneyEras(journeyModeKey);
        state.journey.currentEraIndex = Math.min(state.journey.currentEraIndex + 1, currentEras.length - 1);
        startRound();
        setMode(journeyModeKey);
        return;
    }

    if (state.pendingJourneyAction === "retry-era") {
        const journeyModeKey = state.round.modeKey;
        startRound();
        setMode(journeyModeKey);
        return;
    }

    if (state.pendingJourneyAction === "restart-journey") {
        const journeyModeKey = state.round.modeKey;
        state.journeyStates[journeyModeKey] = createJourneyState();
        state.journey = state.journeyStates[journeyModeKey];
        startRound();
        setMode(journeyModeKey);
        return;
    }

    if (state.pendingSprintLevelUp) {
        setSprintLevel(state.pendingSprintLevelUp);
    }

    startRound();
});

elements.resultBackToSetup.addEventListener("click", () => {
    returnToConfig();
});

elements.resultBackToMain.addEventListener("click", () => {
    returnToMainScreen();
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

elements.additionBoard.addEventListener("input", handleAdditionBoardInput);
elements.additionBoard.addEventListener("keydown", handleAdditionBoardKeydown);
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
setDifficulty(12);
setSprintLevel("very-easy");
setFocusTable(6);
setQuestionCount(10);
setJourneyQuestionCount(10);
setMode("normal");
resetGameView();
showScreen("operation");
elements.answersOn.checked = state.answersOn;