
<template>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl m-6 text-green-500">Start your Project with</h1>
    <ul class="flex flex-row justify-items-center text-center">
      <li class="w-40 text-xl text-blue-500"><a href="https://gridsome.org/" title="Gridsome">Gridsome</a></li>
      <li class="w-40 text-xl text-blue-500"><a href="https://www.contentful.com/" title="contentful">contentful</a></li>
      <li class="w-40 text-xl text-blue-500"><a href="https://tailwindcss.com/" title="tailwindcss">tailwindcss</a></li>
    </ul>
  </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>