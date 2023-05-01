<template>
    <div class="max-w-md mx-auto my-10 bg-white overflow-hidden md:max-w-2xl">
        <div class="mx-1 max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Restablezca su contrasena</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">Le enviaremos un correo que le permitira restablecer su contrasena.</p>
        </div>
        <div class="md:flex">
            <div class="flex justify-center md:shrink-0">
                <img class="h-48 object-cover md:h-full md:w-72" src="../assets/logo.png" alt="Modern building architecture">
            </div>
            <div class="w-full px-8 py-4">
                <form class="pb-8">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Correo electronico
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="correo@ejemplo.com">
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Enviar correo
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Iniciar sesion
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>