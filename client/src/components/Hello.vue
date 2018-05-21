<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="search mb-5">
          <input v-model="queryString" class="form-control" type="text" name="imageSearch" placeholder="Search an image">
          <button type="button" @click="search" class="btn btn-info mt-3" name="button">Search</button>
        </div>
      </div>
      <div class="col-lg-12">
        <div id="images">
          <div class="my-2" v-for="img in images">
            <img width="100%" :src="img.src.large" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="row pull-left">
      <div class="col-lg-12">
        <div class="mb-5">
          <button @click="back" class="btn btn-primary">Previous</button>
          <button @click="next" class="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    images:[],
    page: 1,
    per_page: 15,
    queryString: ''
  }),
  methods: {
    search() {
      const API_URL = `http://localhost:1124/?images=${this.queryString}&page=${this.page}&per_page=${this.per_page}`;

      fetch(API_URL).then(response => response.json())
      .then(data => {
        this.images = data.photos
      });
    },
    next() {

      this.page++
      this.search()
    },
    back() {
      if (this.page > 1) {
        this.page--
        this.search()
      }
    }
  },
  name: 'hello'
}
</script>

<style>
#images {
  column-count: 3;
}

</style>
