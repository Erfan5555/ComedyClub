function layoutSize() {
    var cssStyleSheet = document.getElementById("pagesize");
    if (window.innerWidth < 1200) {
      cssStyleSheet.setAttribute("href", "profileSettingsMedium.css");
    }
    if (window.innerWidth <= 900) {
      cssStyleSheet.setAttribute("href", "profileSettingsMobile.css");
    }
    if (window.innerWidth >= 1200) {
      cssStyleSheet.setAttribute("href", "profileSettings.css");
    }
  }
  window.onresize = layoutSize;
  layoutSize();


//get from db
var username = 'username'; 
var fullname = 'name';
var birthday = ""; //form is in yyyy-mm-dd eg 2005-04-24
var gender = ''; // form is in "Male"
var userEmail = 'example@example.com';
var events = [{club: 'Comedy Club', date: "2023-06-16", where: 'Adelaide uni', time: '10am'},
            {club: 'BigBee Club', date: "2023-07-03", where: 'Adelaide bar', time: '6pm'}];
//password section left due to securety

  var app = new Vue({
    el: "#app",
    data: {
      inputUsername: username,
        inputFullname: fullname,
        inputBirthday: birthday,
        selectedGender: gender,
        email: userEmail,
        events: events,
    },
    methods: {
      updateUsername() {
        username = this.inputUsername;
      },
      updatePersonalInfo() {
        fullname = this.inputFullname;
        birthday = this.inputBirthday;
        gender = this.selectedGender;
        
      },
      updateConnectedAccounts() {
        userEmail = this.email;
      },
    },
  });