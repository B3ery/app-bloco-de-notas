// Referências aos elementos HTML
const noteInput = document.getElementById('noteInput');
const saveButton = document.getElementById('saveButton');
const notesContainer = document.getElementById('notes');

// Verificar se há notas salvas no LocalStorage
const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
// Função para exibir notas na página
function displayNotes() {
notesContainer.innerHTML = '';
savedNotes.forEach((note, index) => {
const noteDiv = document.createElement('div');
noteDiv.classList.add('note');
noteDiv.innerHTML = `
<p class="text-p">${note}</p>
<button class="delete material-symbols-outlined"
data-index="${index}">delete</button>
`;
notesContainer.appendChild(noteDiv);
});
}

// Função para adicionar uma nova nota
function addNote() {
const newNote = noteInput.value.trim();
if (newNote !== '') {
savedNotes.push(newNote);
localStorage.setItem('notes', JSON.stringify(savedNotes));
noteInput.value = '';
displayNotes();
}
}
// Função para excluir uma nota
function deleteNote(index) {
savedNotes.splice(index, 1);
localStorage.setItem('notes', JSON.stringify(savedNotes));
displayNotes();
}
// Event listener para o botão "Salvar Nota"
saveButton.addEventListener('click', addNote);

// Event delegation para excluir notas
notesContainer.addEventListener('click', (event) => {
if (event.target.classList.contains('delete')) {
const index = event.target.getAttribute('data-index');
deleteNote(index);
}
});

// Exibir notas ao carregar a página
displayNotes();




















