import { useState, useEffect } from 'react';

export const useAPI = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const key = getKey(url);
        const cookies = document.cookie.split(';').map(cookie => cookie.split('='));
        const prevName = cookies.findIndex(cookie => cookie[0] === key);

        if (prevName + 1) {
          setData(getCookie(key));
          setStatus('success');
          return;
        }

        const dateResponse = await fetch(url);
        const json = await dateResponse.json();



        if (dateResponse.ok && json?.response !== 'error') {
          setStatus('success');
          cahseDate(url, json);
          setData(json?.results[0].name);
        } else if (dateResponse.status === 102 && json?.response !== 'error') {
          setStatus('idle');
        } else {
          throw new TypeError(json.error, prevName[1]);
        }


      } catch (error) {
        setStatus('error');
        setError(error);
      }


    };

    fetchData();
  }, []);

  return [data, error, status];
};

function cahseDate(url, listData) {
  const key = getKey(url);
  let date = new Date();
  date.setDate(date.getDate() + 1);
  document.cookie = key + '=' + listData.results[0].name + ` ;expires=${date}`;
}

function getKey(url) {
  const arrayFromUrl = url.split('/');
  const key = arrayFromUrl.slice(arrayFromUrl.length - 2, arrayFromUrl.length).join('/');

  return encodeURIComponent(key);
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}