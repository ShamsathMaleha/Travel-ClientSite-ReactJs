import React from 'react';
import bgVideo from '../../video/production ID_4035859.mp4'

const BgVideo = () => {
    
 const videoStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "50%",
        top: "50%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
        zIndex: "-1"
    }
    return (
        <div>
              <video
                style={videoStyle}
                autoPlay
                loop
                muted>
                <source
                    src={bgVideo} type="video/mp4" />
            </video>
        </div>
    );
};

export default BgVideo;