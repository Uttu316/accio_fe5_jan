import { api } from "./service.js";
import * as Utils from "./utils.js";

const getPlaylist = async () => {
  try {
    const res = await api({
      endpoint: "/playlists",
    });
    if (res && res.data) {
      const playlists = res.data;

      showPlaylist(playlists);
    }
  } catch (e) {
    console.log(e);
    Utils.showNotAvailable("#no_playlist_container");
  }
};
function showPlaylist(playlists) {
  if (isNonEmptyArray(playlists)) {
    const playlistsContainer = $("#playlists");
    const cards = playlists.map((item) => createPlaylistCard(item));
    playlistsContainer.append(cards);
  } else {
    //no video available
    Utils.showNotAvailable("#no_playlist_container");
  }
}

function createPlaylistCard(playlist) {
  const { snippet } = playlist;
  const { channelTitle, title, thumbnails } = snippet;
  const {
    standard: { url },
  } = thumbnails;

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
            </div>
          </div>`);
  return cardEl;
}

getPlaylist();
