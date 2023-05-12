<template>
    <div class="mx-auto rounded-xl shadow-md overflow-hidden max-w-md md:max-w-2xl border-2 border-ultradarkblue">
        <Button class="w-full">
            <div class="bg-ultradarkblue py-2">
                <span class="text-md leading-tight font-medium text-lightblue">{{ event.name }}</span>
            </div>
            <div class="flex flex-row">
                <div class="px-4 py-2 flex flex-col space-y-3 bg-ultradarkblue w-1/3">
                    <span class="text-md leading-tight text-graytext font-bold uppercase">Cliente</span>
                    <span class="text-md leading-tight text-graytext font-bold uppercase">Inicia</span>
                    <span class="text-md leading-tight text-graytext font-bold uppercase">Termina</span>
                    <span class="text-md leading-tight text-graytext font-bold uppercase">Estado</span>
                </div>
                <div class="px-4 py-2 flex flex-col space-y-3 text-right w-2/3">
                    <span class="text-md leading-tight font-medium text-lightblue">{{ event.customer.name }} {{
                        event.customer.lastname }}</span>
                    <span class="text-md leading-tight font-medium text-lightblue">{{ event.initialDate }}</span>
                    <span class="text-md leading-tight font-medium text-lightblue">{{ event.endDate }}</span>
                    <span class="text-md leading-tight font-medium text-lightblue">{{ event.state }}</span>
                </div>
            </div>
        </Button>
    </div>
</template>

<script>
import See from '../components/icons/See.vue'

export default {
    name: 'Event',
    components: {
        See,
    },
    props: {
        event: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
    }
}
</script>