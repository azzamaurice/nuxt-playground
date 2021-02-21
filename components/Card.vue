<template>
    <label>
        <input
            type="text"
            :value="name"
            @change="updateName">
    </label>
</template>

<script>
import cardModule from '~/assets/store/card'

export default {
    name: 'Card',
    props: {
        id: {
            type: String,
            default() {
                return [...Array(16)].map(_ => (~~(Math.random() * 36)).toString(36)).join(``)
            }
        }
    },
    computed: {
        moduleId() {
            return `cardModule-${this.id}`
        },
        name() {
            return this.$store.getters[`${this.moduleId}/getName`]
        }
    },
    created() {
        if (!this.$store.hasModule(this.moduleId)) {
            this.$store.registerModule(this.moduleId, cardModule)
        }
    },
    destroyed() {
        if (this.$store.hasModule(this.moduleId)) {
            this.$store.unregisterModule(this.moduleId)
        }
    },
    methods: {
        updateName({ target }) {
            this.$store.dispatch(`${this.moduleId}/setName`, target.value)
        }
    }
}
</script>

<style>
label {
    display: block;
}
</style>
