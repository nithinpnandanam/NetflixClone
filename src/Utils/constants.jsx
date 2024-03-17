export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const AVATAR = "https://occ-0-3662-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"

export const APIOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_Key
    }
  };
  export const nowplayingMoviesURL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  export const popularMoviesURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
  export const topRatedMoviesURL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
  export const upcomingMoviesURL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
  export const videoInfoURL = 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US';
  export const posterCDN = 'https://image.tmdb.org/t/p/w500/'

  export const  SUPPORTED_LANGUAGES = [
    {identifier:"english",name:"English"},
    {identifier:"hindi",name:"Hindi"},
    {identifier:"malayalam",name:"Malayalam"},
  ]

  export const open_AI_key = import.meta.env.VITE_open_AI_key