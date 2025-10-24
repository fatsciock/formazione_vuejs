<script setup lang="ts">
import { ref, watch } from 'vue';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
    };
    address: {
        city: string;
        street: string;
    };
}

interface Album {
    id: number;
    title: string;
}

interface Photo {
    id: number;
    title: string;
    thumbnailUrl: string;
    url: string;
}

const userId = ref(1);
const user = ref<User | null>(null);
const loading = ref(false);

const albums = ref<Album[]>([]);
const loadingAlbums = ref(false);

const photos = ref<Photo[]>([]);
const loadingPhotos = ref(false);
const selectedAlbumId = ref<number | null>(null);

async function fetchUser() {
    loading.value = true;
    user.value = null;
    albums.value = [];
    photos.value = [];
    selectedAlbumId.value = null;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`);
    user.value = await res.json();

    loading.value = false;
}

async function fetchAlbums() {
    loadingAlbums.value = true;
    albums.value = [];
    photos.value = [];
    selectedAlbumId.value = null;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}/albums`);
    albums.value = await res.json();

    loadingAlbums.value = false;
}

async function fetchPhotos(albumId: number) {
    loadingPhotos.value = true;
    photos.value = [];
    selectedAlbumId.value = albumId;

    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    photos.value = await res.json();

    loadingPhotos.value = false;
}

// caricamento iniziale
fetchUser();

// ogni volta che cambia userId → rifai la fetch
watch(userId, fetchUser);
</script>

<template>
    <div class="container">
        <h2>Utente ID: {{ userId }}</h2>

        <div class="buttons">
            <button @click="userId--" :disabled="userId <= 1 || loading">Prev</button>
            <button @click="userId++" :disabled="userId >= 10 || loading">Next</button>
        </div>

        <p v-if="loading">Caricamento dati utente...</p>

        <div v-else-if="user" class="card">
            <h3>{{ user.name }} <small>({{ user.username }})</small></h3>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Telefono:</strong> {{ user.phone }}</p>
            <p><strong>Sito:</strong> <a :href="'https://' + user.website" target="_blank">{{ user.website }}</a></p>
            <p><strong>Azienda:</strong> {{ user.company.name }}</p>
            <p class="catchphrase">"{{ user.company.catchPhrase }}"</p>
            <p><strong>Città:</strong> {{ user.address.city }}, {{ user.address.street }}</p>

            <hr />
            <button @click="fetchAlbums" :disabled="loadingAlbums">
                {{ loadingAlbums ? 'Caricamento album...' : 'Mostra album' }}
            </button>

            <div v-if="albums.length" class="albums">
                <h4>Album di {{ user.name }}</h4>
                <ul>
                    <li v-for="album in albums" :key="album.id">
                        <button
                            @click="fetchPhotos(album.id)"
                            :disabled="loadingPhotos"
                            class="album-btn"
                        >
                            {{ album.title }}
                        </button>
                    </li>
                </ul>
            </div>

            <div v-if="loadingPhotos">
                <p>Caricamento foto...</p>
            </div>

            <div v-else-if="photos.length" class="photos">
                <h4>Foto album {{ selectedAlbumId }}</h4>
                <div class="grid">
                    <div v-for="photo in photos.slice(0, 12)" :key="photo.id" class="photo">
                        <img :src="photo.thumbnailUrl" :alt="photo.title" />
                        <p>{{ photo.title }}</p>
                    </div>
                </div>
            </div>
        </div>

        <p v-else>Nessun dato disponibile</p>
    </div>
</template>

<style scoped>
.container {
    max-width: 600px;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 12px;
    background: #1e1e1e;
    color: #fff;
    text-align: center;
}
.buttons {
    margin-bottom: 1rem;
}
button {
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
}
.card {
    border: 1px solid #444;
    border-radius: 10px;
    padding: 1rem;
    background-color: #2a2a2a;
}
.catchphrase {
    font-style: italic;
    color: #ccc;
}
a {
    color: #8cd3ff;
}
.albums ul {
    list-style: none;
    padding: 0;
}
.album-btn {
    background-color: #444;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.4rem 0.8rem;
    margin: 0.2rem 0;
}
.album-btn:hover {
    background-color: #666;
}
.photos {
    margin-top: 1rem;
}
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.5rem;
}
.photo {
    background-color: #333;
    border-radius: 6px;
    padding: 0.5rem;
}
.photo img {
    width: 100%;
    border-radius: 4px;
}
.photo p {
    font-size: 0.7rem;
    margin-top: 0.3rem;
}
</style>
