import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const users = [
    { username: "user1", password:"123456", profile: { name:"user1", avatar: "https://bootdey.com/img/Content/avatar/avatar1.png" } },
    { username: "user2", password:"Aa112233", profile: { name:"user2", avatar: "https://bootdey.com/img/Content/avatar/avatar2.png"} },
    { username: "user3", password:"Aa1111", profile: { name:"user3", avatar: "https://bootdey.com/img/Content/avatar/avatar3.png"} }
]

export function useAuth () {

    const router = useRouter()

    const form = reactive({
        username: '',
        password: '',
    })

     const onSubmit = (event) => {
        event.preventDefault()
        router.push("/")
     }

     return { form, onSubmit }
}