import axios from "axios";

const KEY = "AIzaSyDg62S_vVvBIM4eq65QmFna_DF12RAqpd8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",

    maxResults: 5,
    key: KEY,
  },
});
