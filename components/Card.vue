<template>
    <label>
        <input
            type="text"
            :value="name"
            @change="updateName">
    </label>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
        ...mapGetters([`callGetter`]),
        moduleId() {
            return `cardModule-${this.id}`
        },
        name() {
            return this.callGetter({ module: this.moduleId, getter: `getName` })
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
        ...mapActions([`callAction`]),
        updateName({ target }) {
            this.callAction({
                module: this.moduleId,
                method: `setName`,
                payload: target.value
            })
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
