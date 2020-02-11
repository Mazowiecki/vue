<template>
  <div class="home">
    <BookList></BookList>
  </div>
</template>

<script>
// @ is an alias to /src
import BookList from "@/components/BookList";

export default {
  name: 'home',
  components: {
    BookList
  }
}
</script>
