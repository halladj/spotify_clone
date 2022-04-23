export default function fetcher(url: string, data ) {
  return fetch(`${window.location.origin}/api/${url}`,{
    method:data? "POST": "Get",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }).then((res)=> {
    if (res.status > 399 && res.status < 200) {
      throw new Error("");
      
    }

    return res.json()
  });
} 
