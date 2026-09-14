const dashboardData = {
  store: {
    day: {
      core: {
        examBookings: { actual: 18, target: 24, trend: "+2 vs yesterday" },
        examCount: { actual: 14, target: 22, trend: "5 needed to hit pace by 4 PM" },
        startOfDayBooked: { actual: 21, target: 24, trend: "88% load at open" },
        seenSoFar: { actual: 14, target: 22, trend: "3 patients in current queue" },
        remainingOnBooks: { actual: 7, target: 10, trend: "2 high-value exams unconfirmed" },
        egpBookings: { actual: 11, target: 16, trend: "AOV $326" }
      },
      pacing: { percent: 58, expected: 63, status: "Slightly behind expected pace." },
      secondary: {
        sameDayConversion: { value: 54, detail: "Target 60% | +4 pts WoW" },
        driAcceptance: { value: 67, detail: "Target 70% | Stable vs yesterday" },
        prebookRate: { value: 41, detail: "Target 50% | Focus checkout scripting" }
      },
      dropout: { label: "+10% net gain on day (10 -> 11 exams)" },
      epsh: { progress: 72, label: "Tier 2 pacing. 13 points to Tier 3." },
      coach: {
        summary:
          "Today target: 22 exams | Current: 14 | On pace: No | Needed by 3 PM: +4 completed exams",
        lines: {
          target: [8, 18, 30, 45, 62, 78, 92, 100],
          expected: [6, 14, 27, 41, 58, 71, 85, 96],
          actual: [4, 11, 20, 31, 44, 58, 67, 73]
        },
        waterfall: [
          { label: "Booked AM", value: 21 },
          { label: "Seen", value: 14 },
          { label: "No-shows", value: 3 },
          { label: "Recovered", value: 2 },
          { label: "Net total", value: 13 }
        ]
      },
      planner: { queueHealth: 82 }
    },
    wtd: {
      core: {
        examBookings: { actual: 94, target: 110, trend: "86% to weekly target" },
        examCount: { actual: 79, target: 98, trend: "Need 19 by week close" },
        startOfDayBooked: { actual: 110, target: 120, trend: "Front-loaded well this week" },
        seenSoFar: { actual: 79, target: 98, trend: "Consistent throughput trend" },
        remainingOnBooks: { actual: 31, target: 42, trend: "Pipeline healthy for Fri/Sat" },
        egpBookings: { actual: 56, target: 68, trend: "AOV $334" }
      },
      pacing: { percent: 74, expected: 70, status: "Ahead of expected weekly pace." },
      secondary: {
        sameDayConversion: { value: 58, detail: "Target 60% | +2 pts vs last week" },
        driAcceptance: { value: 71, detail: "Target 70% | Above target" },
        prebookRate: { value: 46, detail: "Target 50% | Improving trend" }
      },
      dropout: { label: "+4% net change WTD" },
      epsh: { progress: 78, label: "Tier 2 secure. Near Tier 3 threshold." },
      coach: {
        summary:
          "WTD target: 98 exams | Current: 79 | On pace: Yes | Remaining: 19 exams this week",
        lines: {
          target: [12, 24, 38, 52, 68, 82, 94, 100],
          expected: [10, 21, 33, 47, 61, 76, 88, 97],
          actual: [11, 22, 36, 50, 67, 79, 89, 98]
        },
        waterfall: [
          { label: "Booked", value: 110 },
          { label: "Seen", value: 79 },
          { label: "No-shows", value: 12 },
          { label: "Recovered", value: 8 },
          { label: "Net total", value: 75 }
        ]
      },
      planner: { queueHealth: 88 }
    },
    mtd: {
      core: {
        examBookings: { actual: 401, target: 460, trend: "87% to month target" },
        examCount: { actual: 349, target: 420, trend: "Need 71 to close month" },
        startOfDayBooked: { actual: 460, target: 500, trend: "Strong opening funnel this month" },
        seenSoFar: { actual: 349, target: 420, trend: "Retention holding above plan" },
        remainingOnBooks: { actual: 111, target: 140, trend: "Upside available in follow-ups" },
        egpBookings: { actual: 231, target: 280, trend: "AOV $339" }
      },
      pacing: { percent: 83, expected: 79, status: "Ahead of expected monthly pace." },
      secondary: {
        sameDayConversion: { value: 61, detail: "Target 60% | Sustained gain" },
        driAcceptance: { value: 73, detail: "Target 70% | Healthy margin" },
        prebookRate: { value: 49, detail: "Target 50% | Almost at target" }
      },
      dropout: { label: "+2% net change MTD" },
      epsh: { progress: 86, label: "Tier 3 tracking. 9 points to max tier." },
      coach: {
        summary:
          "MTD target: 420 exams | Current: 349 | On pace: Yes | Required close pace: +12 exams/day",
        lines: {
          target: [9, 20, 31, 43, 56, 69, 84, 100],
          expected: [8, 18, 29, 41, 53, 66, 80, 94],
          actual: [9, 19, 32, 45, 59, 74, 87, 99]
        },
        waterfall: [
          { label: "Booked", value: 460 },
          { label: "Seen", value: 349 },
          { label: "No-shows", value: 44 },
          { label: "Recovered", value: 30 },
          { label: "Net total", value: 335 }
        ]
      },
      planner: { queueHealth: 91 }
    }
  },
  doctor: {
    day: {
      core: {
        examBookings: { actual: 7, target: 9, trend: "+1 vs yesterday" },
        examCount: { actual: 6, target: 8, trend: "2 to hit personal pace" },
        startOfDayBooked: { actual: 8, target: 9, trend: "89% loaded at open" },
        seenSoFar: { actual: 6, target: 8, trend: "1 in chair, 1 waiting" },
        remainingOnBooks: { actual: 2, target: 3, trend: "1 unconfirmed high value" },
        egpBookings: { actual: 4, target: 6, trend: "AOV $354" }
      },
      pacing: { percent: 69, expected: 65, status: "Slightly ahead of expected pace." },
      secondary: {
        sameDayConversion: { value: 62, detail: "Target 65% | Close gap with outreach" },
        driAcceptance: { value: 75, detail: "Target 74% | Above target" },
        prebookRate: { value: 47, detail: "Target 52% | Moderate gap" }
      },
      dropout: { label: "0% net change today" },
      epsh: { progress: 74, label: "Tier 2 pacing for individual doctor." },
      coach: {
        summary:
          "Doctor target: 8 exams | Current: 6 | On pace: Yes | Needed by 3 PM: +1 completed exam",
        lines: {
          target: [12, 22, 35, 48, 62, 75, 89, 100],
          expected: [9, 20, 32, 45, 58, 71, 83, 95],
          actual: [11, 19, 34, 50, 63, 73, 84, 92]
        },
        waterfall: [
          { label: "Booked AM", value: 8 },
          { label: "Seen", value: 6 },
          { label: "No-shows", value: 1 },
          { label: "Recovered", value: 1 },
          { label: "Net total", value: 6 }
        ]
      },
      planner: { queueHealth: 86 }
    },
    wtd: {
      core: {
        examBookings: { actual: 38, target: 45, trend: "84% weekly goal completion" },
        examCount: { actual: 33, target: 40, trend: "Need 7 by week close" },
        startOfDayBooked: { actual: 45, target: 50, trend: "High consistency this week" },
        seenSoFar: { actual: 33, target: 40, trend: "Strong conversion from bookings" },
        remainingOnBooks: { actual: 12, target: 14, trend: "Light confirmation backlog" },
        egpBookings: { actual: 21, target: 26, trend: "AOV $349" }
      },
      pacing: { percent: 79, expected: 72, status: "Ahead of expected weekly pace." },
      secondary: {
        sameDayConversion: { value: 64, detail: "Target 65% | +3 pts vs prior week" },
        driAcceptance: { value: 77, detail: "Target 74% | Excellent trend" },
        prebookRate: { value: 50, detail: "Target 52% | Near target" }
      },
      dropout: { label: "+3% net change WTD" },
      epsh: { progress: 82, label: "Tier 2 solid. Near Tier 3." },
      coach: {
        summary:
          "WTD doctor target: 40 exams | Current: 33 | On pace: Yes | Remaining: 7 this week",
        lines: {
          target: [10, 23, 36, 50, 64, 79, 90, 100],
          expected: [8, 20, 33, 46, 59, 72, 84, 94],
          actual: [9, 22, 35, 49, 66, 80, 91, 99]
        },
        waterfall: [
          { label: "Booked", value: 45 },
          { label: "Seen", value: 33 },
          { label: "No-shows", value: 4 },
          { label: "Recovered", value: 3 },
          { label: "Net total", value: 32 }
        ]
      },
      planner: { queueHealth: 90 }
    },
    mtd: {
      core: {
        examBookings: { actual: 161, target: 190, trend: "85% monthly completion" },
        examCount: { actual: 141, target: 170, trend: "Need 29 to close month" },
        startOfDayBooked: { actual: 190, target: 210, trend: "Consistent patient pipeline" },
        seenSoFar: { actual: 141, target: 170, trend: "Throughput stable month-over-month" },
        remainingOnBooks: { actual: 49, target: 55, trend: "Opportunity in reminder campaigns" },
        egpBookings: { actual: 95, target: 112, trend: "AOV $357" }
      },
      pacing: { percent: 84, expected: 80, status: "Ahead of expected monthly pace." },
      secondary: {
        sameDayConversion: { value: 66, detail: "Target 65% | Above target" },
        driAcceptance: { value: 79, detail: "Target 74% | Best in district" },
        prebookRate: { value: 53, detail: "Target 52% | Surpassed target" }
      },
      dropout: { label: "+1% net change MTD" },
      epsh: { progress: 89, label: "Tier 3 tracking. Close to max tier." },
      coach: {
        summary:
          "MTD doctor target: 170 exams | Current: 141 | On pace: Yes | Required close pace: +5/day",
        lines: {
          target: [9, 20, 32, 44, 57, 70, 84, 100],
          expected: [8, 18, 29, 41, 53, 67, 81, 94],
          actual: [9, 20, 33, 46, 61, 75, 88, 99]
        },
        waterfall: [
          { label: "Booked", value: 190 },
          { label: "Seen", value: 141 },
          { label: "No-shows", value: 20 },
          { label: "Recovered", value: 15 },
          { label: "Net total", value: 136 }
        ]
      },
      planner: { queueHealth: 92 }
    }
  }
};

