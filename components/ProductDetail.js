app.component ('product-detail',{
    props:{
        material:{
            type:String,
            required:true
        }
    },
    template:
    /*html*/
        `<p>Material:</p>
        <ul>
            <li v-for="detail in material">{{ detail }}</li>
        </ul>
        `

})