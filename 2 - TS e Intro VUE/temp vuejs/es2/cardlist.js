import Card from './card.js';

export default {
    props: {
        cards: Array
    },
    components: {
        Card
    },
    template: `
    <div class="card-list">
        <Card v-for="card in cards" :key="card.id" :title="card.title" :description="card.description" />
    </div>
    `
}