
const Footer = () => {
    return (
        <div className="bg-black text-white py-6">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold mb-2">Nari Nirmaan</h1>
                <p className="text-sm">
                    © {new Date().getFullYear()} Nari Nirmaan. All Rights Reserved.
                </p>
            </div>    
        </div>
    )
}

export default Footer