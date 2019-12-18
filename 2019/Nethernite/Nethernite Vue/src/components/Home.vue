<template>
  <div class="main">
    <div class="main-wrapper">
      <section class="news">
        <span class="news-back">
          <img src="../assets/images/prev.svg"  class="news-back__icon">
          <p class="news-back__caption">Back</p>
        </span>
     <nextPrev/>
     <mainArticle/>
     <comments/>
      </section>
      <section class="sidebar">
     <sidebar/>
      </section>
    </div>
  </div>
</template>

<script>
import nextPrev from "./NextPrev.vue";
import mainArticle from "./Article.vue";
import comments from "./Comments.vue";
import sidebar from "./Sidebar.vue";

export default {
  components: {
    nextPrev,mainArticle,comments,sidebar
  }
}
</script>

<style src="../assets/styles/main.css">
 </style>
