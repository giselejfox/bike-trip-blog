

export default function RideWithGPSMap({ link }) {
    return (
        <iframe 
            src={link} 
            style={{ width: "100%", height: "500px", border: "none" }} 
        ></iframe>    
    );
}
