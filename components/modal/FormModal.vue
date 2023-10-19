<template>
        <Modal :value="value" @close="$emit('close')">
            <Form />
        </Modal>
</template>
<script setup lang="ts">
import Modal from './Modal.vue';
import Form from '../Form.vue';

defineProps({
    value:{
        type: Boolean,
        default: false
    }
})

defineEmits([
    'close'
])
</script>