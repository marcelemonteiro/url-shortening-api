"use client";

import { ShortenLinkAPI } from "@/api/ShortenLinkAPI";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function ShortenInput() {
  const [longURL, setLongURL] = useState("");
  const [invalidURL, setInvalidURL] = useState(false);
  const [URLs, setURLs] = useState<{ longURL: string; shortURL: string }[]>([]);
  const [URLCopied, setURLCopied] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urls = getURLsInStorage();
    if (urls) {
      setURLs(urls);
    }
  }, []);

  function linkValidation(str: string) {
    try {
      const url = new URL(str);
      return url;
    } catch (err) {
      return false;
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (linkValidation(longURL)) {
      setInvalidURL(false);

      try {
        setLoading(true);
        const shortURL = await ShortenLinkAPI.getShortURL(longURL);
        saveURLsInStorage(longURL, shortURL);
        setURLs([{ longURL, shortURL }, ...URLs]);
      } catch(error) {
        console.error(error);
      } finally {
        setLongURL("");
        setLoading(false);
      }
    } else {
      setInvalidURL(true);
    }
  }

  function handleChange(e: ChangeEvent) {
    const input = e.target as HTMLInputElement;
    const value = input.value;
    setLongURL(value);
  }

  function saveURLsInStorage(longURL: string, shortURL: string) {
    const newEntry = { longURL, shortURL };
    const urls = localStorage.getItem("urls");
    let urlList = [];

    if (urls) {
      urlList = JSON.parse(urls);
      urlList.push(newEntry);
    } else {
      urlList = [newEntry];
    }

    localStorage.setItem("urls", JSON.stringify(urlList));
  }

  function getURLsInStorage() {
    const urls = localStorage.getItem("urls");

    if (urls) {
      return JSON.parse(urls);
    }
  }

  function copyShortURL(shortURL: string) {
    navigator.clipboard.writeText(shortURL);
    setURLCopied(shortURL);
  }

  return (
    <div className="w-full bg-light-gray relative">
      <span className="block w-full h-24 bg-white absolute"></span>

      <div className="max-w-5xl mx-auto p-4 relative z-10">
        <form
          method="post"
          className="bg-dark-violet bg-shorten-mobile lg:bg-shorten-desktop bg-no-repeat bg-right-top mb-4 px-4 py-6 lg:p-12 rounded-md"
          onSubmit={handleSubmit}
        >
          <fieldset className="lg:flex lg:gap-4">
            <div className="w-full mb-4 lg:mb-0">
              <input
                id="url"
                name="url"
                type="text"
                placeholder="Shorten a link here..."
                className={`w-full h-14 px-4 py-2 lg:py-4 rounded-md ${
                  invalidURL && "border-2 border-red"
                }`}
                value={longURL}
                onChange={handleChange}
              />
              <span
                className={`text-red text-sm ${
                  invalidURL ? "inline" : "hidden"
                }`}
              >
                Please add a link
              </span>
            </div>

            <button
              type="submit"
              className="bg-cyan w-full lg:w-1/5 h-14 rounded-md px-4 py-2 text-white font-bold hover:opacity-60"
            >
              Shorten It!
            </button>
          </fieldset>
        </form>

        <div className="flex flex-col gap-4">
          {loading && (
            <div className="animate-pulse p-4 bg-white rounded-md lg:flex items-center justify-between divide-y lg:divide-none divide-gray">
              <p className="animate-bounce">Carregando...</p>
            </div>
          )}

          {URLs.map(({ longURL, shortURL }) => (
            <div
              key={shortURL}
              className="bg-white rounded-md lg:flex items-center justify-between divide-y lg:divide-none divide-gray"
            >
              <p className="break-words p-4 font-bold">{longURL}</p>

              <div className="lg:flex items-center gap-6 p-4">
                <p className="text-cyan break-words font-bold">{shortURL}</p>
                <button
                  onClick={() => copyShortURL(shortURL)}
                  type="button"
                  className={`${
                    URLCopied === shortURL ? "bg-dark-violet" : "bg-cyan"
                  } rounded-md mt-4 lg:mt-0 w-full lg:w-auto px-6 py-1 text-white hover:opacity-60`}
                >
                  {URLCopied === shortURL ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
