const DAY_START = 8 * 60;
const DAY_END = 18 * 60;
const DAY_RANGE = DAY_END - DAY_START;
const BOARD_HEIGHT = 800;

const rooms = [
  {
    name: "Exam 1",
    meta: "Shared room · any provider",
    hours: "8 am - 6 pm",
    overlays: [{ start: "11:55", end: "12:30" }],
    events: [
      {
        kind: "glasses",
        code: "CM",
        start: "08:00",
        end: "08:40",
        title: "Glasses & Contacts Exam",
        patient: "Reggie A.",
        provider: "Stephanie Putter",
      },
      {
        kind: "staff",
        code: "BK",
        start: "08:15",
        end: "08:50",
        title: "Staff Meeting",
        patient: "New Hire Orientation",
        provider: "Dr. N. Oko",
      },
      {
        kind: "contact",
        code: "AI",
        start: "09:00",
        end: "09:30",
        title: "Glasses & Contacts Exam",
        patient: "Brooke V.",
        provider: "Tanya Beck",
      },
      {
        kind: "break",
        code: "LW",
        start: "10:45",
        end: "11:15",
        title: "Over Fny",
        patient: "Marcus Bell",
        provider: "Diana West",
      },
      {
        kind: "other",
        code: "CX",
        start: "13:10",
        end: "14:00",
        title: "Glasses & Contacts Exam",
        patient: "Nina Vermeulen",
        provider: "Robert Seems",
      },
      {
        kind: "glasses",
        code: "PY",
        start: "15:00",
        end: "15:45",
        title: "Glasses Exam",
        patient: "Owen Frazier",
        provider: "Sasha Ford",
      },
      {
        kind: "staff",
        code: "BK",
        start: "16:30",
        end: "17:00",
        title: "Staff Meeting",
        patient: "Mies Turner",
        provider: "Elaine Brooks",
        flag: "OLDER ADULT",
      },
    ],
  },
  {
    name: "Exam 2",
    meta: "BR: 8 am - 12 pm · AC: 12 pm - 6 pm",
    hours: "8 am - 6 pm",
    overlays: [{ start: "12:35", end: "13:10" }],
    events: [
      {
        kind: "glasses",
        code: "AI",
        start: "08:15",
        end: "08:45",
        title: "Glasses & Contacts Exam",
        patient: "Grace Okafor",
        provider: "Christina Jackson",
      },
      {
        kind: "contact",
        code: "AR",
        start: "09:20",
        end: "10:05",
        title: "Glasses & Contacts Exam",
        patient: "Nora Beal",
        provider: "Hugh Palmer",
      },
      {
        kind: "other",
        code: "BR",
        start: "10:40",
        end: "11:25",
        title: "Glasses & Contacts Exam",
        patient: "Ravi Shah",
        provider: "Sam Lund",
        flag: "MINOR",
      },
      {
        kind: "staff",
        code: "BK",
        start: "12:40",
        end: "13:15",
        title: "Break",
        patient: "Dr. Avery Furrani",
        provider: "Exam 2",
      },
      {
        kind: "glasses",
        code: "AI",
        start: "13:20",
        end: "14:05",
        title: "Glasses & Contacts Exam",
        patient: "Helena Ruiz",
        provider: "Paula Simms",
        flag: "OLDER ADULT",
      },
      {
        kind: "contact",
        code: "CM",
        start: "14:55",
        end: "15:40",
        title: "Glasses & Contacts Exam",
        patient: "Dana Whitfield",
        provider: "Michael Felone",
      },
      {
        kind: "staff",
        code: "BK",
        start: "16:40",
        end: "17:20",
        title: "Staff Meeting",
        patient: "Jordan Vance",
        provider: "Lucia Moreno",
      },
    ],
  },
  {
    name: "Exam 3",
    meta: "Shared room · any provider",
    hours: "8 am - 6 pm",
    overlays: [{ start: "11:05", end: "11:45" }],
    events: [
      {
        kind: "glasses",
        code: "CM",
        start: "08:30",
        end: "09:15",
        title: "Glasses & Contacts Exam",
        patient: "Corey Vasquez",
        provider: "Devon Blake",
        flag: "MINOR",
      },
      {
        kind: "contact",
        code: "AR",
        start: "09:45",
        end: "10:30",
        title: "Contact Lens Exam",
        patient: "Priya Nair",
        provider: "Fiona Walsh",
      },
      {
        kind: "staff",
        code: "BK",
        start: "10:35",
        end: "11:20",
        title: "Staff Meeting",
        patient: "Isabel Cruz",
        provider: "Cleo Jo",
        flag: "MINOR",
      },
      {
        kind: "other",
        code: "CX",
        start: "12:40",
        end: "13:20",
        title: "Glasses & Contacts Exam",
        patient: "Sofia Ramirez",
        provider: "Wendy Cho",
      },
      {
        kind: "glasses",
        code: "PY",
        start: "13:35",
        end: "14:05",
        title: "Glasses & Contacts Exam",
        patient: "Tim Doolley",
        provider: "Nasia Farr",
        flag: "OLDER ADULT",
      },
      {
        kind: "break",
        code: "LW",
        start: "15:15",
        end: "15:45",
        title: "Break",
        patient: "Colin Reyes",
        provider: "Dr. Artha Chen",
      },
      {
        kind: "glasses",
        code: "CM",
        start: "15:50",
        end: "16:35",
        title: "Glasses & Contacts Exam",
        patient: "Priscilla Ono",
        provider: "Trent Boyle",
      },
      {
        kind: "staff",
        code: "BK",
        start: "17:15",
        end: "17:50",
        title: "Staff Meeting",
        patient: "Shaun Rowan",
        provider: "Tara Quinn",
      },
    ],
  },
  {
    name: "Exam 4",
    meta: "Shared room · any provider",
    hours: "8 am - 6 pm",
    overlays: [{ start: "10:45", end: "11:20" }],
    events: [
      {
        kind: "glasses",
        code: "CM",
        start: "08:15",
        end: "09:00",
        title: "Glasses & Contacts Exam",
        patient: "Gabriel Gomez",
        provider: "Mona Lister",
      },
      {
        kind: "glasses",
        code: "AI",
        start: "08:20",
        end: "09:05",
        title: "Glasses & Contacts Exam",
        patient: "Gordon Pace",
        provider: "Austin Matloff",
      },
      {
        kind: "contact",
        code: "AI",
        start: "09:40",
        end: "10:30",
        title: "Glasses & Contacts Exam",
        patient: "Christian Matias",
        provider: "Harmoni Gao",
        flag: "MINOR",
      },
      {
        kind: "contact",
        code: "AI",
        start: "10:35",
        end: "11:20",
        title: "Glasses & Contacts Exam",
        patient: "Steven Fredericks",
        provider: "Emma Mullins",
        flag: "OLDER ADULT",
      },
      {
        kind: "staff",
        code: "BK",
        start: "12:45",
        end: "13:30",
        title: "Glasses & Contacts Exam",
        patient: "Timothy Madden",
        provider: "Carter McCray",
      },
      {
        kind: "glasses",
        code: "AR",
        start: "13:55",
        end: "14:35",
        title: "Glasses & Contacts Exam",
        patient: "Kati Gray",
        provider: "Brooke Monaco",
      },
      {
        kind: "other",
        code: "BK",
        start: "14:40",
        end: "15:25",
        title: "Glasses & Contacts Exam",
        patient: "Val Ito",
        provider: "Hank Sellers",
      },
      {
        kind: "staff",
        code: "BK",
        start: "16:45",
        end: "17:15",
        title: "Glasses & Contacts Exam",
        patient: "Cleo Marah",
        provider: "Gjon Devkuaj",
      },
    ],
  },
];

