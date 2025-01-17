import { api } from "./service.js";
import * as Utils from "./utils.js";

const getChannel = async () => {
  try {
    const data = await api({
      endpoint: "/channel",
    });
    if (data) {
      const channels = data;
      showChannels(channels);
    }
  } catch (e) {
    console.log(e);
    Utils.showNotAvailable("#no_channel_container");
  }
};
function showChannels(channels) {
  const channelsContainer = $("#channels");
  const cards = createChannelsCard(channels);
  channelsContainer.append(cards);
}

function createChannelsCard(channel) {
  const { info } = channel;
  const { snippet, statistics } = info;
  const { customUrl, title, thumbnails } = snippet;
  let { subscriberCount, viewCount } = statistics;
  const {
    default: { url },
  } = thumbnails;

  subscriberCount = Utils.nFormatter(subscriberCount);
  viewCount = Utils.nFormatter(viewCount);

  const cardEl = $(` <div class="video_card">
            <div class="video_img">
              <img
                src=${url}
                alt=${title}
              />
            </div>
            <div class="video_content">
              <p class="video_title">${title}</p>
              <p class="video_creator">${customUrl}</p>
               <div class="video_stats">
              <span class="video_stat_like"> ♡ ${subscriberCount}</span>
              <span class="video_stat_comment"> 👁️ ${viewCount} </span>
            </div>
            </div>
          </div>`);
  return cardEl;
}

getChannel();
