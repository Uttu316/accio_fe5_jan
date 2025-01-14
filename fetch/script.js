//API DOC: https://freeapi.hashnode.space/api-guide/apireference/getYoutubeVideos

async function getyoutubers() {
  let URL = "https://api.freeapi.app/api/v1/public/youtube/videos";

  /* fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const videos = res.data.data;
      showVideos(videos);
    })
    .catch((err) => {
      console.log(err);
    });*/
  try {
    const res = await fetch(URL);
    const pRes = await res.json();
    const videos = pRes.data.data;
    showVideos(videos);
  } catch (e) {
    console.log(e);
  }
}

function showVideos(videos) {
  videos.forEach((item) => {
    const videoEl = createVideo(item);
    const list = document.getElementById("list");
    list.append(videoEl);
  });
}

function createVideo(video) {
  const { items } = video;
  const { snippet } = items;
  const { title, channelTitle } = snippet;

  const li = document.createElement("li");

  li.innerHTML = title;
  return li;
}

getyoutubers();
