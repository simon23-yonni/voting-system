// Sample candidate data
var candidates = [
  { name: "Candidate 1", votes: 0 },
  { name: "Candidate 2", votes: 0 },
  { name: "Candidate 3", votes: 0 }
];

// Function to display the candidates
function displayCandidates() {
  var candidateList = document.getElementById("candidate-list");
  candidateList.innerHTML = "";

  for (var i = 0; i < candidates.length; i++) {
    var candidate = candidates[i];
    var listItem = document.createElement("li");
    listItem.textContent = candidate.name;
    candidateList.appendChild(listItem);
  }
}

// Function to update the results
function updateResults() {
  var resultList = document.getElementById("result-list");
  resultList.innerHTML = "";

  for (var i = 0; i < candidates.length; i++) {
    var candidate = candidates[i];
    var listItem = document.createElement("li");
    listItem.textContent = candidate.name + ": " + candidate.votes + " votes";
    resultList.appendChild(listItem);
  }
}

// Function to handle vote submission
function handleVoteSubmission(event) {
  event.preventDefault();

  var selectedCandidate = document.querySelector('input[name="candidate"]:checked');
  if (selectedCandidate) {
    var candidateName = selectedCandidate.value;
    var candidate = candidates.find(function(c) {
      return c.name === candidateName;
    });

    if (candidate) {
      candidate.votes++;
      updateResults();
      alert("Vote submitted successfully!");
    } else {
      alert("Invalid candidate selection!");
    }
  } else {
    alert("Please select a candidate!");
  }
}

// Event listener for vote submission
var voteForm = document.getElementById("vote-form");
voteForm.addEventListener("submit", handleVoteSubmission);

// Display initial candidates and results
displayCandidates();
updateResults();
