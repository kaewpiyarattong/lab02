app.component('review-form', {
    template:
        // html
        `<form class = "review-form" @submit.prevent ="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review:</label>
        <textarea id ="review" v-model="review"></textarea>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating" >
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <label for="recommend">Would you recommend this product:</label>
        <textarea id ="recommend" v-model="recommend"></textarea>
        <input class="button" type="submit" value="Submit">
        </form>
        `
    ,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
        }
    },
    methods: {
        onSubmit(){
            if(this.name === '' || this.review === '' || this.rating === null|| this.recommend === ''){
                alert('Review is incomplete. Plase fill out every field.')
                return
            }
            let productReviwe = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            this.$emit('review-submitted', productReviwe)
            this.name='',
            this.review='',
            this.rating=null
            this.recommend=''
        }
    }
})