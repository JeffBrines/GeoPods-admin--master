import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { fetchRequest } from "../utils";

const usePagination = (url, text = "") => {
  const location = useLocation();
  const history = useHistory();

  let { page = "1" } = queryString.parse(location.search);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState({ error: false, message: null });
  const [query, setQuery] = useState(text);

  const getData = async (page) => {
    const response = await fetchRequest(
      `${url}?page=${page}&size=20&text=${query}`,
      "GET",
      null,
      true
    );

    if (response.status === 200) {
      setIsLoading(false);
      setData(response);
    } else {
      setIsLoading(false);
      setError({ error: true, message: response.statusText });
    }
  };
  useEffect(() => {
    page = 1;
    getData(page);
  }, [query]);

  const handleData = (page) => {
    const stringified = queryString.stringify({ page: page });
    history.push({
      pathname: location.pathname,
      search: `?${stringified}`,
    });
    getData(page);
  };

  const incrementPage = async (page) => {
    const response = await fetchRequest(
      `${url}?page=${+page + 1}&size=20&text=${query}`,
      "GET",
      null,
      true
    );

    if (response.status === 200) {
      for (let item in response) {
        if (Array.isArray(response[item])) {
          if (response[item].length > 0) {
            handleData(+page + 1);
          }
        }
      }
    }
  };

  const decrementPage = (page) => {
    handleData(Math.max(+page - 1, 1));
  };

  useEffect(() => {
    handleData(page);
  }, []);

  return {
    setData,
    data,
    isLoading,
    error,
    page,
    decrementPage,
    incrementPage,
    setQuery,
  };
};

export default usePagination;
