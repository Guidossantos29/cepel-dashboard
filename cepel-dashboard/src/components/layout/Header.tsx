import Logo from "../../assets/logo-cepel.png"
import Resume from "./Resume"
import { Calendar,MailPlus,UserRoundX,Pause,CircleAlert } from "lucide-react"


function Header() {
    return (
        <>
            <div className="ml-2 mr-2 flex justify-end ">
                <span className="text-gray-500">6/5/2025,7:01:49</span>
            </div>
            <header >
                <div className="flex flex-col items-center ml-2 mr-2 md:justify-normal md:flex-row ">
                    <div className="flex border-b border-b-gray-200 pb-2 mb-3 m-6 justify-center w-[125px] md:border-none ">
                        <img src={Logo} alt="logo-cepel " />
                    </div>
                    <div className="w-full flex flex-col gap-2 mr-3 ml-3 md:flex-row  ">
                        <Resume label={"1"} value={"Novos"} separator={true} bgColor="bg-resume-green" bgColorIcon="bg-resume-green-dark" icon={<MailPlus/>} />
                        <Resume label={"4"} value={"Sem atribuições"} separator={true} bgColor="bg-resume-orange" bgColorIcon="bg-resume-orange-dark" icon={<UserRoundX/>} />
                        <Resume label={"1"} value={"Atrasados"} separator={true} bgColor="bg-resume-red" bgColorIcon="bg-resume-red-dark" icon={<Pause/>} />
                        <Resume label={"27"} value={"Pendentes"} separator={true} bgColor="bg-resume-yellow" bgColorIcon="bg-resume-yellow-dark" icon={<CircleAlert/>}/>
                        <Resume label={"100%"} value={"SLA geral(Mês)"} separator={false}  bgColor="bg-resume-blue" bgColorIcon="bg-Resume-blue-dark" icon={<Calendar/>} />
                    </div>

                </div>




            </header>


        </>
    )
}

export default Header




