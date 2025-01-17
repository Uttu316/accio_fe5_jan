import { api } from "./service.js";
import { timeDifference, showNotAvailable, hideNotAvailable } from "./utils.js";

let videosData = [];
async function getVideos() {
  try {
    const res = await api({
      endpoint: "/videos",
    });
    if (res && res.data) {
      const videos = res.data;
      videosData = videos;
      showVideos(videos);
      createFilterOptions();
      enableSearch();
    }
  } catch (e) {
    console.log(e);
    showNotAvailable();
  }
}

function createFilterOptions() {
  let allTags = [];
  videosData.forEach((item) => {
    const tags = item.items.snippet.tags;
    if (tags) {
      allTags = [...allTags, ...tags];
    }
  });

  let tagsOptions = Array.from(new Set(allTags));

  let options = tagsOptions.sort().map((tag) => {
    return $(`<option value="${tag}">${tag} </option>`);
  });
  $("#category_filter").append(options);
  onChangeCategoryFilter();
}
function showVideos(videos) {
  if (Array.isArray(videos) && videos.length) {
    const videosContainer = $("#videos");
    const cards = videos.map((item) => createVideoCard(item));
    videosContainer.append(cards);
  } else {
    //no video available
    showNotAvailable("#no_video_container");
  }
}

function createVideoCard(video) {
  const { items } = video;
  const { snippet, statistics } = items;
  const { channelTitle, title, publishedAt, thumbnails, tags } = snippet;
  const {
    standard: { url },
  } = thumbnails;
  const { commentCount, likeCount, viewCount } = statistics;

  let time = timeDifference(new Date(publishedAt));

  const cardEl = $(` <div class="video_card">
          <div class="video_img">
            <img
              src=${url}
              alt=${title}
            />
          </div>
          <div class="video_content">
            <p class="video_title">${title}</p>
            <p class="video_creator">${channelTitle}</p>
            <p class="video_publish">${time}</p>
            <div class="video_stats">
              <span class="video_stat_like"> ♡ ${likeCount}</span>
              <span class="video_stat_comment"> 💬 ${commentCount} </span>
            </div>
            <p class="video_views">👁️ ${viewCount} views</p>
            <div class="video_tags">
             
            </div>
          </div>
        </div>`);

  if (Array.isArray(tags) && tags.length) {
    const tagEls = tags.map((tag) =>
      $(`<span class="video_tag"> #${tag} </span>`)
    );

    const tagsWr = cardEl.find(".video_tags");
    tagsWr.append(tagEls);
  }
  return cardEl;
}

function clearVideos() {
  $("#videos").empty();
}

function onChangeCategoryFilter() {
  $("#category_filter").on("change", function (e) {
    const value = e.target.value;
    $("#video_search")[0].value = "";
    hideNotAvailable();
    if (value === "all") {
      clearVideos();
      showVideos(videosData);
    } else {
      let tagVideos = videosData.filter((i) =>
        i.items.snippet.tags?.includes(value)
      );
      clearVideos();
      showVideos(tagVideos);
    }
  });
}

function enableSearch() {
  $("#video_search").on("input", function (e) {
    $("#category_filter")[0].value = "";
    const value = e.target.value;
    if (value === "") {
      clearVideos();
      hideNotAvailable();
      showVideos(videosData);
    } else {
      let tagVideos = videosData.filter((i) =>
        i.items.snippet.title.toLowerCase().includes(value.toLowerCase())
      );
      clearVideos();
      hideNotAvailable();
      showVideos(tagVideos);
    }
  });
}

getVideos();
