const Vue = require('vue');
const { mount } = require('@vue/test-utils');
const NoteList = require('../note-taking-app-frontend/src/components/NoteList.vue');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { expect } = require('chai');

// Configure Vue to use Vue Test Utils
Vue.config.productionTip = false;

describe('NoteList', () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it('fetches and displays notes', async () => {
    const notes = [
      { _id: 1, title: 'Note 1', content: 'Content 1' },
      { _id: 2, title: 'Note 2', content: 'Content 2' },
    ];

    // Mock the HTTP request to fetch notes
    mockAxios.onGet('http://localhost:3000/api/notes').reply(200, notes);

    // Mount the NoteList component
    const wrapper = mount(NoteList);

    // Wait for the next tick to allow the asynchronous operation to complete
    await wrapper.vm.$nextTick();

    // Assert that the notes are displayed correctly
    const noteElements = wrapper.findAll('.note');
    expect(noteElements.length).to.equal(notes.length);
    noteElements.forEach((noteElement, index) => {
      const note = notes[index];
      expect(noteElement.find('h3').text()).to.equal(note.title);
      expect(noteElement.find('p').text()).to.equal(note.content);
    });
  });
});