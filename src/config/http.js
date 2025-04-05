import axios from 'axios';

export const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzZhOGFkOWFlNjc4M2RhNWRhYmRiZjU3ZjFlNjdmMiIsIm5iZiI6MTczMzg1MDg0OS4xNTYsInN1YiI6IjY3NTg3NmUxZTUyODQwMGNhYWMxYzUxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c-nliyx0Ft2rT0xIZggxD3rfXhoK3HSGZ9U70-uVOgk`,
    },
});
