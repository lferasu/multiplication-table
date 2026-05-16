const player = {
    firstName: "Nathan",
    nickname: "Sky"
};

const allowedQuestionCounts = [10, 25, 50, 100];

const modes = {
    normal: {
        label: "Normal",
        timed: false,
        timeLimit: null,
        tip: `${player.nickname}, normal mode gives you time to think and build your streak.`
    },
    sprint: {
        label: "Sprint",
        timed: true,
        timeLimit: 45,
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
        tip: `${player.nickname}, flip through one table and turn Answers On when you want the reveal.`
    }
};

const elements = {
    difficulty: document.querySelector("#difficulty"),
    focusTableGroup: document.querySelector("#focus-table-group"),
    focusTableHelp: document.querySelector("#focus-table-help"),
    focusTable: document.querySelector("#focus-table"),
    questionCount: document.querySelector("#question-count"),
    scopeLabel: document.querySelector("#scope-label"),
    currentDifficulty: document.querySelector("#current-difficulty"),
    currentMode: document.querySelector("#current-mode"),
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
    missionText: document.querySelector("#mission-text"),
    progressText: document.querySelector("#progress-text"),
    progressBar: document.querySelector("#progress-bar"),
    feedbackBanner: document.querySelector("#feedback-banner"),
    summaryText: document.querySelector("#summary-text"),
    scoreValue: document.querySelector("#score-value"),
    streakValue: document.querySelector("#streak-value"),
    timerValue: document.querySelector("#timer-value"),
    timerPill: document.querySelector(".timer-pill"),
    badgeStrip: document.querySelector("#badge-strip"),
    modeCards: document.querySelectorAll(".mode-card")
};

const state = {
    selectedMode: "normal",
    difficulty: 1,
    focusTable: 6,
    answersOn: false,
    questionCount: 10,
    round: null,
    timerId: null
};

function getMissionText(modeKey) {
    const count = state.questionCount;

    if (modeKey === "sprint") {
        return `${player.nickname}, answer ${count} questions before the timer hits zero.`;
    }

    if (modeKey === "perfect") {
        return `${player.nickname}, get all ${count} answers right. One mistake ends the round.`;
    }

    if (modeKey === "flash") {
        return `${player.nickname}, review ${count} flash cards from the ${state.focusTable} times table.`;
    }

    return `${player.nickname}, finish ${count} questions and collect as many stars as you can.`;
}

function getTipText(modeKey) {
    if (modeKey === "flash") {
        return `${player.nickname}, practice only the ${state.focusTable} times table and flip answers on when you want help.`;
    }

    return modes[modeKey].tip;
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
        option.textContent = `${value} times table`;
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
    elements.missionText.textContent = getMissionText(modeKey);
    elements.questionTip.textContent = getTipText(modeKey);
    syncModeUi();
}

function setDifficulty(value) {
    state.difficulty = value;
    updateScopeDisplay();
}

function setFocusTable(value) {
    const safeValue = Math.max(1, Math.min(12, value));
    state.focusTable = safeValue;
    elements.focusTable.value = String(safeValue);
    elements.missionText.textContent = getMissionText(state.selectedMode);
    elements.questionTip.textContent = getTipText(state.selectedMode);
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

function updateScopeDisplay() {
    if (state.selectedMode === "flash") {
        elements.scopeLabel.textContent = "Table";
        elements.currentDifficulty.textContent = `${state.focusTable}s`;
        return;
    }

    elements.scopeLabel.textContent = "Level";
    elements.currentDifficulty.textContent = String(state.difficulty);
}

function shouldShowFlashAnswer() {
    return Boolean(
        state.selectedMode === "flash"
        && state.round
        && state.round.question
        && (state.answersOn || state.round.question.revealed)
    );
}

function updateFlashAnswer() {
    if (shouldShowFlashAnswer()) {
        const { left, right, answer } = state.round.question;
        elements.flashAnswer.textContent = `Answer: ${left} × ${right} = ${answer}`;
        elements.flashAnswer.classList.remove("hidden");
        return;
    }

    elements.flashAnswer.classList.add("hidden");
}

function syncModeUi() {
    const isFlashMode = state.selectedMode === "flash";
    elements.focusTableGroup.classList.toggle("hidden", !isFlashMode);
    elements.focusTableHelp.classList.toggle("hidden", !isFlashMode);
    elements.answerForm.classList.toggle("hidden", isFlashMode);
    elements.flashControls.classList.toggle("hidden", !isFlashMode);
    updateScopeDisplay();
    updateFlashAnswer();
    setRoundControls(Boolean(state.round && !state.round.over));
}

function startRound() {
    stopTimer();

    const mode = modes[state.selectedMode];
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
        remainingTime: mode.timeLimit
    };

    updateScoreboard();
    updateProgress();
    updateBadges();
    setRoundControls(true);
    elements.summaryText.textContent = state.selectedMode === "flash"
        ? `${player.nickname}'s flash cards are ready for the ${state.focusTable} times table.`
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
        elements.timerValue.textContent = `${mode.timeLimit}s`;
        startTimer();
    } else {
        elements.timerValue.textContent = "Free";
        elements.timerPill.classList.remove("warning");
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

    const left = state.round.modeKey === "flash"
        ? state.focusTable
        : randomInt(1, state.difficulty);
    const right = randomInt(1, 12);

    state.round.question = {
        left,
        right,
        answer: left * right,
        revealed: state.answersOn
    };

    elements.questionText.textContent = state.round.modeKey === "flash"
        ? `${left} × ${right}`
        : `${left} × ${right} = ?`;
    updateProgress();
    updateFlashAnswer();
}

