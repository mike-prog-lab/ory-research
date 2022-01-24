<template>
  <div class="hello">
      <h1>Dashboard</h1>
      <form :action="form.action" method="post">
        <div>
          <h1>{{  }}</h1>
        </div>
        <template v-for="(node, idx) in form.nodes" :key="node.group + idx">
          <div>
            <template v-if="node.meta && node.meta.label">
              <label :for="node.meta.label.id || ''" :class="node.meta.label.type">{{ node.meta.label.text }}</label>
            </template>
            <input v-bind="node.attributes" />
          </div>
        </template>
      </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      user: {}
    }
  },
  created() {
      this.loadForm();
  },
  methods: {
    async loadForm() {
      const response = await fetch('http://localhost:8090/v3/profile', { credentials: 'include', headers: { Accept: 'application/json' } });
      const data = await response.json();
      this.user = data.user || {};

      console.log(data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
