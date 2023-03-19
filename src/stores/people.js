import { ref, computed, inject } from "vue"
import { defineStore } from "pinia"
import { useStorageStore } from "./storage.js"

export const usePeopleStore = defineStore("people", () => {

    const storageStore = useStorageStore()
    const peopleStore = usePeopleStore()
    const profileIDCurrent = ref(-1)
    const peopleCounter = ref(0)
    const personCurrent = ref([])
    const addoredit = ref('neither')
    const nicksCurrent = ref([])
    const people = ref([
        { id:1, name: "John", age: 20 , tags:[], nicks:[], notes:[] },
        { id:2 ,name: "Jane", age: 25, tags:[], nicks:[], notes:[] },
        { id:3 ,name: "Jack", age: 30, tags:[], nicks:[], notes:[] },
        { id:4 ,name: "Jill", age: 35, tags:[], nicks:[] },
        { id:5 ,name: "Jen", age: 40 },
        { id:6 ,name: "Jenny", age: 45 }
    ]);

    const nicks = ref([
        { id:1, name: "JohnWick", app:"Steam" , ownerid:1},
        { id:2 ,name: "JaneDoe", app:"Steam", ownerid:1 },
        { id:3 ,name: "JackSparrow", app:"Steam", ownerid:1 }
    ]);

    const notes = ref([
        { id:1,importance: "High", day :1, month : 1, year : 2021,topic:"Money", text : "This sis a note", ownerid : 1},
        { id:2,importance: "High", day :1, month : 1, year : 2021,topic:"Study", text : "This is 4a note", ownerid : 1},
        { id:3,importance: "High", day :1, month : 1, year : 2021,topic:"Notes", text : "This is a 23note", ownerid : 1},
    ]);
    function checkNicks(){
        nicks.value.forEach(nick => {
            if(people.value.find(p => p.id === nick.ownerid)){
                addTagToUser(nick, nick.ownerid)
            }
        });
    }
    function checkNotes(){
        notes.value.forEach(note => {
            if(people.value.find(p => p.id === note.ownerid)){
                addNoteToUser(note, note.ownerid)
            }
        });
    }
    
        
    function setAE(value) {
        addoredit.value = value
    }
    function getAE() {
        return addoredit.value
    }
    function setCurrentPerson(person){
        personCurrent.value = person
    }
    function addTagToUser(tag, id){
        let user = people.value.find(p => p.id === id)
        user.tags.push(tag)
    }
    function addNoteToUser(note, id){
        let user = people.value.find(p => p.id === id)
        user.notes.push(note)
    }
    function getCurrentPerson(){
        return personCurrent.value
    }
    function setProfileID(id) {
            profileIDCurrent.value = id
    } 
    function getPersonByID(id) {
        console.log(people[id].value)
        return people[id].value
    }
    const oldestPerson = computed(() => {
        return people.value.reduce((oldest, person) => {
        return person.age > oldest.age ? person : oldest;
        });
    });
    const addPerson = (person) => {
        people.value.push(person);
    };
    function find(id){
        return people.value.find(p => p.id === id)
    }
    function findNicks(id){
        return nicks.value.find(p => p.ownerid === id)
    }
    function editPerson(person){
        const index = people.value.findIndex(p => p.id === person.id)
        people.value[index] = person
    }


    function saveData() {
       try{
        localStorage.setItem('people', JSON.stringify(people.value))
        console.log("Data Saved")
        //encryptUsers(people.value)
       }catch(err){
           console.log(err)
    }
        
    }
    function loadData() {
        try{
            people.value = JSON.parse(localStorage.getItem('people'))
            console.log(people.value)
            //people.value = decryptUsers(people.value)
        }catch(err){
            console.log(err)
        }
        
    }
    return {
        people,
        oldestPerson,
        addPerson,
        setProfileID,
        profileIDCurrent,
        getPersonByID,
        find,
        setAE,
        getAE,
        setCurrentPerson,
        getCurrentPerson,
        saveData,
        loadData,
        editPerson,
        findNicks,
        addTagToUser,
        checkNicks,
        addNoteToUser,
        checkNotes
    };


});