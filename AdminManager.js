//needs to beable to make a new club home page and save it in db
function opencreteClubMenu() {
    var main = document.getElementsByClassName('main')[0];
    var popup = document.getElementsByClassName('popup')[0];
    var createClubButton = popup.getElementsByClassName('createClub')[0];
    var clubNameInput = popup.getElementsByTagName('input')[0];
    var availbleClubs = document.getElementsByClassName('availbleClubs')[0];
  
    main.style.display = 'none';
    popup.style.display = 'block';
  
    createClubButton.addEventListener('click', function() {
      var clubName = clubNameInput.value;
  
      if (clubName) {
        var btnsDiv = document.createElement('div');
        btnsDiv.classList.add('btns');
  
        var clubButton = document.createElement('button');
        clubButton.classList.add('btn');
        clubButton.textContent = clubName;
  
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'delete';

        //delete club from db
        deleteButton.addEventListener('click', function() {
          btnsDiv.remove();
        });
  
        btnsDiv.appendChild(clubButton);
        btnsDiv.appendChild(deleteButton);
  
        availbleClubs.appendChild(btnsDiv);
      }
  
      main.style.display = 'block';
      popup.style.display = 'none';
      clubNameInput.value = '';
    });
  }


//needs to connect to db to get users
var users = [
  { name: 'Bob Marlin', UserName: 'ManBat', memNum: 123456 },
  { name: 'bart newmen', UserName: 'pappaSmurf', memNum: 123445 },
  { name: 'manni bem', UserName: 'pin', memNum: 12323 }
];

var app = new Vue({
  el: '#app',
  data: {
    searchUsername: '',
    users: users,
    searchedUser: null
  },
  methods: {
    searchUser: function() {
      var searchedUsername = this.searchUsername;

      if (searchedUsername) {
        var foundUser = this.users.find(function(user) {
          return user.UserName === searchedUsername;
        });

        if (foundUser) {
          this.searchedUser = foundUser;
        } else {
          this.searchedUser = null;
        }
      } else {
        this.searchedUser = null;
      }
    },
    removeUser: function() {
      if (this.searchedUser) {
        var index = this.users.indexOf(this.searchedUser);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
        this.searchedUser = null;
      }
    }
  }
});