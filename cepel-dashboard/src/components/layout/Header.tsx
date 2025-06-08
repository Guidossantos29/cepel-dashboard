import Logo from "../../assets/logo-cepel.png"
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card"


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

                    <Card className="w-full mr-3 ml-3 border-none shadow-sm">
                        <CardContent className="flex justify-between">
                            <div className="">
                                <span className="bg-amber-200 rounded-full w-8 h-8 flex items-center justify-center">H</span>
                            </div>
                            <div className="">
                                <span className="font-bold" >1</span>
                                <span></span>
                            </div>
                        </CardContent>
                    </Card>
                </div>


            </header>


        </>
    )
}

export default Header




