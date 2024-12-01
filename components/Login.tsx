import Image from "next/image";

const signInToApp = () => {
    console.log("signIn");
}

const Login = () => {
    
    return (
        <div className="flex flex-col items-center mx-auto">
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png"
                height={100}
                width={100} 
                alt={""} 
            />
            <button
                onClick={signInToApp}
                // onClick={signInToApp}
                className="mt-20 px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white">
                Login
            </button>
        </div>
    );
};

export default Login;