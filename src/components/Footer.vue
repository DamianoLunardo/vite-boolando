<script>
export default {
  data() {
    return {
      title: "Footer",
    };
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="rowf">
        <div class="col-8">
          Boolando s.r.l <br />
          Informazioni &nbsp&nbsp Legali Informativa sulla privacy &nbsp&nbsp
          Diritto di recesso
        </div>
        <div class="col-4">
          Trovaci anche su
          <br />
          <a href="https://twitter.com/home" target="_blank">
            <img
              class="logo"
              src="/img/5296514_bird_tweet_twitter_twitter logo_icon.svg"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img
              class="logo"
              src="/img/5296765_camera_instagram_instagram logo_icon.svg"
            />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img
              class="logo"
              src="/img/5296499_fb_facebook_facebook logo_icon.svg"
            />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img
              class="logo"
              src="/img/5296521_play_video_vlog_youtube_youtube logo_icon.svg"
            />
          </a>
          <a href="https://www.pinterest.it" target="_blank">
            <img class="logo" src="/img/pinterest-logo.svg" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.footer {
    background-color: $footer-color;
    color: $text_color-white;
}
.rowf {
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.logo {
  padding-top: 5px;
  width: 20px;
  height: 20px;
}
</style>
