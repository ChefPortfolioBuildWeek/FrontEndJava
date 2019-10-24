import React from 'react';
import Image from 'cloudinary-react';


function ImageDownload() {
    return(
        <div>
            <Image cloudName="dyz26gaw1" publicId='https://res.cloudinary.com/dyz26gaw1/image/upload/v1571866566/upload-cloudinary/y4dyjpn09ctbjnr1vb55.jpg' width="250" crop="scale" />
        </div>
    )
}

export default ImageDownload; 