import Logo from "../../assets/logo-cepel.png"
import Resume from "./resume"


function Header() {
    return (
        <>
            <div className="ml-2 mr-2 flex justify-end ">
                <span>6/5/2025,7:01:49</span>
            </div>
            <header className="">
                <div className="flex flex-col items-center ml-2 mr-2 md:justify-normal md:flex-row ">
                    <div className="flex border-b pb-2 mb-3 justify-center w-[150px] md:border-none ">
                        <img src={Logo} alt="logo-cepel" />
                    </div>
                    
                </div>
                <div className="bg-resume-green mr-3 ml-3">
                    <Resume label={"1"} value={"Novos"}/>
                </div>
                
                

            </header>


        </>
    )
}

export default Header




