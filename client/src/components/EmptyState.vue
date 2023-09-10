<template>
    <div v-if="showEmptyState" class="empty-state">
        <p class="empty-state-message">{{ message }}</p>
        <!-- You can add additional content or styling here -->
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    message: {
        type: String,
        default: "No data available."
    },
    showEmptyState: Boolean,
});
</script>
  
<style scoped>
.empty-state {
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
}

.empty-state-message {
    font-size: 16px;
    color: #888;
}
</style>
  