function addParticipantToTable(participant) {
  let table = document.getElementById("participant-table");
  let row = table.insertRow(-1);
 
  let cell = {};
  
  cell = row.insertCell(0);
  cell.textContent = participant.fullName;
  cell = row.insertCell(1);
  cell.textContent = participant.category;
  cell = row.insertCell(2);
  cell.textContent = participant.size;
}

function addParticipant() {
  // Get user input from page.
  let participant = {};

  participant.firstName = document.getElementById
  ("first-name").value;

  participant.lastName = document.getElementById
  ("last-name").value;

  participant.fullName = participant.firstName + " " + participant.lastName;

  participant.age = document.getElementById("age").value;

  participant.size = document.getElementById("shirt-size").value;

  console.log(participant);
  // Validate input.

  // Assign an age category.

  // Add participant to the table.
}