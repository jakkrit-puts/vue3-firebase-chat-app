<template>
   <div class="container">
      <div class="row mt-5">
          <div class="col">
            <b-card>
            <div>
            <b-form @submit="onSubmit">
                <b-form-group
                id="input-group-1"
                label="Username:"
                label-for="input-1"
                >
                <b-form-input
                    id="input-1"
                    v-model="form.username"
                    type="text"
                    placeholder="Username"
                    required
                ></b-form-input>
                </b-form-group>

                  <b-form-group
                id="input-group-1"
                label="Password:"
                label-for="input-1"
                >
                <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    required
                ></b-form-input>
                </b-form-group>
                <div class="row p-3">
                    <b-button type="submit" variant="success">Login</b-button>
                </div>
            </b-form>
            </div>
           </b-card>
          </div>
      </div>
   </div>
</template>

<script>
// hook
import { useAuth } from "./../hooks/auth";

export default {
  name: "Login",
  setup(){

    const { form, onSubmit } = useAuth()

     return { form, onSubmit }
  }
}
</script>

<style>

</style>