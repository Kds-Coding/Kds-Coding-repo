import { reactive } from 'vue'

export const store = reactive({
    isNavOpen: false
  });
  
  export const mutations = {
    setIsNavOpen(yesno) {
      store.isNavOpen = yesno;
    },
    toggleNav() {
      store.isNavOpen = !store.isNavOpen;
    }
  };
  