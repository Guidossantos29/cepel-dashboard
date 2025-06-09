import Logo from "../../assets/logo-cepel.png"
import Resume from "./Resume"
import { Calendar, MailPlus, UserRoundX, Pause,ClockAlert } from "lucide-react"
import dadosGerais from "../../data/dadosGeral.json"

function Header() {
  return (
    <>
      <div className="ml-2 mr-2 flex justify-end">
        <span className="text-gray-500">6/5/2025, 7:01:49</span>
      </div>

      <header>
        <div className="flex flex-col items-center ml-2 mr-2 md:justify-normal md:flex-row">
          <div className="flex border-b border-b-gray-200 pb-2 mb-3 m-6 justify-center w-[125px] md:border-none">
            <img src={Logo} alt="logo-cepel" />
          </div>

          <div className="w-full flex flex-col gap-2 mr-3 ml-3 md:flex-row">
            <Resume
              label="Novos"
              value={dadosGerais.novoTotal}
              separator
              bgColor="bg-resume-green"
              bgColorIcon="bg-resume-green-dark"
              icon={<MailPlus />}
            />
            <Resume
              label="Sem atribuições"
              value={dadosGerais.semAtribuicaoTotal}
              separator
              bgColor="bg-resume-orange"
              bgColorIcon="bg-resume-orange-dark"
              icon={<UserRoundX />}
            />
            <Resume
              label="Atrasados"
              value={dadosGerais.vencidoTotal}
              separator
              bgColor="bg-resume-red"
              bgColorIcon="bg-resume-red-dark"
              icon={<ClockAlert/>}
            />
            <Resume
              label="Pendentes"
              value={dadosGerais.pendenteTotal}
              separator
              bgColor="bg-resume-yellow"
              bgColorIcon="bg-resume-yellow-dark"
              icon={<Pause />}
            />
            <Resume
              label="SLA Geral (Mês)"
              value={`${dadosGerais.sla_geral}%`}
              separator={false}
              bgColor="bg-resume-blue"
              bgColorIcon="bg-resume-blue-dark"
              icon={<Calendar />}
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
