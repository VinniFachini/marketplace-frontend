<template>
    <form class="search-input">
      <!-- O componente SpeechRecognition emite o evento "transcription" -->
      <SpeechRecognition @transcription="updateSearchTerm" />
      <input 
        type="text"
        v-model="searchTerm"
        @input="handleInput"
        placeholder="Pesquisar..."
      />
      <button type="submit"></button>
    </form>
  </template>
  
  <script>
  import SpeechRecognition from './SpeechRecognition';
  export default {
    name: 'SearchInput',
    components: {
      SpeechRecognition,
    },
    data() {
      return {
        searchTerm: '',
      };
    },
    methods: {
      // Função chamada quando o evento "transcription" é disparado pelo componente filho
      updateSearchTerm(transcript) {
        // Atualiza searchTerm com a transcrição recebida
        this.searchTerm = transcript;
        // Dispara o evento de busca
        this.handleInput();
      },
      handleInput() {
        this.$emit('search', this.searchTerm);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-input {
    width: 100%;
  }
  
  .search-input input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  </style>
  