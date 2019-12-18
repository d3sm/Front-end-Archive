<template>
  <div class="mainComment">
    <div class="mainComment-bar">
      <div class="mainComment-bar__pic">
        <img src="src/assets/images/comment.png" class="bar_pic">
        <p>
          Comments:
          <span>48</span>
        </p>
      </div>
      <div class="mainComment-bar__switch">
        <ul class="switch">
          <li class="switch__tab switch__tab-selected">Popular</li>
          <li class="switch__tab">Recent</li>
        </ul>
      </div>
    </div>
    <div class="mainComment-input">
      <input placeholder="Type comment here.." class="mainComment-input__text" type="text" />
      <img width="14" height="10" class="mainComment-input__arrow" src="src/assets/images/input.svg"/>
    </div>

<div class="comment-item">
    <div class="comment-item__avatar">
      <img src="../assets/images/user-photo.png" />
    </div>
    <div class="comment-item__inf">
      <div class="comment-item__title">
        <h4 class="comment-item__name">Svetlakov</h4>
        <span class="comment-item__date">22 May</span>
      </div>
      <div class="comment-item__text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
      </div>
</div>
  </div>

<div class="comment-item">
    <div class="comment-item__avatar">
      <img src="../assets/images/user-photo.png"/>
    </div>
    <div class="comment-item__inf">
      <div class="comment-item__title">
        <h4 class="comment-item__name">Svetlakov</h4>
        <span class="comment-item__date">22 May</span>
      </div>
      <div class="comment-item__text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
      </div>
</div>
</div>

  </div>
</template>

<style scoped src="../assets/styles/Comments.css">
</style>