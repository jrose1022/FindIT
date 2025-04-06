import BGcover from '../assets/White-pic.jpg';

function PictureComponent() {

    return (

        <div className="card p-5 h-100 rounded-0 rounded-end" 

             style={{ backgroundColor: "#f8f9fa" }}>

            <img 

                src={BGcover} 

                alt="Login" 

                className="img-fluid h-100 w-100"

                style={{ objectFit: "cover" }}
            />

        </div>
    );
}

export default PictureComponent;