let interviewList = [];
let rejectedList = [];
let currentStatus = "all-btn"; 

// Job Application Tracker card
let totalJobCount = document.getElementById("total-job-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let availableJobsCount = document.getElementById("available-jobs-count");

//all card add

const allCardCounts = document.getElementById("all-cards");


function totalCount() {
  totalJobCount.innerText = allCardCounts.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  availableJobsCount.innerText = allCardCounts.children.length;
}
totalCount();

// btn color change
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

function toggleBtn(id) {
  // remove color
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  // add color
  allBtn.classList.add("bg-white", "text-[#64748B]");
  interviewBtn.classList.add("bg-white", "text-[#64748B]");
  rejectedBtn.classList.add("bg-white", "text-[#64748B]");

  
  //  for  btn select
  const selected = document.getElementById(id);
  currentStatus = id; 

  //   bg added for current btn
  selected.classList.remove("bg-white", "text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  // interview btn
  if (id == "interview-btn") {
    allCardCounts.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  }else if (id == "rejected-btn") {
    allCardCounts.classList.add("hidden");
    filteredSection.classList.remove("hidden");   
    renderRejected();
  }else if (id == 'all-btn'){
    allCardCounts.classList.remove('hidden');
    filteredSection.classList.add('hidden');
  }
  // else{
  //    allCardCounts.classList.remove("hidden");
  //   filteredSection.classList.add("hidden");
  // }
}

//   main section

const mainContainer = document.getElementById("main-container");

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const jobTitle = parentNode.querySelector(".jobTitle").innerText;
    const jobDescription =
      parentNode.querySelector(".jobDescription").innerText;
    const btnStatus = parentNode.querySelector(".btn-status").innerText;
    const companySummary =
      parentNode.querySelector(".company-summary").innerText;

    const jobCardInfo = {
      companyName,
      jobTitle,
      jobDescription,
      btnStatus,
      companySummary,
    };

    // ///////////////////////

    const jobExist = interviewList.find(
      (item) => item.companyName == jobCardInfo.companyName,
    );
    parentNode.querySelector(".btn-status").innerText = "INTERVIEW";
    if (!jobExist) {
      interviewList.push(jobCardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.companyName != jobCardInfo.companyName,
    );
    

    totalCount();

    renderInterview();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText;
    const jobTitle = parentNode.querySelector(".jobTitle").innerText;
    const jobDescription =
      parentNode.querySelector(".jobDescription").innerText;
    const btnStatus = parentNode.querySelector(".btn-status").innerText;
    const companySummary =
      parentNode.querySelector(".company-summary").innerText;

    parentNode.querySelector(".btn-status").innerText = "REJECTED";

    const jobCardInfo = {
      companyName,
      jobTitle,
      jobDescription,
      btnStatus,
      companySummary,
    };

    // ///////////////////////

    const jobExist = rejectedList.find(
      (item) => item.companyName == jobCardInfo.companyName,
    );

    if (!jobExist) {
      rejectedList.push(jobCardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != jobCardInfo.companyName,
    );

    if (currentStatus == "interview-btn") {
      renderInterview();
    } else if (currentStatus == "rejected-btn") {
      renderRejected();
    }


    totalCount();
  }
});

// for rendering
const filteredSection = document.getElementById("filtered-section");

function renderInterview() {

  
  
if (interviewList.length === 0) {
  filteredSection.innerHTML = `
      <section class="container mx-auto mt-4">
            <div
              class="py-28 text-center bg-white rounded-lg border border-[#F1F2F4]"
            >
              <i
                class="fa-regular fa-file-lines text-8xl text-[#7DA8FF] mb-5"
              ></i>
              <h1 class="text-[#002C5C] text-2xl font-bold">
                No jobs available
              </h1>
              <p class="text-[#64748B] font-normal text-base mt-1">
                Check back soon for new job opportunities
              </p>
            </div>
          </section>
    `;

  return; 
}

filteredSection.innerHTML = "";

  for (let interview of interviewList) {

    let div = document.createElement("div");
    div.className =
      "flex justify-between border border-[#F1F2F4] bg-[#FFFFFF] p-6 rounded-lg mb-10";
    div.innerHTML = `
    
 <!-- part 01 -->
            <div>
              <!-- job title  -->
              <div class="flex justify-between">
                <div>
                  <h1 class="companyName text-[#002C5C] text-lg font-semibold">
                    ${interview.companyName}
                  </h1>
                  <p class="jobTitle text-[#64748B] text-base font-normal">
                    ${interview.jobTitle}
                  </p>
                </div>
              </div>
              <!-- job description -->
              <div class="text-[#64748B] font-normal text-sm my-5">
                <p class="jobDescription">
                  ${interview.jobDescription}
                </p>
              </div>
              <!-- ##### -->
              <div>
                <button
                  class=" px-3 py-2 bg-[#10B981] text-white rounded mb-2 btn-status font-medium "
                >
                  INTERVIEW
                </button>
                <p
                  class="text-[#323B49] font-normal text-sm mb-5 company-summary"
                >
                  ${interview.companySummary}
                </p>
              </div>

              <!-- buttons -->
              <div class="flex gap-2">
                <button
                  class=" interview-btn border-[#10B981]  border py-2 px-3 text-[#10B981] font-semibold text-sm uppercase leading-5 rounded-lg"
                >
                  interview
                </button>
                <button
                  class=" rejected-btn border-[#EF4444]  border py-2 px-3 text-[#EF4444] font-semibold text-sm uppercase leading-5 rounded-lg"
                >
                  Rejected
                </button>
              </div>
            </div>
            <!-- part 02 -->
            <div>
              <button
                class="delete-btn  py-2.5 px-3 border border-[#F1F2F4] rounded-full bg-[#FFFFFF] hover:border-red-700"
              >
                <i class="fa-regular fa-trash-can text-[#64748B]"></i>
              </button>
            </div>

    `;

    filteredSection.appendChild(div);
  }
}

function renderRejected() {

  if (rejectedList.length === 0) {
    filteredSection.innerHTML = `
      <section class="container mx-auto mt-4">
            <div
              class="py-28 text-center bg-white rounded-lg border border-[#F1F2F4]"
            >
              <i
                class="fa-regular fa-file-lines text-8xl text-[#7DA8FF] mb-5"
              ></i>
              <h1 class="text-[#002C5C] text-2xl font-bold">
                No jobs available
              </h1>
              <p class="text-[#64748B] font-normal text-base mt-1">
                Check back soon for new job opportunities
              </p>
            </div>
          </section>
    `;
    return;
  }

 filteredSection.innerHTML = "";

  for (let rejected of rejectedList) {
    // console.log(rejected);

    let div = document.createElement("div");
    div.className =
      "flex justify-between border border-[#F1F2F4] bg-[#FFFFFF] p-6 rounded-lg mb-10";
    div.innerHTML = `
    
 <!-- part 01 -->
            <div>
              <!-- job title  -->
              <div class="flex justify-between">
                <div>
                  <h1 class="companyName text-[#002C5C] text-lg font-semibold">
                    ${rejected.companyName}
                  </h1>
                  <p class="jobTitle text-[#64748B] text-base font-normal">
                    ${rejected.jobTitle}
                  </p>
                </div>
              </div>
              <!-- job description -->
              <div class="text-[#64748B] font-normal text-sm my-5">
                <p class="jobDescription">
                  ${rejected.jobDescription}
                </p>
              </div>
              <!-- ##### -->
              <div>
                <button 
                  class=" px-3 py-2 bg-[#EF4444] text-white rounded mb-2 btn-status font-medium "
                >
                  REJECTED
                </button>
                <p
                  class="text-[#323B49] font-normal text-sm mb-5 company-summary"
                >
                  ${rejected.companySummary}
                </p>
              </div>

              <!-- buttons -->
              <div class="flex gap-2">
                <button
                  class=" interview-btn border-[#10B981]  border py-2 px-3 text-[#10B981] font-semibold text-sm uppercase leading-5 rounded-lg"
                >
                  interview
                </button>
                <button
                  class=" rejected-btn border-[#EF4444]  border py-2 px-3 text-[#EF4444] font-semibold text-sm uppercase leading-5 rounded-lg"
                >
                  Rejected
                </button>
              </div>
            </div>
            <!-- part 02 -->
            <div>
              <button
                class="delete-btn  py-2.5 px-3 border border-[#F1F2F4] rounded-full bg-[#FFFFFF] hover:border-red-700"
              >
                <i class="fa-regular fa-trash-can text-[#64748B]"></i>
              </button>
            </div>

    `;

    filteredSection.appendChild(div);
  }
}
