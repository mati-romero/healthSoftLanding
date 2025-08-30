"use client"; 

const Banner = ({ title, text , children }) => {
    return (
        <div className="container-fluid py-5 bg-classic">
            <h2 className="text-center text-cream">{title}</h2>
            <p className="text-center text-cream">{text}</p>

            <div>
                {children}
            </div>
        </div>
    );
}

export default Banner;