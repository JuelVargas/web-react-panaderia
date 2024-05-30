
function Button ({label, iconUrl}) {

 
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-secondary rounded-full text-text border-accent hover:bg-accent duration-300">
            {label}
            <img 
            src={iconUrl} 
            alt="arrow right"
            className="ml-2 rounded-full w-5 h-5" />
        </button>
        
    );
}

export default Button