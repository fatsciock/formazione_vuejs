export default {
    props: {
        title: String,
        content: String
    },
    template: `
    <div class="card">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <img src="https://picsum.photos/200" alt="Immagine di esempio">
    </div>
    `
}