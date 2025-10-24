<script setup lang="ts">
import { ref, computed } from 'vue'
import MovieCard from '@/components/esercizi/film/MovieCard.vue';
import FilterPanel from '@/components/esercizi/film/FilterPanel.vue';

interface Movie {
  title: string
  year: number
  rating: number
}

// Lista film
const movies = ref<Movie[]>([
  { title: 'Inception', year: 2010, rating: 8.8 },
  { title: 'Interstellar', year: 2014, rating: 8.6 },
  { title: 'The Dark Knight', year: 2008, rating: 9.0 },
  { title: 'Tenet', year: 2020, rating: 7.5 },
  { title: 'Memento', year: 2000, rating: 8.4 },
])

// Soglia minima di rating
const minRating = ref(0)

// Quando il filtro cambia
function handleFilterChange(newValue: number) {
  minRating.value = newValue
}

// Film filtrati
const filteredMovies = computed(() =>
  movies.value.filter(movie => movie.rating >= minRating.value)
)
</script>

<template>
  <div class="catalog">
    <h1>🎬 Mini Catalogo Film</h1>

    <FilterPanel @filter-change="handleFilterChange" />

    <div class="movie-list">
      <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.title"
        :title="movie.title"
        :year="movie.year"
        :rating="movie.rating"
      />
    </div>
  </div>
</template>

<style scoped>
.catalog {
  max-width: 600px;
  margin: 0 auto;
  font-family: sans-serif;
}
.movie-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
