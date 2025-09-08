"use client"; 

const Title = ({ title, text }) => {
    return (
        <div className="w-100 text-center my-5">
            <h2 className="text-center text-classic">{title}</h2>
            <p className="text-center">{text}</p>
        </div>
    );
}

export default Title;