const state = {
  mode: "store",
  period: "day",
  concept: "concept-1",
  lastUpdated: new Date()
};

const coreOrder = [
  "examBookings",
  "examCount",
  "startOfDayBooked",
  "seenSoFar",
  "remainingOnBooks",
  "egpBookings"
];

function getCurrentData() {
  return dashboardData[state.mode][state.period];
}

function percentOf(actual, target) {
  if (!target) {
    return 0;
  }
  return Math.max(0, Math.min(120, Math.round((actual / target) * 100)));
}

function updateMetricCards() {
  const core = getCurrentData().core;
  document.querySelectorAll(".metric-card").forEach((card) => {
    const key = card.dataset.metric;
    const metric = core[key];
    if (!metric) {
      return;
    }
    const ratio = percentOf(metric.actual, metric.target);
    card.querySelector(".metric-actual").textContent = metric.actual;
    card.querySelector(".metric-target").textContent = `Target ${metric.target} • ${ratio}% to target`;
    card.querySelector(".metric-trend").textContent = metric.trend;
    card.querySelector(".progress-fill").style.width = `${Math.min(ratio, 100)}%`;
  });
}

function updateSecondary() {
  const data = getCurrentData();
  document.querySelectorAll("[data-percent-metric]").forEach((node) => {
    const key = node.dataset.percentMetric;
    const value = data.secondary[key];
    if (!value) {
      return;
    }
    node.querySelector(".big").textContent = `${value.value}%`;
    node.querySelector(".subtle").textContent = value.detail;
  });
  document.getElementById("dropoutLabel").textContent = data.dropout.label;
  document.getElementById("tierLabel").textContent = data.epsh.label;
  document.getElementById("tierProgress").style.width = `${data.epsh.progress}%`;
}

