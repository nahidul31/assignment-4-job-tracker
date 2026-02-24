let jobs = [
  {
    id: 1,
    companyName: "Google",
    position: "Frontend Developer",
    location: "Mountain View, CA",
    type: "Full-Time",
    salary: "$120,000 - $150,000",
    description:
      "Develop and maintain scalable web applications using React and modern JavaScript.",
    status: "Not Allowed",
  },
  {
    id: 2,
    companyName: "Microsoft",
    position: "Backend Developer",
    location: "Redmond, WA",
    type: "Full-Time",
    salary: "$110,000 - $140,000",
    description: "Build REST APIs and work with Azure cloud services.",
    status: "Not Allowed",
  },
  {
    id: 3,
    companyName: "Amazon",
    position: "Software Engineer",
    location: "Seattle, WA",
    type: "Full-Time",
    salary: "$115,000 - $145,000",
    description:
      "Design scalable systems and optimize high-traffic applications.",
    status: "Not Allowed",
  },
  {
    id: 4,
    companyName: "Meta",
    position: "React Developer",
    location: "Menlo Park, CA",
    type: "Contract",
    salary: "$100,000 - $130,000",
    description: "Create dynamic user interfaces and improve user experience.",
    status: "Not Allowed",
  },
  {
    id: 5,
    companyName: "Netflix",
    position: "UI Engineer",
    location: "Los Gatos, CA",
    type: "Full-Time",
    salary: "$125,000 - $155,000",
    description: "Build responsive streaming platform interfaces.",
    status: "Not Allowed",
  },
  {
    id: 6,
    companyName: "Tesla",
    position: "Full Stack Developer",
    location: "Austin, TX",
    type: "Full-Time",
    salary: "$105,000 - $135,000",
    description: "Work on internal tools and automation systems.",
    status: "Not Allowed",
  },
  {
    id: 7,
    companyName: "Spotify",
    position: "JavaScript Developer",
    location: "Stockholm, Sweden",
    type: "Remote",
    salary: "$95,000 - $120,000",
    description: "Develop music streaming web applications.",
    status: "Not Allowed",
  },
  {
    id: 8,
    companyName: "Airbnb",
    position: "Frontend Engineer",
    location: "San Francisco, CA",
    type: "Full-Time",
    salary: "$115,000 - $145,000",
    description: "Improve booking experience and optimize performance.",
    status: "Not Allowed",
  },
];

// create Card---------------------------------------------------------------------
function createCard(job) {
  const card = document.createElement("div");
  card.className = "bg-white p-7 rounded-xl mt-6";

  card.innerHTML = `
    <div class="flex justify-between">
      <h2 class="text-2xl font-bold">${job.companyName}</h2>
      <button class="btn delete-btn"><i class="fa-regular fa-trash-can"></i></button>
    </div>
    <p class="font-semibold">${job.position}</p>
    <p class="mt-3 text-sm">${job.location} • ${job.type} • ${job.salary}</p>
    <div class="badge badge-ghost mt-3">${job.status}</div>
    <p class="mt-3">${job.description}</p>
    <div class="mt-4">
      <button class="btn btn-success interview-btn">Interview</button>
      <button class="btn btn-outline btn-error rejected-btn">Rejected</button>
    </div>
  `;

  const status = card.querySelector(".badge");

  //jokon selected hbe-----
  if (job.status === "selected") {
    card.classList.add("bg-green-100", "border-l-4", "border-green-400");
    status.classList.add("badge-success");
    status.innerText = "Selected";
  }
  //rejected er jonno------
  if (job.status === "rejected") {
    card.classList.add("bg-red-100", "border-l-4", "border-red-400");
    status.classList.add("badge-error");
    status.innerText = "Rejected";
  }

  // when click btn selected ------
  card.querySelector(".interview-btn").addEventListener("click", () => {
    job.status = "selected";
    renderFun();
  });

  //rejected-----
  card.querySelector(".rejected-btn").addEventListener("click", () => {
    job.status = "rejected";
    renderFun();
  });

  card.querySelector(".delete-btn").addEventListener("click", () => {
    jobs = jobs.filter((j) => j.id !== job.id);
    renderFun();
  });

  return card;
}

//  render function---------------------------------------------------------------------------------------

function renderFun() {
  const allContainer = getValueById("show-all-jobs");
  const interviewContainer = getValueById("interview-sel");
  const rejectedContainer = getValueById("rejected-sel");

  allContainer.innerHTML = "";
  interviewContainer.innerHTML = "";
  rejectedContainer.innerHTML = "";

  let interviewCount = 0;
  let rejectedCount = 0;

  jobs.forEach((job) => {
    allContainer.appendChild(createCard(job));

    if (job.status === "selected") {
      interviewContainer.appendChild(createCard(job));
      interviewCount++;
    }

    if (job.status === "rejected") {
      rejectedContainer.appendChild(createCard(job));
      rejectedCount++;
    }
  });

  // update header count-------

  getValueById("Total-jobsscnt").innerText = `${jobs.length} jobs`;
  getValueById("Total-job").innerText = `${jobs.length}`;
  getValueById("interview-count").innerText = interviewCount;
  getValueById("rejected-count").innerText = rejectedCount;

  const interviewEmpty = getValueById("interview-empty");
  if (interviewCount > 0) {
    interviewEmpty.classList.add("hidden");
  } else {
    interviewEmpty.classList.remove("hidden");
  }

  const rejectedEmpty = getValueById("rejected-empty");
  if (rejectedCount > 0) {
    rejectedEmpty.classList.add("hidden");
  } else {
    rejectedEmpty.classList.remove("hidden");
  }
}

renderFun();
