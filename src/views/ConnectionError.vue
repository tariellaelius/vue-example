<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col
                class="text-center"
                :sm="6"
            >
                <div class="connection-error">
                    <h1>Connection Error</h1>
                    <v-alert
                        outlined
                        type="error"
                    >
                        Couldn't connect to the server :(
                    </v-alert>
                    <v-btn @click="$router.go(-1)">Retry</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ConnectionError',
};
</script>