function updatePacingPanel() {
  const pacing = getCurrentData().pacing;
  const donut = document.getElementById("paceDonut");
  const degrees = Math.round((Math.min(pacing.percent, 100) / 100) * 360);
  donut.style.background = `conic-gradient(#1f6feb 0deg, #1f6feb ${degrees}deg, #ebf1ff ${degrees}deg)`;
  document.getElementById("pacePercent").textContent = `${pacing.percent}%`;
  document.getElementById("paceLine").textContent = `${pacing.status} Expected: ${pacing.expected}%`;
}

function updatePlannerRail() {
  const data = getCurrentData();
  const labels = {
    examBookings: "Exam bookings",
    examCount: "Exam count",
    seenSoFar: "Seen so far",
    remainingOnBooks: "Remaining"
  };
  document.querySelectorAll("[data-rail]").forEach((node) => {
    const key = node.dataset.rail;
    const metric = data.core[key];
    node.innerHTML = `<h4>${labels[key]}</h4><p>${metric.actual} / ${metric.target}</p>`;
  });
  document.getElementById("thermoFill").style.width = `${Math.min(data.pacing.percent, 100)}%`;
  document.getElementById(
    "thermoLabel"
  ).textContent = `Pace thermometer: ${data.pacing.percent}% to target`;
  document.getElementById("queueHealth").textContent = `${data.planner.queueHealth}%`;
}

