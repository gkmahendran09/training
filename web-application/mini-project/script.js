const app = Vue.createApp({
    data() {
        return {
            postData: {
                message: '',
                imageUrl: null,
                location: null,
            },
            posts: [],
            isTakingPhoto: false,
        };
    },
    methods: {
        handleFileInputChange(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                this.postData.imageUrl = URL.createObjectURL(file);
            }
        },
        async capturePhoto() {
            this.isTakingPhoto = true;
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                const video = document.querySelector('video');
                video.srcObject = stream;
                await video.play();
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL('image/png');
                this.postData.imageUrl = imageData;
                this.isTakingPhoto = false;
                stream.getTracks().forEach(track => track.stop());
            } catch (error) {
                console.error('Error accessing the camera:', error);
                alert('Error accessing the camera. Please make sure it is enabled.');
                this.isTakingPhoto = false;
            }
        },
        savePostsToLocalStorage() {
            localStorage.setItem('posts', JSON.stringify(this.posts));
        },
        retrievePostsFromLocalStorage() {
            const storedPosts = localStorage.getItem('posts');
            if (storedPosts) {
                this.posts = JSON.parse(storedPosts);
            }
        },
        submitPost() {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                
                this.posts.push({
                    id: this.posts.length + 1,
                    message: this.postData.message,
                    imageUrl: this.postData.imageUrl,
                    date: new Date().toLocaleString(),
                    location: { latitude, longitude },
                });
                this.savePostsToLocalStorage();
                this.postData.message = '';
                this.postData.imageUrl = null;
                this.postData.location = null;
            }, error => {
                console.error('Error getting geolocation:', error);
                alert('Error getting geolocation.');
            });
        },
        deletePost(id) {
            const index = this.posts.findIndex(post => post.id === id);
            if (index !== -1) {
                this.posts.splice(index, 1);
                this.savePostsToLocalStorage();
            }
        }
    },
    mounted() {
        this.retrievePostsFromLocalStorage();
    }
});

app.mount('#app');

