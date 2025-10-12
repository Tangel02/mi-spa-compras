<template>
  <div class="container">
    <h1>🌎 Países del Mundo</h1>

    <input
      v-model="filtro"
      placeholder="Buscar por nombre o región..."
      class="buscador"
    />

    <div v-if="loading">Cargando datos...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="paises">
      <div
        v-for="pais in paisesFiltrados"
        :key="pais.name.common"
        class="tarjeta"
      >
        <img :src="pais.flags.svg" :alt="pais.name.common" />
        <h2>{{ pais.name.common }}</h2>
        <p><b>Capital:</b> {{ pais.capital?.[0] || "N/A" }}</p>
        <p><b>Región:</b> {{ pais.region }} / {{ pais.subregion }}</p>
        <p><b>Población:</b> {{ pais.population.toLocaleString() }}</p>
        <p><b>Idiomas:</b> {{ idiomas(pais.languages) }}</p>
        <p><b>Monedas:</b> {{ monedas(pais.currencies) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const paises = ref([]);
const filtro = ref("");
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population,languages,currencies"
    );
    if (!res.ok) throw new Error("Error al obtener los datos");
    paises.value = await res.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

const paisesFiltrados = computed(() =>
  paises.value.filter(
    (p) =>
      p.name.common.toLowerCase().includes(filtro.value.toLowerCase()) ||
      p.region.toLowerCase().includes(filtro.value.toLowerCase())
  )
);

const idiomas = (langs) =>
  langs ? Object.values(langs).join(", ") : "N/A";

const monedas = (curr) =>
  curr ? Object.values(curr).map((m) => m.name).join(", ") : "N/A";
</script>

<style scoped>
.container {
  text-align: center;
  font-family: sans-serif;
  padding: 1rem;
  background: #f5f7fa;
  min-height: 100vh;
}

.buscador {
  padding: 0.6rem;
  width: 60%;
  max-width: 400px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1.5rem;
}

.paises {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.tarjeta {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 220px;
  padding: 1rem;
  transition: transform 0.2s;
}

.tarjeta:hover {
  transform: scale(1.05);
}

.tarjeta img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
