new Vue({
    el: '#app',
    template:`
    <div>
    <h1> {{blog.author}} </h1>
    <h1> {{blog.Title}}</h1>
    <h1 v-if="on" v-bind:class="className"> {{books.Title}} </h1>
    <h1 v-else> No books found </h1>
    <h1 v-if="on"> {{books.date}}</h1>
    </div>`,
    data: {
        blog: {"author": "Varada", "Title" : "Live session"},
        books: {"Title": "New Vueapp", "date": "12/04/23"},
        on: true,
        className: "Danger",
    }
  })






