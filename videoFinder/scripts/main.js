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

async function getVideos() {
  try {
    const res = await api({
      endpoint: "/videos",
    });
    if (res && res.data) {
      const videos = res.data;
      showVideos(videos);
    }
  } catch (e) {
    console.log(e);
  }
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

function showNotAvailable(id) {
  $(id).show();
}

function hideNotAvailable(id) {
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

getVideos();
