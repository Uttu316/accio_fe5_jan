async function api(config) {
  const { endpoint, method = "GET" } = config;
  const URL = "https://api.freeapi.app/api/v1/public/youtube" + endpoint;
  try {
    const res = await fetch(URL, {
      method,
    });
    if (res.status >= 200 && res.status < 300) {
      const output = await res.json();
      if (output.data) {
        return output.data;
      }
    }
    console.log(res);
    throw new Error("Something went wrong");
  } catch (e) {
    console.log(e, URL);
    throw new Error(e.message);
  }
}

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

function showNotAvailable(id = "#no_video_container") {
  $(id).show();
}

function hideNotAvailable(id = "#no_video_container") {
  $(id).hide();
}

function timeDifference(previous, current = new Date()) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "" + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "" + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "" + Math.round(elapsed / msPerYear) + " years ago";
  }
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
      if (tagVideos.length === 0) {
        showNotAvailable();
      } else {
        showVideos(tagVideos);
      }
    }
  });
}

getVideos();
