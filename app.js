const app = Vue.createApp({
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
      },
      decrement() {
        if (this.count > 0) {
          this.count--;
        }
      },
      reset(){
        this.count = 0;
      }

    }
  });
  
  app.mount('#app');