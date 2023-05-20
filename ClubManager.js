var users = [
    { name: 'Bob Marlin', UserName: 'ManBat', memNum: 123456, attendingEvents: "23/4/1990", isMember: 1 },
    { name: 'bart newmen', UserName: 'pappaSmurf', memNum: 123445, attendingEvents: "23/4/1990", isMember: 1 },
    { name: 'manni bem', UserName: 'pin', memNum: 12323, attendingEvents: "23/4/1990", isMember: 1 }
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
            return user.UserName === searchedUsername && user.isMember === 1;
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
          this.searchedUser.isMember = 0;
          this.searchedUser = null;
        }
      }
    }
  })