import teamsData from "./data.js";
console.log(teamsData);

const teamPillsContainerId = "teams-container";
const teamContentContainerId = "team-content-container";

// TODO 1: Displaying team pills for each team
function displayTeamPills(teamsData) {
  const teamPillsContainer=document.getElementById(teamPillsContainerId);
  teamsData.forEach((team)=>{
    const newElement=document.createElement("div");
    newElement.className=`card-body border border-dark text-center m-2 p-2`
    newElement.style=`background-color: ${team.backgroundColor};`
    newElement.innerHTML=`<div  id=${team.id}>${team.name}</div>`
    teamPillsContainer.append(newElement);
  })
}

displayTeamPills(teamsData);

const teamPillsContainer = document.getElementById(teamPillsContainerId);

// TODO 2: Event handler to show Carousel with images for selected team
teamPillsContainer.addEventListener("click", (e) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubbles up to the parent
  const teamContentContainer=document.getElementById(teamContentContainerId);
  const teamId=e.target.id;

  const selectId=teamsData.find((team)=>team.id===teamId);
  const images=selectId.images;

  teamContentContainer.innerHTML=`<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" id="carousel-images">
     

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`
  
const caraouselContent=document.getElementById("carousel-images");
images.forEach((team,index)=>{
const newImageContainer=document.createElement("div");
newImageContainer.className=`carousel-item ${index===0?'active':''}`
newImageContainer.innerHTML=`<img src=${team} class="d-block w-100"/>`
teamContentContainer.append(newImageContainer);
})
  
  console.log(e.target);
});
