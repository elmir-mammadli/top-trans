
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="date">Date</label>
            <Calendar id="date" v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="date-error" />
            <small class="p-error" id="date-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import Button from "primevue/button/Button.vue";
import Calendar from 'primevue/calendar/Calendar.vue';
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Date is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.toLocaleDateString(), life: 3000 });
        resetForm();
    }
});
</script>