function toPolyline(values, width, height) {
  const xPad = 16;
  const yPad = 18;
  const usableWidth = width - xPad * 2;
  const usableHeight = height - yPad * 2;
  return values
    .map((value, index) => {
      const x = xPad + (usableWidth * index) / (values.length - 1);
      const y = yPad + usableHeight - (value / 100) * usableHeight;
      return `${x},${y}`;
    })
    .join(" ");
}

function updateCoachSection() {
  const coach = getCurrentData().coach;
  document.getElementById("goalSummary").textContent = coach.summary;
  document.getElementById("lineTarget").setAttribute("points", toPolyline(coach.lines.target, 520, 220));
  document.getElementById("lineExpected").setAttribute(
    "points",
    toPolyline(coach.lines.expected, 520, 220)
  );
  document.getElementById("lineActual").setAttribute("points", toPolyline(coach.lines.actual, 520, 220));
  const maxValue = Math.max(...coach.waterfall.map((item) => item.value));
  document.getElementById("waterfall").innerHTML = coach.waterfall
    .map((row) => {
      const width = Math.round((row.value / maxValue) * 100);
      return `
      <div class="wf-row">
        <strong>${row.label}</strong>
        <div class="wf-bar"><span style="width:${width}%"></span></div>
        <span>${row.value}</span>
      </div>
    `;
    })
    .join("");
  document.getElementById("coachTierProgress").style.width = `${getCurrentData().epsh.progress}%`;
  document.getElementById("coachTierLabel").textContent = getCurrentData().epsh.label;
}

function updateLiveStamp() {
  const now = new Date();
  const diffSeconds = Math.floor((now - state.lastUpdated) / 1000);
  let label = "Updated just now";
  if (diffSeconds >= 60) {
    label = `Updated ${Math.floor(diffSeconds / 60)} min ago`;
  } else if (diffSeconds >= 10) {
    label = `Updated ${diffSeconds}s ago`;
  }
  document.getElementById("liveStamp").textContent = label;
}

function render() {
  updateMetricCards();
  updateSecondary();
  updatePacingPanel();
  updatePlannerRail();
  updateCoachSection();
  updateLiveStamp();
}

function setActiveButton(group, attr, value) {
  group.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset[attr] === value);
  });
}

function setupEvents() {
  const modeToggle = document.getElementById("modeToggle");
  modeToggle.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (!button) {
      return;
    }
    state.mode = button.dataset.mode;
    setActiveButton(modeToggle, "mode", state.mode);
    state.lastUpdated = new Date();
    render();
  });

  const periodToggle = document.getElementById("periodToggle");
  periodToggle.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-period]");
    if (!button) {
      return;
    }
    state.period = button.dataset.period;
    setActiveButton(periodToggle, "period", state.period);
    state.lastUpdated = new Date();
    render();
  });

  const conceptNav = document.getElementById("conceptNav");
  conceptNav.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-concept]");
    if (!button) {
      return;
    }
    state.concept = button.dataset.concept;
    conceptNav.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.concept === state.concept);
    });
    document.querySelectorAll(".concept").forEach((concept) => {
      concept.classList.toggle("is-active", concept.id === state.concept);
    });
  });
}

function simulateLiveUpdates() {
  const dayStore = dashboardData.store.day.core;
  const dayDoctor = dashboardData.doctor.day.core;
  if (dayStore.seenSoFar.actual < dayStore.examCount.target) {
    dayStore.seenSoFar.actual += 1;
    dayStore.examCount.actual += 1;
    dayStore.remainingOnBooks.actual = Math.max(0, dayStore.remainingOnBooks.actual - 1);
  }
  if (dayDoctor.seenSoFar.actual < dayDoctor.examCount.target) {
    dayDoctor.seenSoFar.actual += 1;
    dayDoctor.examCount.actual += 1;
    dayDoctor.remainingOnBooks.actual = Math.max(0, dayDoctor.remainingOnBooks.actual - 1);
  }
  state.lastUpdated = new Date();
  render();
}

setupEvents();
render();
setInterval(updateLiveStamp, 1000);
setInterval(simulateLiveUpdates, 18000);
