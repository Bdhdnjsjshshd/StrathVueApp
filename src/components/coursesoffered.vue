<template>
   <div id = 'coursesoffered'>
       <v-container>
               <v-layout column>
                   <v-carousel>
                       <v-carousel-item
                           src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                           cover
                       ></v-carousel-item>
 
                       <v-carousel-item
                           src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                           cover
                       ></v-carousel-item>
 
                       <v-carousel-item
                           src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                           cover
                       ></v-carousel-item>
                   </v-carousel>
                   </v-layout>
                   <v-layout>
                   <v-container>
                       <v-row align="center" justify="center">
                           <div class="d-flex align-center flex-column">
                               <div class="text-subtitle-2">With props</div>
 
                               <v-card
                               width="400"
                               title="This is a title"
                               subtitle="This is a subtitle"
                               text="This is content"
                               ></v-card>
 
                               <div class="mt-4 text-subtitle-2">With slots</div>
 
                               <v-card width="400">
                               <template v-slot:title>
                                   This is a title
                               </template>
 
                               <template v-slot:subtitle>
                                   This is a subtitle
                               </template>
 
                               <template v-slot:text>
                                   This is content
                               </template>
                               </v-card>
 
                               <div class="mt-4 text-subtitle-2">With markup</div>
 
                               <v-card width="400">
                               <v-card-item>
                                   <v-card-title>courses at Strathmore University</v-card-title>
 
                                   <v-card-subtitle>This is a subtitle</v-card-subtitle>
                               </v-card-item>
 
                               <v-card-text>
                                 <v-list
                                          :items="courses"
                                          item-title="coursename"
                                          item-value="id"
                                 ></v-list>
                               </v-card-text>
                               </v-card>
                           </div>
                       </v-row>
                   </v-container>
               </v-layout>
           </v-container>
   </div>
 </template>
 <script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      courses:[
         {
            id: 1,
            coursename: 'Financial Economics'
         },
         {
            id: 2,
            coursename: 'psychology'
         },
         {
            id: 3,
            coursename: 'computer science'
         },
         {
            id: 4,
            coursename: 'financial enginering'
         },
         {
            id: 5,
            coursename:'medicine and surgery'
         },
         {
            id: 6,
            coursename: 'education'
         },
         {
            id: 7,
            coursename: 'architecture'
         },
         {
            id: 8,
            coursename: 'foresty'
         },
         {
            id: 9,
            coursename: 'hospitality'
         },
         {
            id: 10,
            coursename: 'law'
         }
        
      ],
      componentstitle:'courses at strath University'
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

