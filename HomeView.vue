<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4">
      <!-- Header with Logout button -->
      <div class="max-w-4xl mx-auto mb-8 flex justify-end">
        <button class="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150">
          Logout
        </button>
      </div>
  
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">My Blog</h1>
          <p class="text-gray-600">Welcome to your blog</p>
        </div>
  
        <div class="space-y-6">
          <!-- Blog Post 1 -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-150">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Blog Post Title 1</h2>
            <p class="text-sm text-gray-500 mb-3">January 15, 2024</p>
            <p class="text-gray-600">
              This is a simple blog post example. You can add more content here...
            </p>
          </div>
  
          <!-- Blog Post 2 -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-150">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Blog Post Title 2</h2>
            <p class="text-sm text-gray-500 mb-3">January 10, 2024</p>
            <p class="text-gray-600">
              Another blog post example with some sample content...
            </p>
          </div>
  
          <!-- Blog Post 3 -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-150">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Blog Post Title 3</h2>
            <p class="text-sm text-gray-500 mb-3">January 5, 2024</p>
            <p class="text-gray-600">
              More blog content goes here. Keep it simple and clean...
            </p>
          </div>
        </div>
  
        <div class="mt-8 text-center">
          <button class="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150">
            Create New Post
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  