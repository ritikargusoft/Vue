// Vue.createApp({
//   data() {
//     return {
//       goals: [],
//       enteredValue: "",
//     };
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredValue);
//       this.enteredValue = "";
//     },
//   },
// }).mount("#app");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

// const app = Vue.createApp({
//   data() {
//     return {
//       courseGoalA: "<h2>Finish and learn vue </h2>",
//       courseGoalB: "Implement vue",
//       vueLink: "https://vuejs.org/",

//     };
//   },

//   methods: {
//     outputGoal() {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         return this.courseGoalA;
//       } else {
//         return this.courseGoalB;
//       }
//     },
//   },
// });

// app.mount("#user-goal");

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',  
      lastname:''
    };
  },
  methods: {
    setName(event, lastname){
      this.name =   event.target.value +' ' +lastname
    },
    add(number) {
      this.counter = this.counter + number;
    },
    subtarct(number) {
      this.counter = this.counter - number;
    },
  },
});

app.mount("#events");
