function addPlan() {
  let name = document.getElementById("name").value;
  let place = document.getElementById("place").value;
  let date = document.getElementById("date").value;

  if (!name || !place || !date) {
    alert("Please fill all fields");
    return;
  }

  let div = document.createElement("div");
  div.className = "place";
  div.innerHTML = `
    <h3>${name}'s Trip</h3>
    <p><b>Destination:</b> ${place}</p>
    <p><b>Date:</b> ${date}</p>
  `;

  document.getElementById("planList").appendChild(div);
}