function timeToMinutes(timeValue) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  return hours * 60 + minutes;
}

function toTop(startMinutes) {
  return ((startMinutes - DAY_START) / DAY_RANGE) * BOARD_HEIGHT;
}

function toHeight(startMinutes, endMinutes) {
  const rawHeight = ((endMinutes - startMinutes) / DAY_RANGE) * BOARD_HEIGHT;
  return Math.max(rawHeight, 46);
}

function formatTime(timeValue) {
  const minutes = timeToMinutes(timeValue);
  const hours24 = Math.floor(minutes / 60);
  const min = String(minutes % 60).padStart(2, "0");
  const suffix = hours24 >= 12 ? "pm" : "am";
  const hours12 = hours24 % 12 || 12;
  return `${hours12}:${min} ${suffix}`;
}

function renderTimeRail() {
  const rail = document.getElementById("time-rail");
  rail.style.height = `${BOARD_HEIGHT + 54}px`;

  for (let hour = 8; hour <= 18; hour += 1) {
    const row = document.createElement("div");
    row.className = "time-row";
    const top = toTop(hour * 60) + 54;
    row.style.top = `${top}px`;
    const suffix = hour >= 12 ? "pm" : "am";
    const hour12 = hour % 12 || 12;
    row.textContent = `${hour12} ${suffix}`;
    rail.appendChild(row);
  }
}

function renderRoom(roomsContainer, room) {
  const column = document.createElement("article");
  column.className = "room-column";

  const header = document.createElement("header");
  header.className = "room-header";
  header.innerHTML = `
    <div class="room-title">
      <h2>${room.name}</h2>
      <span>${room.hours}</span>
    </div>
    <div class="room-meta">${room.meta}</div>
  `;

  const eventsLayer = document.createElement("div");
  eventsLayer.className = "events-layer";

  for (let hour = 8; hour <= 18; hour += 1) {
    const line = document.createElement("div");
    line.className = "hour-line";
    line.style.top = `${toTop(hour * 60)}px`;
    eventsLayer.appendChild(line);
  }

  room.overlays.forEach((overlay) => {
    const overlayNode = document.createElement("div");
    overlayNode.className = "shift-overlay";
    const start = timeToMinutes(overlay.start);
    const end = timeToMinutes(overlay.end);
    overlayNode.style.top = `${toTop(start)}px`;
    overlayNode.style.height = `${toHeight(start, end)}px`;
    eventsLayer.appendChild(overlayNode);
  });

  room.events.forEach((event) => {
    const start = timeToMinutes(event.start);
    const end = timeToMinutes(event.end);

    const card = document.createElement("section");
    card.className = `event-card type-${event.kind}`;
    card.style.top = `${toTop(start)}px`;
    card.style.height = `${toHeight(start, end)}px`;

    card.innerHTML = `
      <div class="event-topline">
        <span class="meta-pill">${event.code}</span>
        <span class="meta-time">${formatTime(event.start)} - ${formatTime(event.end)}</span>
      </div>
      <p class="event-title">${event.title}</p>
      <p class="event-patient">${event.patient}</p>
      <p class="event-provider">${event.provider}</p>
      ${event.flag ? `<span class="event-flag">${event.flag}</span>` : ""}
    `;

    eventsLayer.appendChild(card);
  });

  column.appendChild(header);
  column.appendChild(eventsLayer);
  roomsContainer.appendChild(column);
}

function renderSchedule() {
  renderTimeRail();
  const roomsContainer = document.getElementById("room-columns");
  rooms.forEach((room) => renderRoom(roomsContainer, room));
}

renderSchedule();
