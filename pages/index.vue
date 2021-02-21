<template>
    <div>
        <h1>Vuex Module</h1>

        <div class="add">
            <button type="button" @click="add">
                + Add Card
            </button>
        </div>

        <div class="cards">
            <div v-for="card in cards" :key="card" class="card">
                <div class="title">
                    id: {{card}}
                </div>

                <div class="content">
                    <Card :id="card"/>

                    <div class="action">
                        <button type="button" @click="remove(card)">
                            x
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { without } from 'lodash-es'

export default {
    data() {
        return {
            cards: []
        }
    },
    methods: {
        add() {
            this.cards.push([...Array(16)].map(_ => (~~(Math.random() * 36)).toString(36)).join(``))
        },
        remove(id) {
            this.cards = without(this.cards, id)
        }
    }
}
</script>

<style lang="scss">
.add {
    margin-bottom: 16px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
}

.card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: white;
    border-radius: 8px;
    box-shadow: 3px 5px 16px 10px hsla(0, 0%, 0%, 0.1);
}

.title {
    color: #ccc;
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 4px;
}

.content {
    display: flex;
}

.action {
    margin-left: 8px;
}
</style>
