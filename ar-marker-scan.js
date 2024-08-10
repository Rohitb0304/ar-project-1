// Function to initialize the AR scene
function initARScene() {
    // Create the A-Frame scene element
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', 'sourceType: webcam; debugUIEnabled: false;');

    // Create the marker element with a new pattern
    const marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('url', 'pattern-ReadyPlayerMe-Avatar.patt');

    // Create a plane to display a video on marker detection
    const videoPlane = document.createElement('a-plane');
    videoPlane.setAttribute('position', '0 0 0');
    videoPlane.setAttribute('rotation', '-90 0 0');
    videoPlane.setAttribute('width', '4');
    videoPlane.setAttribute('height', '2.25');
    videoPlane.setAttribute('material', 'shader: flat; src: #videoTexture;');
    videoPlane.setAttribute('color', '#FFF');

    // Append the video plane to the marker
    marker.appendChild(videoPlane);

    // Append the marker to the scene
    scene.appendChild(marker);

    // Create the camera entity
    const camera = document.createElement('a-entity');
    camera.setAttribute('camera', '');
    scene.appendChild(camera);

    // Append the scene to the body
    document.body.appendChild(scene);

    // Create a video element
    const video = document.createElement('video');
    video.setAttribute('id', 'videoTexture');
    video.setAttribute('src', 'mov_bbb.mp4'); // Replace with your video file
    video.setAttribute('preload', 'auto');
    video.setAttribute('loop', 'true');
    video.setAttribute('muted', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('crossorigin', 'anonymous');

    // Play the video when the marker is detected
    marker.addEventListener('markerFound', () => {
        video.play();
    });

    // Pause the video when the marker is lost
    marker.addEventListener('markerLost', () => {
        video.pause();
    });

    // Append the video element to the body (for video texture)
    document.body.appendChild(video);
}

// Call the function to initialize the AR scene
window.onload = initARScene;