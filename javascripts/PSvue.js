var app = new Vue({
    el: "#app",
    data: {
      stylesheet: "profileSettings.css",
    },
    mounted() {
      this.layoutSize();
      window.addEventListener("resize", this.layoutSize);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.layoutSize);
    },
    methods: {
      layoutSize() {
        const cssStyleSheet = document.getElementById("pagesize");
        if (window.innerWidth < 1200) {
          cssStyleSheet.setAttribute("href", "profileSettingsMedium.css");
        } else if (window.innerWidth <= 900) {
          cssStyleSheet.setAttribute("href", "profileSettingsMobile.css");
        } else {
          cssStyleSheet.setAttribute("href", "profileSettings.css");
        }
      },
    },
  });