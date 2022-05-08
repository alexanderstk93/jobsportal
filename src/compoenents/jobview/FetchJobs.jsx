const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "job-listings.p.rapidapi.com",
    "X-RapidAPI-Key": "e9392d2534msh2258e74ccf0ac39p10289djsn7c176a998240",
  },
};

fetch(
  "https://job-listings.p.rapidapi.com/api/job/details/?url=https%3A%2F%2Fwww.indeed.co.in%2Frc%2Fclk%3Fjk%3D8fd51fdef5282f41%26fccid%3Da4e4e2eaf26690c9%26vjs%3D3",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