function submitAnswer(event) {
    event.preventDefault();

    if (!state.round || state.round.over) {
        return;
    }

    const trimmedValue = elements.answerInput.value.trim();
    const guess = Number(trimmedValue);

    if (trimmedValue === "" || Number.isNaN(guess)) {
        showFeedback(`${player.nickname}, type a number before you check your answer.`, "bad");
        return;
    }

    const isCorrect = guess === state.round.question.answer;
    state.round.answered += 1;

    if (isCorrect) {
        state.round.correct += 1;
        state.round.streak += 1;
        state.round.bestStreak = Math.max(state.round.bestStreak, state.round.streak);
        state.round.score += 100 + (state.round.streak - 1) * 20;
        showFeedback(`Nice job, ${player.nickname}. ${state.round.question.left} × ${state.round.question.right} = ${state.round.question.answer}.`, "good");
    } else {
        state.round.streak = 0;
        state.round.score = Math.max(0, state.round.score - 30);
        showFeedback(`Good try, ${player.firstName}. ${state.round.question.left} × ${state.round.question.right} = ${state.round.question.answer}.`, "bad");
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
    showFeedback(`Here it is, ${player.nickname}. ${state.round.question.left} × ${state.round.question.right} = ${state.round.question.answer}.`, "good");
}

function advanceFlashCard() {
    if (!state.round || state.round.over || state.round.modeKey !== "flash") {
        return;
    }

    state.round.answered += 1;
    updateProgress();
    updateBadges();

    if (state.round.answered >= state.round.targetQuestions) {
        finishRound(`${player.nickname}, you finished the ${state.focusTable} times table flash cards.`);
        return;
    }

    nextQuestion();
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

    if (state.round.modeKey === "flash") {
        elements.questionText.textContent = `${player.nickname}'s Flash Cards Complete`;
        elements.summaryText.textContent = `${player.firstName} reviewed ${state.round.answered} cards from the ${state.focusTable} times table.`;
        showFeedback(message || `${player.nickname}, great job reviewing the ${state.focusTable} times table.`, "good");
        updateScoreboard();
        updateBadges();
        updateFlashAnswer();
        return;
    }

    const accuracy = state.round.answered === 0
        ? 0
        : Math.round((state.round.correct / state.round.answered) * 100);

    const perfect = state.round.answered > 0 && state.round.correct === state.round.answered;
    const finalMessage = message || (perfect
        ? `${player.nickname}, perfect score unlocked. You earned the Sky Champion badge.`
        : `${player.firstName}, round complete. You finished with ${accuracy}% accuracy.`);

    elements.questionText.textContent = perfect ? `${player.nickname}'s Perfect Score!` : `${player.nickname}'s Round Complete`;
    elements.summaryText.textContent = `${player.firstName} got ${state.round.correct} correct out of ${state.round.answered}. Best streak: ${state.round.bestStreak}. Score: ${state.round.score}.`;
    showFeedback(finalMessage, perfect ? "good" : "neutral");
    updateBadges();
}

function setRoundControls(roundActive) {
    const isFlashMode = state.selectedMode === "flash";

    elements.difficulty.disabled = roundActive || isFlashMode;
    elements.focusTable.disabled = roundActive || !isFlashMode;
    elements.questionCount.disabled = roundActive;
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

        state.round.remainingTime -= 1;
        elements.timerValue.textContent = `${state.round.remainingTime}s`;
        elements.timerPill.classList.toggle("warning", state.round.remainingTime <= 10);

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
}

function updateScoreboard() {
    const round = state.round;

    if (round && round.modeKey === "flash") {
        elements.scoreValue.textContent = "--";
        elements.streakValue.textContent = "--";
        return;
    }

    elements.scoreValue.textContent = round ? String(round.score) : "0";
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
            label: "Sky Champion",
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

elements.difficulty.addEventListener("change", (event) => {
    setDifficulty(Number(event.target.value));
});

elements.focusTable.addEventListener("change", (event) => {
    setFocusTable(Number(event.target.value));
});

elements.questionCount.addEventListener("change", (event) => {
    setQuestionCount(Number(event.target.value));
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

elements.answerForm.addEventListener("submit", submitAnswer);

populateDifficultyOptions();
populateFocusTableOptions();
setDifficulty(1);
setFocusTable(6);
setQuestionCount(10);
setMode("normal");
setRoundControls(false);
updateProgress();
updateScoreboard();
updateBadges();
elements.answersOn.checked = state.answersOn;