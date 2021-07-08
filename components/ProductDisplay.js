app.component ('product-display',{
    props:{
        premium:{
            type: Boolean,
            required: true
        }

    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>

                <p v-if="inStock">In Stock</p>
                <p v-else>Out of stock</p>
                <p>Shipping: {{shipping}} </p>
                <product-detail :material="details"></product-detail>

                <div
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color}">
                </div>
                <button 
                    class=" button " 
                    :class="{ disabledButton: !inStock}"
                    :disabled='!inStock' 
                    v-on:click="addToCart ">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>`,
    data() {
        return {
            product: 'Shoes',
            brand: 'SE 331',
            // image: './assets/images/socks_green.jpg',
            // inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            selectedVariant:0,
            cart: 0,
            onSale: true,
            activeClass:true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index;
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        Onsale(){
            if(this.variants[this.selectedVariant].quantity > 0 && this.onSale == true) {
            return this.brand + ' ' + this.product  + ' ' + "is on sale"
            }
            else{
                return this.brand + ' ' + this.product  + ' ' + "not sale"
                }
        },
        shipping(){
            if (this.premium){
                return 'Free'
            }
            return 30
        }

    }
})