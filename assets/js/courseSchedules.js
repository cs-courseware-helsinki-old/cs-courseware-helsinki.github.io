const courseAPI_url = "https://raw.githubusercontent.com/cs-courseware-helsinki/cs-courseware-helsinki.github.io/master/courseSchedules_sample.json";  
let courseSchedules = "";

function loadCourseSchedules() {
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      courseSchedules = JSON.parse(this.responseText);
      }
  };

  xmlhttp.open("GET", courseAPI_url, true);
  xmlhttp.send();
}

function getCoursesByPeriod(givenPeriod) {
  return courseSchedules.find(item => {return item.period == givenPeriod}).courses;
}

function highlightCoursesByPeriod(period) {
  let temp = getCoursesByPeriod(period);
  highlightCourses(temp);
}

function resetHighlights() {
  $(".course-row").each(function(){
    $(this).css("background-color", "");
  })
}

function highlightCourses(courseCodeList) {
  resetHighlights();
  $.each( courseCodeList, function(i, val) {
    $("#" + val).css("background-color", "#FFF294");
  })
}

function main() {
  loadCourseSchedules()
}

main()