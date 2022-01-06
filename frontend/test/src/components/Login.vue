<template>
  <div class="hello">
      <h1>Login</h1>
      <form :action="form.action" method="post">
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
  name: 'Signup',
  data() {
    return {
      form: {}
    }
  },
  created() {
      this.loadForm();
  },
  methods: {
    async loadForm() {
      const response = await fetch('http://ui.my-app.com:8081/.ory/self-service/login/browser', { credentials: 'include', headers: { Accept: 'application/json' } });
      const { ui } = await response.json();
      this.form = ui || {};
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
