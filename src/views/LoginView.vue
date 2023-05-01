<template>
    <div class="max-w-md mx-auto my-10 bg-white overflow-hidden md:max-w-2xl">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Inicio de sesion</h2>
        </div>
        <div class="md:flex">
            <div class="flex justify-center md:shrink-0">
                <img class="h-48 object-cover md:h-full md:w-72" src="../assets/logo.png" alt="Modern building architecture">
            </div>
            <div class="w-full px-8 py-4">
                <form class="pb-8">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Usuario
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Usuario">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Contrasena
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                        <p class="text-red-500 text-xs italic">Ingrese una contrasena.</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Iniciar sesion
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Olvido su contrasena?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
