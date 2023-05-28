<template>
  <div>
    <h2>MC历史版本管理</h2>
    <div class="version-list">
      <ul>
        <li v-for="version in versions" :key="version.id">
          {{ version.name }} - {{ version.date }}
          <button @click="deleteVersion(version)">删除</button>
        </li>
      </ul>
    </div>
    <div class="add-version">
      <h3>添加新版本</h3>
      <form @submit.prevent="addVersion">
        <label>
          版本名称：
          <input type="text" v-model="newVersionName" />
        </label>
        <br />
        <label>
          发布日期：
          <input type="date" v-model="newVersionDate" />
        </label>
        <br />
        <button type="submit">添加</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      versions: [
        { id: 1, name: 'v1.0', date: '2023-04-20' },
        { id: 2, name: 'v2.0', date: '2023-05-01' },
        { id: 3, name: 'v2.1', date: '2023-06-01' },
      ],
      newVersionName: '',
      newVersionDate: '',
    };
  },
  methods: {
    addVersion() {
      if (this.newVersionName && this.newVersionDate) {
        const newVersion = {
          id: this.versions.length + 1,
          name: this.newVersionName,
          date: this.newVersionDate,
        };
        this.versions.push(newVersion);
        this.newVersionName = '';
        this.newVersionDate = '';
      }
    },
    deleteVersion(version) {
      const index = this.versions.indexOf(version);
      this.versions.splice(index, 1);
    },
  },
};
</script>

<style>
.version-list {
  margin-bottom: 20px;
}
.version-list ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.version-list li {
  margin-bottom: 5px;
}
.add-version {
  border: 1px solid #ccc;
  padding: 10px;
}
.add-version label {
  display: block;
  margin-bottom: 5px;
}
.add-version button[type='submit'] {
  margin-top: 5px;
}
</style>
