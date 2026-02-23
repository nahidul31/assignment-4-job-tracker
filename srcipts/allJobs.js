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
  },
  {
    id: 2,
    companyName: "Microsoft",
    position: "Backend Developer",
    location: "Redmond, WA",
    type: "Full-Time",
    salary: "$110,000 - $140,000",
    description: "Build REST APIs and work with Azure cloud services.",
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
  },
  {
    id: 4,
    companyName: "Meta",
    position: "React Developer",
    location: "Menlo Park, CA",
    type: "Contract",
    salary: "$100,000 - $130,000",
    description: "Create dynamic user interfaces and improve user experience.",
  },
  {
    id: 5,
    companyName: "Netflix",
    position: "UI Engineer",
    location: "Los Gatos, CA",
    type: "Full-Time",
    salary: "$125,000 - $155,000",
    description: "Build responsive streaming platform interfaces.",
  },
  {
    id: 6,
    companyName: "Tesla",
    position: "Full Stack Developer",
    location: "Austin, TX",
    type: "Full-Time",
    salary: "$105,000 - $135,000",
    description: "Work on internal tools and automation systems.",
  },
  {
    id: 7,
    companyName: "Spotify",
    position: "JavaScript Developer",
    location: "Stockholm, Sweden",
    type: "Remote",
    salary: "$95,000 - $120,000",
    description: "Develop music streaming web applications.",
  },
  {
    id: 8,
    companyName: "Airbnb",
    position: "Frontend Engineer",
    location: "San Francisco, CA",
    type: "Full-Time",
    salary: "$115,000 - $145,000",
    description: "Improve booking experience and optimize performance.",
  },
];

// export default jobs;
//get element by id
let totaljob = getValueById("Total-job");
totaljob.innerText = `${jobs.length}`;

// show each jobs info dynamically
const container = document.getElementById("show-all-jobs");
for (let i = 0; i < jobs.length; i++) {
  const job = jobs[i];
  const card = document.createElement("div");
  card.className = "bg-white p-7 rounded-xl mt-6";
  card.id = `job-${job.id}`;

  card.innerHTML = `

     <div class='flex justify-between'>
         <h2 class="text-2xl font-bold">${job.companyName}</h2>
        <button class="btn " id="delete-${job.id}"><i class="fa-regular fa-trash-can"></i></button>
       </div>
    <p class="font-semibold">${job.position}</p>
    <p class="mt-3 text-sm">${job.location} • ${job.type} • ${job.salary}</p>
    <p class="mt-3">${job.description}</p>
    <div class="mt-4">
      <button class="btn btn-success" id="interview-${job.id}">Interview</button>
<button class="btn btn-outline btn-error" id="rejected-${job.id}">Rejected</button>
      
    </div>
  `;

  container.appendChild(card);

  // Delete------------------------------------------
  document.getElementById(`delete-${job.id}`).addEventListener("click", () => {
    jobs = jobs.filter((j) => j.id !== job.id);

    document.getElementById(`job-${job.id}`).remove();

    totaljob.innerText = jobs.length;
  });

  // interview------------------------------------------------------
  document
    .getElementById(`interview-${job.id}`)
    .addEventListener("click", () => {
      card.classList.remove("bg-white", "bg-red-100");
      card.classList.add("bg-green-100", "border-l-4", "border-green-400");
    });

  // rejected--------------------------------------------------------------
  document
    .getElementById(`rejected-${job.id}`)
    .addEventListener("click", () => {
      card.classList.remove("bg-white", "bg-green-100");
      card.classList.add("bg-red-100", "border-l-4", "border-red-400");
    });
}
