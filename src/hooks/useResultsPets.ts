import { useState, useEffect } from "react";
import { useLocation } from "./useLocation";

type ResponsePets = {
  objectID: string;
  pictureURL: string;
  name: string;
  raza: string;
  location: any;
  state?: string;
};
type Response = {
  results: Array<ResponsePets>;
  isLoading: boolean;
};

export function useResultsPets(): Response {
  const [results, setResultsReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  async function reportsClose(lat: string, lng: string) {
    if (lat && lng) {
      setIsLoading(true);
      const response = await fetch(
        `https://dwf-m7-postgre.herokuapp.com/api/v1/pets/find-by-location?lat=${lat}&lng=${lng}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const data = await response.json();
      setIsLoading(false);
      setResultsReports(data);
      return data;
    }
  }
  useEffect(() => {
    reportsClose(location["lat"], location["lng"]);
  }, [location]);

  return { results, isLoading };
}
