import React, { useState, useRef, useEffect } from 'react';
import styles from './MainVideoPlayer.module.css';

interface MainVideoPlayerProps {
    isMobile: boolean;
}

const MainVideoPlayer: React.FC<MainVideoPlayerProps> = ({ isMobile }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => {
        event.preventDefault(); // 阻止右键菜单显示（用于PC端）
    };

    const handlePlay = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        if (videoRef.current && !isMobile) {
            videoRef.current.autoplay = true;
        }
    }, [isMobile]);

    return (
        <div className={styles.videoContainer}>
            {isMobile ? (
                <video
                    ref={videoRef}
                    preload="auto"
                    poster="/images/main_video_img.jpg"
                    playsInline
                    webkit-playsInline
                    x5-video-player-type="h5"
                    x5-playsinline
                    muted
                    controls
                    className={styles.video}
                    disablePictureInPicture
                >
                    <source
                        src="https://dpv.videocc.net/d309ba6b1c/4/d309ba6b1ca45781f605dca2431887b4_2.mp4?pid=1727313420263X1199484"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    controls
                    controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                    className={styles.video}
                    onContextMenu={handleContextMenu}
                    disablePictureInPicture
                >
                    <source
                        src="https://dpv.videocc.net/d309ba6b1c/4/d309ba6b1ca45781f605dca2431887b4_2.mp4?pid=1727313420263X1199484"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );

};

export default MainVideoPlayer;
