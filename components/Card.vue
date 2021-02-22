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
            required: true
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
            return this.$store.registerModule(this.moduleId, cardModule)
        }
    },
    destroyed() {
        if (this.$store.hasModule(this.moduleId)) {
            return this.$store.unregisterModule(this.moduleId)
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
    width: 100%;
    display: flex;
}

input {
    flex: 1 1 100%;
    width: 100%;
}
</style>
