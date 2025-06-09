




export function ValorChip({ valor, destaque = false }: { valor: number; destaque?: boolean }) {
    if (valor <= 0) return <span>{valor}</span>;

    return (
        <span
            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium
            ${destaque ? "bg-red-200 text-red-800" : "bg-gray-200 text-gray-800"}`}
        >
            {valor}
        </span>
    );
}

