import fetcher from "./fetcher";

export const auth= function(mode: 'signin' | 'signup', body:{email: String, password: String}){
  return fetcher(`/${mode}`, body);
}
