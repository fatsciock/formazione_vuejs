export default {
    emits: ['response'],
    setup(props, { emit }) {
        emit('response', 'hello from child')
        return {}
    },
    template: `
    <h2>Child component</h2>
    `
}