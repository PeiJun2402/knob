import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL} from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
  alias: {
    '@': fileURLToPath(new URL("./src", import.meta.url)),
  },
},
  //scss import
  css: {

    preprocessorOptions: {
    
      scss: {
      
        additionalData: `
        @import "./src/style/Partials/variable.scss";
        @import "./src/style/Partials/function.scss";
        @import "./src/style/Partials/font.scss";
        `, 
      
      },
    
    },
  
   },
   base:"/knob/"

})
