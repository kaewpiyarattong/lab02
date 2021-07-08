const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            brand: 'SE 331',
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            selectedVariant:0,
            cart: [],
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateCart(id){
            this.cart.push(id)
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index;
        },
        removeToCart() {
            this.cart.splice(0,1)
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
        }
    }
})