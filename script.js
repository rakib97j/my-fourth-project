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

  const selected = document.getElementById(id);
  //   console.log(selected);
  selected.classList.remove("bg-white", "text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-white");
}
