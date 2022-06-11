<template>
    <div class="container mt-4 ">
       <div class="row">
        <!-- User1 -->
          <div class="col-md-6 mb-4">
             <div class="card mx-auto">
                <div class="card-header bg-transparent">
                    <div class="navbar navbar-expand p-0">
                        <ul class="navbar-nav me-auto align-items-center">
                            <li class="nav-item">
                                <a href="#!" class="nav-link">
                                    <div class="position-relative"
                                        style="width:50px; height: 50px; border-radius: 50%; border: 2px solid #e84118; padding: 2px">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                            class="img-fluid rounded-circle" alt="">
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#!" class="nav-link">SomChai</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="card-body p-4" style="height: 500px; overflow: auto;" id="chat">
                  <div v-for="(chatu1, index) in chatData" :key="index" class="py-4">
                      <div class="d-flex align-items-baseline text-end justify-content-end mb-4"  v-if="chatu1.sender.type === 'user1'">
                        <div class="pe-2">
                            <div>
                                <div class="card card-text d-inline-block p-2 px-3 m-1">{{ chatu1.content }}</div>
                            </div>
                            <div>
                                <div class="small">{{ filterDate(chatu1.sender.createdAt ) }}</div>
                            </div>
                        </div>
                        <div class="position-relative avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                class="img-fluid rounded-circle" alt="">
                        </div>
                    </div>

                    <div class="d-flex align-items-baseline mb-4" v-if="chatu1.sender.type === 'user2'">
                        <div class="position-relative avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                class="img-fluid rounded-circle" alt="">
                        </div>
                        <div class="pe-2">
                            <div>
                                <div class="card card-text d-inline-block p-2 px-3 m-1">{{ chatu1.content }}</div>
                            </div>
                            <div>
                                <div class="small">{{ filterDate(chatu1.sender.createdAt ) }}</div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                
                <div class="card-footer bg-white position-absolute w-100 bottom-0 m-0 p-1">
                    <div class="input-group">
                        <!-- <div class="input-group-text bg-transparent border-0">
                            <button class="btn btn-light text-secondary">
                                <i class="fas fa-paperclip"></i>
                            </button>
                        </div> -->
                        <input type="text" v-model="messageUser1" class="form-control border-0" placeholder="ข้อความแชท....">
                        <div class="input-group-text bg-transparent border-0">
                            <button class="btn btn-light text-secondary" :disabled="messageUser1 === ''" @click="onSubmitMessage('user1')">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          <!-- User2 -->
          <div class="col-md-6 mb-4">
             <div class="card mx-auto">
                <div class="card-header bg-transparent">
                    <div class="navbar navbar-expand p-0">
                        <ul class="navbar-nav me-auto align-items-center">
                            <li class="nav-item">
                                <a href="#!" class="nav-link">
                                    <div class="position-relative"
                                        style="width:50px; height: 50px; border-radius: 50%; border: 2px solid #e84118; padding: 2px">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                            class="img-fluid rounded-circle" alt="">
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#!" class="nav-link">Kajorn</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body p-4" style="height: 500px; overflow: auto;" id="chat2">
                  <div class="py-4" v-for="(chatu2, index) in chatData" :key="index">
                    <div class="d-flex align-items-baseline text-end justify-content-end  mb-4" v-if="chatu2.sender.type === 'user2'">
                        <div class="position-relative avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                class="img-fluid rounded-circle" alt="">
                        </div>
                        <div class="pe-2">
                            <div>
                                <div class="card card-text d-inline-block p-2 px-3 m-1">{{ chatu2.content }}</div>
                            </div>
                             <div>
                                <div class="small">{{ filterDate(chatu2.sender.createdAt) }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex align-items-baseline mb-4" v-if="chatu2.sender.type === 'user1'">
                        <div class="position-relative avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                class="img-fluid rounded-circle" alt="">
                        </div>
                        <div class="pe-2">
                            <div>
                                <div class="card card-text d-inline-block p-2 px-3 m-1">{{ chatu2.content }}</div>
                            </div>
                             <div>
                                <div class="small">{{ filterDate(chatu2.sender.createdAt) }}</div>
                            </div>
                        </div>
                    </div>

                  </div>
                </div>
                <div class="card-footer bg-white position-absolute w-100 bottom-0 m-0 p-1">
                    <div class="input-group">
                        <!-- <div class="input-group-text bg-transparent border-0">
                            <button class="btn btn-light text-secondary">
                                <i class="fas fa-paperclip"></i>
                            </button>
                        </div> -->
                        <input type="text" v-model="messageUser2" class="form-control border-0" placeholder="ข้อความแชท...">
                        <div class="input-group-text bg-transparent border-0">
                            <button class="btn btn-light text-secondary" :disabled="messageUser2 === ''" @click="onSubmitMessage('user2')">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </div>
</template>

<script>
import { useChat } from './../hooks/chat.js'

export default {
  name: "ChatRoom",
  setup(){

    const { messageUser1, messageUser2, chatData, onSubmitMessage, filterDate } = useChat()
   
    return { messageUser1, messageUser2, chatData, onSubmitMessage, filterDate }
  }
};
</script>

<style>
a.nav-link {
  color: gray;
  font-size: 18px;
  padding: 0;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #e84118;
  padding: 2px;
  flex: none;
}

input:focus {
  outline: 0px !important;
  box-shadow: none !important;
}

.card-text {
  border: 2px solid #ddd;
  border-radius: 8px;
}
</style>