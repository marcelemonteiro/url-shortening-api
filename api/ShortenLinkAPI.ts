export const ShortenLinkAPI = {
  getShortURL: async function(longURL: string) {
    const headers = {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const body = JSON.stringify({
      long_url: longURL,
      domain: "https://t.ly/",
    });

    const response = await fetch("https://t.ly/api/v1/link/shorten", {
      method: "POST",
      body,
      headers,
    });

    const json = await response.json();

    return json["short_url"];
  }
}