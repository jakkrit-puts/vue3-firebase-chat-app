import { onMounted, ref, onUpdated } from "vue"
import dayjs from "dayjs"
import { doc, arrayUnion, updateDoc, onSnapshot, getDoc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/init'

const CHAT_ROOM = "chat0001"

export function useChat() {

    const messageUser1 = ref("")
    const messageUser2 = ref("")
    const chatData = ref([])

    onMounted(() => {
        getDocMessage()
    })

    const onSubmitMessage = async (user) => {
        if(user === 'user1') {
 
            const messageObj = {
                content: messageUser1.value,
                sender: {
                    type: "user1",
                    createdAt: dayjs().format(),
                    isUrlImage: false,
                },
            }
            await updateDoc(doc(db, 'chat_room', CHAT_ROOM), {
                messages: arrayUnion(messageObj),
            })
           messageUser1.value = ''
           scrollToBottom()

        } else if('user2'){

             const messageObj = {
                content: messageUser2.value,
                sender: {
                    type: "user2",
                    createdAt: dayjs().format(),
                    isUrlImage: false,
                },
            }

            await updateDoc(doc(db, 'chat_room', CHAT_ROOM), {
                messages: arrayUnion(messageObj),
            })

            messageUser2.value = ''
            scrollToBottom()
        }
    }

    const getDocMessage = async () => {
        onSnapshot(doc(db, 'chat_room', CHAT_ROOM), (snap) => {
            chatData.value = snap.data()?.messages
            if(chatData.value == undefined) {
                openChat()
            }
        })
    }

    const openChat = async () => {
        const docSnapChat = await getDoc(doc(db, 'chat_room', CHAT_ROOM))
        if (!docSnapChat.exists()) {
            const dataObj = {
                createdAt: dayjs().format(),
                order_id: CHAT_ROOM,
                messages: [],
            }
            await setDoc(doc(db, 'chat_room', CHAT_ROOM), dataObj)
        }
    }

    const filterDate = () => {
        return dayjs().format('DD-MM-YYYY HH:mm')
    }

    const scrollToBottom = () => {
     const container = document.body.querySelector('#chat')
       container.scrollTo({
       top: container.scrollHeight,
       behavior: 'smooth',
     })
      const container2 = document.body.querySelector('#chat2')
       container2.scrollTo({
       top: container2.scrollHeight,
       behavior: 'smooth',
     })
    }

    return { messageUser1, messageUser2, chatData, onSubmitMessage, filterDate }

}