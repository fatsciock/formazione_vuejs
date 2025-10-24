<script lang="ts" setup>
import { ref } from 'vue';

// Stato del testo e degli stili
const testo = ref('')
const isBold = ref(false)
const isItalic = ref(false)
const isStrike = ref(false)
const isUnderline = ref(false)
const colore = ref('black')
const fontSize = ref('1em')
const fontFamily = ref('Arial')
const textAlign = ref('left')
const bgColor = ref('white')

// Funzioni per modificare lo stile
function toggleBold() {
  isBold.value = !isBold.value
}
function toggleItalic() {
  isItalic.value = !isItalic.value
}
function toggleStrike() {
  isStrike.value = !isStrike.value
}
function toggleUnderline() {
  isUnderline.value = !isUnderline.value
}
function setColore(c: string) {
  colore.value = c
}
function setFontSize(size: string) {
  fontSize.value = size
}
function setFontFamily(family: string) {
  fontFamily.value = family
}
function setTextAlign(align: string) {
  textAlign.value = align
}
function setBgColor(color: string) {
  bgColor.value = color
}
</script>

<template>
  <div>
    <input
      type="text"
      v-model="testo"
      placeholder="Scrivi qui il tuo testo..."
    />

    <div class="toolbar">
      <div>
        <button @click="toggleBold">Grassetto</button>
        <button @click="toggleItalic">Corsivo</button>
        <button @click="toggleStrike">Barrato</button>
        <button @click="toggleUnderline">Sottolineato</button>
      </div>
      <div>
        <span>Colore:</span>
        <button @click="setColore('black')">Nero</button>
        <button @click="setColore('red')">Rosso</button>
        <button @click="setColore('blue')">Blu</button>
      </div>
      <div>
        <span>Sfondo:</span>
        <button @click="setBgColor('white')">Bianco</button>
        <button @click="setBgColor('yellow')">Giallo</button>
        <button @click="setBgColor('lightgray')">Grigio</button>
      </div>
      <div>
        <span>Dimensione:</span>
        <button @click="setFontSize('1em')">Piccolo</button>
        <button @click="setFontSize('1.5em')">Medio</button>
        <button @click="setFontSize('2em')">Grande</button>
      </div>
      <div>
        <span>Font:</span>
        <button @click="setFontFamily('Arial')">Arial</button>
        <button @click="setFontFamily('Courier New')">Courier</button>
        <button @click="setFontFamily('Times New Roman')">Times</button>
      </div>
      <div>
        <span>Allineamento:</span>
        <button @click="setTextAlign('left')">Sinistra</button>
        <button @click="setTextAlign('center')">Centro</button>
        <button @click="setTextAlign('right')">Destra</button>
      </div>
    </div>

    <p
      :style="{
        fontWeight: isBold ? 'bold' : 'normal',
        fontStyle: isItalic ? 'italic' : 'normal',
        textDecoration: 
          (isStrike ? 'line-through ' : '') + 
          (isUnderline ? 'underline' : ''),
        color: colore,
        fontSize: fontSize,
        fontFamily: fontFamily,
        textAlign: textAlign,
        backgroundColor: bgColor
      }"
    >
      {{ testo }}
    </p>
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  gap: 1em;
  margin: 1em 0;
}
.toolbar > div {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.5em;
}
button {
  margin-right: 0.2em;
  margin-bottom: 0;
}
input {
  width: 100%;
  max-width: 400px;
  margin-bottom: 1em;
}
</style>