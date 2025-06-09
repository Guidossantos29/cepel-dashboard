import { Fragment, useState } from "react";
import dadosTabela from "../../data/dadosTabela.json";
import { type Grupo } from "../../types/dadosTabela";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ValorChip } from "./ValorChip";

function Table() {
    const grupos: Grupo[] = dadosTabela;
    const [abertos, setAbertos] = useState<Record<string, boolean>>({});

    const toggleGrupo = (nome: string) => {
        setAbertos((prev) => ({ ...prev, [nome]: !prev[nome] }));
    };

    return (
        <div className="overflow-x-auto p-4 rounded-lg border-gray-300 shadow-sm mr-6 ml-6 mt-3 mb-3">
            <table className="min-w-full text-sm text-left border-collapse rounded-3xl border-gray-300">
                <thead>
                    <tr className="bg-gray-50 text-gray-700">
                        <th className="px-3 py-2 border border-gray-300">Grupo</th>
                        <th className="px-3 py-2 border border-gray-300 text-center">Demanda</th>
                        <th className="px-3 py-2 border border-gray-300 text-center">Total</th>
                        <th colSpan={2} className="px-3 py-2 border border-gray-300 text-center">Pendente</th>
                        <th colSpan={2} className="px-3 py-2 border border-gray-300 text-center">Em atendimento</th>
                        <th colSpan={2} className="px-3 py-2 border border-gray-300 text-center">Vencido</th>
                    </tr>
                    <tr className="bg-gray-50 text-gray-700">
                        <th className="px-3 py-1 border border-gray-300"></th>
                        <th className="px-3 py-1 border border-gray-300"></th>
                        <th className="px-3 py-1 border border-gray-300"></th>
                        <th className="px-3 py-1 text-center border-gray-300">Incidente</th>
                        <th className="px-3 py-1 text-center border-gray-300">Requisição</th>
                        <th className="px-3 py-1 text-center border-gray-300">Incidente</th>
                        <th className="px-3 py-1 text-center border-gray-300">Requisição</th>
                        <th className="px-3 py-1 text-center border-gray-300">Incidente</th>
                        <th className="px-3 py-1 text-center border border-gray-300">Requisição</th>
                    </tr>
                </thead>
                <tbody>
                    {grupos.map((grupo, i) => {
                        const grupoKey = grupo["grupo/atendente"];
                        const aberto = abertos[grupoKey] ?? true;
                        const total =
                            grupo.pendenteIncidente +
                            grupo.pendenteRequisicao +
                            grupo.atendimentoIncidente +
                            grupo.atendimentoRequisicao;

                        return (
                            <Fragment key={i}>
                                <tr
                                    className="bg-gray-200 font-semibold cursor-pointer hover:bg-gray-300"
                                    onClick={() => toggleGrupo(grupoKey)}
                                >
                                    <td className="px-3 py-2 border border-gray-300">
                                        <span className="flex items-center gap-1">
                                            {aberto ? <ArrowDown className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                                            {grupoKey.toUpperCase()}
                                        </span>
                                    </td>

                                    <td className="px-3 py-2 border border-gray-300 text-center">
                                        <ValorChip valor={grupo.demanda} />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center">
                                        <ValorChip valor={total} />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center ">
                                        <ValorChip valor={grupo.pendenteIncidente} />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center ">
                                        <ValorChip valor={grupo.pendenteRequisicao} />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center ">
                                        <ValorChip valor={grupo.atendimentoIncidente} />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center ">
                                        <ValorChip valor={grupo.atendimentoRequisicao} />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center">
                                        <ValorChip valor={grupo.vencidoIncidente} />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center">
                                        <ValorChip valor={grupo.vencidoRequisicao} destaque />
                                    </td>
                                </tr>

                                {aberto &&
                                    grupo.atendentes.map((atendente, j) => {
                                        const totalA =
                                            atendente.pendenteIncidente +
                                            atendente.pendenteRequisicao +
                                            atendente.atendimentoIncidente +
                                            atendente.atendimentoRequisicao;

                                        return (
                                            <tr key={j} className="bg-white">
                                                <td className="px-3 py-2 border border-gray-300 pl-6">
                                                    {atendente["grupo/atendente"]}
                                                </td>
                                                <td className="px-3 py-2 border border-gray-300 text-center">
                                                    <ValorChip valor={atendente.demanda} />
                                                </td>
                                                <td className="px-3 py-2 border border-gray-300 text-center">
                                                    <ValorChip valor={totalA} />
                                                </td>
                                                <td className="px-3 py-2 border border-gray-300 text-center ">
                                                    <ValorChip valor={atendente.pendenteIncidente} />
                                                </td>
                                                <td className="px-3 py-2 border border-gray-300 text-center ">
                                                    <ValorChip valor={atendente.pendenteRequisicao} />
                                                </td>
                                                <td className="px-3 py-2 border border-gray-300 text-center ">
                                                    <ValorChip valor={atendente.atendimentoIncidente} />
                                                </td>
                                                <td className="px-3 py-2 border border-gray-300 text-center ">
                                                    <ValorChip valor={atendente.atendimentoRequisicao} />
                                                </td>
                                                <td className="px-3 py-2 border border-gray-300 text-center">
                                                    <ValorChip valor={atendente.vencidoIncidente} />
                                                </td>
                                                <td className="px-3 py-2 border border-gray-300 text-center">
                                                    <ValorChip valor={atendente.vencidoRequisicao} destaque />
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
