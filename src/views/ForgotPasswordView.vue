<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <main class="bg-ultradarkblue">
        <div class="max-w-4xl mx-auto h-screen flex flex-col items-center justify-center px-6 py-8 lg:py-0 md:flex-row">
            <div
                class="w-full py-7 bg-gray-50 rounded-t-lg flex flex-col items-center justify-center md:shrink-0 md:rounded-t-none md:rounded-bl-lg md:rounded-tl-lg md:w-2/5 md:h-2/3">
                <img class="h-28 object-cover md:h-48" src="../assets/logo.png" alt="Modern building architecture">
                <p class="pt-6 uppercase text-graytext font-mono font-bold">Sillas el puente</p>
            </div>
            <div
                class="w-full bg-darkblue rounded-b-lg md:mt-0 md:max-w-md xl:p-0 md:rounded-b-none md:rounded-tr-lg md:rounded-br-lg md:w-3/5 md:h-2/3 border-2 border-lightblue">
                <div class="p-6 space-y-4 md:space-y-6 md:p-8">
                    <h1 class="text-lg font-bold leading-tight text-lightblue md:text-2xl">
                        Restablecer contrasena
                    </h1>
                    <p class="leading-8 text-lg text-lightblue">
                        Le enviremos un correo que le permitira restablecer su contrasena.
                    </p>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-md font-medium text-lightblue">Correo electronico</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 md:text-md rounded-lg focus:ring-lightblue focus:border-lightblue block w-full p-2.5"
                                placeholder="correo@ejemplo.com" required="">
                        </div>
                        <div class="flex items-end justify-between">
                            <RouterLink to="/"
                                class="bg-lightblue hover:bg-teal-200 text-ultradarkblue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Enviar correo
                            </RouterLink>
                            <RouterLink to="/"
                                class="py-2 px-4 text-md font-medium text-lightblue hover:underline hover:text-teal-200">
                                Iniciar sesion
                            </RouterLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>