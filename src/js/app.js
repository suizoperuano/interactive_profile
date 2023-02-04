import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://scontent.fzrh3-1.fna.fbcdn.net/v/t1.6435-9/67030873_10217899780838457_7073962065957748736_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0mVy8HKs5fAAX_Cpb94&_nc_ht=scontent.fzrh3-1.fna&oh=00_AfDiwa1qO-sXeTq6xyJfYJ6PQUjjvc3LTWr1p49enmqsTA&oe=6405966A", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  function checkIfNull(MyVariable) {
    if (MyVariable == null) {
      return "";
    }
    return MyVariable;
  }
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${checkIfNull(variables.name) +
            " " +
            checkIfNull(variables.lastname)}</h1>
          <h2>${checkIfNull(variables.role)}</h2>
          <h3>${checkIfNull(variables.city) + ","} ${checkIfNull(
    variables.country
  )}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="${
              variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${
              variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="${
              variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${
              variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://thumbs.dreamstime.com/b/steampunk-background-machine-mechanical-parts-large-gears-chains-machines-tractors-steampunk-background-machine-130985919.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://scontent.fzrh3-1.fna.fbcdn.net/v/t1.6435-9/67030873_10217899780838457_7073962065957748736_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0mVy8HKs5fAAX_Cpb94&_nc_ht=scontent.fzrh3-1.fna&oh=00_AfDiwa1qO-sXeTq6xyJfYJ6PQUjjvc3LTWr1p49enmqsTA&oe=6405966A",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
