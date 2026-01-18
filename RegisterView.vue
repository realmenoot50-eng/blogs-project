<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>
        
        <form @submit.prevent="register" class= "space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              v-model="email"
              id="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
            v-model="password"
              type="password"
              id="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
            v-model="confirm_password"
              type="password"
              id="confirmPassword"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Confirm your password"
            />
          </div>

        <div class="text-red-500">
            {{ errmessage }}
        </div>
          
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { auth } from '@/firebase/config';
    import { ref } from 'vue';
    import {useRouter}from 'vue-router';


    const router=useRouter("");

  
const email = ref(null);
const password = ref(null);
const confirm_Password = ref(null);

const errmessage = ref("");

const register = async () => {

  if (!email.value) {
    errmessage.value = "Please enter valid email";
    return;
  }

  if (!password.value) {
    errmessage.value = "Please enter valid password";
    return;
  }

  if (password.value.length < 6) {
    errmessage.value = "Password should be at least 6 characters";
    return;
  }

  if (password.value !== confirmPassword.value) {
    errmessage.value = "Passwords do not match";
    return;
  }

 await createUserWithEmailAndPassword(auth, email.value, password.value);
router.push('/Home');
}; 






    
  </script>
  
  <style scoped>
  </style>
  