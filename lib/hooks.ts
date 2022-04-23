import  useSwr  from "swr";
import fetcher from "./fetcher";

export const useMe= () => {
  const {data, error}= useSwr("/me", fetcher);


  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}


export const usePLaylist= () => {
  const {data, error}= useSwr("/playlist", fetcher);

  return {
    playlists: data as any || [],
    isLoading: !data && !error, 
    isError: error
  }
}
