<template>
  <div class="jumbotron">
    <h2>Múltiple Choice</h2>
    <hr>
    <div class="responsive">
      <table>
        <tr>
          <th>Pregunta</th>
          <th>Respuesta</th>
        </tr>
        <tr v-for="(pregunta, index) in respuestas" :key="index">
          <td>{{ pregunta.num }}</td>
          <td>{{ pregunta.res }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preguntas",
  data() {
    return {
      respuestas: [
        {num: 1, res: "c"},
        {num: 2, res: "c"},
        {num: 3, res: "a, b"},
      ]

      }
    }
}
</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(195, 201, 198);
  color: rgb(10, 105, 10);
}
hr {
  background-color: rgb(255, 255, 255);
}
</style>