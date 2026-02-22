let interviewList = [];
let rejectedList = [];

// Job Application Tracker card
let totalJobCount = document.getElementById("total-job-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let availableJobsCount = document.getElementById("available-jobs-count");

//all card add

const allCardCounts = document.getElementById("all-cards");
// console.log(allCardCounts.children.length);

function totalCount() {
  totalJobCount.innerText = allCardCounts.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  availableJobsCount.innerText = allCardCounts.children.length;
}
totalCount();

// btn toggle

// btn color change
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

function toggleBtn(id) {
  // console.log("btn click" , id);

  // remove color
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  // add color
  allBtn.classList.add("bg-white", "text-[#64748B]");
  interviewBtn.classList.add("bg-white", "text-[#64748B]");
  rejectedBtn.classList.add("bg-white", "text-[#64748B]");

  // console.log(id);
  //  for  btn select
  const selected = document.getElementById(id);

  //   bg added for current btn
  selected.classList.remove("bg-white", "text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-white");
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

    if (!jobExist) {
      interviewList.push(jobCardInfo);
    }
    renderInterview();
  }
});

// for rendering
const filteredSection = document.getElementById("filtered-section");
function renderInterview() {
  filteredSection.innerHTML = " ";

  for (let interview of interviewList) {
    console.log(interview);

    let div = document.createElement("div");
    div.className =
      "flex justify-between broder border-[#F1F2F4] bg-[#FFFFFF] p-6 rounded-lg";
    div.innerHTML = `
    
 <!-- part 01 -->
            <div>
              <!-- job title  -->
              <div class="flex justify-between">
                <div>
                  <h1 class="companyName text-[#002C5C] text-lg font-semibold">
                    Mobile First Corp
                  </h1>
                  <p class="jobTitle text-[#64748B] text-base font-normal">
                    React Native Developer
                  </p>
                </div>
              </div>
              <!-- job description -->
              <div class="text-[#64748B] font-normal text-sm my-5">
                <p class="jobDescription">
                  Remote • Full-time • $130,000 - $175,000
                </p>
              </div>
              <!-- ##### -->
              <div>
                <button
                  class="text-[#002C5C] px-3 py-2 bg-[#E6F2FF] rounded mb-2 btn-status"
                >
                  Not Applied
                </button>
                <p
                  class="text-[#323B49] font-normal text-sm mb-5 company-summary"
                >
                  Build cross-platform mobile applications using React Native.
                  Work on products used by millions of users worldwide.
                </p>
              </div>

              <!-- buttons -->
              <div class="flex gap-2">
                <button
                  class="border-[#10B981] hover:bg-[#10B981] hover:text-white border py-2 px-3 text-[#10B981] font-semibold text-sm uppercase leading-5 rounded-lg"
                >
                  interview
                </button>
                <button
                  class="border-[#EF4444] hover:bg-[#EF4444] hover:text-white border py-2 px-3 text-[#EF4444] font-semibold text-sm uppercase leading-5 rounded-lg"
                >
                  Rejected
                </button>
              </div>
            </div>
            <!-- part 02 -->
            <div>
              <button
                class="py-2.5 px-3 border border-[#F1F2F4] rounded-full bg-[#FFFFFF] hover:border-red-700"
              >
                <i class="fa-regular fa-trash-can text-[#64748B]"></i>
              </button>
            </div>

    `;
  }
}
