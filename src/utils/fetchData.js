export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "37b637cc6dmshaad11823ab6fb64p1a029ajsn5991ae00e156",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "37b637cc6dmshaad11823ab6fb64p1a029ajsn5991ae00e156",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
