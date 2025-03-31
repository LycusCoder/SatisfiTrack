<template>
    <!-- Komponen wrapper untuk FontAwesomeIcon -->
    <font-awesome-icon v-bind="$attrs" />
  </template>
  
  <script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { far } from '@fortawesome/free-regular-svg-icons'
  
  // Tambahkan semua icon yang dibutuhkan ke library
  library.add(fas, fab, far)
  
  export default {
    name: 'Icon',
    components: {
      FontAwesomeIcon
    }
  }
  </script>
  