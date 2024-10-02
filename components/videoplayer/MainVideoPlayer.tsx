import React, { useRef, useEffect } from 'react';
import styles from './MainVideoPlayer.module.css';

interface MainVideoPlayerProps {
    isMobile: boolean;
}

const MainVideoPlayer: React.FC<MainVideoPlayerProps> = ({ isMobile }) => {
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
            {isMobile ? (
                <iframe
                    src="http://go.plvideo.cn/front/video/preview?vid=d309ba6b1ca45781f605dca2431887b4_d"
                    width="100%"
                    height="auto"
                    allow="fullscreen"
                    allowFullScreen
                ></iframe>
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
