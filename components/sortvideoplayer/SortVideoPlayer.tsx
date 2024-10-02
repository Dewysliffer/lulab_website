import React, { useRef, useEffect } from 'react';
import styles from "./SortVideoPlayer.module.css";

interface SortVideoPlayerProps {
    isMobile: boolean;
}

const SortVideoPlayer: React.FC<SortVideoPlayerProps> = ({ isMobile }) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    const handleContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => {
        event.preventDefault(); // 阻止右键菜单显示
    };

    useEffect(() => {
        const video = videoRef.current;
        const handleExitFullScreen = () => {
            if (video) {
                video.play(); // 退出全屏时继续播放
            }
        };

        if (video) {
            video.addEventListener('webkitendfullscreen', handleExitFullScreen);
        }

        return () => {
            if (video) {
                video.removeEventListener('webkitendfullscreen', handleExitFullScreen);
            }
        };
    }, []);

    return (
        <div className={styles.videoContainer}>
            <video
                ref={videoRef}
                width={isMobile ? "100%" : "260px"}
                height="auto"
                muted
                controls
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                className={styles.video}
                onContextMenu={handleContextMenu}
                disablePictureInPicture
            >
                <source
                    src="https://dpv.videocc.net/d309ba6b1c/0/d309ba6b1cda2ecfc8934ec686bf78d0_1.mp4?pid=1727242537389X1944690"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default SortVideoPlayer;
